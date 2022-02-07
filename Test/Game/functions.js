// JavaScript source code
/*Game Class*/
class Game {

    constructor(stage, gameBoxPath, points) {
        this.stage = stage;
        this.gameBoxPath = gameBoxPath;
        this.points = points;
    }

    addToBoxPath(gameBoxPath) {
        var boxNumberId = "box" + (Math.floor(Math.random() * 10) + 1);
        gameBoxPath.push(boxNumberId);
        this.stage = this.stage + 1;
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
var gameBoxPath = [];
var game = new Game(0, gameBoxPath, 0);
var playerBoxPath = [];
var player = new Player(playerBoxPath);

function changeBackground() {
    let boxColor = document.getElementById(event.srcElement.id);
    player.addToBoxPath
    boxColor.style.background = 'radial-gradient(circle, rgba(196,87,255,1) 0%, rgba(223,163,255,1) 100%)';
    setTimeout(() => {
        boxColor.style.background = 'radial-gradient(circle, rgba(169,8,255,1) 0%, rgba(216,143,255,1) 100%)';
    }, 500);
    if (game.getStage == player.getPlayerBoxPath.length) {
        setTimeout(() => {
            boxColor.style.background = 'radial-gradient(circle, rgba(169,8,255,1) 0%, rgba(216,143,255,1) 100%)';
        }, 2000);
    }
}

function revealPath() {

}

function deployMenu() {
    if (document.getElementById('menu-checkbox').checked == true) {
        document.getElementById('menu-button').setAttribute('style', 'height: 40vh; width: 40vh; transform: all 1s ease-out;');
        document.getElementById('logo').style.transform = 'translate(40px, 50px)';
        document.getElementById('logo').style.transitionDuration = '2s';
        document.getElementById('menu-checkbox').setAttribute('style', 'width: 16vh; height: 16vh; top: 13vh; left: 13vh; z-index:6;');
        document.getElementsByClassName('game-container')[0].setAttribute('style', 'z-index:1;');
        flash();
        slideIn();
    } else {
        document.getElementById('menu-button').setAttribute('style', 'height: 20vh; width: 20vh; transform: all 1s linear;');
        document.getElementById('logo').setAttribute('style', 'top: 64px; left: 59px; transform: translate(0px, 0px);');
        document.getElementById('logo').style.transitionDuration = '2s'; 
        document.getElementById('menu-checkbox').setAttribute('style', 'width: 50px; height: 45px; top: 60px; left: 55px; z-index:6;');
        document.getElementById('menu-container').style.opacity = '0';
        document.getElementsByClassName('game-container')[0].setAttribute('style', 'z-index:2;');
        document.getElementsByClassName('game-container')[0].style.transitionDuration = '3s';
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        document.getElementById('nav-bar').style.background = 'none';
        slideOut();
        document.getElementById('menu-container').setAttribute('style', 'z-index: 2; opacity: 0;');
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
    console.log('YAYAYYAYAYA');
    document.getElementById('menu-button').setAttribute('style', 'height: 20vh; width: 20vh; transform: all 1s linear;');
    document.getElementById('logo').setAttribute('style', 'top: 64px; left: 59px; transform: translate(0px, 0px);');
    document.getElementById('logo').style.transitionDuration = '2s';
    document.getElementsByClassName('game-container')[0].setAttribute('style', 'z-index:2;');
    document.getElementsByClassName('game-container')[0].style.transitionDuration = '3s';
    document.getElementById('nav-bar').style.background = 'none';
    document.getElementById('nav-bar').style.transitionDuration = '1s';
    document.getElementById('menu-container').setAttribute('style', 'z-index: 2; opacity: 0; transition: all 1s ease-out;');
    document.getElementById('menu-checkbox').checked = false;
    slideOut();
    document.getElementById('menu-checkbox').setAttribute('style', 'width: 50px; height: 45px; top: 60px; left: 55px; z-index:6;');
    game.addToBoxPath(gameBoxPath);
}

function slideOut() {
    document.getElementById('top-slider').style.transform = 'translate(25vh, -150vh)';
    document.getElementById('top-slider').style.transitionDuration = '2s';
    document.getElementById('bottom-slider').style.transform = 'translate(-150vh, 30vh)';
    document.getElementById('bottom-slider').style.transitionDuration = '2s';
}