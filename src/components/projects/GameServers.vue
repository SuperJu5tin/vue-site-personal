<script setup lang="ts">

  import snakePic from '@/assets/snake.webp'

</script>

<template>
  <v-card color="lighterStill">
    <v-card-title><v-icon>mdi-server-network</v-icon> Game Server</v-card-title>
    <v-container>
      <v-row>
        <v-col>
          <v-card-subtitle>Source Code On GitHub
            <v-btn href="https://github.com/SuperJu5tin/gameServers" target="_blank" variant="text">
              Game Servers
            </v-btn>
          </v-card-subtitle>

          <v-row class="ma-5">
            Made a basic website to manage my game servers (Minecraft and Terraria) on a seperate computer
          </v-row>
          <v-row class="my-10 mx-5">
            <v-chip>Next.js</v-chip>
            <v-chip>Express.js</v-chip>
          </v-row>
        </v-col>
        <v-col>
          <v-img :src="snakePic" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
