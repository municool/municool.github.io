/**
 * Created by nvmuni on 23.12.16.
 */


function PlayGround(playgroundWidth, tilesperline) {
    this.tilesite = playgroundWidth;
    this.tilesPerLine = tilesperline;
    this.tiles = new Array(this.tilesPerLine);

    this.drawPlayGround = function () {
        var posy = 0;
        var posx = 0;
        var tile = this.tilesite / this.tilesPerLine;

        stroke(0);
        for (var x = 0; x < this.tiles.length; x++) {
            for (var y = 0; y < this.tiles.length; y++) {
                this.tiles[x][y].display();
            }
        }
    };

    this.initPlayGround = function () {
        var posy = 0;
        var posx = 0;
        var tileWidth = this.tilesite / this.tilesPerLine;

        for (var i = 0; i < this.tilesPerLine; i++) {
            this.tiles[i] = new Array(this.tilesPerLine);
        }
        for (var x = 0; x < this.tilesPerLine; x++) {
            for (var y = 0; y < this.tilesPerLine; y++) {
                if (x % 2 == 0) {
                    if (y % 2 == 0) {
                        this.tiles[x][y] = new tiles(posx, posy, tileWidth, color(255));
                    }
                    else {
                        this.tiles[x][y] = new tiles(posx, posy, tileWidth, color(0));
                    }
                }
                else {
                    if (y % 2 == 0) {
                        this.tiles[x][y] = new tiles(posx, posy, tileWidth, color(0));
                    }
                    else {
                        this.tiles[x][y] = new tiles(posx, posy, tileWidth, color(255));
                    }
                }
                posy = posy + tileWidth;
            }
            posx = posx + tileWidth;
            posy = 0;
        }

    };
}

function tiles(x, y, width, col) {
    this.wid = width;
    this.col = col;
    this.strokeColor = color(0);
    this.X = x;
    this.Y = y;
    this.figur = null;

    this.display = function () {
        stroke(this.strokeColor);
        fill(this.col);
        rect(this.X, this.Y, this.wid, this.wid);
    };

    this.placeFigureOnHere = function () {
      //get the figure on here
    };
}