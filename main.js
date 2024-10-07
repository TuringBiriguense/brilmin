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
    // Atualizar o conteúdo da página
    bookElement.textContent = paginas[paginaAtual];

    // Mostrar ou esconder os botões conforme a página atual
    if (paginaAtual === 0) {
        btnVoltar.style.display = 'none'; // Esconde o botão "Voltar" na primeira página
    } else {
        btnVoltar.style.display = 'inline'; // Mostra o botão "Voltar" nas outras páginas
    }

    if (paginaAtual === paginas.length - 1) {
        btnAvancar.style.display = 'none'; // Esconde o botão "Avançar" na última página
    } else {
        btnAvancar.style.display = 'inline'; // Mostra o botão "Avançar" nas outras páginas
    }
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
