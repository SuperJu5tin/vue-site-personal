<script setup>

</script>

<template>
  <div>
    <p >
      {name} 
    </p>
  </div>
  <div>
    <p>
      : {level}
    </p>
  </div>
  <div class="skill-bar">
    <div class="skill-bar-filled"></div>  
  </div>
</template>

<style scoped>

.skill-name {
  grid-column: 1;

}

.skill-bar {
  margin-left: 10px;
  height: 20px;
  background-color: #d7fedc;
  border-radius: 10px;
  overflow: hidden;
}

.skill-bar-filled {
  /* width:`${percent+2}%`, */
  height: 20px;
  background-color: green;
}

</style>