import Application from './framework/Application.js';
import {Player} from './Game/Entities/Player.js'
import Entity from './framework/Components/Entity.js';
import Game from './Game/Game.js';


let main = (function(){
    new Application(document.getElementById("canvas-webgl"));
    for(let i = 0; i < 1000; i++){
        new Player();
    };
    new Game();

}());    

