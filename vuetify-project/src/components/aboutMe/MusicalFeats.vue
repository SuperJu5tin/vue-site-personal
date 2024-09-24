<script setup lang="ts">

  import Tuba from '@/assets/music-tuba-by-Vexels.svg'

</script>

<template>
  <v-card class="pa-3 rounded-lg elevation-15">
    <v-container>
      <v-row class="text-h3 justify-center my-1">Musical Feats</v-row>
      <v-divider class="my-5" thickness="3" />
      <v-row>
        <v-col class="">
          <v-card-subtitle>Instruments</v-card-subtitle>
          <v-list>
            <v-list-item>Tuba</v-list-item>
            <v-list-item>Trombone</v-list-item>
            <v-list-item>Euphonium</v-list-item>
          </v-list>
          <v-img alt="The Tuba Icon" :src="Tuba" />
        </v-col>
        <v-divider class="d-none d-sm-block" inset vertical />
        <v-divider class="d-block d-sm-none" />
        <v-col>
          <v-card-subtitle>Bands</v-card-subtitle>
          <v-list>
            <v-list-item>Wind Ensemble</v-list-item>
            <v-list-item>Concert Band</v-list-item>
            <v-list-item>Musical Pit</v-list-item>
            <v-list-item>Sig Jazz</v-list-item>
            <v-list-item>Gator Blues Jazz</v-list-item>
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
