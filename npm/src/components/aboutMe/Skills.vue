<script setup lang="ts">
import Skill from './skills/Skill.vue';




</script>

<template>
  <div class="skills">
      <Divider><h1>Skills</h1></Divider>
      <div class="skills-container">

        <Skill />
        <!-- {
          typedSkillsList.map((skill: SkillObject) => (
            <Skill key={skill.name + skill.level} skill={skill} />
          ))
        } -->
      </div>

    </div>
</template>

<style scoped>
  .skills {
    rotate:-4deg;
    padding:20px;
    height:fit-content;
    background-color:#78c3a7;
    color:#555;
    border-radius:30px;
    border:solid;
    box-shadow:3px 3px 3px 3px #555;
  }

  .skills-container {
    display: grid;
    grid-template-columns: .75fr 1.5fr 2fr;
    grid-template-columns: repeat(auto-fit, 1fr);
    align-items: center;
  }
</style>