<script setup lang="ts">

import { ref, watch, defineProps } from 'vue';
import type { Ref } from 'vue'
import CardPreset from './CardPreset.vue';

const props = defineProps<{ interest:string, favorites:Array<string>, updates:boolean }>()
const interestName:Ref<string> = ref(props.interest)
const favoritesCopy:Ref<Array<string>> = ref([...props.favorites])
const activeFavorites:Ref<Array<string>> = ref([])

const addFavorite = () => {
  if (favoritesCopy.value.length === 0) {
    return
  }
  const randX: number = Math.floor(Math.random() * (favoritesCopy.value.length - 1))
  const newFavorite: string = favoritesCopy.value[randX]
  favoritesCopy.value.splice(randX, 1)
  activeFavorites.value.push(newFavorite)
  localStorage.setItem(interestName.value, JSON.stringify(activeFavorites.value))
}

const checkCards = () => {
  const favoriteLocalStorage = localStorage.getItem(interestName.value)
  if (favoriteLocalStorage === null) {
    addFavorite()
  } else {
    activeFavorites.value = JSON.parse(favoriteLocalStorage)
    favoritesCopy.value = favoritesCopy.value.filter(favorite => !activeFavorites.value.includes(favorite))
  }
}

watch(() => props.updates, () => {
  activeFavorites.value = []
  favoritesCopy.value = [...props.favorites]
  checkCards()
})

checkCards()

</script>

<template>
  <!-- <v-row class="mx-4"> -->
    <v-row class="my-5">
      <v-btn color="primary" variant="plain" @clearLocalStorage="checkCards" @click="addFavorite" class="button-styled button-two">Discover {{ interest }} Favorites ({{ activeFavorites.length }}/{{ favorites.length }})</v-btn>
    </v-row>
    <!-- <v-row class="my-10 d-flex justify-center align-center"> -->
    <v-row class="justify-center ga-5">
      <CardPreset v-for="favorite in activeFavorites" :key="favorite" :favorite="favorite"/>
    </v-row>
    <!-- </v-row> -->
  <!-- </v-row> -->
    

</template>

<style scoped>

.interest-holder {
  display:grid;
}

.card-holder {
  margin-top: 1rem ;
  margin-bottom: 1rem ;
  display: flex ;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  width: fit-content;
  justify-content: center;
  justify-self: center;
  align-items: center;
}

.cardHolder:hover .card:not(:hover) {
   scale: .7;
}

</style>