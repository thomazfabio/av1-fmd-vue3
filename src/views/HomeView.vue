<template>
  <v-container fluid style=" width: 99vw;" class="d-flex align-center justify-center">
    <div>
      <v-rou>
        <v-col>
          <h1 class="">Avaliação de Aprendizado - Unidade 01: Desenvolvimento de Sistema com Vue.js</h1>
        </v-col>
      </v-rou>
      <v-row>
        <v-spacer></v-spacer>
          <v-col cols="2">
            <RouterLink to="/enunciado"><v-btn color="primary" style="width: 100%;">enunciado</v-btn></RouterLink>
          </v-col>
          <v-col cols="2">
            <v-btn  style="width: 100%;" color="warning">repositorio</v-btn>
           
            <v-icon color="grey" size="60" >mdi-github</v-icon>
            
          </v-col>
          <v-col cols="2">
            <v-btn style="width: 100%;" color="success">exercicio</v-btn>
          </v-col>
          
        <v-spacer></v-spacer>
      </v-row>
    </div>
  </v-container>
</template>