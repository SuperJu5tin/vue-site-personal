<script setup lang="ts">

</script>

<template>
  <v-card color="lighter" elevation="24">
    <v-stepper bg-color="lighter" color="primary" :items="['Project 1', 'Project 2', 'Project 3', 'Project 4']">
      <template #item.1>
        <Snake />
      </template>

      <template #item.2>
        <GameServers />
      </template>

      <template #item.3>
        <ReactAboutMe />
      </template>

      <template #item.4>
        <EnglishHerosJourney />
      </template>
    </v-stepper>
  </v-card>
</template>
