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
  <div class="interests">
      <h1 class="underline">My Biggest Interests</h1>
      <h3> {{ listJoinDiffLast(Object.keys(interests), ", ", " and ") }} </h3>
      <button class="button-one" @click="clearLocalStorage" >Rediscover Favorites</button>
      <CatergorizedCards v-for="interest in Object.keys(interests)" :interest="interest" :favorites="interests[interest]" :updates="localStorageUpdates" />
  </div>
</template>

<style scoped>

.interests {
    height:fit-content;
    width: max(300px, 30vw);
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #78c3a7;
    border-radius: 30px;
    border: solid;
    rotate: -2deg;
    justify-content: center;
    align-content: space-around;
    box-shadow: -3px 3px 3px 3px #555;
    
}

.underline {
  padding-bottom: .1em;
  width:100%;
  border-bottom:solid;
}

</style>