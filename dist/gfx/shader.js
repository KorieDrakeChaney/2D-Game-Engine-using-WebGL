var Shader = (function () {
    function Shader(gl, graphicsDevice, definition) {
        this.ready = false;
        this.failed = false;
        this.gl = null;
        this.defintion = {
            attributes: 0,
            uniforms: 0
        };
        this.init();
        this.gl = gl;
    }
    ;
    Shader.prototype.init = function () {
        this.attributes = [];
        this.uniforms = [];
        this.ready = false;
        this.failed = false;
    };
    ;
    Shader.prototype.bind = function () {
        this.attributes.forEach(function (attributes) {
        });
        this.uniforms.forEach(function (uniforms) {
        });
    };
    ;
    Shader.prototype.unbind = function () {
        this.attributes.forEach(function (attributes) {
        });
        this.uniforms.forEach(function (uniforms) {
        });
    };
    ;
    return Shader;
}());
export default Shader;
;
export var getProgram = function (gl) {
    var vertexShader = getShader(gl, "../../../../res/shader/simpleVS.glsl", gl.VERTEX_SHADER);
    var fragmentShader = getShader(gl, "../../../../res/shader/simpleFS.glsl", gl.FRAGMENT_SHADER);
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    return program;
};
export var getShader = function (gl, file, shaderType) {
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
//# sourceMappingURL=Shader.js.map