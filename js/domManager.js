export class DOMManager
{
    static viewPortHeight = 400;
    static viewPortWidth = 500;

    static createViewPort()
    {
        var viewPortElement = document.createElement('div');
        viewPortElement.id = 'viewPort';
        viewPortElement.style.width = `${this.viewPortWidth}px`;
        viewPortElement.style.height = `${this.viewPortHeight}px`;
        viewPortElement.style.position = 'absolute';
        viewPortElement.style.top = '50%';
        viewPortElement.style.left = '50%';
        viewPortElement.style.marginRight = '-50%';
        viewPortElement.style.transform = 'translate(-50%, -50%)';
        viewPortElement.style.backgroundImage = "url('./img/background.png')"; 
        
        var bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.appendChild(viewPortElement);
    }

    static createElement(point, dimensions)
    {
        var element = document.createElement("div");
        element.style.width = `${dimensions.width}px`;
        element.style.height = `${dimensions.height}px`;
        element.style.position = "absolute";    
        element.style.zIndex
        
        element.style.backgroundSize = "contain";        
        
        var viewPort = document.getElementById('viewPort');
        viewPort.appendChild(element);

        this.moveElementToPoint(element, point);

        return element;
    }

    static moveElementToPoint(element, point)
    {
        element.style.left = `${point.x}px`;
        element.style.top = `${point.y}px`;        
    }

    static setElementBackgroundImage(element, imageFileName)
    {
        element.style.backgroundImage = `Url(./img/${imageFileName})`;
    }

    static transformElementMirror(element)
    {
        element.style.transform = "scalex(-1)";
    }

    static transformElementClear(element)
    {
        element.style.transform = null;
    }
}