<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import AboutMe from './components/AboutMe.vue';
import BetweenPage from './components/BetweenPage.vue';
import Home from './components/Home.vue';
import NavBar from './components/NavBar.vue';
import Certs from './components/Certs.vue';
import Footer from './components/Footer.vue';
const colors = ['#89aedf', '#89dbdf','#9cdf89']

</script>

<template>
  <NavBar />
  <Home />
  <BetweenPage name='about-me' :color='colors[0]' />
  <AboutMe />
  <BetweenPage name="certifications" :color='colors[2]' />
  <Certs />
  <Footer />
</template>
