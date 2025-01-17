import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <nav className="nav">
                    <button onClick={() => window.location.href = '#about-me'}>About Me</button>
                    <button onClick={() => window.location.href = '#skills'}>Skills</button>
                    <button onClick={() => window.location.href = '#projects'}>Projects</button>
                    <button onClick={() => window.location.href = '#contacts'}>Contact</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
