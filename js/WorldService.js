import { Point } from "./point.js"
import { Player } from "./player.js"

export class WorldService
{
    #player;

    constructor()
    {
        this.#player = new Player( new Point(100,400));
    }

    actorKeyPress(key)
    {
        switch(key)
        {
            case "ArrowUp":                 
                this.#player.jump(10)
                break;
            case "ArrowRight":
                this.#player.moveRight()
                break;
            case "ArrowLeft":
                this.#player.moveLeft()
                break;
        }
    }
}