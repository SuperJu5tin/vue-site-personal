<script lang="ts" setup >

import AboutMe from './components/AboutMe.vue';
import BetweenPage from './components/BetweenPage.vue';
import Home from './components/Home.vue';
import NavBar from './components/NavBar.vue';
import Certs from './components/Certs.vue';
import Foot from './components/Foot.vue';
import Portfolio from './components/Portfolio.vue';

const colors = ['#89aedf', '#89dbdf', '#9cdf89'];

</script>

<template>
  <v-app>
    <v-main class="bodytag">
      <NavBar />
      <Home />
      <BetweenPage name='about-me' :color='colors[0]' />
      <AboutMe />
      <BetweenPage name='portfolio' :color='colors[1]' />
      <Portfolio />
      <BetweenPage name="certifications" :color='colors[2]' />
      <Certs />
      <Foot />
    </v-main>
  </v-app>
</template>
