/**
 * Created by nvmuni on 23.12.16.
 */

function bauer(pos, faction) {
    this.pos = pos;
    this.faction = faction;
    var isActive = false;
    this.strokeColor = color(255);

    this.display = function () {
        stroke(this.strokeColor);
        if (faction === "black") {
            fill(0);
        }
        else {
            fill(255);
        }
        ellipse(mouseX, mouseY, 20, 20);
    }

    this.makeMove = function () {
        //move shit
    }

    this.changeActivity = function () {
        if (isActive) {
            isActive = false;
        }
        else {
            this.strokeColor = color(252,82,82,255);
            isActive = true;
        }
    }
}