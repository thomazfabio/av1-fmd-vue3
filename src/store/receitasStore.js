import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useReceitaStore = defineStore('receitas', () => {
    // const são data
    const receita = ref([
        {
            meta: {
                name: 'bolo de cenoura',
                tipo: 'bolo',
                origem: 'italiana',
                ingrediente: 'cenoura',
            }, name: 'Bolo de cenoura', ingredientes: ['cenoura', 'ovo', 'farinha', 'açúcar', 'fermento'],
            modoDePreparo: 'Bata tudo no liquidificador e asse em forno médio por 40 minutos'
        },
        {
            meta: {
                name: 'bolo de cenoura',
                tipo: 'bolo',
                origem: 'italiana',
                ingrediente: 'cenoura',
            }, name: 'Bolo de cenoura', ingredientes: ['cenoura', 'ovo', 'farinha', 'açúcar', 'fermento'],
            modoDePreparo: 'Bata tudo no liquidificador e asse em forno médio por 40 minutos'
        },
        {
            meta: {
                name: 'bolo de chocolate',
                tipo: 'bolo',
                origem: 'francesa',
                ingrediente: 'chocolate',
            }, name: 'Bolo de chocolate', ingredientes: ['chocolate', 'ovo', 'farinha', 'açúcar', 'fermento'],
            modoDePreparo: 'Bata tudo no liquidificador e asse em forno médio por 40 minutos'
        },
        {
            meta: {
                name: 'bolo de fubá',
                tipo: 'bolo',
                origem: 'brasileira',
                ingrediente: 'fubá',
            }, name: 'Bolo de fubá', ingredientes: ['fubá', 'ovo', 'farinha', 'açúcar', 'fermento'],
            modoDePreparo: 'Bata tudo no liquidificador e asse em forno médio por 40 minutos'
        },
        {
            meta: {
                name: 'bolo de laranja',
                tipo: 'bolo',
                origem: 'brasileira',
                ingrediente: 'laranja',
            }, name: 'Bolo de laranja', ingredientes: ['laranja', 'ovo', 'farinha', 'açúcar', 'fermento'],
            modoDePreparo: 'Bata tudo no liquidificador e asse em forno médio por 40 minutos'
        },
        {
            meta: {
                name: 'bolo de limão',
                tipo: 'bolo',
                origem: 'brasileira',
                ingrediente: 'limão',
            }, name: 'Bolo de limão', ingredientes: ['limão', 'ovo', 'farinha', 'açúcar', 'fermento'],
            modoDePreparo: 'Bata tudo no liquidificador e asse em forno médio por 40 minutos'
        }
    ]
    )
    // computed são getters
    const getReceita = computed(() => receita.value)
    // methods são setters
    function setReceita(value) { }
    return { getReceita, setReceita, receita }
}
)
