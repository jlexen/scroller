export class WorldObject
{
    point;
    dimensions;
    #element;

    constructor(point, dimensions)
    {
        //#region create element
        var element = document.createElement("div");
        element.style.width = `${dimensions.width}px`;
        element.style.height = `${dimensions.height}px`;
        element.style.position = "absolute";
        element.style.zIndex
        
        element.style.backgroundSize = "contain";        
        
        var viewPort = document.getElementById('viewport');
        viewPort.appendChild(element);

        this.#element = element;
        //#endregion

        this.moveObjectToPoint(point);
    }

    moveObjectToPoint(point)
    {
        this.#element.style.left = `${point.x}px`;
        this.#element.style.top = `${point.y}px`;
        this.point = point;
    }

    setBackgroundImage(fileName)
    {
        this.#element.style.backgroundImage = `Url(./img/${fileName})`;
    }

    pointLeft()
    {
        this.#element.style.transform = "scalex(-1)";
    }

    pointRight()
    {
        this.#element.style.transform = null;
    }
}