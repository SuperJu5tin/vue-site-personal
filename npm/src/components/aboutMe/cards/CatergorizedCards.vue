<script setup lang="ts">

import { ref } from 'vue';
import type { Ref } from 'vue'
import Card from './Card.vue'

const props = defineProps<{ interest:string, favorites:Array<string> }>()
const favoritesCopy = ref([...props.favorites])

const popRandomFavorite = () => {
   const randX: number = Math.floor(Math.random() * (favoritesCopy.value.length - 1))
   console.log(randX)
   const newFavorite: string = favoritesCopy.value[randX]
   favoritesCopy.value.splice(randX, 1)
   return newFavorite
}

const addFavorite = () => {
   if (favoritesCopy.value.length <= 0) {
      return
   }
   activeFavorites.value.push(popRandomFavorite())
}

const activeFavorites:Ref<Array<string>> = ref([popRandomFavorite()])

</script>

<template>
   <div class="interest-holder">
      <!-- <h2>{{ interest }}</h2> -->
         <button @click="addFavorite" class="button-styled button-two">Discover {{ interest }} Favorites ({{ activeFavorites.length }}/{{ favorites.length }})</button>
         <div class="card-holder">
            <Card v-for="favorite in activeFavorites" :favorite="favorite"/>
         </div>
   </div>
    

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

.button-styled {
   margin-top:10px;
   margin-left:5px;
   justify-self: start;
}

</style>