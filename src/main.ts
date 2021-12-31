import Application from './Framework/Application.js';
import Entity from './Framework/Components/Entity.js';
import Game from './Game/Game.js';


let main = (function(){
    new Application(document.getElementById("canvas-webgl"));

    new Game();

}());    

