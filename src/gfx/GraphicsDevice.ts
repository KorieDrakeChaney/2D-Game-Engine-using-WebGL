import { getApplication } from '../framework/globals.js';
import Application from '../framework/Application.js';
import {VertexBuffer, IndexBuffer} from './Buffer.js';
import Shader from "./Shader.js"
import {getProgram}  from "./Shader.js";
import { BUFFER_DYNAMIC, BUFFER_GPUDYNAMIC, BUFFER_STATIC, BUFFER_STREAM,} from './constants.js';
import mat4 from '../math/mat4.js';

export default class GraphicsDevice {

    private vbuffers : Array<VertexBuffer> = [];

    private ibuffers : Array<IndexBuffer> = [];
    private shaders : Array<Shader> = [];
    private texture : Array<any>;
    private gl : any;
    private app : Application;
    private program : any;    

    constructor(app : Application){
        this.app = app;
        this.gl = this.app.gl;
        this.program = getProgram(this.gl);
    };


    initalize():void {
        this.gl.useProgram(this.program);
        this.update();
    };




    update():void {
 
        for(let i = 0; i < this.ibuffers.length; i++){
            this.vbuffers[i].bind()
            this.ibuffers[i].bind();

            this.vbuffers[i].unbind();
            this.ibuffers[i].unbind();
        }

    };



    addVBuffer(vBuffer : VertexBuffer):void {
        this.vbuffers.push(vBuffer);
    };

    addIBuffer(iBuffer : IndexBuffer):void{
        this.ibuffers.push(iBuffer);
    };

    addShader(shader : Shader):void{
        this.shaders.push(shader);
    };  


    setUniformMat4(name : string, matrix : mat4){
        this.gl.useProgram(this.program);
        let loc = this.gl.getUniformLocation(this.program, name);
        if(!loc){
            console.error("location failed ! ");
        }
        this.gl.uniformMatrix4fv(loc, false, matrix.values);
        this.gl.useProgram(null);
    };

}