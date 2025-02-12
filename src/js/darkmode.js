function typeEffect() {
    const element = document.getElementById("yourElementId");
    if (!element) {
        console.error("Element with ID 'yourElementId' not found.");
        return;
    }
    element.innerHTML = "Your new content";
}

// script.js
const button = document.addEventListener("DOMContentLoaded", function () {
    typeEffect();
});

// Verifica se já existe um modo salvo no localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Alternar o modo ao clicar no botão
button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Salva a escolha no localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
