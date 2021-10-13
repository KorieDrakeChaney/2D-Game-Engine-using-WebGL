import {VBO as vbo} from './vbo.js';
import {IBO as ibo} from './ibo.js';
import {currentGL} from '../framework/globals.js';

class Renderer {
    constructor(shader){
        var gl = currentGL;
        
        this.vertices = [
                        0.5, 0.5, 0.0,
                        -0.5, 0.5, 0.0,
                        0.5, -0.5, 0.0,
                        -0.5, -0.5, 0.0
                    ];
        this.indices = [0, 1, 2, 2, 1, 3];

        this.VBO = gl.createBuffer();
        this.IBO = gl.createBuffer();
        this.shader = shader;
        this.program = null;

        this.mVertexPosAttrib = null;
    };

    initialize(){
        var gl = currentGL;
        this.program = this.shader.getProgram();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.IBO);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW)
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    };

    draw(){
        var gl = currentGL;
        gl.useProgram(this.program);
        gl.enableVertexAttribArray(0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.IBO);
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    };
    update() {

    };

    get getVBO() {
        return this.VBO;
    };

    set setVBO(VBO){
        this.VBO = VBO;
    };

    get getIBO() {
        return this.VBO;
    };

    set setIBO(IBO){
        this.IBO = IBO;
    };
};

export {Renderer};