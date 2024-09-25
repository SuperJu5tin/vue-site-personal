<script setup lang="ts">

  import javascriptCertification from '../assets/badges/jse-40-01-jse-certified-entry-level-javascript-programmer.webp'
  import pythonCertification from '../assets/badges/pcep-30-02-pcep-certified-entry-level-python-programmer.webp'

</script>

<template>
  <v-container class="my-10">
    <v-row class="justify-center ga-5 my-5">
      <v-btn color="lighter" download href="/justin_libhart_resume.pdf">Download resume</v-btn>
      <v-btn color="lighter" href="/justin_libhart_resume.pdf" target="_blank">View resume in new tab</v-btn>
    </v-row>

    <v-row class="justify-center ga-10 my-5">
      <a href="https://verify.openedg.org/?id=BRCN.s61L.LaQL" target="_blank">
        <v-img
          alt="JSE - Certified Entry-Level JavaScript Programmer Certification"
          :src="javascriptCertification"
          width="200px"
        /></a>
      <a href="https://verify.openedg.org/?id=bpk1.NUup.OEBM" target="_blank">
        <v-img
          alt="PCEP - Certified Entry-Level Python Programmer Certification"
          :src="pythonCertification"
          width="200px"
        />
      </a>
    </v-row>
  </v-container>
</template>

<style scoped>

.professional-container {
  margin-block:50px;
  display:flex;
  flex-direction:column;
  justify-items:center;
  align-items:center;
  justify-content:center;
  align-content:center;
  flex-wrap:wrap;
  gap:.3em;
}

.image-container {
  display:flex;
  align-content:center;
  justify-content:center;
  flex-wrap:wrap;
  gap:1em;
}

</style>
