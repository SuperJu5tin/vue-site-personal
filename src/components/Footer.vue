<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="footer">
      <div class="footer-item-one">
        <h4>All Rights Reserved @ 2024 justinlibhart.xyz</h4>
      </div>
      <div>
        <h4>Contact Me</h4>
        <div class="links">
          <div>
            <a href="mailto:superjuslib@gmail.com" aria-label="Justin's Email Address">superjuslib@gmail.com</a>
          </div>
          <a target='_blank' href="https://www.linkedin.com/in/justin-libhart-798498304/" aria-label="View Justin's LinkedIn Profile">LinkedIn</a>
          <a target='_blank' href='https://github.com/SuperJu5tin' aria-label="View Justin's Github Profile">Github</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

.footer {
  /* margin-top:100px; */
  padding:1vmax;
  height:fit-content;
  color: #111;
  background-color:#777;
  border:solid 2px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:1em;
}

.footer-item-one {
  justify-self:left;
  align-self:center;
}

.links {
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  align-items:baseline;
  align-content:bottom;
  justify-items:right;
  justify-content:center;
}


</style>