<script setup lang="ts">

  import CC from '@/assets/cc.svg'

</script>

<template>
  <v-card class="pa-3 rounded-lg elevation-15" color="lighter">
    <v-container>
      <v-row class="text-h3 justify-center my-1">Sport Feats</v-row>
      <v-divider class="my-5" thickness="3" />
      <v-row>
        <v-col class="">
          <v-container>
            <v-row>2 Years of Track and Field</v-row>
            <v-row>3 Years of Cross Country</v-row>
          </v-container>
        </v-col>
        <v-divider class="d-none d-sm-block" inset vertical />
        <v-divider class="d-block d-sm-none" />
        <v-col class="">
          <v-container>
            <v-row>Lettered 2 Years in Cross Country</v-row>
            <v-row>Cross Country Team Captain</v-row>
          </v-container>
          <v-img alt="The Cross Country Letter Icon" class="mt-5" :src="CC" />
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
