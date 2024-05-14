<script setup lang="ts">

  import Snake from "./projects/Snake.vue"

</script>

<template>
  <div class="portfolio-container">
    <div class='past-projects-container'>
      <h3 class='underline'>
        Past projects are available on <a target='_blank' href='https://github.com/SuperJu5tin'
          aria-label="View Justin's Github Profile">github</a>
      </h3>
    </div>
    <Snake />
  </div>
</template>

<style scoped>

.portfolio-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 3em;
  padding-block: 3em;
  padding-inline: 1em;
}

.past-projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.underline {
  border-bottom: solid .1em;
}

</style>