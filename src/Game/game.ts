import * as Renderer2D from '../gfx/Renderer2D.js';
import { Timer } from '../Framework/Application.js';
import { getApplication } from '../Framework/Globals.js';
import {Player} from './Entities/Player.js'


export default function Game(){
    this.App = getApplication();
    this.App.addScene(this);
    this.start();
    
};


Game.prototype.Ready = function(){
    for(let i = 0; i < 1000; i++){
        new Player();
    };
}

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
