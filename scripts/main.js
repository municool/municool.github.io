/**
 * Created by nvmuni on 20.12.1
 */

var figures = [];
var playGround;

function setup() {
    createCanvas(600, 600);
    figures.push(new bauer(100, 50, color(0)));
    playGround = new PlayGround(600, 8);
    playGround.initPlayGround();
}

function draw() {
    playGround.drawPlayGround();
    for (var i = 0; i < figures.length; i++) {
        figures[i].display();
    }
}

function mousePressed() {
    for (var i = 0; i < figures.length; i++) {
        figures[i].isClicked();
    }
}