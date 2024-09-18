<script setup lang="ts">

  import AboutInterests from './aboutMe/AboutInterests.vue'
  import NotesAboutMe from './aboutMe/NotesAboutMe.vue'
  import PrevalentSkills from './aboutMe/PrevalentSkills.vue'

</script>

<template>
  <v-row class="ga-10 my-10 px-10">
    <v-col>
      <v-row class="ga-10 justify-space-evenly">
        <PrevalentSkills />
        <NotesAboutMe />
      </v-row>
    </v-col>
    <v-col>
      <v-row class="justify-center">
        <AboutInterests />
      </v-row>
    </v-col>
  </v-row>
</template>
