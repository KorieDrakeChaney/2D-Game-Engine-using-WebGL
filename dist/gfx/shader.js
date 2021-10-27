var Shader = (function () {
    function Shader(graphicsDevice, definition) {
        this.ready = false;
        this.failed = false;
        this.defintion = {
            attributes: 0,
            uniforms: 0,
            samplers: 0
        };
        this.init();
    }
    ;
    Shader.prototype.init = function () {
        this.attributes = [];
        this.uniforms = [];
        this.samplers = [];
        this.ready = false;
        this.failed = false;
    };
    return Shader;
}());
export default Shader;
;
export var getProgram = function (gl) {
    var vertexShader = this.getShader(gl, "../../../../res/shader/simpleVS.glsl", gl.VERTEX_SHADER);
    var fragmentShader = this.getShader(gl, "../../../../res/shader/simpleFS.glsl", gl.FRAGMENT_SHADER);
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