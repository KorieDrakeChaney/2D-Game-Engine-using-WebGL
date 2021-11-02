import Application from '../framework/Application.js'
import Renderer2D from '../gfx/Renderer2D.js';
import Entity from '../framework/Components/Entity.js';
import Transform from '../framework/Components/Physics/Transform.js';
import Sprite from '../framework/Components/Renderer/Sprite.js';
import vec2 from '../math/vec2.js';
import vec4 from '../math/vec4.js';
import { Timer } from '../framework/Application.js';
import { entityTransform, entitySprite } from '../gfx/constants.js';
import Motion from '../framework/Components/Physics/Motion.js';
import Input from '../framework/Components/Physics/Input.js';

export default function game(){
    this.App = new Application(document.getElementById("canvas-webgl"));
    this.App.addScene(this);
    this.Player = new Entity();
    this.start();

};

game.prototype.start = function(){
    let timer = new Timer("Game Start");

    Renderer2D.BeginBatch();

    this.Initialize();

    
    this.App.start();
    
    Renderer2D.EndBatch();
    Renderer2D.Flush();

    timer.stop();
};

game.prototype.Initialize = function(){


    for(let x = -0.8; x < 0.8; x+=0.0025){
        for(let y = -0.8; y < 0.8; y+=0.0025){
            Renderer2D.DrawQuad({
                translation : new vec2([x, y]), 
                scale : new vec2([0.00125, 0.00125]), 
                color : new vec4([Math.abs(x), 0.25, Math.abs(y), 1]),
            });
        };
    };




};

game.prototype.Update = function(){
};

game.prototype.Render = function(){
    this.App.clear();
};


game.prototype.input = function(){

};