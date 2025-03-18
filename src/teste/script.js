const secoes = document.querySelectorAll('.secao-deslizante');
let secaoAtual = 0;

function verificarVisibilidade() {
    const alturaTela = window.innerHeight;

    secoes.forEach((secao, index) => {
        const posicaoTopo = secao.getBoundingClientRect().top;

        

        if (posicaoTopo < alturaTela * 0.5 && index === secaoAtual) {
            secao.classList.remove('oculta-esquerda', 'oculta-direita');
            secao.classList.add('centralizada');

            if (index > 0) {
                secoes[index - 1].classList.remove('centralizada');
                secoes[index - 1].classList.add('oculta-esquerda');
            }

            if (index < secoes.length - 1) {
                secoes[index + 1].classList.remove('centralizada', 'oculta-esquerda');
                secoes[index + 1].classList.add('oculta-direita');
            }

            if (posicaoTopo < alturaTela * 0.2 && index < secoes.length - 1) {
                secaoAtual++;
                verificarVisibilidade(); // Recalcula após mudança de seção
            }
        }
    });
}

window.addEventListener('scroll', verificarVisibilidade);

// Inicializa a primeira seção
secoes[0].classList.add('centralizada');

for (let i = 1; i < secoes.length; i++) {
    secoes[i].classList.add('oculta-direita');
}