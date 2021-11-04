import Application from '../framework/Application.js'
import * as Renderer2D from '../gfx/Renderer2D.js';
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
    
    
    
    this.Initialize();
    
    this.Player.addComponent(new Transform(new vec2([0, 0]), new vec2([0.5, 0.5])));
    this.Player.addComponent(new Sprite());
    
    this.App.start();
    
    
};

game.prototype.Initialize = function(){
    
    let timer = new Timer("Initialize");
    Renderer2D.BeginBatch();
    let i = 0;
    for(let x = -0.8; x < 0.8; x+=0.0025){
        for(let y = -0.8; y < 0.8; y+=0.0025){
            Renderer2D.DrawQuad({
                translation : new vec2([x, y]), 
                scale : new vec2([0.0025/2, 0.0025/2]), 
                color : new vec4([0.1, Math.abs(x), Math.abs(y), 1]), 
            });
        };
    };
    console.log(i);
    timer.stop();
    
    
    
};

game.prototype.Update = function(){

    
};

game.prototype.Render = function(){
    this.App.clear();
    

    let transform = this.Player.findComponent("Transform");
    transform.rotation = Date.now() / 1000;
    let sprite = this.Player.findComponent("Sprite");
    sprite.color = new vec4([Math.abs(transform.rotation), 0.1, 0.4, 1]);
    

    Renderer2D.EndBatch();
    Renderer2D.Flush();
    
};


game.prototype.input = function(){

};