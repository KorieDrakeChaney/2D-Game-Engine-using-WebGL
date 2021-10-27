import { getApplication } from '../framework/globals.js';
import Application from '../framework/Application.js';
import {VertexBuffer, IndexBuffer} from './Buffer.js';
import * as Shader from "./Shader.js";
import { QuadBatch } from './BatchConfig.js';

export default class GraphicsDevice {

    private vbuffers : Array<VertexBuffer> = new Array();
    private ibuffers : Array<IndexBuffer> = new Array();
    private texture : Array<any>;
    private gl : any;
    private app : Application;
    private program : any;    
    private quadBatch : QuadBatch;

    constructor(app : Application){
        this.app = app;
        this.gl = this.app.getGL();
        this.program = Shader.getProgram(this.gl);
        this.quadBatch = new QuadBatch(this.gl, this);
    };


    initalize():void {
        this.quadBatch.flush();
        this.gl.useProgram(this.program);
        this.bindAll();
        this.unbindAll();

        
    };

    update():void {
    };



    bindAll():void {
        this.vbuffers.forEach(buffer => {
            buffer.bind();
        });

        this.ibuffers.forEach(buffer => {
            buffer.bind();
        });

    };

    unbindAll():void {
        this.vbuffers.forEach(buffer => {
            buffer.unbind();
        });

        this.ibuffers.forEach(buffer => {
            buffer.unbind();
        });
    };

    addVBuffer(vBuffer : VertexBuffer):void {
        this.vbuffers.push(vBuffer);
    };

    addIBuffer(iBuffer : IndexBuffer):void{
        this.ibuffers.push(iBuffer);
    };

    add(vertices : Array<number>):void{
        this.quadBatch.addQuad(vertices);
    };  

}