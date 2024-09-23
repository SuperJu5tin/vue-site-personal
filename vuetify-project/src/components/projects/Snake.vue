<script setup lang="ts">

// import snakePic from "../../assets/snake.webp"

  const sideLength = 'max(210px, 25vmin)'
  const sideLength2 = 'max(550px, 70vmin)'
  const sideLength3 = 'max(500px, 60vmin)'

</script>

<template>
  <v-card class="color-one">
    <v-container>
      <v-row>
        <v-card-title class="justify-center">Snake</v-card-title>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

.color-one {
  background-color: #8ae4dc;
}
.snake-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.title {
  margin-top: max(10px, 2vmin);
  margin-bottom: 0px;
}

.font {
  /* font-family: Indie Flower; */
}

.font-two {
  /* font-family: Gloria Hallelujah; */
}

.basic-overlap {
  height: v-bind(sideLength);
  padding: 10px;
  align-content: center;
  justify-content: center;
  background-color: #98CBC7;
  border-radius: 20px;
  border: solid;
  box-shadow: 3px 3px 3px 3px #555;
}

.box-one {
  width: calc(v-bind(sideLength) - 2vw);
  padding-right: 2vw;
  margin-right: -2vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  rotate: -10deg;
  z-index: 2;
}

.box-two {
  width: v-bind(sideLength);
  rotate: 5deg;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  z-index: 3;
}

.box-three {
  width: v-bind(sideLength);
  rotate: 15deg;
  margin-left: -2vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  z-index: 1;
}

.open-modal {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
}

.modal-style {
  display: flex;
  margin: auto;
  /* width: sideLength2; */
  /* height: sideLength2; */
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-content: center;
  background: rgb(40, 189, 139);
  color: white;
  border: solid #555;
  border-radius: 20px;
}

</style>
