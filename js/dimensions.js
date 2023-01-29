export class Dimensions
{
    height;
    width;

    constructor(height, width)
    {
        

        if(height < 0 || height === null)
        {
            throw new Error(`Invalid height value: ${height}`);
        }

        if(width < 0 || width === null)
        {
            throw new Error(`Invalid width value: ${width}`);
        }

        this.height = height;
        this.width = width;
    }
}