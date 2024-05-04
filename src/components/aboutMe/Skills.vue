<script setup lang="ts">

import Skill from './skills/Skill.vue';

</script>

<script lang="ts">

type Skill = {
  name:string,
  level:string,
  numericPercent:number
}

type Skills = {
  [key:string]: Skill
}

export default {
  data() {
    return {
      skills: {} as Skills
    }
  },
  mounted() {
    fetch('/api/about_me/skills.json')
      .then(res => res.json())
      .then(data => this.skills = data)
      .catch(err => console.error(err.message))
  },
}

</script>

<template>
  <div class="skills">
      <h1 class="skills-header">Skills</h1>
      <div class="skills-container">
        <Skill v-for="skill in skills" :skill="skill" />
      </div>

    </div>
</template>

<style scoped>
  .skills {
    rotate:-4deg;
    padding:10px;
    height:fit-content;
    width: fit-content;
    background-color:#78c3a7;
    color:#555;
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
</style>