export class Player
{
    point;
    #div;
    #moveSpeed = 10;

    // todo: replace with gif
    #imageFrames = ["dog1.png", "dog2.png"];
    #imageFrame = 0;

    constructor(point)
    {
        this.point = point;
       
        //#region create div
        var div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.position = "absolute";
        
        div.style.backgroundSize = "contain";        
        this.#div = div;
        //#endregion

        this.setImage()
        this.move(point);

        var viewPort = document.getElementById('viewport');
        viewPort.appendChild(div);
    }

    setImage()
    {
        if(this.#imageFrame > this.#imageFrames.length - 1)
        {
            this.#imageFrame = 0;
        }

        this.#div.style.backgroundImage = `Url(./img/${this.#imageFrames[this.#imageFrame]})`;

        this.#imageFrame++;
    }

    move(point)
    {
        this.#div.style.left = `${point.x}px`;
        this.#div.style.top = `${point.y}px`;
        this.point = point;
        this.setImage()
    }

    pointLeft()
    {
        this.#div.style.transform = "scalex(-1)";
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