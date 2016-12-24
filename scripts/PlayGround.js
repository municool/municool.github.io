
/**
 * Created by nvmuni on 23.12.16.
 */


function PlayGround(playgroundWidth, tilesperline){
    this.tilesite = playgroundWidth;
    this.tilesPerLine = tilesperline;
    var figures = [];

    this.drawPlayGround = function () {
        var posy = 0;
        var posx = 0;
        var tile = this.tilesite / this.tilesPerLine;

        for(var x = 0; x < this.tilesPerLine; x++){
            for(var y = 0; y < this.tilesPerLine; y++){
                if(x % 2 == 0){
                    if(y % 2 == 0){
                        fill(255);
                    }
                    else{
                        fill(0);
                    }
                }
                else{
                    if(y % 2 == 0){
                        fill(0);
                    }
                    else{
                        fill(255);
                    }
                }
                rect(posx, posy, tile, tile);
                posy = posy + tile;
            }
            posx = posx + tile;
            posy = 0;
        }
    }
}