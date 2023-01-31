import { Point } from "./point.js"
import { Player } from "./player.js"
import { Grass } from "./grass.js";
import { DOMManager } from "./domManager.js";
import { MenuManager } from "./menuManager.js";

export class WorldService
{
    #player;

    constructor()
    {
        DOMManager.createViewPort();

        this.#player = new Player( new Point(0,333));

        var grass4 = new Grass(new Point(300, 380));
        var grass5 = new Grass(new Point(350, 380));
        var grass5 = new Grass(new Point(400, 380));
    }

    actorKeyPress(key)
    {
        if(key === " ")
        {
            if(!MenuManager.isPaused)
            {
                MenuManager.Pause();
            }
            else
            {
                MenuManager.Resume();
            }
        }
        
        if(MenuManager.isPaused)
        {
            return;
        }

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