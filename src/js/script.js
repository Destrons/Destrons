function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const offset = Math.max(0, (windowHeight - sectionHeight) / 2); // Calcula o deslocamento
  
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth'
      });
    } else {
      console.error("Section with ID '" + sectionId + "' not found.");
    }
  }

// Inicio sessão deslizante 

document.addEventListener('DOMContentLoaded', function() {
  const secaoDeslizante = document.querySelector('.secao-deslizante');

  function verificarVisibilidade() {
      const posicaoTopo = secaoDeslizante.getBoundingClientRect().top;
      const alturaTela = window.innerHeight;

      if (posicaoTopo < alturaTela * 0.9) {
          secaoDeslizante.classList.remove('oculta');
      } else {
          secaoDeslizante.classList.add('oculta');
      }
  }

  window.addEventListener('scroll', verificarVisibilidade);

  // Inicializa a seção como oculta
  secaoDeslizante.classList.add('oculta');
});

// Fim sessão deslizante

// Inicio carousel

document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const slideCount = slides.length;
    let currentIndex = 0;

    function updateCarousel() {
        const translateX = -currentIndex * 100 + '%';
        carouselWrapper.style.transform = 'translateX(' + translateX + ')';
        updateIndicators();
    }

    function updateIndicators() {
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[currentIndex].classList.add('active');
    }

    function goToSlide(index) {
        if (index >= slideCount) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slideCount - 1;
        } else {
            currentIndex = index;
        }
        updateCarousel();
    }

    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    indicatorsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('indicator')) {
            const index = parseInt(event.target.dataset.index);
            goToSlide(index);
        }
    });

    // Inicializa o carousel
    updateCarousel();
});

// Fim carousel