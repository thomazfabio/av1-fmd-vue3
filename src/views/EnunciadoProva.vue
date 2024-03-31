<template>
    <v-container  style="width:100vw;" class="pl-10">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Framework Modernos para Desenvolvimento de Sistemas - Turma 01 - 2024</title>
        </head>

            <h1>UNEMAT / CAMPUS DE SINOP / FACET / BACHARELADO DE SISTEMAS DE INFORMAÇÃO</h1>
            <h2>FRAMEWORKS MODERNOS PARA DESENVOLVIMENTO DE SISTEMAS - TURMA 01 - 2024</h2>
            <h3>Avaliação de Aprendizado - Unidade 01: Desenvolvimento de Sistema com Vue.js</h3>
            <h4>Objetivo da Atividade</h4>
            <p>Esta atividade tem como objetivo avaliar o seu aprendizado em Vue.js, com foco na aplicação dos conceitos
                de variáveis reativas, métodos, diretivas como v-if, v-else, v-for, v-bind, v-on, v-model, v-show,
                componentes, event emitters (emit), props, uso do framework Vuetify e implementação de roteamento com
                vue-router. Você será desafiado a criar um sistema completo de CRUD (Create, Read, Update, Delete) que
                armazene dados em um vetor.</p>
            <h4>Instruções</h4>
            <ol>
                <li>Você terá um total de 2 semanas para completar esta atividade.</li>
                <li>Leia cuidadosamente cada questão e implemente as funcionalidades solicitadas.</li>
                <li>Você deve utilizar Vue.js para desenvolver o sistema.</li>
                <li>Siga as boas práticas de codificação e organize seu código de forma clara e legível.</li>
                <li>Ao finalizar, faça um commit do seu projeto no GitHub como um repositório público.</li>
                <li>Envie a URL do seu repositório público via SIGAA, na seção designada para a atividade.</li>
            </ol>
            <h4>Atividade</h4>
            <p>Desenvolva um sistema de gerenciamento de tarefas (To-Do List) com as seguintes funcionalidades:</p>
            <ol>
                <li>
                    <strong>Listagem de Tarefas:</strong>
                    <ul>
                        <li>Exiba todas as tarefas cadastradas em uma lista.</li>
                        <li>Utilize a diretiva v-for para iterar sobre o vetor de tarefas.</li>
                    </ul>
                </li>
                <li>
                    <strong>Adição de Tarefas:</strong>
                    <ul>
                        <li>Permita ao usuário adicionar uma nova tarefa.</li>
                        <li>Utilize o v-model para vincular o input com a nova tarefa a ser adicionada ao vetor.</li>
                    </ul>
                </li>
                <li>
                    <strong>Edição de Tarefas:</strong>
                    <ul>
                        <li>Permita ao usuário editar o conteúdo de uma tarefa existente.</li>
                        <li>Utilize a diretiva v-bind para exibir os detalhes de uma tarefa em um campo de edição.</li>
                        <li>Implemente um botão de confirmação para salvar as alterações realizadas.</li>
                    </ul>
                </li>
                <li>
                    <strong>Exclusão de Tarefas:</strong>
                    <ul>
                        <li>Permita ao usuário excluir uma tarefa existente.</li>
                        <li>Implemente uma função que remova a tarefa selecionada do vetor.</li>
                    </ul>
                </li>
                <li>
                    <strong>Filtragem de Tarefas:</strong>
                    <ul>
                        <li>Adicione a funcionalidade de filtrar as tarefas concluídas e as tarefas pendentes.</li>
                        <li>Utilize a diretiva v-if e v-else para alternar entre os diferentes estados de visualização.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Estilização com Vuetify:</strong>
                    <ul>
                        <li>Aplique o framework Vuetify para estilizar os componentes da sua aplicação.</li>
                        <li>Utilize os componentes oferecidos pelo Vuetify para melhorar a aparência e usabilidade da
                            aplicação.</li>
                    </ul>
                </li>
                <li>
                    <strong>Implementação de Roteamento com vue-router:</strong>
                    <ul>
                        <li>Divida a aplicação em diferentes páginas usando vue-router.</li>
                        <li>Crie rotas para a página principal de listagem de tarefas e para a página de edição de
                            tarefas.</li>
                    </ul>
                </li>
            </ol>
            <h4>Critérios de Avaliação</h4>
            <ol>
                <li>Implementação correta das funcionalidades solicitadas (2 pontos).</li>
                <li>Utilização adequada de variáveis reativas, métodos, diretivas e componentes do Vue.js (2 pontos).
                </li>
                <li>Correta utilização do framework Vuetify para estilização (2 pontos).</li>
                <li>Implementação eficiente de rotas com vue-router (2 pontos).</li>
                <li>Clareza, organização e legibilidade do código (2 pontos).</li>
            </ol>
            <p><strong>Total: 10 pontos</strong></p>
            <p><em>*Obs: Os exercícios "optatórios" enviados adicionarão pontos no total final.</em></p>
            <p>Bons Estudos!</p>
    </v-container>
</template>