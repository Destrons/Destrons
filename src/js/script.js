
const app = document.getElementById('app');

const header = document.createElement('header');
header.classList.add('header');

const nav = document.createElement('nav');
nav.classList.add('nav');

const aboutButton = document.createElement('button');
aboutButton.textContent = 'About Me';
aboutButton.addEventListener('click', () => scrollToSection('about-me'));

const skillsButton = document.createElement('button');
skillsButton.textContent = 'Skills';
skillsButton.addEventListener('click', () => scrollToSection('skills'));

const projectsButton = document.createElement('button');
projectsButton.textContent = 'Projects';
projectsButton.addEventListener('click', () => scrollToSection('projects'));

const contactButton = document.createElement('button');
contactButton.textContent = 'Contact';
contactButton.addEventListener('click', () => scrollToSection('contacts'));

nav.appendChild(aboutButton);
nav.appendChild(skillsButton);
nav.appendChild(projectsButton);
nav.appendChild(contactButton);

const navDiv = document.createElement('div');
navDiv.classList.add('navdiv');
navDiv.style.display = 'flex';
navDiv.style.justifyContent = 'flex-end';
navDiv.style.marginRight = '4%';