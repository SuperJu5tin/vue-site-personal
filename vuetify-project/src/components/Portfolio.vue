<script setup lang="ts">

  import Snake from './projects/Snake.vue'

</script>

<template>
  <v-container class="my-15">
    <v-row class="justify-center">
      <v-card color="lighter" elevation="24">
        <v-stepper color="lighter" :items="['Project 1', 'Project 2', 'Project 3', 'Project 4']">
          <template #item.1>
            <v-card color="lighter" flat title="Project One">
              <Snake />
            </v-card>
          </template>

          <template #item.2>
            <v-card color="lighter" flat title="Project Two">
              <GameServers />
            </v-card>
          </template>

          <template #item.3>
            <v-card color="lighter" flat title="Project Three">
              <ReactAboutMe />
            </v-card>
          </template>

          <template #item.4>
            <v-card color="lighter" flat title="Project Four">
              <EnglishHerosJourney />
            </v-card>
          </template>
        </v-stepper>
      </v-card>
    </v-row>
  </v-container>
</template>
