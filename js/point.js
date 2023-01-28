export class Point
{
    x;
    y;
    z; 
    constructor(x, y, z)
    {
        if(x < 0 || x === null)
        {
            throw new Error(`Invalid x value: ${x}`);
        }

        if(y < 0 || y === null)
        {
            throw new Error(`Invalid y value: ${y}`);
        }

        this.x = x;
        this.y = y;
        this.z = z ?? -1; // default z-index
    }

}