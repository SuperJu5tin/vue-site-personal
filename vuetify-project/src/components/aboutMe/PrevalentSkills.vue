<script setup lang="ts">

  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import Skill from './skills/Skill.vue'

  type SkillType = {
    name:string,
    level:string,
    numericPercent:number
  }

  type Skills = {
    [key:string]: SkillType
  }

  const skills:Ref<Skills> = ref({})

  const initializeSkills = () => {
    fetch('/api/about_me/skills.json')
      .then(res => res.json())
      .then(data => skills.value = data)
      .catch(err => console.error(err.message))
  }

  initializeSkills()

</script>

<template>
  <v-card class="pa-3 rounded-lg elevation-15">
    <v-container>
      <v-row class="text-h3 justify-center my-1">Skills</v-row>
      <v-divider />
      <v-row class="test">
        <Skill v-for="skill in skills" :key="skill.name" :skill="skill" />
      </v-row>
    </v-container>

  </v-card>
</template>

<style scoped>
  .skills {
    rotate:-4deg;
    padding:10px;
    height:fit-content;
    width: fit-content;
    background-color:#78c3a7;
    border-radius:30px;
    border:solid;
    box-shadow:3px 3px 3px 3px #555;
  }

  .skills-header {
    border-bottom: solid .1em;
    margin-bottom: 1rem;
  }

  .skills-container {
    display: grid;
    grid-template-columns: .5fr 1fr 1fr;
    gap: .3rem;
    align-items: center;
  }
  .test {
    display: grid;
    grid-template-columns : 1fr 1fr;
  }
</style>
