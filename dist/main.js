import Application from './framework/Application.js';
import Game from './Game/Game.js';
var main = (function () {
    new Application(document.getElementById("canvas-webgl"));
    new Game();
}());
//# sourceMappingURL=main.js.map