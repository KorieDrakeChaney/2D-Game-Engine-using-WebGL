import { getApplication } from '../../globals.js';
import vec2 from '../../../math/vec2.js';
import vec4 from '../../../math/vec4.js';
var gl = getApplication().gl;
var quadData = (function () {
    function quadData() {
        this.vao = 0;
        this.vbo = 0;
        this.ibo = 0;
    }
    return quadData;
}());
;
var QuadBatch = (function () {
    function QuadBatch() {
        this.maxQuadCount = 1000;
        this.maxVertexCount = this.maxQuadCount * 4 * 4;
        this.maxIndexCount = this.maxQuadCount * 6;
        this.maxTextureCount = 16;
        this._vao = gl.createVertexArray();
        this._vbo = gl.createBuffer();
        this._ibo = gl.createBuffer();
        this._program = getProgram();
        this.vertices = new Float32Array(this.maxVertexCount);
        this.indices = new Uint32Array(this.maxIndexCount);
        this.count = 0;
    }
    QuadBatch.prototype.add = function (v) {
        if (this.count > this.maxQuadCount) {
            this.flush();
            this.endBatch();
        }
    };
    QuadBatch.prototype.flush = function () {
        gl.bindVertexArray(this._vao);
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vbo);
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, null, gl.DYNAMIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._vbo);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.DYNAMIC_DRAW);
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    };
    ;
    QuadBatch.prototype.startBatch = function () {
    };
    ;
    QuadBatch.prototype.endBatch = function () {
        gl.useProgram(null);
        gl.bindVertexArray(null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };
    ;
    QuadBatch.prototype.initialize = function () {
        var vertices = [0.5, 0.5, 0.0,
            -0.5, 0.5, 0.0,
            -0.5, -0.5, 0.0,
            0.5, -0.5, 0.0];
        var indices = [0, 1, 2, 2, 3, 0];
        this._program = getProgram();
        gl.bindVertexArray(this._vao);
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vbo);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
    };
    ;
    QuadBatch.prototype.render = function () {
        gl.enableVertexAttribArray(0);
        gl.useProgram(this._program);
        gl.bindVertexArray(this._vao);
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vbo);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    };
    ;
    return QuadBatch;
}());
export { QuadBatch };
;
var DrawQuad = function (position, size, color, textureID) {
    if (position === void 0) { position = new vec2([1, 1]); }
    if (size === void 0) { size = new vec2([1, 1]); }
    if (color === void 0) { color = new vec4([1, 1, 1, 1]); }
};
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
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    return shader;
};
//# sourceMappingURL=Renderer.js.map