export default function VBO(gl, vertices : Array<number>){
    let _gl = gl;
    let _vertices = vertices;

    let vbo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Float32Array(_vertices), gl.STATIC_DRAW);

    return vbo;
};
