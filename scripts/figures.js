/**
 * Created by nvmuni on 23.12.16.
 */

function bauer(pos, faction){
    this.pos = pos;
    this.faction = faction;

    this.drawFigure = function () {
        if(faction === "black"){
            fill(255);
        }
        else{
            fill(0);
        }
        ellipse()
    }

    this.makeMove = function () {
        //move shit
    }
}