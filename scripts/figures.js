/**
 * Created by nvmuni on 23.12.16.
 */


function bauer(posX, posY, faction) {
    this.posX = posX;
    this.posY = posY;
    this.faction = faction;
    this.width = 30;
    var isActive = false;
    var strokeColor = getStrokeColor(this.faction);
    var activeStrokeColor = color(252, 82, 82, 255);

    this.display = function () {
        fill(faction);
        stroke(strokeColor);
        ellipse(this.posX, this.posY, this.width, this.width);
    };

    this.makeMove = function () {
        //move shit
    };

    this.isClicked = function () {
        var d = dist(mouseX, mouseY, this.posX, this.posY)
        if (d < this.width) {
            changeActivity();
        }
    };

    function changeActivity() {
        if (isActive) {
            isActive = false;
            strokeColor = getStrokeColor(this.faction);
        }
        else {
            strokeColor = activeStrokeColor;
            isActive = true;
        }
    }
}

function getStrokeColor(faction) {
    if (faction === color(255)) {
        return color(0);
    }
    else {
        return color(255);
    }
}

