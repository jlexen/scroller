import { DOMManager } from "./domManager.js";

export class WorldObject
{
    point;
    dimensions;
    #element;

    constructor(point, dimensions)
    {
        this.#element = DOMManager.createElement(point, dimensions);

    }

    moveObjectToPoint(point)
    {
        DOMManager.moveElementToPoint(this.#element, point);
        this.point = point;
    }

    setBackgroundImage(imageFileName)
    {
        DOMManager.setElementBackgroundImage(this.#element, imageFileName);
    }

    pointLeft()
    {
        DOMManager.transformElementMirror(this.#element);
    }

    pointRight()
    {
        DOMManager.transformElementClear(this.#element);
    }
}