<template>
  <v-container fluid style=" width: 99vw;" class="d-flex align-center justify-center">
    <div>
      <v-rou>
        <v-col>
          <h1 class="">Avaliação de Aprendizado - Unidade 01: Desenvolvimento de Sistema com Vue.js</h1>
        </v-col>
      </v-rou>

      <v-row>

        <v-col cols="12" sm="6" md="4">
          <RouterLink to="/enunciado" style="text-decoration: none;">
            <v-btn color="primary" block>Enunciado</v-btn>
          </RouterLink>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="text-center">
          <a href="https://github.com/thomazfabio/av1-fmds-vue3" style="text-decoration: none;">
            <v-btn color="warning" block>Repositório</v-btn>
          </a>
          <a href="https://github.com/thomazfabio/av1-fmds-vue3"><v-icon size="100" color="black darken-3"
              class="mt-8">mdi-github</v-icon></a>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <RouterLink to="/prova" style="text-decoration: none;">
          <v-btn color="success" block>Exercício</v-btn>
          </RouterLink>
        </v-col>

      </v-row>

    </div>
  </v-container>
</template>