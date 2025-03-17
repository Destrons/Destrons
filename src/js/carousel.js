// Função para inicializar e controlar o carrossel
function initCarousel() {
    // Seleciona os elementos do DOM
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const carousel = document.querySelector(".carousel ul");
    const items = document.querySelectorAll(".carousel li");

    // Verifica se os elementos existem
    if (!prevButton || !nextButton || !carousel || items.length === 0) {
        console.error("Erro: Elementos do carrossel não encontrados. Verifique o HTML.");
        return;
    }

    let index = 0; // Índice do item visível
    const itemWidth = 200; // Largura de um item (deve ser igual ao definido no CSS)
    const totalItems = items.length; // Total de itens no carrossel

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const offset = -index * itemWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    // Evento para o botão "Próximo"
    nextButton.addEventListener("click", () => {
        if (index < totalItems - 1) {
            index++;
            updateCarousel();
        }
    });

    // Evento para o botão "Anterior"
    prevButton.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // Inicializa o carrossel na primeira carga
    updateCarousel();
}

// Executa a inicialização do carrossel quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", initCarousel);