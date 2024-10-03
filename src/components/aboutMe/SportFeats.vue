<script setup lang="ts">

  import CC from '@/assets/svgs/cc.svg'

</script>

<template>
  <v-card class="pa-3 rounded-lg elevation-15" color="lighter">
    <v-container>
      <v-row class="text-h3 justify-center text-center my-1"><v-icon class="mr-5">mdi-run-fast</v-icon>Sport Feats</v-row>
      <v-divider class="my-5" thickness="3" />
      <v-row>
        <v-col class="">
          <v-list bg-color="lighterStill" class="rounded">
            <v-list-item>2 Years of Track and Field</v-list-item>
            <v-list-item>3 Years of Cross Country</v-list-item>
          </v-list>
        </v-col>
        <v-divider class="d-none d-sm-block" inset vertical />
        <v-divider class="d-block d-sm-none" />
        <v-col class="">
          <v-list bg-color="lighterStill" class="rounded">
            <v-list-item>Lettered 2 Years in Cross Country</v-list-item>
            <v-list-item>Cross Country Team Captain</v-list-item>
          </v-list>
          <v-img alt="The Cross Country Letter Icon" class="mt-5" :src="CC" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
