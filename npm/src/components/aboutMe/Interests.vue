<script setup lang="ts">

  import CatergorizedCards from './cards/CatergorizedCards.vue';

  type InterestObject = {
    [key:string]: Array<string>
  }

  const fetchData = async (route:string) => {
    const response = await fetch(route, {
      method:'POST',
    })
    const resJson = await response.json()
    return await resJson
  }

  const interests = fetchData("/api/about_me/interests.json")

  // console.log(fetchData("/api/about_me/interests.json"))

</script>

<template>
  <!-- <Suspense> -->
    <div class="interests">
        <h1>TEST</h1>
        {{ }}
        <!-- {{ facts }} -->
        <CatergorizedCards interest="test" />
        <CatergorizedCards interest="test2" />
    </div>

  <!-- </Suspense> -->
    

    <!-- <div style={{
      
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
    </div> -->
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
}

export default Interests -->