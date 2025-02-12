// script.js
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carousel = document.querySelector(".carousel ul");

let index = 0; // Índice do item visível
const itemWidth = 200; // Largura de um item (igual no CSS)
const totalItems = document.querySelectorAll(".carousel li").length;

// Função para mover o carrossel
function updateCarousel() {
    const offset = -index * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Evento para botão "Próximo"
nextButton.addEventListener("click", () => {
    if (index < totalItems - 1) {
        index++;
        updateCarousel();
    }
});

// Evento para botão "Anterior"
prevButton.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});
