document.addEventListener('DOMContentLoaded', () => {
    const themeToggler = document.getElementById('theme-toggler');
    const htmlElement = document.documentElement;

    // Função para aplicar o tema salvo
    const applyStoredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            htmlElement.setAttribute('data-theme', storedTheme);
        }
    };
    
    // Aplica o tema ao carregar a página
    applyStoredTheme();

    // Evento de clique para alternar o tema
    themeToggler.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
     // Lógica para rolagem suave (opcional, mas recomendado)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});