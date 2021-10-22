import { setApplication } from "./globals.js";
var Application = (function () {
    function Application(app) {
        this.time = 0;
        this.timeScale = 1;
        this.maxDeltaTime = 0.1;
        this.frame = 0;
        this.autoRender = true;
        this.renderNextFrame = false;
        this.app = app;
        this.gl = null;
    }
    ;
    Application.prototype.initialize = function () {
        this.gl = this.app.getContext('webgl2') || this.app.getContext('experimental-webgl2');
        this.app.style.border = "1px solid pink";
        this.resizeCanvasToDisplaySize();
        try {
            this.gl.viewport(0, 0, this.app.width, this.app.height);
        }
        catch (err) {
            console.error(err);
        }
        ;
        setApplication(this);
        if (this.gl === null) {
            alert('Your browser does not support webgl');
        }
        ;
    };
    ;
    Application.prototype.clear = function () {
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
    };
    ;
    Application.prototype.resizeCanvasToDisplaySize = function () {
        var dpr = window.devicePixelRatio;
        var width = window.innerWidth - 40;
        var height = window.innerHeight - 30;
        var needResize = this.app.width !== width ||
            this.app.height !== height;
        if (needResize) {
            this.app.width = width;
            this.app.height = height;
        }
        ;
    };
    ;
    return Application;
}());
export default Application;
;
//# sourceMappingURL=application.js.map