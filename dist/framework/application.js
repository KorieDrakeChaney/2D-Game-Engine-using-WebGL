import { setApplication } from "./globals.js";
import GraphicsDevice from "../gfx/GraphicsDevice.js";
import RendererSystem from "./Components/Renderer/RendererSystem.js";
import EntitySystem from "./Components/EntitySystem.js";
import * as Renderer2D from '../gfx/Renderer2D.js';
var Timer = (function () {
    function Timer(name) {
        this.name = name;
        this.timer = Date.now();
    }
    ;
    Timer.prototype.stop = function () {
        var elapsedTime = (Date.now() - this.timer) / 1000;
        if (elapsedTime >= 3.0) {
            console.error(this.name + ": " + (elapsedTime).toFixed(3) + "s");
        }
        else {
            console.log(this.name + ": " + (elapsedTime).toFixed(3) + "s");
        }
        ;
    };
    ;
    return Timer;
}());
export { Timer };
var Application = (function () {
    function Application(app) {
        this._app = null;
        this._gl = null;
        this._time = 0;
        this._timeScale = 1;
        this._maxDeltaTime = 0.1;
        this._frame = 0;
        this._autoRender = true;
        this._renderNextFrame = false;
        this._FPS = 120;
        this._MPF = 1000 / this._FPS;
        this._lagTime = 0;
        this.scene = null;
        this._GraphicsDevice = null;
        this._RendererSystem = null;
        this._EntitySystem = null;
        this._loopIsRunning = false;
        this.initialize = function () {
            this._gl = this._app.getContext('webgl2') || this._app.getContext('experimental-webgl2');
            this._app.style.border = "1px solid pink";
            this.resizeCanvasToDisplaySize();
            try {
                this._gl.viewport(0, 0, this._app.width, this._app.height);
            }
            catch (err) {
                console.error(err);
            }
            ;
            if (this._gl === null) {
                alert('Your browser does not support webgl');
            }
            ;
            setApplication(this);
        };
        this.draw = function () {
            this._GraphicsDevice.initalize();
        };
        this.clear = function () {
            this._gl.clearColor(0, 0, 0, 1);
            this._gl.clear(this._gl.COLOR_BUFFER_BIT || this._gl.DEPTH_BUFFER_BIT);
        };
        this.resizeCanvasToDisplaySize = function () {
            var dpr = window.devicePixelRatio;
            var width = window.innerWidth - 40;
            var height = window.innerHeight - 30;
            var needResize = this._app.width !== width ||
                this._app.height !== height;
            if (needResize) {
                this._app.width = width;
                this._app.height = height;
                this._gl.viewport(0, 0, width, height);
            }
            ;
        };
        this.start = function () {
            this._loopIsRunning = true;
            this._time = Date.now();
            Renderer2D.Init();
            this.scene.Ready();
            this._EntitySystem.Ready();
            requestAnimationFrame(this._update.bind(this));
        };
        this._app = app;
        this.initialize();
        this._GraphicsDevice = new GraphicsDevice(this);
        this._RendererSystem = new RendererSystem();
        this._EntitySystem = new EntitySystem();
    }
    ;
    Application.prototype.addScene = function (game) {
        this.scene = game;
    };
    ;
    Application.prototype._update = function () {
        if (this._loopIsRunning) {
            requestAnimationFrame(this._update.bind(this));
            this.resizeCanvasToDisplaySize();
            var currentTime = Date.now();
            var elapsedTime = currentTime - this._time;
            this._time = currentTime;
            this._lagTime += elapsedTime;
            while (this._lagTime >= this._MPF && this._loopIsRunning) {
                this._EntitySystem.Update();
                this._RendererSystem.Update();
                this._lagTime -= this._MPF;
            }
            ;
            if (document.hasFocus()) {
                this.scene.Render();
                this.draw();
            }
        }
        ;
    };
    ;
    Object.defineProperty(Application.prototype, "gl", {
        get: function () {
            return this._gl;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "GraphicsDevice", {
        get: function () {
            return this._GraphicsDevice;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "RendererSystem", {
        get: function () {
            return this._RendererSystem;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "EntitySystem", {
        get: function () {
            return this._EntitySystem;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return Application;
}());
export default Application;
;
//# sourceMappingURL=Application.js.map