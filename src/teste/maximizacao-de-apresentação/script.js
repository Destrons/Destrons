const imagem = document.getElementById('imagemApresentacao');
const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('meuVideo');
const botaoFechar = document.getElementById('fecharVideo');

imagem.addEventListener('click', () => {
    imagem.classList.add('hidden');
    videoContainer.classList.remove('hidden');
    video.play();
});

botaoFechar.addEventListener('click', () => {
    videoContainer.classList.add('hidden');
    imagem.classList.remove('hidden');
    video.pause();
    video.currentTime = 0; // Reinicia o vídeo
});

window.addEventListener('click', (event) => {
    if (event.target === videoContainer) {
        videoContainer.classList.add('hidden');
        imagem.classList.remove('hidden');
        video.pause();
        video.currentTime = 0;
    }
});