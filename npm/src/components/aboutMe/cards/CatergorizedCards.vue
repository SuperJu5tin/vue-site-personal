<script setup lang="ts">

import Card from './Card.vue'

defineProps<{ interest:string }>()

const favorites = ["test", "test2"]

</script>

<template>
    
    <h1>{{ interest }}</h1>
    <div class="cardHolder">
        <Card v-for="favorite in favorites" :favorite="favorite"/>
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