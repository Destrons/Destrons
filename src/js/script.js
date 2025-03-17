const textElement = document.querySelector('.animated-text');
const animatedtext = 'Thomas Neves';
let index = 0;

function typeEffect() {
  if (index < animatedtext.length) {
    textElement.innerHTML = animatedtext.slice(0, index + 1) + '<span class="cursor"></span>';
    index++;
    setTimeout(typeEffect, 150);
  }
}

typeEffect();

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

const darkModeToggle = document.createElement('button');
darkModeToggle.id = 'dark-mode-toggle';
darkModeToggle.textContent = darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro';
darkModeToggle.addEventListener('click', toggleDarkMode);

navDiv.appendChild(darkModeToggle);

header.appendChild(nav);
header.appendChild(navDiv);

app.appendChild(header);

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (section.clientHeight / 2);
      window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

// Animação de escrita about

const fullTexts = [
  'Thomas Neves.',
  'Bem vindo a minha pagina, aqui você tera alguns conhecimentos sobre minha carreira, projetos e atividades',
  'Minhas habilidades incluem:',
  '✅ Desenvolvimento Full Stack – Criação de aplicações completas do frontend ao backend.',
  '✅ Infraestrutura em Nuvem – Implementação e gerenciamento de soluções escaláveis na nuvem.',
  '✅ Gerenciamento de Projetos – Planejamento e execução de projetos com foco em eficiência e qualidade.'
];
const typingSpeed = 50;
const textElements = [animatedText, descriptionParagraph1, descriptionParagraph2];
const skillsListElement = skillsList;

let textIndexes = Array(fullTexts.length).fill(0);
let intervalIds = [];

const typeEffect = (index) => {
  if (textIndexes[index] < fullTexts[index].length) {
      textElements[index].innerHTML = fullTexts[index].slice(0, textIndexes[index] + 1) + '<span class="cursor"></span>';
      textIndexes[index]++;
  } else {
      clearInterval(intervalIds[index]);
      if (index >= 3) {
          const skills = fullTexts[index].split('✅ ');
          skills.forEach(skill => {
              if (skill) {
                  const listItem = document.createElement('li');
                  listItem.textContent = skill;
                  skillsListElement.appendChild(listItem);
              }
          });
      }
  }
};

fullTexts.forEach((_, i) => {
  intervalIds[i] = setInterval(() => typeEffect(i), typingSpeed);
});

//animação de escrita skill

const skillsSection = document.createElement('section');
skillsSection.id = 'skills';
skillsSection.classList.add('skills');

const skillsHeading = document.createElement('h2');
skillsSection.appendChild(skillsHeading);

const skillsFlexDiv = document.createElement('div');
skillsFlexDiv.style.display = 'flex';

const artSkl1 = document.createElement('div');
artSkl1.classList.add('art-skl1');

const artSkl1FlexDiv = document.createElement('div');
artSkl1FlexDiv.style.display = 'flex';

const webDevUl = document.createElement('ul');
const frameworksUl = document.createElement('ul');

const programLangUl = document.createElement('ul');
const databaseUl = document.createElement('ul');
const toolsUl = document.createElement('ul');

artSkl1FlexDiv.appendChild(webDevUl);
artSkl1FlexDiv.appendChild(frameworksUl);

const artSkl1FlexDiv2 = document.createElement('div');
artSkl1FlexDiv2.style.display = 'flex';

artSkl1FlexDiv2.appendChild(programLangUl);
artSkl1FlexDiv2.appendChild(databaseUl);
artSkl1FlexDiv2.appendChild(toolsUl);

artSkl1.appendChild(artSkl1FlexDiv);
artSkl1.appendChild(artSkl1FlexDiv2);

const artSkl2 = document.createElement('div');
artSkl2.classList.add('art-skl2');

const infrastructureUl = document.createElement('ul');
const toolsUl2 = document.createElement('ul');

artSkl2.appendChild(infrastructureUl);
artSkl2.appendChild(toolsUl2);

skillsFlexDiv.appendChild(artSkl1);
skillsFlexDiv.appendChild(artSkl2);

skillsSection.appendChild(skillsFlexDiv);

app.appendChild(skillsSection);

