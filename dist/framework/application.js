import { setApplication } from "./globals.js";
var Progress = (function () {
    function Progress(length) {
        this.count = 0;
        this.length = length;
    }
    ;
    Progress.prototype.inc = function () {
        this.count++;
    };
    ;
    Progress.prototype.done = function () {
        return (this.count === this.length);
    };
    ;
    return Progress;
}());
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
        this.app.width = window.innerWidth - 40;
        this.app.height = window.innerHeight - 40;
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
        this.resizeCanvas("RESOLUTION_AUTO");
    };
    ;
    Application.prototype.clear = function () {
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
    };
    ;
    Application.prototype.resizeCanvas = function (fillmode) {
        var _this = this;
        switch (fillmode) {
            case "NONE":
                this.app.width = window.innerWidth - 40;
                this.app.height = window.innerHeight - 40;
                break;
            case "RESOLUTION_AUTO":
                window.addEventListener('resize', function () {
                    _this.app.width = window.innerWidth - 40;
                    _this.app.height = window.innerHeight - 40;
                });
                break;
            case "RESOLUTION_FIXED":
                window.addEventListener('resize', function () {
                    _this.app.width = 400;
                    _this.app.width = 300;
                });
                break;
            case "FILL_WINDOW":
                window.addEventListener('resize', function () {
                    _this.app.width = window.innerWidth - 40;
                    _this.app.height = window.innerHeight - 40;
                });
                break;
            case "KEEP_ASPECT":
                window.addEventListener('resize', function () {
                    _this.app.width = window.innerWidth - 40;
                    _this.app.height = window.innerWidth / 3;
                });
                break;
            default:
                console.log('day');
                break;
        }
        ;
    };
    return Application;
}());
export default Application;
;
//# sourceMappingURL=application.js.map