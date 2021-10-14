import { Application } from './framework/application.js'
import { Renderer } from './gfx/renderer.js';
import { Shader } from './gfx/shader.js';
import * as vec3 from './math/vec3.js';

var game = game || {};


game.ready = (function(){
    var app = new Application(document.getElementById('webgl-canvas'));
    app.initialize();
    app.clear();
    var shader = new Shader("res/shader/simpleVS.glsl", "res/shader/simpleFS.glsl"); 
    shader.initialize();
    var renderer = new Renderer(shader);
    renderer.initialize();
    renderer.draw();
}());


