<script setup lang="ts">

// import { ref } from 'vue'
// import type { Ref } from 'vue'

defineProps<{ favorite:string }>()

const colors: Array<string> = ["#05b774", "#d7fedc", "#74c07a", "#40976a"]
const maxFontSize: number = 2.5
const minFontSize: number = 1

const randColor = Math.floor(Math.random() * 3)
const randFontSize = `${(Math.random() * (maxFontSize - minFontSize)) + minFontSize}em`

</script>

<template>
  <div class="card">
    <h3>{{ favorite }}</h3>
    <!-- <p>{{randFontSize}}</p> -->
  </div>
</template>

<style scoped>

.card {
    background-color: v-bind(colors[randColor]);
    width: fit-content;
    height: fit-content;
    font-size: v-bind(randFontSize);
    border: solid 1px;
    border-radius: 10px;
    color: #555;
    text-align: center;
    padding: 5px;
    cursor: pointer;
    transition: all .2s;
}

.card:hover {
    scale: 1.3;
    text-shadow: 1px 1px 2px #222, 0 0 25px white, 0 0 5px #888;
    box-shadow: 5px 5px 5px black;
}

</style>