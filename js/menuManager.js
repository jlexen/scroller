import { DOMManager } from "./domManager.js";

export class MenuManager
{
    static isPaused = false;

    static Pause()
    {
        this.isPaused = true;
        DOMManager.blurElement(DOMManager.viewPortElement);
    }

    static Resume()
    {
        DOMManager.blurElementRemove(DOMManager.viewPortElement);
        this.isPaused = false;
    }

}