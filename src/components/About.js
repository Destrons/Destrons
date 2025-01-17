import React, { useState, useEffect } from 'react';
import thomasimage from '../assets/thomas.png';

function About() {

    const [texts, setTexts] = useState(["", "", ""]);
    const fullTexts = [
        "Thomas Neves.",
        "Sou um desenvolvedor experiente com forte conhecimento em tecnologias de desenvolvimento web e infraestrutura de TI.",
        "Minhas habilidades incluem:",
        "Desenvolvimento Full Stack.", "Infraestrutura em Nuvem.", "Gerenciamento de projetos."
    ];
    const typingSpeed = 50; 
    
    useEffect(() => {
        const textIndexes = Array(fullTexts.length).fill(0); 
        const intervalIds = []; 
        const typeEffect = (index) => {
            if (textIndexes[index] < fullTexts[index].length) {
                setTexts((prevTexts) => {
                    const updatedTexts = [...prevTexts];
                    updatedTexts[index] = fullTexts[index].slice(0, textIndexes[index] + 1);
                    return updatedTexts;
                });
                textIndexes[index]++;
            } else {
                clearInterval(intervalIds[index]); 
            }
        };

        fullTexts.forEach((_, i) => {
            intervalIds[i] = setInterval(() => typeEffect(i), typingSpeed);
        });

        return () => {
            intervalIds.forEach((id) => clearInterval(id)); 
        };
    }, []);

    return (
        <section className="about" id="about-me">
            <div className="about-image">
            <img className="picperf" src={thomasimage} alt="Foto de Perfil" />
            </div>
            <div className="about-text">
            <h1 className="animated-text">{texts[0]}<span className="cursor"></span></h1>
            
            <p>{texts[1]}</p>
            <p>{texts[2]}</p>
            <ul>
            {texts[3] && texts[3].split(", ").map((skill, index) => (<li key={index}>{skill}</li>))}
            {texts[4] && texts[4].split(", ").map((skill, index) => (<li key={index}>{skill}</li>))}
            {texts[5] && texts[5].split(", ").map((skill, index) => (<li key={index}>{skill}</li>))}

            </ul>
            </div>

            

        </section>
    );
}

export default About;
