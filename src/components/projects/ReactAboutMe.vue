<script setup lang="ts">

  import webpagePic from '@/assets/reactHomePage.png'

</script>

<template>
  <v-card color="lighterStill">
    <v-card-title><v-icon>mdi-react</v-icon> Website In React</v-card-title>
    <v-card-subtitle>Source Code On GitHub
      <v-btn href="https://github.com/SuperJu5tin/react-aboutme" target="_blank" variant="text">
        React About Me
      </v-btn>
    </v-card-subtitle>
    <v-container>
      <v-row>
        <v-col>

          <v-row class="ma-5">
            Made a basic first itteration of this website except using the react Framework
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
