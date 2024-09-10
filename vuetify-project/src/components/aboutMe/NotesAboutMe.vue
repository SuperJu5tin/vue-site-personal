<script setup lang="ts">

  import CC from '@/assets/cc.svg'

</script>

<template>
  <div class="notes-container">

    <h1>Notes</h1>
    <div class="categories-container">
      <div class="category">
        <h2 class="category-header">Musical</h2>
        <h5>Plays:</h5>
        <ul>
          <li>Tuba</li>
          <li>Trombone</li>
          <li>Euphonium</li>
        </ul>
        <h5>Bands played at Standley Lake:</h5>
        <div>
          <ul>
            <li>Wind Ensemble</li>
            <li>Concert Band</li>
            <li>Musical Pit</li>
            <li>Jazz</li>
          </ul>
        </div>

      </div>
      <div class="category">
        <h2 class="category-header">Sports</h2>
        <p>2 Years of Track and Field</p>
        <p>2 Years of Cross Country</p>
        <h3>Lettering</h3>
        <p>2 years In Cross Country</p>
        <img alt="The Cross Country Letter Icon" :src="CC">
      </div>
      <div class="category">
        <h2 class="category-header">Experience</h2>
        <div>
          <h3>Irrigation Specialist</h3>
          <p>May 2020 - August 2023</p>
          <h5>Reliable Helpers</h5>
          <p>Led irrigation based projects</p>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
    .notes-container {
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
        padding:20px;
        height:fit-content;
        /* background-color:#78c3a7; */
        rotate:2deg;
        border-radius:30px;
        border:solid;
        box-shadow:3px 3px 3px 3px #555;
    }

    .categories-container {
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        height:fit-content;
        width:fit-content;
    }

    .category-header {
        height: fit-content;
        width: fit-content;
        margin-bottom: 1rem;
        border-bottom: solid 4px;
    }

    .category {
        flex:1;
        display:grid;
        border-left:dashed 1px;
        border-right:dashed 1px;
        padding-inline:.5rem;
        padding-bottom:1rem;
        text-wrap:wrap;
        text-align:center;
        /* align-content:center; */
        align-items:space-between;
        justify-content:space-around;
        justify-items:center;
    }
</style>
