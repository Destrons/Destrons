// Função para alternar o modo escuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const background = document.querySelector(".background"); // Seleciona o elemento background

    // Salva a escolha no localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        document.getElementById("dark-mode-toggle").textContent = "☀️ Modo Claro";
        background.classList.add("dark-mode-background"); // Adiciona a classe para o fundo escuro
    } else {
        localStorage.setItem("darkMode", "disabled");
        document.getElementById("dark-mode-toggle").textContent = "🌙 Modo Escuro";
        background.classList.remove("dark-mode-background"); // Remove a classe para o fundo claro
    }
}

// Verifica o modo salvo no localStorage ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("dark-mode-toggle").textContent = "☀️ Modo Claro";
        document.querySelector(".background").classList.add("dark-mode-background"); // Adiciona a classe ao carregar se estiver no modo escuro
    }

    // Adiciona o ouvinte de evento para o botão
    const button = document.getElementById("dark-mode-toggle");
    button.addEventListener("click", toggleDarkMode);
});