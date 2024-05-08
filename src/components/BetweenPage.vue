<script setup lang="ts">

  defineProps<{ name:string, color:string }>()

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
    return words.join(" ")
  }

</script>

<template>
  <div class="next-page-container" :id="name" >
    <h1>{{ multipleWordsTitle("-", name) }}</h1>
  </div>
</template>

<style scoped>

.next-page-container {
  padding:1.5em;
  height:50px;
  background:v-bind(color);
  display:flex;
  justify-content:center;
  align-content:center;
  align-items:center;
  border-top:solid;
  border-bottom:solid;
}

</style>