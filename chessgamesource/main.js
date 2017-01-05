/**
 * Created by nvmuni on 20.12.1
 */

var figures = [];
var playGround;
var tiles;

function setup() {
    createCanvas(600, 600);
    figures.push(new peasant(100, 50, color(0)));
    playGround = new PlayGround(600, 8);
    playGround.initPlayGround();
    tiles = playGround.tiles;
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
    console.log(tiles[1][1]);
    for (var x = 0; x < figures.length; x++) {
        for (var y = 0; y < figures.length; y++) {
            tiles[x][y].isClicked();

        }
    }
}