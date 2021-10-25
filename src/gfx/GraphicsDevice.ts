import Application from "../framework/application";
import {VertexBuffer, IndexBuffer} from './Buffer.js';
import Shader from "./shader";

export default class GraphicsDevice {

    private vbuffers : Array<VertexBuffer>;
    private ibuffers : Array<IndexBuffer>;
    private texture : Array<any>;
    private app : Application;

    constructor(app : Application){
        this.app = app;
    };


    initalize():void {
        this.bindAll();
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


    CreateShader():Shader{
        
        return new Shader()
    }

}