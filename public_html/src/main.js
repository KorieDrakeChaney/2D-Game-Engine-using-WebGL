import { Application } from './framework/application.js'
import {Renderer} from './gfx/renderer.js';


var app = new Application(document.getElementById('webgl-canvas'));
app.initialize();
app.clear();
var renderer = new Renderer([1, 2, 3], [0, 1, 2], 0, 0);
renderer.initialize();