<script setup lang="ts">

import Interests from './aboutMe/Interests.vue';
import Notes from './aboutMe/Notes.vue';
import Skills from './aboutMe/Skills.vue';



</script>

<template>
  <div class="about-me">
      <div class="smaller-boxes">
        <Skills />
        <Notes />
      </div>

      <Interests />
        
  </div>
</template>


<style scoped>

.about-me {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  padding-inline: 5vw;
  padding-block: 50px;
  gap: 5rem;
}

.smaller-boxes {
  display: grid;
  /* grid-template-rows: 1fr 1fr; */
  align-items: center;
  justify-items: center;
  gap: 5rem;
}


</style>