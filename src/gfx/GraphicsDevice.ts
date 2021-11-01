import { getApplication } from '../framework/globals.js';
import Application from '../framework/Application.js';
import {VertexBuffer, IndexBuffer} from './Buffer.js';
import Shader from "./Shader.js"
import {getProgram}  from "./Shader.js";
import { QuadBatch } from './BatchConfig.js';

export default class GraphicsDevice {

    private vbuffers : Array<VertexBuffer> = new Array();
    private ibuffers : Array<IndexBuffer> = new Array();
    private shaders : Array<Shader> = new Array();
    private texture : Array<any>;
    private gl : any;
    private app : Application;
    private program : any;    
    private quadBatch : QuadBatch;

    constructor(app : Application){
        this.app = app;
        this.gl = this.app.gl;
        this.program = getProgram(this.gl);
        this.quadBatch = new QuadBatch(this.gl, this);
    };


    initalize():void {
        this.quadBatch.flush();
        this.gl.useProgram(this.program);
        this.update();
    };




    update():void {

        for(let i = 0; i < this.vbuffers.length; i++){
            this.vbuffers[i].bind();
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

    add(vertices : Array<number>):void{
        this.quadBatch.addQuad(vertices);
    };  

}