import Application from '../framework/Application.js'
import * as Renderer2D from '../gfx/Renderer2D.js';
import Entity from '../framework/Components/Entity.js';
import Transform from '../framework/Components/Renderer/Transform.js';
import Sprite from '../framework/Components/Renderer/Sprite.js';
import vec2 from '../math/vec2.js';
import vec4 from '../math/vec4.js';


export default function game(){
    this.App = new Application(document.getElementById("canvas-webgl"));
    this.App.addScript(this);
    this.Player = new Entity();
    this.Dog = new Entity();

    this.start();

};


game.prototype.start = async function(){
    this.Player.addComponent(new Transform());
    this.Player.addComponent(new Sprite());
    this.Dog.addComponent(new Transform(
        new vec2([0, 0]), 
        new vec2([0.5, 0.5]), 
        45
        ));
        this.Dog.addComponent(new Sprite(new vec4([1, 1, 1, 1])));
    for (let x = -0.8; x < 0.8; x+= 0.0025){
        for(let y = -0.8; y < 0.8; y+=0.0025){
            let e = new Entity();
            e.addComponent(new Transform(
                new vec2([x, y]), 
                new vec2([0.00125, 0.00125]), 
                0
            ));
            e.addComponent(new Sprite(
                new vec4([Math.abs(x), 0.1, Math.abs(y), 1])
            ));
        };  
    };
    this.App.clear();
    this.App.start();
};

game.prototype.Update = function(){
    this.App.draw();
};

game.prototype.input = function(){

};