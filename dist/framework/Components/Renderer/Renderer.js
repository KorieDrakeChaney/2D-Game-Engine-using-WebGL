import { getApplication } from '../../globals.js';
import vec2 from '../../../math/vec2.js';
import vec4 from '../../../math/vec4.js';
var vertex = function (position, size, color, textureID) {
    var vertices = null;
    return vertices;
};
var quadData = (function () {
    function quadData() {
    }
    ;
    quadData.vao = 0;
    quadData.vbo = 0;
    quadData.ibo = 0;
    return quadData;
}());
;
var Renderer2D = (function () {
    function Renderer2D() {
        this.maxQuadCount = 1000;
        this.maxVertexCount = this.maxQuadCount * 4;
        this.maxIndexCount = this.maxQuadCount * 6;
        this.maxTextureCount = 16;
    }
    ;
    Renderer2D.DrawQuad = function (position, size, color, textureID) {
        if (position === void 0) { position = new vec2([1, 1]); }
        if (size === void 0) { size = new vec2([1, 1]); }
        if (color === void 0) { color = new vec4([1, 1, 1, 1]); }
    };
    return Renderer2D;
}());
export default Renderer2D;
var getProgram = function () {
    var gl = getApplication().gl;
    var vertexShader = getShader("../../../../res/shader/simpleVS.glsl", gl.VERTEX_SHADER);
    var fragmentShader = getShader("../../../../res/shader/simpleFS.glsl", gl.FRAGMENT_SHADER);
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    return program;
};
var getShader = function (file, shaderType) {
    var gl = getApplication().gl;
    var xttp = new XMLHttpRequest();
    xttp.open("GET", file, false);
    try {
        xttp.send();
    }
    catch (err) {
        alert("Failed to load shader: " + file);
        return null;
    }
    ;
    var shaderSource = xttp.responseText;
    console.log(shaderSource);
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    return shader;
};
var quadBatch = (function () {
    function quadBatch() {
        this._gl = getApplication().gl;
        this._vao = this._gl.createVertexArray();
        this._vbo = this._gl.createBuffer();
        this._ibo = this._gl.createBuffer();
        this._program = getProgram();
    }
    quadBatch.prototype.flush = function () {
        this._gl.bindVertexArray(this._vao);
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vbo);
        this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(this.vertices), this._gl.STATIC_DRAW);
        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._vbo);
        this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(this.indices), this._gl.STATIC_DRAW);
        this._gl.drawElements(this._gl.TRIANGLES, this.indices.length, this._gl.UNSIGNED_SHORT, 0);
    };
    ;
    quadBatch.prototype.startBatch = function () {
    };
    ;
    quadBatch.prototype.endBatch = function () {
        this._gl.useProgram(null);
        this._gl.bindVertexArray(null);
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null);
        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, null);
    };
    ;
    quadBatch.prototype.initialize = function () {
        var vertices = [0.5, 0.5, 0.0,
            -0.5, 0.5, 0.0,
            -0.5, -0.5, 0.0,
            0.5, -0.5, 0.0];
        var indices = [0, 1, 2, 2, 3, 0];
        this._gl.bindVertexArray(this._vao);
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vbo);
        this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(vertices), this._gl.STATIC_DRAW);
        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this._gl.STATIC_DRAW);
        this._gl.vertexAttribPointer(0, 3, this._gl.FLOAT, false, 0, 0);
    };
    ;
    quadBatch.prototype.render = function () {
        this._gl.enableVertexAttribArray(0);
        this._gl.useProgram(this._program);
        this._gl.bindVertexArray(this._vao);
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vbo);
        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        this._gl.drawElements(this._gl.TRIANGLES, 6, this._gl.UNSIGNED_SHORT, 0);
    };
    ;
    return quadBatch;
}());
export { quadBatch };
;
//# sourceMappingURL=Renderer.js.map