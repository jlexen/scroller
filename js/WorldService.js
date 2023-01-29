import { Point } from "./point.js"
import { Player } from "./player.js"
import { Grass } from "./grass.js";

export class WorldService
{
    #player;

    constructor()
    {
        this.#player = new Player( new Point(100,425));

        var grass1 = new Grass(new Point(200, 475));
        var grass2 = new Grass(new Point(250, 475));
        var grass3 = new Grass(new Point(300, 475));

        var grass4 = new Grass(new Point(450, 475));
        var grass5 = new Grass(new Point(500, 475));
    }

    actorKeyPress(key)
    {
        switch(key)
        {
            case "ArrowUp":                 
                this.#player.up()
                break;
            case "ArrowRight":
                this.#player.moveRight()
                break;
            case "ArrowDown":
                this.#player.down();
                break;
            case "ArrowLeft":
                this.#player.moveLeft()
                break;            
        }
    }
}