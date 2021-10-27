import Application from './framework/Application.js'
import * as Renderer2D from './gfx/Renderer2D.js';
import vec2 from './math/vec2.js';
import vec4 from './math/vec4.js';

let main = (function(){
    var App = new Application(document.getElementById("canvas-webgl"));
    App.initialize();
    Renderer2D.DrawQuad();
    Renderer2D.DrawQuad(new vec2([-0.5, 0.4]), new vec2([0.1, 0.5]), new vec4([1, 0, 0, 1]), 0);
    Renderer2D.DrawQuad(new vec2([0.5, 0.4]), new vec2([0.3, 0.5]), new vec4([1, 0, 1, 1]), 0);

    App.clear();
    App.update();
    
}());    



