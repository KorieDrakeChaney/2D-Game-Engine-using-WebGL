import * as Renderer2D from '../gfx/Renderer2D.js';
import { Timer } from '../framework/Application.js';
import { getApplication } from '../framework/globals.js';

export default function Game(){
    this.App = getApplication();
    this.App.addScene(this);
    this.start();
    
};

Game.prototype.start = function(){
    let timer = new Timer("Start");
    Renderer2D.BeginBatch();
    this.App.start();
    timer.stop();
};


Game.prototype.Render = function(){
    this.App.clear();
    
    Renderer2D.EndBatch();
    Renderer2D.Flush();
    
};
