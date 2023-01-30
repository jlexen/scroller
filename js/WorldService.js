import { Point } from "./point.js"
import { Player } from "./player.js"
import { Grass } from "./grass.js";
import { DOMManager } from "./domManager.js";

export class WorldService
{
    #player;

    constructor()
    {
        var viewport = DOMManager.createViewPort();

        this.#player = new Player( new Point(0,300));

        var grass1 = new Grass(new Point(100, 350));
        var grass2 = new Grass(new Point(150, 350));
        var grass3 = new Grass(new Point(200, 350));

        var grass4 = new Grass(new Point(300, 350));
        var grass5 = new Grass(new Point(350, 350));
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