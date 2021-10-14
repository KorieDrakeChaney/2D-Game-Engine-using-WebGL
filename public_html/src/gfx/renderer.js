import {VBO as vbo} from './vertex-buffer.js';
import {IBO as ibo} from './index-buffer.js';
import {Transform} from './transform.js';
import {currentGL} from '../framework/globals.js';
import {Camera} from './camera.js';
import {currentApplication} from '../framework/globals.js';
import * as vec2 from '../math/vec2.js';

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
        this.transform = new Transform();
        this.camera = new Camera(
            vec2.fromValues(20, 60), 
            20, 
            [0, 0 , currentApplication.width, currentApplication.height]
        );

        this.mModelTransform = null;
        this.mVertexPosAttrib = null;
        this.mViewProjTransform = null;
        
    };

    initialize(){
        
        var gl = currentGL;
        this.program = this.shader.getProgram();
        
        this.IBO = ibo(gl, this.indices);
        this.VBO = vbo(gl, this.vertices);

        this.mVertexPosAttrib = gl.getAttribLocation(this.program, "aPos");
        this.mModelTransform = gl.getUniformLocation(this.program, "uModelTransform");
        this.mViewProjTransform = gl.getUniformLocation(this.program, "uViewProjTransform");

        this.camera.initialize();

        gl.vertexAttribPointer(this.mVertexPosAttrib, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

        this.clean(gl);

    };

    draw(){
        var gl = currentGL;
        this.activateShader(gl);
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
        this.clean(gl);
    };

    activateShader(gl){
        gl.useProgram(this.program);
        gl.enableVertexAttribArray(this.mVertexPosAttrib);
        gl.uniformMatrix4fv(this.mModelTransform, false, this.transform.getModel);
        gl.uniformMatrix4fv(this.mViewProjTransform, false, this.camera.getVPMatrix);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.IBO);
    };

    clean(gl){

        gl.useProgram(null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

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

    get getTransform() { return this.transform; };
};

export {Renderer};