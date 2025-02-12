import React, { useState } from 'react';

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        "SaaS-wpp-IA - Este projeto é uma integração com ChatGPT através do WhatsApp, onde foi criado um assistente virtual para auxiliar na agenda pessoal. Ele permite criar, alterar e excluir atividades futuras, além de enviar lembretes.",
        "Item 2 - Descrição do projeto 2.",
        "Item 3 - Descrição do projeto 3.",
        "Item 4 - Descrição do projeto 4.",
        "Item 5 - Descrição do projeto 5."
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <section className="projects" id='projects'>
            <h2>Projetos</h2>
            <div className="carousel-container">
                <button className="prev" onClick={prevSlide}>◀</button>
                <div className="carousel">
                    <ul style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {projects.map((project, index) => (
                            <li key={index} className={index === currentIndex ? "active" : ""}>
                                {project}
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="next" onClick={nextSlide}>▶</button>
            </div>
        </section>
    );
}

export default Projects;
