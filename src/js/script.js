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
