<script setup lang="ts">

  defineProps<{ favorite:string }>()

  // const colors: Array<string> = ["#05b774", "#d7fedc", "#74c07a", "#40976a"]
  // const colors: Array<string> = ['#98bad5', '#c6d3e3', '#dbdcff', '#b2cbde', '#d8e1e8']
  const colors: Array<string> = ['first', 'second', 'third', 'fourth', 'fifth']
  const maxFontSize: number = 2.5
  const minFontSize: number = 1

  const randColor: number = Math.floor(Math.random() * colors.length)
  const randFontSize = `${(Math.random() * (maxFontSize - minFontSize)) + minFontSize}em`

</script>

<template>
  <v-card class="card pa-3 ma-2 elevation-5" :color="colors[randColor]">
    {{ favorite }}
  </v-card>
</template>

<style scoped>

.card {
  height: fit-content;
  font-size: v-bind(randFontSize);
  cursor: default;
  transition: all .2s;
  animation: slidein 5s;
}

.card:hover {
  scale: 1.3;
  text-shadow: 1px 1px 2px #222, 0 0 5px #ffffff;
}

@keyframes slidein {
  0% {
    transform: translateX(25vw);
  }

  30% {
    transform: translateX(0);
  }
}

</style>
