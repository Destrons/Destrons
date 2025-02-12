import React from 'react';

function Header({ darkMode, setDarkMode }) {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = section.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (section.clientHeight / 2);
            window.scrollTo({ top: offset, behavior: "smooth" });
        }
    };

    return (
        <header className="header">
                <nav className="nav">
                    <button onClick={() => scrollToSection('about-me')}>About Me</button>
                    <button onClick={() => scrollToSection('skills')}>Skills</button>
                    <button onClick={() => scrollToSection('projects')}>Projects</button>
                    <button onClick={() => scrollToSection('contacts')}>Contact</button>
                </nav>              
                <div class="navdiv" style={{ display: "flex", justifyContent: "flex-end", marginRight:"4%"}}>
                        <button id="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
                            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
                        </button>
                </div>
                
        </header>
    );
}

export default Header;
