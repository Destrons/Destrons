import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    // Estado para o modo escuro (lê do localStorage)
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "enabled";
    });

    // Aplica a classe "dark-mode" no <body> ao mudar darkMode
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    }, [darkMode]);

    return (
        <div className="App">
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
