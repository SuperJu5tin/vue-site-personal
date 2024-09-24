<script setup>
  import { ref } from 'vue'
  import { useTheme } from 'vuetify'

  const theme = useTheme()
  const darkMode = ref(theme.global.current.value.dark)

  const toggleTheme = () => {
    theme.global.name.value = darkMode.value ? 'dark' : 'light'
  }
</script>

<template>
  <v-app-bar class="position-sticky" color="lighter" elevate-on-scroll>
    <!-- <template #prepend>
      <v-app-bar-nav-icon />
    </template> -->
    <v-app-bar-title>Justin Libhart</v-app-bar-title>
    <template #append>
      <v-switch
        v-model="darkMode"
        class="mt-5 mr-5"
        label="Toggle Theme"
        @change="toggleTheme()"
      />
    </template>

  </v-app-bar>
</template>
