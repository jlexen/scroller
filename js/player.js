import { Dimensions } from "./dimensions.js"
import { WorldObject } from "./worldObject.js";

export class Player extends WorldObject
{
    #moveSpeed = 10;

    // todo: replace with gif
    #walkFrames = ["dog1.png", "dog2.png"];
    #walkFrame = 0;
    #downFrames = ["dog-sit.png", "dog-down.png", "dog-sleep.png"];    
    #downFrame = 0;

    constructor(point)
    {
               
        var dimensions = new Dimensions(100, 100);
        super(point, dimensions);

        this.setImage()
        this.move(point);        
    }

    setImage()
    {
        if(this.#walkFrame > this.#walkFrames.length - 1)
        {
            this.#walkFrame = 0;
        }

        this.setBackgroundImage(this.#walkFrames[this.#walkFrame]);

        this.#walkFrame++;
    }

    move(point)
    {
        this.moveObjectToPoint(point);
        this.setImage();

        this.#downFrame = 0;
    }

    moveLeft()
    {
        this.point.x -= this.#moveSpeed;
        this.move(this.point);
        this.pointLeft();
    }

    moveRight()
    {
        this.point.x += this.#moveSpeed;
        this.move(this.point);
        this.pointRight();
    }

    sit()
    {                
        this.setBackgroundImage(this.#downFrames[this.#downFrame]);
        if(this.#downFrame < this.#downFrames.length - 1)
        {            
            this.#downFrame++;
        }
    }

    jump(up, down, max)
    {
        if(!down) down = 0;
        if(!max) max = up;

        const timeout = 20;

        if(up > 0) 
        {
            this.point.y -= up;
            up--;
            down++;
        } 
        else if(down > 0)
        {
            this.point.y += down;
            down--;
        }
        else
        {
            return;
        }

        this.move(this.point);

        setTimeout(() => this.jump(up, down, max), timeout);
    }
}