<script setup lang="ts">

  import javascriptCertification from '@/assets/certifications/jse.webp'
  import pythonCertification from '@/assets/certifications/pcep.webp'
  import comptiaAPlussCertification from '@/assets/certifications/comptia/aplus.webp'

</script>

<template>
  <v-container class="my-10">
    <v-row class="justify-center ga-5 my-5">
      <v-btn color="lighter" download href="/justin_libhart_resume.pdf">Download resume</v-btn>
      <v-btn color="lighter" href="/justin_libhart_resume.pdf" target="_blank">View resume in new tab</v-btn>
    </v-row>
    <v-row class="justify-center mt-10">
      <v-carousel class="w-33" height="auto" show-arrows="hover">
        <v-carousel-item>
          <a href="https://verify.openedg.org/?id=bpk1.NUup.OEBM" target="_blank">
            <v-img
              alt="PCEP - Certified Entry-Level Python Programmer Certification"
              :src="pythonCertification"
            />
          </a>
        </v-carousel-item>
        <v-carousel-item>
          <a href="https://verify.openedg.org/?id=BRCN.s61L.LaQL" target="_blank">
            <v-img
              alt="JSE - Certified Entry-Level JavaScript Programmer Certification"
              :src="javascriptCertification"
            />
          </a>
        </v-carousel-item>
        <v-carousel-item>
          <a href="https://www.credly.com/badges/fa8386b3-6a9a-4868-87d0-762728d3efab/public_url" target="_blank">
            <v-img
              alt="PCEP - Certified Entry-Level Python Programmer Certification"
              :src="comptiaAPlussCertification"
            />
          </a>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>
