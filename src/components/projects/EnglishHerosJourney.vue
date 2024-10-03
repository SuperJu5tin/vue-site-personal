<script setup lang="ts">

  import webpagePic from '@/assets/projects/english-hero-journey.webp'

</script>

<template>
  <v-card color="lighterStill">
    <v-card-title><v-icon>mdi-web</v-icon> Website For English Project</v-card-title>
    <v-card-subtitle>Source Code On GitHub
      <v-btn href="https://github.com/SuperJu5tin/english_heros_journey" target="_blank" variant="text">
        English Heroes Journey
      </v-btn>
    </v-card-subtitle>
    <v-container>
      <v-row>
        <v-col>

          <v-row class="ma-5">
            Made a basic website that went along with a board to play a game to demonstrate the concept of the Heroes
            Journey
          </v-row>
          <v-row class="my-10 mx-5">
            <v-chip>Typescript</v-chip>
            <v-chip>React.js</v-chip>
          </v-row>
        </v-col>
        <v-col>
          <v-img :src="webpagePic" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
