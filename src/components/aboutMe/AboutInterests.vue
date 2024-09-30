<script setup lang="ts">

  import { ref } from 'vue'
  import type { Ref } from 'vue'

  type InterestObject = {
    [key:string]: Array<string>
  }

  const interests: Ref<InterestObject> = ref({})
  const localStorageUpdates:Ref<boolean> = ref(false)

  const clearLocalStorage = () => {
    localStorage.clear()
    localStorageUpdates.value = !localStorageUpdates.value
  }

  const listJoinDiffLast = (list: Array<string>, delimiter: string, diffLast: string) => {
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
  <v-card class="rounded-lg pa-5 elevation-15" color="lighter">
    <v-container>
      <v-row class="text-h3 text-center my-1">My Biggest Interests</v-row>
      <v-divider class="my-5" thickness="3" />
      <v-row class="text-subtitle-1 justify-center my-3">{{ listJoinDiffLast(Object.keys(interests), ", ", " and ") }}</v-row>
      <v-row class="justify-center my-3">
        <v-btn color="primary" @click="clearLocalStorage">Rediscover Favorites</v-btn>
      </v-row>
      <v-container>
        <CatergorizedCards
          v-for="interest in Object.keys(interests)"
          :key="interest"
          :favorites="interests[interest]"
          :interest="interest"
          :updates="localStorageUpdates"
        />
      </v-container>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>
