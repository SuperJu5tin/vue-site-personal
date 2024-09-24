<script setup lang="ts">

  import snakePic from '@/assets/snake.webp'

</script>

<template>
  <v-card color="lighterStill">
    <v-card-title><v-icon>mdi-snake</v-icon> Snake Game</v-card-title>
    <v-card-subtitle>Source Code On GitHub
      <v-btn href="https://github.com/SuperJu5tin/Snake_Interpreted" target="_blank" variant="text">
        Interpreted languages
      </v-btn>
      <v-btn href="https://github.com/SuperJu5tin/Snake_Compiled" target="_blank" variant="text">
        Compiled languages
      </v-btn>
    </v-card-subtitle>
    <v-container>
      <v-row>
        <v-col>
          <v-row class="ma-5">
            Made the basic Snake game in multiple different languages
          </v-row>
          <v-row class="my-10 mx-5">
            <v-chip href="https://github.com/SuperJu5tin/Snake_Interpreted" target="_blank">Javascript</v-chip>
            <v-chip href="https://github.com/SuperJu5tin/Snake_Interpreted" target="_blank">Python</v-chip>
            <v-chip href="https://github.com/SuperJu5tin/Snake_Compiled" target="_blank">Rust</v-chip>
            <v-chip href="https://github.com/SuperJu5tin/Snake_Compiled" target="_blank">Java</v-chip>
            <v-chip href="https://github.com/SuperJu5tin/Snake_Compiled" target="_blank">C</v-chip>
          </v-row>
        </v-col>
        <v-col>
          <a href="/snake/index.html" target="_blank">
            <v-img :src="snakePic" />
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
