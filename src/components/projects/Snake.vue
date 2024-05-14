<script setup lang="ts">

// import snakePic from "../../assets/snake.webp"

const sideLength = "max(210px, 25vmin)"
const sideLength2 = "max(550px, 70vmin)"
const sideLength3 = "max(500px, 60vmin)"


</script>

<template>
  <div class="snake-container">
    <div class="basic-overlap box-one">
      <h1 >Github</h1>
      <!-- <Divider flexItem></Divider> -->
      <p >Two github repositories</p>
      <a target='_blank' href="https://github.com/SuperJu5tin/Snake_Compiled.git">Compiled Languages</a>
      <a target='_blank' href="https://github.com/SuperJu5tin/Snake_Interpreted.git">Interpreted Languages</a>
    </div>
    <div class="basic-overlap box-two">
      <h1>Snake</h1>
      <!-- <Divider flexItem></Divider> -->
      <p>A basic game of snake in multiple languages: Javascript, C,
        Python, and Rust. </p>
    </div>
    <div class="basic-overlap box-three">
      <div class="open-modal">
        <button class="button-two">Open Example</button>
        <h3>Keyboard Required</h3>
      </div>
      <!-- <Modal class="modal-style" open={open} onClose={handleClose}>
        <div sx={{display:"flex", flexDirection:"column", justifyItems:"center", alignItems:"center",
          justifyContent:"center"}}>
          <div sx={{display:"inline-flex"}}>
            <h2 style={{fontFamily: '"Gloria Hallelujah", cursive' }}><a style={{textDecoration:"none", }}
                target='_blank' href="/snake/index.html">Open In New Tab</a></h2>
            <button sx={{ marginLeft:"10px", fontSize:"20px", fontFamily: '"Gloria Hallelujah", cursive' }}
              onClick={handleClose}>Close</button>
          </div>
          <div>
            <iframe style={{width:sideLength3, height:sideLength3}} src="/snake/index.html"></iframe>
          </div>
        </div>
      </Modal> -->
      <!-- <a target='_blank' style="width:70%; height:70%;" href="/snake/index.html" aria-label="View Justin's basic Javascript/HTML Snake Game">
        <img :src='snakePic' style="width:100%; height:100%;" />
      </a> -->
    </div>
  </div>
</template>

<style scoped>

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