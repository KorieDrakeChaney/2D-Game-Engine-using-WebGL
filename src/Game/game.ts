import Application from '../framework/Application.js'
import * as Renderer2D from '../gfx/Renderer2D.js';
import Entity from '../framework/Components/Entity.js';
import Transform from '../framework/Components/Transform/Transform.js';
import Sprite from '../framework/Components/Sprite/Sprite.js';
import vec2 from '../math/vec2.js';
import vec4 from '../math/vec4.js';


export default function game(){
    this.App = new Application(document.getElementById("canvas-webgl"));
    this.App.addScript(this);
    this.Player = new Entity();

    this.start();

};


game.prototype.start = async function(){
    this.Player.addComponent(new Transform());
    this.Player.addComponent(new Sprite());
    this.App.clear();
    this.App.start();
};

game.prototype.update = function(){
    this.Player.draw();
    this.App.draw();

};

game.prototype.input = function(){

};