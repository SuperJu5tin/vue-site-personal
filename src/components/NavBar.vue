<script setup lang="ts">

  import { ref } from 'vue';
  import type { Ref } from 'vue'

  const pageList:Ref<Array<string>> = ref([])
  const numberOfPages: Ref<number> = ref(pageList.value.length)
    
    const initializePageList = () => {
      fetch('/api/pages.json')
      .then(res => res.json())
      .then(data => {
        pageList.value = data
        numberOfPages.value = pageList.value.length
      })
      .catch(err => console.error(err.message))
    }
    
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

  initializePageList()

</script>

<template>
  <nav class="nav-bar">
    <button class="button-two top-nav-button">JUSTIN LIBHART</button>
    <!-- <div class="pages-container"> -->
      <button v-for="page in pageList" :key="page" class="button-two">
        <a :href="`/#${page}`">{{ multipleWordsTitle("-", page) }}</a>
      </button>
    <!-- </div> -->
  </nav>
</template>

<style scoped>

a, a:visited, a:hover, a:active {
  color: inherit;
}

.nav-bar {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: .75rem;
  background-color: black;
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: right;
  justify-items: right;
  align-items: center;
  align-content: center;
}

.pages-container {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: right;
  justify-items: right;
  align-items: baseline;
  align-content: baseline;
}

.top-nav-button {
  margin-right: auto;
  justify-content: left;
}

</style>