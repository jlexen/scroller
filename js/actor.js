export class Actor
{
    point;
    #div;

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

}