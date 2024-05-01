<script setup lang="ts">

import { ref } from 'vue';
import type { Ref } from 'vue'
import Card from './Card.vue'

const props = defineProps<{ interest:string, favorites:Array<string> }>()
const favoritesCopy = ref(props.favorites)

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
    
    <h2>{{ interest }}</h2>
    <div class="cardHolder">
        <button @click="addFavorite">test</button>
        <div>
            <Card v-for="favorite in activeFavorites" :favorite="favorite"/>
        </div>
    </div>

</template>

<style scoped>

.cardHolder {
    margin-top: 1rem ;
    margin-bottom: 1rem ;
    display: flex ;
    width: fit-content;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-self: center;
    align-items: center;
    gap: 2rem;
}

.cardHolder:hover .card:not(:hover) {
    scale: .7;
}

</style>