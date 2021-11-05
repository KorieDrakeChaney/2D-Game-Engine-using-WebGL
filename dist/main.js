import Application from './framework/Application.js';
import { Player } from './Game/Entities/Player.js';
import Game from './Game/Game.js';
var main = (function () {
    new Application(document.getElementById("canvas-webgl"));
    for (var i = 0; i < 1000; i++) {
        new Player();
    }
    ;
    new Game();
}());
//# sourceMappingURL=main.js.map