import Application from "./framework/application";
import Sahder from "./gfx/shader";

let main = (function(){
    let app = new Application(document.getElementById('canvas-webgl'));
    app.initialize();
    app.clear();
}());    
