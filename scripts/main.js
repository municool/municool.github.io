/**
 * Created by nvmuni on 20.12.16.
 */

var figures = [];

function setup() {
    createCanvas(600, 600);


}

function draw() {
    var playGround = new PlayGround(600, 8);
    playGround.drawPlayGround();

    figures.push(new bauer(50,"black"));
    for(var i = 0; i< figures.length; i++){
        figures[i].display();
    }
}

function mouseClicked() {
    for(var i = 0; i< figures.length; i++){
        figures[i].changeActivity();
    }
}