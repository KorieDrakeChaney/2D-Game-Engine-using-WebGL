var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import mat4 from '../../math/mat4.js';
import { getApplication } from '../globals';
import Component from './Component';
import vec3 from '../../math/vec3';
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera(center, width, viewportArray) {
        if (center === void 0) { center = [0, 0]; }
        if (width === void 0) { width = 10; }
        if (viewportArray === void 0) { viewportArray = [0, 0, 100, 100]; }
        var _this = _super.call(this) || this;
        _this.mCenter = center;
        _this.mWidth = width;
        _this.mViewport = viewportArray;
        _this.mNearPlane = 0;
        _this.mFarPlane = 1000;
        _this.mViewMatrix = new mat4();
        _this.mProjMatrix = new mat4();
        _this.mVPMatrix = new mat4();
        _this.mBgColor = [1.0, 0.4, 0.3, 1.0];
        return _this;
    }
    ;
    Camera.prototype.initialize = function () {
        var gl = getApplication().gl;
        gl.viewport(this.mViewport[0], this.mViewport[1], this.mViewport[2], this.mViewport[3]);
        gl.scissor(this.mViewport[0], this.mViewport[1], this.mViewport[2], this.mViewport[3]);
        gl.clearColor(this.mBgColor[0], this.mBgColor[1], this.mBgColor[2], this.mBgColor[3]);
        gl.enable(gl.SCISSOR_TEST);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.disable(gl.SCISSOR_TEST);
        this.mViewMatrix =
            mat4.lookAt(new vec3([this.mCenter[0], this.mCenter[1], 10]), new vec3([this.mCenter[0], this.mCenter[1], 0]), new vec3([0, 1, 0]));
        var halfWidth = 0.5 * this.mWidth;
        var halfHeight = halfWidth * this.mViewport[3] / this.mViewport[2];
        this.mProjMatrix =
            mat4.orthographic(-halfWidth, halfWidth, -halfHeight, halfHeight, this.mNearPlane, this.mFarPlane);
        this.mVPMatrix =
            this.mProjMatrix.multiply(this.mViewMatrix);
    };
    ;
    Object.defineProperty(Camera.prototype, "getCenter", {
        get: function () { return this.mCenter; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Camera.prototype, "setCenter", {
        set: function (center) {
            this.mCenter[0] = center[0];
            this.mCenter[1] = center[1];
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Camera.prototype, "getWidth", {
        get: function () { return this.mWidth; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Camera.prototype, "setWidth", {
        set: function (width) { this.mWidth = width; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Camera.prototype, "getViewport", {
        get: function () { return this.mViewport; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Camera.prototype, "setViewport", {
        set: function (viewportArray) {
            this.mViewport = viewportArray;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Camera.prototype, "getBgColor", {
        get: function () { return this.mBgColor; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Camera.prototype, "setBgColor", {
        set: function (color) { this.mBgColor = color; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Camera.prototype, "getVPMatrix", {
        get: function () { return this.mVPMatrix; },
        enumerable: false,
        configurable: true
    });
    ;
    return Camera;
}(Component));
export default Camera;
;
//# sourceMappingURL=Camera.js.map