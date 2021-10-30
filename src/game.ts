import Application from './framework/Application.js'
import * as Renderer2D from './gfx/Renderer2D.js';
import vec2 from './math/vec2.js';
import vec4 from './math/vec4.js';


export default function game(){
    this.App = new Application(document.getElementById("canvas-webgl"));
    this.start();
};

game.prototype.start = function(){
    this.App.initialize();
    
    for(let x = -0.9; x <= 0.8; x+=0.005){
        for(let y = -0.9; y <= 0.8; y+=0.005){
            Renderer2D.DrawQuad({
                                size : new vec2([0.0025, 0.0025]), 
                                position : new vec2([x + 0.0025, y + 0.0025]), 
                                color : new vec4([Math.abs(x), 0.1, Math.abs(y), 1.0])
                                });
        };
    };

    this.App.start(this);
};

game.prototype.update = function(){
    this.App.clear();
    this.App.draw();
};

game.prototype.input = function(){

};