const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const button = document.querySelector('.rec')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');

    /*Entrou no if o jogo acabou, ou seja, são tds posibilidades de gameover*/
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
}, 10)

function upload(){
    button = window.location.reload();
}

document.addEventListener('upload', onclick);

document.addEventListener('keydown', jump);

