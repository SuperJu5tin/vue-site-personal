<script setup lang="ts">

  import CC from '@/assets/cc.svg'

</script>

<template>
  <v-card class="pa-3">
    <v-container>
      <v-row class="text-h3 justify-center my-2">Notes</v-row>
      <v-divider class="my-5" thickness="3" />
      <v-row class="categories-container">
        <v-col class="">
          <v-row class="text-h5 justify-center my-3">Musical Talents</v-row>
          <ul>
            <li>Tuba</li>
            <li>Trombone</li>
            <li>Euphonium</li>
          </ul>
          <v-row class="text-subtitle-1 justify-center my-3">Bands played in</v-row>
          <div>
            <ul>
              <li>Wind Ensemble</li>
              <li>Concert Band</li>
              <li>Musical Pit</li>
              <li>Sig Jazz</li>
              <li>Gator Blues Jazz</li>
            </ul>
          </div>

        </v-col>
        <v-divider class="my-5" thickness="3" vertical />
        <v-col class="">
          <h2 class="category-header">Sports</h2>
          <p>2 Years of Track and Field</p>
          <p>2 Years of Cross Country</p>
          <h3>Lettering</h3>
          <p>2 years In Cross Country</p>
          <img alt="The Cross Country Letter Icon" :src="CC">
        </v-col>
        <v-divider class="my-5" thickness="3" vertical />
        <v-col class="">
          <h2 class="category-header">Experience</h2>
          <div>
            <h3>Irrigation Specialist</h3>
            <p>May 2020 - August 2023</p>
            <h5>Reliable Helpers</h5>
            <p>Led irrigation based projects</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style>
    .notes-container {
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
        padding:20px;
        height:fit-content;
        /* background-color:#78c3a7; */
        rotate:2deg;
        border-radius:30px;
        border:solid;
        box-shadow:3px 3px 3px 3px #555;
    }

    .categories-container {
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        height:fit-content;
        width:fit-content;
    }

    .category-header {
        height: fit-content;
        width: fit-content;
        margin-bottom: 1rem;
        border-bottom: solid 4px;
    }

    .category {
        flex:1;
        display:grid;
        border-left:dashed 1px;
        border-right:dashed 1px;
        padding-inline:.5rem;
        padding-bottom:1rem;
        text-wrap:wrap;
        text-align:center;
        /* align-content:center; */
        align-items:space-between;
        justify-content:space-around;
        justify-items:center;
    }
</style>
