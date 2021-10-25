import Application from "./framework/application.js";
import * as Renderer2D from './gfx/Renderer2D.js';


let main = (function(){
    let app = new Application(document.getElementById('canvas-webgl'));
    app.initialize();
    app.clear();
}());    



