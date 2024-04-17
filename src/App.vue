<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTheme } from 'vuetify'
import { ref, watch } from 'vue'

const theme = useTheme()
const switchTheme = ref('Light')

watch(switchTheme, () => {
  if (switchTheme.value == 'Dark') {
    theme.global.name.value = 'dark'
  }
  if (switchTheme.value == 'Light') {
    theme.global.name.value = 'light'
  }
})
</script>

<template>
  <v-app>
    <v-app-bar density="compact">
      <RouterLink to="/" style="text-decoration: none;">
        <v-btn color="warning" block>Home</v-btn>
      </RouterLink>

      <RouterLink to="/enunciado" style="text-decoration: none;">
        <v-btn color="primary" block>Enunciado</v-btn>
      </RouterLink>

      <RouterLink to="/prova" style="text-decoration: none;">
        <v-btn color="success" block>Exercício</v-btn>
      </RouterLink>
      <v-spacer></v-spacer>

      <v-switch class="d-flex align-center justify-end mr-4" true-value="Dark" false-value="Light" color="purple"
        :label="`Tema: ${switchTheme.toString()}`" v-model="switchTheme"></v-switch>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <RouterView></RouterView>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <p>Fabio Thomaz</p>
    </v-footer>

  </v-app>
</template>