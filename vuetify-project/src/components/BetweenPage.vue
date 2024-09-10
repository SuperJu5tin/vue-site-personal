<script setup lang="ts">

  defineProps<{ name:string }>()

  const titleCase = (string:string) => {
    const firstLetter = string[0]
    const otherLetters = string.slice(1)
    const titleCasedWord = firstLetter.toUpperCase() + otherLetters
    return titleCasedWord
  }

  const multipleWordsTitle = (delimiter:string, stringWords:string) => {
    const arrayWords:Array<string> = stringWords.split(delimiter)
    const words:Array<string> = []
    for (const word of arrayWords) {
      words.push(titleCase(word))
    }
    return words.join(' ')
  }

</script>

<template>
  <v-card :id="name" class="pa-2 text-center" :color="name">
    <h1>{{ multipleWordsTitle("-", name) }}</h1>
  </v-card>
</template>

<style scoped>

</style>
