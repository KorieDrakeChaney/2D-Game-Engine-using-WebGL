import Application from "./framework/application";
import Shader from "./gfx/shader";
import Renderer from "./Components/Renderer/Renderer";

let main = (async function(){
    let app = new Application(document.getElementById('canvas-webgl'));
    app.initialize();
    app.clear();
    let renderer = new Renderer();
}());    
