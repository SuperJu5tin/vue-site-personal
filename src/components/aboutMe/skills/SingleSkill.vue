<script setup lang="ts">

  type Skill = {
    name:string,
    level:string,
    numericPercent:number
  }
  
  // eslint-disable-next-line no-undef
  const props = defineProps<{ skill:Skill }>()
  const percent = `${props.skill.numericPercent + 3}%`

</script>

<template>
  <!-- <div class="skill-container"> -->
  <div class="skill-name">
    <p >
      {{skill.name}} 
    </p>
  </div>
  <div class="skill-level">
    <p>
      {{skill.level}}
    </p>
  </div>
  <!-- </div> -->
  <div class="skill-bar">
    <div class="skill-bar-filled"></div>  
  </div>
  
</template>

<style scoped>

.skill-container {
  display: grid;
  grid-template-columns: .5fr .1rem 1fr;
  align-items: center;
}

.skill-name {
  justify-self: right;
  /* margin-right: .2rem; */
}

.skill-level {
  text-align: left;
  padding-inline: .3rem;
  border-left:dotted 1px;
  border-right:dotted 1px;
  /* margin-left: .2rem; */
}

.skill-bar {
  flex: 1;
  /* margin-left: .3rem; */
  height: 20px;
  background-color: #d7fedc;
  border-radius: 10px;
  overflow: hidden;
}

.skill-bar-filled {
  width:v-bind(percent);
  height: 20px;
  background-color: green;
}

</style>