import { Point } from "./point.js"
import { Actor } from "/js/actor.js"

export class WorldService
{
    #actor;

    constructor()
    {
        this.#actor = new Actor( new Point(100,100));
        console.log('world service started...');
    }


    actorKeyPress(key)
    {
        var point = this.#actor.point;
        switch(key)
        {
            case "ArrowUp": 
                var newPoint = new Point(point.x, point.y - 1);
                this.#actor.move(newPoint)
                break;
            case "ArrowRight":
                var newPoint = new Point(point.x + 1, point.y);
                this.#actor.move(newPoint)
                break;
            case "ArrowDown":
                var newPoint = new Point(point.x, point.y + 1);
                this.#actor.move(newPoint)
                break;
            case "ArrowLeft":
                var newPoint = new Point(point.x - 1, point.y);
                this.#actor.move(newPoint)
                break;
        }
    }
}