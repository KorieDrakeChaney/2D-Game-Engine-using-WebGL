export default function VBO(gl, vertices) {
    var _gl = gl;
    var _vertices = vertices;
    var vbo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Float32Array(_vertices), gl.STATIC_DRAW);
    return vbo;
}
;
//# sourceMappingURL=vertex-buffer.js.map