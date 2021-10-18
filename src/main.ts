import Application from "./framework/application.js";

let main = (async function(){
    let app = new Application(document.getElementById('canvas-webgl'));
    app.initialize();
    app.clear();
}());    
