<script setup lang="ts">

import Interests from './aboutMe/Interests.vue';
import Skills from './aboutMe/Skills.vue';



</script>

<template>
  <div class="about-me">
      
      <Skills />

      <Interests />
        
  </div>
</template>


<style scoped>

.about-me {
  display: flex;
  justify-content: space-around;
}


</style>