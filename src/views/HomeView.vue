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
            <RouterLink to="/enunciado">
              <v-btn color="primary" block>Enunciado</v-btn>
            </RouterLink>
          </v-col>

          <v-col cols="12" sm="6" md="4" class="text-center">
            <v-btn color="warning" block>Repositório</v-btn>
            <v-icon class="mt-5" color="blue" size="60">mdi-github</v-icon>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-btn color="success" block>Exercício</v-btn>
          </v-col>
      
      </v-row>

    </div>
  </v-container>
</template>