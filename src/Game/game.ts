import Application from '../framework/Application.js'
import Renderer2D from '../gfx/Renderer2D.js';
import Entity from '../framework/Components/Entity.js';
import Transform from '../framework/Components/Renderer/Transform.js';
import Sprite from '../framework/Components/Renderer/Sprite.js';
import vec2 from '../math/vec2.js';
import vec4 from '../math/vec4.js';
import { Timer } from '../framework/Application.js';
import { entityTransform, entitySprite } from '../gfx/constants.js';

export default function game(){
    this.App = new Application(document.getElementById("canvas-webgl"));
    this.App.addScene(this);
    this.Player = new Entity();

    this.start();

};

game.prototype.start = function(){
    let timer = new Timer("Game Start");
    this.Player.addComponent(new Transform(

    ));
    Renderer2D.BeginBatch();
    // for(let x = -0.8; x < 0.8; x+0.5){
    //     for(let y = -0.8; y < 0.8; y+0.5){
    //         Renderer2D.DrawQuad(new vec2([x, y]), 0.25, 
    //                         new vec4([Math.abs(x), 0.1, Math.abs(y), 1]), 0);
    //     };
    // };
    for (let x = -0.8; x < 0.8; x+=0.0025){
        for (let y = -0.8; y < 0.8; y+=0.0025){
            Renderer2D.DrawQuad(new vec2([x, y]), 0.00125, new vec4([Math.random(), 0.1, Math.random(), 1]), 0);
        };
    };
    Renderer2D.EndBatch();
    Renderer2D.Flush();
    this.App.start();
    timer.stop();
};

game.prototype.Update = function(){
    
};

game.prototype.Render = function(){
    this.App.clear();
    this.App.draw();

};


game.prototype.input = function(){

};