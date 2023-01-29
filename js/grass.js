import { Dimensions } from "./dimensions.js";
import { WorldObject } from "./worldObject.js";

export class Grass extends WorldObject
{
    constructor(point)
    {
        var dimensions = new Dimensions(50,50, 999);

        super(point, dimensions);

        this.setBackgroundImage('grass.png')
    }
}