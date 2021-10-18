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
import VBO from '../gfx/vertex-buffer';
import IBO from '../gfx/index-buffer';
import Shader from '../gfx/shader';
import { currentGL } from '../framework/globals';
import Component from './Component';
var Renderer = (function (_super) {
    __extends(Renderer, _super);
    function Renderer() {
        var _this = _super.call(this) || this;
        _this.VBO = null;
        _this.IBO = null;
        _this.vertices = [0.5, 0.5, 0.0, -0.5, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0];
        _this.indices = [0, 1, 2, 2, 3, 0];
        _this.program = null;
        _this.aPos = null;
        return _this;
    }
    ;
    Renderer.prototype.initialize = function () {
        var gl = currentGL;
        this.IBO = IBO(gl, this.indices);
        this.VBO = VBO(gl, this.vertices);
    };
    ;
    Renderer.prototype.draw = function () {
        var _this = this;
        var gl = currentGL;
        Shader(this.program, "../res/shader/simpleVS.glsl", "../res/shader/simpleFS.glsl")
            .then(function () {
            gl.useProgram(_this.program);
            _this.aPos = gl.getAttribLocation(_this.program, 'aPos');
            gl.vertexAttribPointer(_this.aPos, 3, gl.UNSIGNED_SHORT, false, 0, 0);
            gl.enableVertexAttribArray(_this.aPos);
            gl.bindBuffer(gl.ARRAY_BUFFER, _this.VBO);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _this.IBO);
            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNTED_SHORT, 0);
        });
    };
    ;
    return Renderer;
}(Component));
export default Renderer;
;
//# sourceMappingURL=Renderer.js.map