/**
 * Created by municool on 26.12.2016.
 */

function tiles(x, y, width, col) {
    this.wid = width;
    this.col = col;
    this.strokeColor = color(0);
    this.isActive = false;
    this.X = x;
    this.Y = y;
    this.figur = null;

    this.display = function () {
        stroke(this.strokeColor);
        fill(this.col);
        rect(this.X, this.Y, this.wid, this.wid);
    };

    this.placeFigureOnHere = function (figur) {
        this.figur = figur;
    };

    this.isClicked = function () {
        var d = dist(mouseX, mouseY, this.X, this.Y)
        if (d < this.width) {
            this.changeActivity();
        }
    };

    this.changeActivity = function () {
        if (this.isActive) {
            this.isActive = false;
            this.strokeColor = color(252, 82, 82, 255);
        }
        else {
            this.strokeColor = color(0);
            this.isActive = true;
        }
    }
}