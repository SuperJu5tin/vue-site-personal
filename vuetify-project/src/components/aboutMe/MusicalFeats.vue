<script setup lang="ts">

  import Tuba from '@/assets/music-tuba-by-Vexels.svg'

</script>

<template>
  <v-card class="pa-3 rounded-lg elevation-15" color="lighter">
    <v-container>
      <v-row class="text-h3 justify-center my-1"><v-icon class="mr-5">mdi-music</v-icon>Musical Feats</v-row>
      <v-divider class="my-5" thickness="3" />
      <v-row>
        <v-col>
          <v-list bg-color="lighterStill" class="mb-5">
            <v-list-subheader>Instruments</v-list-subheader>
            <v-list-item>Tuba</v-list-item>
            <v-list-item>Trombone</v-list-item>
            <v-list-item>Euphonium</v-list-item>
            <v-list-item>
              <v-list-item-media>
                <v-img alt="The Tuba Icon" :src="Tuba" />
              </v-list-item-media>
            </v-list-item>
          </v-list>
        </v-col>
        <v-divider class="d-none d-sm-block" inset vertical />
        <v-divider class="d-block d-sm-none" />
        <v-col>
          <v-list bg-color="lighterStill">
            <v-list-subheader>Bands</v-list-subheader>
            <v-list-item>Wind Ensemble</v-list-item>
            <v-list-item>Concert Band</v-list-item>
            <v-list-item>Marching Band</v-list-item>
            <v-list-item>Musical Pit</v-list-item>
            <v-list-subheader>Jazz</v-list-subheader>
            <v-list-item>Signature Jazz</v-list-item>
            <v-list-item>Gator Blues</v-list-item>
          </v-list>
        </v-col>
        <!-- <v-col>
          <v-card-subtitle class="text-h5 text-center">Experience</v-card-subtitle>
          <v-divider />
          <v-row class="ga-5 mt-4">
            <v-card class="elevation-5">
              <v-card-title>Irrigation Specialist - Reliable Helpers</v-card-title>
              <v-card-subtitle>May 2020 - August 2023</v-card-subtitle>
              <v-card-item>Led irrigation based projects</v-card-item>
            </v-card>
            <v-card class="elevation-5">
              <v-card-title>IT Internship - Westminster City Hall</v-card-title>
              <v-card-subtitle>Jun 2024 - August 2024</v-card-subtitle>
              <v-card-item>Replaced a static website with a webapp for City of Westminster, made to simulate a walking tour of Westminster. Found at <a href="" target="_blank">Walk</a></v-card-item>
            </v-card>
          </v-row>
        </v-col> -->
      </v-row>
    </v-container>
  </v-card>
</template>
