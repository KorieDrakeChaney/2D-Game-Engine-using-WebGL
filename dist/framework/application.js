import { setApplication } from "./globals.js";
import GraphicsDevice from "../gfx/GraphicsDevice.js";
import RendererManager from "./Components/Renderer/RendererManager.js";
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
        this._scripts = new Array();
        this._GraphicsDevice = null;
        this._RendererManager = new RendererManager();
        this.initialize = function () {
            this._gl = this._app.getContext('webgl2') || this._app.getContext('experimental-webgl2');
            this._GraphicsDevice = new GraphicsDevice(this);
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
            }
            ;
        };
        this.start = function () {
            this._RendererManager.Update();
            this._scripts.forEach(function (script) {
                script.Update();
            });
        };
        this._app = app;
        this.initialize();
    }
    ;
    Application.prototype.addScript = function (script) {
        if (script.Update) {
            this._scripts.push(script);
        }
        else {
            console.error("Not valid script");
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
    Object.defineProperty(Application.prototype, "RendererManager", {
        get: function () {
            return this._RendererManager;
        },
        enumerable: false,
        configurable: true
    });
    return Application;
}());
export default Application;
;
//# sourceMappingURL=Application.js.map