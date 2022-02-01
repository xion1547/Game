// JavaScript source code
class Game {

    constructor(stage, boxPath, points) {
        this.stage = stage;
        this.boxPath = boxPath;
        this.points = points;
    }

    addToBoxPath(boxPath) {
        var boxNumberId = "box" + (Math.floor(Math.random() * 10) + 1);
        boxPath.push(boxNumberId);
    }
}

var boxPath = [(Math.floor(Math.random() * 10) + 1)];
var game = new Game(1, boxPath, 0);

function changeBackground() {
    let boxColor = document.getElementById(event.srcElement.id);
    boxColor.style.background = 'radial-gradient(circle, rgba(169,8,255,1) 0%, rgba(216,143,255,1) 100%)';
    console.log(game);
    setTimeout(() => {
        boxColor.style.background = 'radial-gradient(circle, rgba(196,87,255,1) 0%, rgba(223,163,255,1) 100%)';
    }, 500);
}
