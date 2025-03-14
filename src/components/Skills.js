import React, { useState, useEffect } from "react";
 
 function Skills() {
     const [headings, setHeadings] = useState(["", "", "", "", "", "", ""]); // Armazena os textos de <h2> e <h3>
     const [items, setItems] = useState(Array(26).fill("")); // Armazena os textos de <li>
     const fullHeadings = [
         "Skills",
         "Web developer",
         "Flameworks",
         "Programm Language",
         "Database",
         "Tools",
         "infrastructure"
     ];
     const fullItems = [
         "HTML5",
         "CSS3",
         "JavaScript",
         "TypeScript",
         "Laravel",
         "Node.js",
         "React.js",
         "Java (Version 11+)",
         "Python",
         "PHP",
         "C#",
         "MySQL",
         "Oracle SQL",
         "SQL Server",
         "Git and GitHub",
         "Docker",
         "Intune",
         "Microsoft Entra ID",
         "Domain controler and Active Directory",
         "Microsoft EDR",
         "Clouds: Azure, Oracle and AWS",
         "Jira",
         "Quest Kace",
         "TeamViewer",
         "McAfee",
         "Intune"
     ];
     const typingSpeed = 50; // Velocidade de digitação por caractere
 
     useEffect(() => {
         const headingIndexes = Array(fullHeadings.length).fill(0); // Índices para os textos de headings
         const itemIndexes = Array(fullItems.length).fill(0); // Índices para os textos de itens
         const headingsCopy = [...headings];
         const itemsCopy = [...items];
 
         // Digitar os textos em `headings` simultaneamente
         const typeHeadings = () => {
             let isTyping = false; // Verifica se ainda há caracteres a digitar
             fullHeadings.forEach((text, index) => {
                 if (headingIndexes[index] < text.length) {
                     isTyping = true;
                     headingsCopy[index] =
                         headingsCopy[index] + text[headingIndexes[index]];
                     headingIndexes[index]++;
                 }
             });
             setHeadings([...headingsCopy]);
 
             if (isTyping) {
                 setTimeout(typeHeadings, typingSpeed);
             } else {
                 // Quando todos os headings terminarem, inicia os items
                 typeItems();
             }
         };
 
         // Digitar os textos em `items` simultaneamente
         const typeItems = () => {
             let isTyping = false; // Verifica se ainda há caracteres a digitar
             fullItems.forEach((text, index) => {
                 if (itemIndexes[index] < text.length) {
                     isTyping = true;
                     itemsCopy[index] =
                         itemsCopy[index] + text[itemIndexes[index]];
                     itemIndexes[index]++;
                 }
             });
             setItems([...itemsCopy]);
 
             if (isTyping) {
                 setTimeout(typeItems, typingSpeed);
             }
         };
 
         typeHeadings(); // Inicia o efeito de digitação para headings
     }, []);
 
     return (
         <section className="skills" id="skills">
             <h2>{headings[0]}</h2> {/* Texto do <h2> */}
             <div style={{ display: "flex" }}>
                 <div className="art-skl1">
                     <div style={{ display: "flex" }}>
                         <ul>
                             <h3>{headings[1]}</h3> {/* Texto do primeiro <h3> */}
                             {items.slice(0, 4).map((item, index) => (
                                 <li key={index}>{item}</li>
                             ))}
                         </ul>
                         <ul>
                             <h3>{headings[2]}</h3> {/* Texto do segundo <h3> */}
                             {items.slice(4, 7).map((item, index) => (
                                 <li key={index}>{item}</li>
                             ))}
                         </ul>
                     </div>
                     <div style={{ display: "flex" }}>
                         <ul>
                             <h3>{headings[3]}</h3>
                             {items.slice(7, 11).map((item, index) => (
                                 <li key={index}>{item}</li>
                             ))}
                         </ul>
                         <ul>
                             <h3>{headings[4]}</h3>
                             {items.slice(11, 14).map((item, index) => (
                                 <li key={index}>{item}</li>
                             ))}
                         </ul>
                         <ul>
                             <h3>{headings[5]}</h3>
                             {items.slice(14, 16).map((item, index) => (
                                 <li key={index}>{item}</li>
                             ))}
                         </ul>
                     </div>
                 </div>
                 <div className="art-skl2">
                     <ul>
                         <h3>{headings[6]}</h3>
                         {items.slice(16, 21).map((item, index) => (
                             <li key={index}>{item}</li>
                         ))}
                     </ul>
                     <ul>
                         <h3>{headings[5]}</h3>
                         {items.slice(21).map((item, index) => (
                             <li key={index}>{item}</li>
                         ))}
                     </ul>
                 </div>
             </div>
         </section>
     );
 }
 
 export default Skills;