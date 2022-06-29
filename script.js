const wario = document.querySelector(".wario")
const pipe = document.querySelector(".pipe")

const jump = () => {
    wario.classList.add('jump')

    setTimeout(() => {
     wario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console

    const pipePosition = pipe.offsetLeft;
    const warioPosition = +window.getComputedStyle(wario).bottom.replace('px', '');
    if (pipePosition <= 120 && pipePosition >0 && warioPosition < 80) {

        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`

        wario.style.animation = 'nome';
        wario.style.bottom = `${warioPosition}px`

        wario.src = './imagens/war d.gif'
        wario.style.width = '120px'
        wario.style.marginLeft = '50px'
    
        clearInterval(loop);
    }


},10);


document.addEventListener('keydown', jump)