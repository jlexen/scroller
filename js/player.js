import { Dimensions } from "./dimensions.js"
import { WorldObject } from "./worldObject.js";

export class Player extends WorldObject
{
    #moveSpeed = 10;

    // todo: replace with gif
    #walkFrames = ["dog1.png", "dog2.png"];
    #walkFrame = 0;

    positions = {
        Walking : 'Walking',
        Sitting : 'Sitting',
        Down : 'Down',
        Stealth : 'Steath'
    };

    position;

    constructor(point)
    {
               
        var dimensions = new Dimensions(100, 100);
        super(point, dimensions);

        this.move(point);

        this.setPosition(this.positions.Walking);
    }

    setPosition(position)
    {
        this.position = position;
        
        switch(position)
        {
            case this.positions.Walking:
                if(this.#walkFrame > this.#walkFrames.length - 1)
                {
                    this.#walkFrame = 0;
                }
        
                this.setBackgroundImage(this.#walkFrames[this.#walkFrame]);
        
                this.#walkFrame++;

                this.#downFrame = 0;
                break;
            case this.positions.Sitting:
                this.setBackgroundImage('dog-sit.png')
                break;
            case this.positions.Down:
                this.setBackgroundImage('dog-down.png')
                break;
            case this.positions.Stealth:
                this.setBackgroundImage('dog-stealth.png')
                break;
        }
    }

    move(point)
    {
        this.moveObjectToPoint(point);
        this.setPosition(this.positions.Walking);        
    }

    moveLeft()
    {
        if(this.position !== this.positions.Walking)
        {
            return;
        }

        this.point.x -= this.#moveSpeed;
        this.move(this.point);
        this.pointLeft();
    }

    moveRight()
    {
        if(this.position !== this.positions.Walking)
        {
            return;
        }

        this.point.x += this.#moveSpeed;
        this.move(this.point);
        this.pointRight();
    }

    down()
    {      
        switch(this.position)
        {
            case this.positions.Walking:
                this.setPosition(this.positions.Sitting);
                break;
            case this.positions.Sitting:
                this.setPosition(this.positions.Down);
                break;
            case this.positions.Down:
                this.setPosition(this.positions.Stealth);
                break;
        }
    }

    up()
    {

        switch(this.position)
        {
            case this.positions.Stealth:
                this.setPosition(this.positions.Down);
                break;
            case this.positions.Down:
                this.setPosition(this.positions.Walking);
                break;
            case this.positions.Walking:
                this.jump(10);
                break;
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