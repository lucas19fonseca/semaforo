let luzAtual = 0;
const luzes = document.querySelectorAll('.luz');

function mudarLuz() {
    luzes.forEach(luz => luz.classList.remove('active'));

    luzes[luzAtual].classList.add('active');

    luzAtual = (luzAtual + 1) % luzes.length;
}

setInterval(mudarLuz, 2000);

mudarLuz();
