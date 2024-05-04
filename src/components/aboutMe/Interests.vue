<script setup lang="ts">
  import CatergorizedCards from './cards/CatergorizedCards.vue';

  const listJoinDiffLast = (list: Array<string>, delimiter: string, diffLast: string ) => {

    const copyOfList = [...list]
    copyOfList[copyOfList.length - 1] = diffLast + copyOfList[copyOfList.length - 1]
    const newSentence = copyOfList.join(delimiter)
    return newSentence

  }

</script>

<script lang="ts">

  type InterestObject = {
    [key:string]: Array<string>
  }

  export default {
    data() {
      return {
        interests: {} as InterestObject,
      }
    },
    mounted() {
      fetch('/api/about_me/interests.json')
        .then(res => res.json())
        .then(data => this.interests = data)
        .catch(err => console.error(err.message))
    }
  }

</script>




<template>
  <div class="interests">
      <h1 class="underline">My Biggest Interests</h1>
      <h3> {{ listJoinDiffLast(Object.keys(interests), ", ", " and ") }} </h3>
      <CatergorizedCards v-for="interest in Object.keys(interests)" :interest="interest" :favorites="interests[interest]" />
  </div>
</template>

<style scoped>

.interests {
    height:fit-content;
    width: max(300px, 30vw);
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #78c3a7;
    color: #555;
    border-radius: 30px;
    border: solid;
    rotate: -2deg;
    justify-content: center;
    align-content: space-around;
    box-shadow: 3px 3px 3px 3px #555;
    
}

.underline {
  padding-bottom: .1em;
  width:100%;
  border-bottom:solid;
}

</style>