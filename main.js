// Definir o conteúdo de cada página
const paginas = [
    'Bioma: Destruição - Página 1. Introdução ao conceito de biomas e sua importância.',
    'Bioma: Destruição - Página 2. Como a destruição dos biomas afeta a biodiversidade.',
    'Bioma: Destruição - Página 3. Soluções para proteger nossos biomas.'
];

// Definir o índice da página atual
let paginaAtual = 0;

// Selecionar elementos da página
const bookElement = document.querySelector('.book');
const btnAvancar = document.getElementById('avancar');
const btnVoltar = document.getElementById('voltar');

// Função para atualizar o conteúdo da página
function atualizarPagina() {
    bookElement.textContent = paginas[paginaAtual];
}

// Adicionar eventos para os botões
btnAvancar.addEventListener('click', () => {
    if (paginaAtual < paginas.length - 1) {
        paginaAtual++;
        atualizarPagina();
    }
});

btnVoltar.addEventListener('click', () => {
    if (paginaAtual > 0) {
        paginaAtual--;
        atualizarPagina();
    }
});

// Iniciar com a primeira página
atualizarPagina();
