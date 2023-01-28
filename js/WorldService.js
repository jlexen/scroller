import { Point } from "./point.js"
import { Player } from "/js/player.js"

export class WorldService
{
    #player;

    constructor()
    {
        this.#player = new Player( new Point(100,400));
        console.log('world service started...');
    }


    actorKeyPress(key)
    {
        var point = this.#player.point;
        switch(key)
        {
            case "ArrowUp":                 
                this.#player.jump(15)
                break;
            case "ArrowRight":
                this.#player.moveRight()
                break;
            // case "ArrowDown":
            //     var newPoint = new Point(point.x, point.y + 1);
            //     this.#player.move(newPoint)
            //     break;
            case "ArrowLeft":
                this.#player.moveLeft()
                break;
        }
    }
}