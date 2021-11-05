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
import vec3 from '../math/vec3.js';
import { getApplication } from '../framework/globals.js';


export default function Game(){
    this.App = getApplication();
    this.App.addScene(this);
    this.start();

};

Game.prototype.start = function(){
    
    this.Initialize();
    this.App.start();

};

Game.prototype.Initialize = function(){
    
    Renderer2D.BeginBatch();
    
};

Game.prototype.Update = function(){

    
};

Game.prototype.Render = function(){
    this.App.clear();
    
    Renderer2D.EndBatch();
    Renderer2D.Flush();
    
};


Game.prototype.input = function(){
};