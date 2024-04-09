<template>
    <v-data-table
      :headers="headers"
      :items="mousses"
      :sort-by="[{ key: 'tipo', order: 'asc' }]"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Lista de receitas</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                class="mb-2"
                color="primary"
                dark
                v-bind="props"
              >
               Novo +
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      md="6"
                      sm="8"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        label="Nome da receita"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                      sm="8"
                    >
                      <v-text-field
                        v-model="editedItem.tipo"
                        label="tipo"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                      sm="8"
                    >
                      <v-text-field
                        v-model="editedItem.origem"
                        label="origem"
                      ></v-text-field>
                    </v-col>
                  
                    <v-col
                      cols="12"
                      md="6"
                      sm="8"
                    >
                      <v-text-field
                        v-model="editedItem.ingrediente"
                        label="ingrediente principal"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="close"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="save"
                >
                  Salvar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Quer deletar esse item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancelar</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          color="primary"
          size="small"
          class="mr-4"
          >Ver Receita</v-btn>
        <v-icon
          class="me-2"
          size="small"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          size="small"
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Resetar
        </v-btn>
      </template>
    </v-data-table>
   
  </template>
  
  <script setup>
    import { computed, nextTick, ref, watch } from 'vue'
  
    const dialog = ref(false)
    const dialogDelete = ref(false)
    const headers = ref([
      {
        title: 'Receitas de mousses',
        align: 'start',
        sortable: false,
        key: 'name',
      },
      { title: 'Tipo', key: 'tipo' },
      { title: 'Origem', key: 'origem' },
      { title: 'Principal Ingrediente', key: 'ingrediente' },
      { title: 'Actions', key: 'actions', sortable: false },
    ])
    const mousses = ref([])
    const editedIndex = ref(-1)
    const editedItem = ref({
      name: '',
      tipo: '',
      origem: '',
      carbs: '',
      ingrediente: '',
    })
    const defaultItem = ref({
      name: '',
      tipo: '',
      origem: '',
      carbs: '',
      ingrediente: '',
    })
    const formTitle = computed(() => {
      return editedIndex.value === -1 ? 'Novo Item' : 'Edite Item'
    })
    function initialize () {
      mousses.value = [
        {
          name: 'Mousse de chocolate',
          tipo: 'Chocolate',
          origem: 'Brasil',
          ingrediente: 'Chocolate',
        },
        {
          name: 'Mouse de morango',
          tipo: 'Fruta',
          origem: 'Brasil',
          ingrediente: 'Morango',
        }
      ]
    }
    function editItem (item) {
      editedIndex.value = mousses.value.indexOf(item)
      editedItem.value = Object.assign({}, item)
      dialog.value = true
    }
    function deleteItem (item) {
      editedIndex.value = mousses.value.indexOf(item)
      editedItem.value = Object.assign({}, item)
      dialogDelete.value = true
    }
    function deleteItemConfirm () {
      mousses.value.splice(editedIndex.value, 1)
      closeDelete()
    }
    function close () {
      dialog.value = false
      nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem.value)
        editedIndex.value = -1
      })
    }
    function closeDelete () {
      dialogDelete.value = false
      nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem.value)
        editedIndex.value = -1
      })
    }
    function save () {
      if (editedIndex.value > -1) {
        Object.assign(mousses.value[editedIndex.value], editedItem.value)
      } else {
        mousses.value.push(editedItem.value)
      }
      close()
    }
    watch(dialog, val => {
      val || close()
    })
    watch(dialogDelete, val => {
      val || closeDelete()
    })
    initialize()
  </script>