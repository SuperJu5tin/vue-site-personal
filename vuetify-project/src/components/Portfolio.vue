<script setup lang="ts">

  import Snake from './projects/Snake.vue'

</script>

<template>
  <v-container class="my-15">
    <!-- <v-row class="text-h3 justify-center align-center">
      Past Projects
      <v-divider />
    </v-row> -->
    <v-row class="justify-center">
      <v-card
        elevation="24"
      >
        <v-stepper :items="['Project 1', 'Project 2', 'Project 3']">
          <template #item.1>
            <v-card flat title="Title One"><Snake /></v-card>
          </template>

          <template #item.2>
            <v-card flat title="Step Two">...</v-card>
          </template>

          <template #item.3>
            <v-card flat title="Step Three">...</v-card>
          </template>
        </v-stepper>
      </v-card>
    </v-row>
  </v-container>
</template>

<style scoped>

.portfolio-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 3em;
  padding-block: 3em;
  padding-inline: 1em;
}

.past-projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.underline {
  border-bottom: solid .1em;
}

</style>
