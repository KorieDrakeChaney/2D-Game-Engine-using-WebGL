export default function IBO(gl, indices : Array<number>){
    let _gl = gl;
    let _indices = indices;

    let ibo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(_indices), gl.STATIC_DRAW);

    return ibo;
};
