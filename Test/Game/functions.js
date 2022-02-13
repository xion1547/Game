// JavaScript source code
/*Classes*/
class Game {

    constructor(stage, gameBoxPath, points) {
        this.stage = stage;
        this.gameBoxPath = gameBoxPath;
        this.points = points;
    }

    getGameBoxPath() {
        return this.gameBoxPath;
    }

    getStage() {
        return this.stage;
    }

    getPoints() {
        return this.points;
    }

    addToGameBoxPath() {
        let boxNumberId = "box" + (Math.floor(Math.random() * 10) + 1);
        while (boxNumberId === this.gameBoxPath[gameBoxPath.length - 1]) {
            boxNumberId = "box" + (Math.floor(Math.random() * 10) + 1);
        }
        this.gameBoxPath.push(boxNumberId);
        this.stage = this.stage + 1;
    }
}

class Player {

    constructor(playerBoxPath) {
        this.playerBoxPath = playerBoxPath;
    }

    addToPlayerBoxPath(boxNumberId) {
        playerBoxPath.push(boxNumberId);
    }

    getPlayerBoxPath() {
        return this.playerBoxPath;
    }
}

//Game Global Variable
let gameBoxPath = [];
let game = new Game(0, gameBoxPath, 0);
let playerBoxPath = [];
let player = new Player(playerBoxPath);

document.addEventListener('click', disableButtons, true);

function disableButtons (e) {
    if (!e.target.className.includes('blink') &&
        !e.target.id.includes('menu-checkbox') &&
        !e.target.id.includes('play-button')) {
        e.stopPropagation();
    }
}

function changeBackground(boxColor) {
    player.addToPlayerBoxPath(boxColor.id);
    if (player.getPlayerBoxPath()[player.getPlayerBoxPath().length-1] !== game.getGameBoxPath()[game.getGameBoxPath().length-1] ||
        player.getPlayerBoxPath().length !== game.getGameBoxPath().length) {
        console.log('game-over');
        let outer = document.getElementById('game-over-animation');
        let first = document.getElementById('first-circle');
        let second = document.getElementById('swirl');
        let spinners = document.getElementsByClassName('spin');
        outer.style.zIndex = '8';
        first.style.zIndex = 'auto';
        first.style.animation = 'none';
        first.offsetHeight;
        first.style.animation = null;
        second.style.zIndex = 'auto';
        second.style.animation = 'none';
        second.offsetHeight;
        second.style.animation = null;
        for (let i = 0; i < spinners.length; i++) {
            spinners[i].className += ' yes';
        }
        setTimeout( () => {
           outer.style.background = 'black';
        }, 3900);
    }
    boxColor.style.background = 'radial-gradient(circle, rgba(196,87,255,1) 0%, rgba(223,163,255,1) 100%)';
    setTimeout(() => {
        boxColor.style.background = 'radial-gradient(circle, rgba(169,8,255,1) 0%, rgba(216,143,255,1) 100%)';
    }, 500);
}

function revealPath() {
    document.getElementById('first-circle').style.zIndex = '3';
    document.getElementById(game.getGameBoxPath()[0]).className = 'boxes';
    for (let i = 1; i < game.getStage() + 1; i++) {
        let boxColor = document.getElementById(game.getGameBoxPath()[i - 1]);
        setTimeout(() => {
            boxColor.style.background = 'radial-gradient(circle, rgba(196,87,255,1) 0%, rgba(223,163,255,1) 100%)';
        }, ((i - 1) * 500) + 1);
        setTimeout(() => {
            boxColor.style.background = 'radial-gradient(circle, rgba(169,8,255,1) 0%, rgba(216,143,255,1) 100%)';
        }, i * 500);
        if (game.getStage() === i) {
            document.getElementById('first-circle').style.zIndex = '-2';
            document.removeEventListener('click', disableButtons, true);
        }
    }
}

function deployMenu() {
    if (document.getElementById('menu-checkbox').checked === true) {
        document.getElementById('menu-button').setAttribute('style', 'height: 40%; width: 21.8%; transform: all 1s linear;');
        document.getElementById('logo').setAttribute('style', 'top: 17%; left: 14%; transform: translate(40px, 50px)');
        document.getElementById('logo').style.transition = 'top 1s ease-out, left 1s ease-out, transform 2s ease-out';
        document.getElementById('menu-checkbox').setAttribute('style', 'z-index:6;');
        document.getElementById('nav-bar').style.zIndex = '1';
        document.getElementsByClassName('game-box')[0].style.zIndex = '1';
        document.getElementsByClassName('slider')[0].style.zIndex = 'none';
        document.getElementsByClassName('slider')[1].style.zIndex = 'none';
        document.getElementById('menu-container').style.zIndex = 'none';
        clearTimeout(t5);
        flash();
        slideIn();
    } else {
        document.getElementById('menu-button').setAttribute('style', 'height: 20%; width: 10.94%; transform: all 1s linear;');
        document.getElementById('logo').setAttribute('style', 'top: 33%; left: 30%; transform: translate(0px, 0px);');
        document.getElementById('logo').style.transitionDuration = '2s'; 
        document.getElementById('menu-checkbox').setAttribute('style', 'width: 30%; height: 30%; top: 32%; left: 32%; z-index:6;');
        document.getElementById('menu-container').setAttribute('style', 'opacity: 0; transition: all 1s ease-out;');
        document.getElementById('nav-bar').style.background = 'none';
        document.getElementById('nav-bar').style.transitionDuration = '1s';
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(t5);
        slideOut();
    }

    /*When you use setTimeout, it creates a unique identifier that is a number.
         So the first setTimeout = 1 and so on. Then when we clear in deployMenu we use
         the unique identifier which allows us to stop the process. If you don't assign
         a name, then the unique identifier will change and the clear timeouts will not
         clear correctly, so we assign a random name.*/
    function flash() {
        t1 = setTimeout(() => {
            document.getElementById('nav-bar').style.background = '#708238';
            document.getElementById('nav-bar').style.transition = 'background-color 0.15s';
        }, 1800);
        t2 = setTimeout(() => {
            document.getElementById('nav-bar').style.background = 'white';
            document.getElementById('nav-bar').style.transition = 'background-color 1s';
        }, 1950);
        t3 = setTimeout(() => {
            document.getElementById('nav-bar').style.background = '#708238';
            document.getElementById('nav-bar').style.transition = 'background-color 0.25s';
        }, 3000);
        t4 = setTimeout(() => {
            document.getElementById('menu-container').setAttribute('style', 'z-index: 3; opacity: 1; transition: opacity 1s ease-out;');
        }, 3300);
    }

    function slideIn() {
        document.getElementById('top-slider').style.transform = 'translate(0vh, 0vh) rotate(-17deg)';
        document.getElementById('top-slider').style.transitionDuration = '2s';
        document.getElementById('bottom-slider').style.transform = 'translate(0vh, 0vh) rotate(-17deg)';
        document.getElementById('bottom-slider').style.transitionDuration = '2s';
    }
}

function startGame() {
    document.getElementById('menu-button').setAttribute('style', 'height: 20%; width: 10.94%; transform: all 1s linear;');
    document.getElementById('logo').setAttribute('style', 'top: 33%; left: 30%; transform: translate(0px, 0px);');
    document.getElementById('logo').style.transition = 'top 1s ease-out, left 1s ease-out, transform 2s ease-out';
    document.getElementById('nav-bar').style.background = 'none';
    document.getElementById('nav-bar').style.transitionDuration = '1s';
    document.getElementById('menu-container').setAttribute('style', 'opacity: 0; transition: all 1s ease-out;');
    document.getElementById('menu-checkbox').checked = false;
    slideOut();
    document.getElementById('menu-checkbox').setAttribute('style', 'width: 30%; height: 30%; top: 32%; left: 32%; z-index:6;');
    game.addToGameBoxPath(gameBoxPath);
    document.getElementById(game.getGameBoxPath()[0]).className += ' blink';
    document.getElementById(game.getGameBoxPath()[0]).addEventListener('click', revealPath);
}

function slideOut() {
    document.getElementById('top-slider').style.transform = 'translate(25vh, -150vh)';
    document.getElementById('top-slider').style.transitionDuration = '2s';
    document.getElementById('bottom-slider').style.transform = 'translate(-150vh, 30vh)';
    document.getElementById('bottom-slider').style.transitionDuration = '2s';
    t5 = setTimeout(() => {
        document.getElementsByClassName('game-box')[0].style.zIndex = '2';
        document.getElementById('nav-bar').style.zIndex = 'auto';
        document.getElementById('menu-container').style.zIndex = '-1';
        document.getElementsByClassName('slider')[0].style.zIndex = '-1';
        document.getElementsByClassName('slider')[1].style.zIndex = '-1';
    }, 1000);
}