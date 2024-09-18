<script setup lang="ts">

  type Skill = {
    name:string,
    level:string,
    numericPercent:number
  }

  const props = defineProps<{ skill:Skill }>()
  const percent = `${props.skill.numericPercent + 3}%`

</script>

<template>
  <v-container>
    <v-col class="text-h5 my-2">
      {{ skill.name }}
    </v-col>
    <v-progress-linear
      color="blue-lighten-3"
      height="10"
      :model-value="skill.numericPercent"
      rounded
    />
  </v-container>

</template>

<style scoped>

.skill-container {
  display: grid;
  grid-template-columns: .5fr .1rem 1fr;
  align-items: center;
}

.skill-name {
  justify-self: right;
}

.skill-level {
  text-align: left;
  padding-inline: .3rem;
  border-left:dotted 1px;
  border-right:dotted 1px;
}

.skill-bar {
  width: max(10rem, 15vw);
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
