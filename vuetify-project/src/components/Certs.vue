<script setup lang="ts">

 import javascriptCertification from '../assets/badges/jse-40-01-jse-certified-entry-level-javascript-programmer.webp'
 import pythonCertification from '../assets/badges/pcep-30-02-pcep-certified-entry-level-python-programmer.webp'

</script>

<template>
  <div class='professional-container'>
    <a href='/justin_libhart_resume.pdf' download>Download resume</a>
    <a href='/justin_libhart_resume.pdf' target="_blank">View resume in new tab</a>
    <div class='imageHolder'>
      <a target='_blank' href='https://verify.openedg.org/?id=BRCN.s61L.LaQL' >
        <img :src='javascriptCertification' width="200px" alt='JSE - Certified Entry-Level JavaScript Programmer Certification'/>
      </a>
      <a target='_blank' href='https://verify.openedg.org/?id=bpk1.NUup.OEBM' >
        <img :src='pythonCertification' width="200px" alt='PCEP - Certified Entry-Level Python Programmer Certification'/>
      </a>
    </div>
  </div>
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