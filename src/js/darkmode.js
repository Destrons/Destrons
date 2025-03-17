// Função para alternar o modo escuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Salva a escolha no localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        document.getElementById("dark-mode-toggle").textContent = "☀️ Modo Claro";
    } else {
        localStorage.setItem("darkMode", "disabled");
        document.getElementById("dark-mode-toggle").textContent = "🌙 Modo Escuro";
    }
}

// Verifica o modo salvo no localStorage ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("dark-mode-toggle").textContent = "☀️ Modo Claro";
    }

    // Adiciona o ouvinte de evento para o botão
    const button = document.getElementById("dark-mode-toggle");
    button.addEventListener("click", toggleDarkMode);
});