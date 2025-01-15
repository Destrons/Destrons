import React from 'react';
import logonimage from '../assets/T.N.P.png';


function Header() {
    return (
        <header className="header">
                <div style={{display:'', textAlign:'center'}}>
                    <button className="navbtt" onclick="window.location.href='#about-me'">About Me</button>
                    <button className="navbtt" onclick="window.location.href='#skills'">Skills</button>
                    <button className="navbtt" onclick="window.location.href='#projects'">Projects</button>
                    <button className="navbtt" onclick="window.location.href='#contact'">Contact</button>
                </div>
                <div>
                    <img className="picperf" src={logonimage} alt="Foto de Perfil" />
                </div>
        </header>
    );
}
export default Header;
