<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <v-app>
      <v-app-bar density="compact">
        <v-btn text><RouterLink to="/">Home</RouterLink></v-btn>
        <v-btn text><RouterLink to="/enunciado">Enunciado</RouterLink></v-btn>
        <v-btn text><RouterLink to="/prova">Exercício</RouterLink></v-btn>
      </v-app-bar>
      <RouterView class="mt-10"></RouterView>
      <v-footer app="true"><p>Fabio Thomaz</p></v-footer>
    </v-app>
</template>