<script setup lang="ts">
  import CatergorizedCards from './cards/CatergorizedCards.vue';
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
        .then((data) => this.interests = data)
        .catch(err => console.error(err.message))
    }
  }

</script>




<template>
  <div class="interests">
      <h1 class="underline">My Biggest Interests</h1>
      <CatergorizedCards v-for="interest in Object.keys(interests)" :interest="interest" :favorites="interests[interest]" />
      <!-- <CatergorizedCards interest="test2" /> -->
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



<!-- const typedCompleteInterestsObject:InterestObject = {...completeInterestsJSON}
const interestsList = Object.keys(typedCompleteInterestsObject)

const listJoinDiffLast = (list: Array<string>, delimiter: string, diffLast: string ) => {

  let copyOfList = [...list]
  copyOfList[copyOfList.length - 1] = diffLast + copyOfList[copyOfList.length - 1]
  let newSentence = copyOfList.join(delimiter)
  return newSentence

}

const Interests = () => {

  return (
    <Box sx={{
      height:"fit-content",
      width:"max(300px, 30vw)",
      padding:"20px",
      display:"flex",
      flexDirection:"column",
      flexWrap:"wrap",
      backgroundColor:"#78c3a7",
      color:"#555",
      borderRadius:"30px",
      border:"solid",
      rotate:"-2deg",
      justifyContent:"center",
      alignContent:"space-around",
      boxShadow:"3px 3px 3px 3px #555"
    }}>
      <h1 className="test" >
        My Biggest Interests
      </h1>
      <Box sx={{borderTop:"solid", width:"100%"}} ></Box>
      <h2 style={{}}>{listJoinDiffLast(interestsList, ", ", " and ")}</h2>
      {
        interestsList.map((factType: string) => (
          <FactCardHolder key={factType} factType={factType} />
        ))
      }
    </Box>
  )
} -->