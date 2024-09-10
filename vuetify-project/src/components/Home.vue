<script setup lang="ts">

import pictureOfMe from "../assets/meSinging.webp"

</script>

<template>
    <div class="home-container">
      <div class="picture-container">
        <img class="picture-me" alt="A picture of Justin" :src="pictureOfMe"/>
      </div>
      <div class="blurb-container">
        <h1 class="title-text">Hello, I am Justin Libhart</h1>
        <p><span></span>Currently a student at both Warren Tech and Standley Lake High School. I am a hard-working learner, always open to new ways to do things more efficiently. I love working on projects and finding different ways to make my brain hurt. With an extensive knowledge of general Information Technology, from Coding to DevOps to physical Hardware.</p>
      </div>
    </div>
</template>

<style scoped>
.home-container  {
  min-height:60vh;
  padding-top:5em;
  padding-bottom:5em;
  padding-left:3em;
  padding-right:3em;
  display:flex;
  flex-wrap:wrap;
  text-wrap:wrap;
  justify-self:center;
  justify-content:center;
  align-content:center;
  justify-items:center;
  align-items:center;
  gap:2em;
}
.picture-container  {
  flex:1
}
.picture-me {
  box-shadow:10px 5px 5px black;
  height:min(400px, 67vmin);
  width:min(550px, 80vmin);
  border-radius:20px;
}

.blurb-container {
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  flex:1;
}
.title-text {
  font-family: Satisfy ;
  border-bottom:solid .1em;
}

</style>