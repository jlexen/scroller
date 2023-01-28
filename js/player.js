export class Player
{
    point;
    #div;
    #moveSpeed = 10;

    constructor(point)
    {
        this.point = point;
       
        var div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        //div.style.backgroundColor = "pink";
        div.style.position = "absolute";
        div.style.backgroundImage = "Url('./img/dog.png')"
        div.style.backgroundSize = "contain";
        
        this.#div = div;
        this.move(point);

        var viewPort = document.getElementById('viewport');
        viewPort.appendChild(div);
    }

    move(point)
    {
        this.#div.style.left = `${point.x}px`;
        this.#div.style.top = `${point.y}px`;
        this.point = point;
    }

    pointLeft()
    {
        //this.#div.style.MozTransform = "scale(-1, -1);";
        this.#div.style.transform = "scalex(-1)";
        this.#div.style.webkitTransform  = "scalex(-1);";
        //this.#div.style.top = 500;
    }

    pointRight()
    {
        this.#div.style.transform = null;
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

    jump(up, down)
    {
        if(!down) down = 0;

        const timeout = 50;

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

        setTimeout(() => this.jump(up, down), timeout);
        // for(var i = 0; i < magnitude; i++)
        // {
        //     this.point.y -= (magnitude - i);
        //     this.move(this.point)
        //     setTimeout(() => console.log(i), timeout);
        // }

        // // going down...
        // for(var i = magnitude; i >= 0; i--)
        // {
        //     this.point.y += (magnitude - i);
        //     this.move(this.point)
        //     setTimeout(() => console.log(i), timeout);
        // }
    }
}