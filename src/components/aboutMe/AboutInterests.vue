<script setup lang="ts">
  import CatergorizedCards from './cards/CatergorizedCards.vue';

  import { ref } from 'vue';
  import type { Ref } from 'vue'

  type InterestObject = {
    [key:string]: Array<string>
  }

 const interests: Ref<InterestObject> = ref({})
 const localStorageUpdates:Ref<boolean> = ref(false)

  const clearLocalStorage = () => {
    localStorage.clear()
    localStorageUpdates.value = localStorageUpdates.value ? false : true
  }

  const listJoinDiffLast = (list: Array<string>, delimiter: string, diffLast: string ) => {

    const copyOfList = [...list]
    copyOfList[copyOfList.length - 1] = diffLast + copyOfList[copyOfList.length - 1]
    const newSentence = copyOfList.join(delimiter)
    return newSentence
  }

  const initializeInterest = () => {
    fetch('/api/about_me/interests.json')
      .then(res => res.json())
      .then(data => interests.value = data)
      .catch(err => console.error(err.message))
  }

  initializeInterest()

</script>

<template>
  <v-container class="interests ma-10 border-solid rounded-lg pt-5 elevation-15">
      <v-row class="text-h3 justify-center my-3">My Biggest Interests</v-row>
      <v-divider thickness="3" class="my-5"></v-divider>
      <v-row class="text-h5 justify-center my-3" >{{ listJoinDiffLast(Object.keys(interests), ", ", " and ") }}</v-row>
      <v-row class="justify-center my-3">
        <v-btn color="primary" @click="clearLocalStorage" >Rediscover Favorites</v-btn>
      </v-row>
      <v-container>
        <CatergorizedCards v-for="interest in Object.keys(interests)" :key="interest" :interest="interest" :favorites="interests[interest]" :updates="localStorageUpdates" />
      </v-container>
  </v-container>
</template>

<style scoped>

.interests {
  /* height:fit-content; */
  /* width: max(300px, 30vw); */
  /* padding: 20px; */
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  background-color: #78c3a7;
  /* border-radius: 30px; */
  /* border: solid; */
  /* rotate: -2deg; */
  /* justify-content: center; */
  /* align-content: space-around; */
  /* box-shadow: -3px 3px 3px 3px black; */
  /* gap: 1rem; */
}

.underline {
  padding-bottom: .1em;
  width:100%;
  border-bottom:solid;
}

</style>