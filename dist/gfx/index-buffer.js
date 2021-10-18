export default function IBO(gl, indices) {
    var _gl = gl;
    var _indices = indices;
    var ibo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(_indices), gl.STATIC_DRAW);
    return ibo;
}
;
//# sourceMappingURL=index-buffer.js.map