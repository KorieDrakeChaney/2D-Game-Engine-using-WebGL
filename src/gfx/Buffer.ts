import {getApplication} from '../framework/globals.js';
import {BUFFER_DYNAMIC, BUFFER_GPUDYNAMIC, BUFFER_STATIC, BUFFER_STREAM,
        FLOAT, FLOAT2, FLOAT3, FLOAT4, 
        INT, INT2, INT3, INT4, 
        MAT3, MAT4, 
        BOOL} from './constants.js';
import GraphicsDevice from './GraphicsDevice.js';


    /**
     * @class 
     * @name VertexBuffer
     * @description allows an abstraction of a vertex buffer
     */


let id = 0;
let gl = getApplication().gl;
 

export class VertexBuffer { 

    private data : ArrayBuffer; 
    private id : number;
    private numBytes : number;
    private storage : Float32Array;
    private usage : number;

    constructor(graphicsDevice : GraphicsDevice, vertices : Float32Array, usage : number = BUFFER_STATIC){
        this.id = id++;
        this.usage = usage;
        this.storage = vertices;
        graphicsDevice.addVBuffer(this);
    };

    setData(d : typeof this.data):boolean{
        if (d){
            this.data = d;
            return true;
        };
        return false;
    };

    bind():void{
        if(!this.data){
            this.data = gl.createBuffer();
        };
        
        let glUsage : any;

        switch (this.usage) {
            case BUFFER_STATIC:
                glUsage = gl.STATIC_DRAW;
                break;
            case BUFFER_DYNAMIC:
                glUsage = gl.DYNAMIC_DRAW;
                break;
            case BUFFER_STREAM:
                glUsage = gl.STREAM_DRAW;
                break;
            case BUFFER_GPUDYNAMIC:
                glUsage = gl.DYNAMIC_COPY;
                break;
        }
        gl.bindBuffer(gl.VERTEX_ARRAY, this.data);
        gl.bufferData(gl.VERTEX_ARRAY, this.storage, null, glUsage);
    };

    unbind():void{
        gl.bindBuffer(gl.VERTEX_ARRAY, null);
    };
};

/**
 * @class 
 * @name IndexBuffer
 * @description allows an abstraction of a index buffer
 */


 export class IndexBuffer {

    private data : ArrayBuffer; 
    private storage : Uint32Array;
    private id : number;
    private numBytes : number;
    private usage : number;

    constructor(graphicsDevice : GraphicsDevice, indices : Uint32Array, usage : number = BUFFER_STATIC){
        this.id = id++;
        this.storage = indices;
        graphicsDevice.addIBuffer(this);
    };

    setData?(d : typeof this.data):boolean{
        if (d){
            this.data = d;
            return true;
        };
        return false;
    };

    bind?():void{
        if(!this.data){
            this.data = gl.createBuffer();
        };
        if(!this.data){
            this.data = gl.createBuffer();
        };
        
        let glUsage : any;

        switch (this.usage) {
            case BUFFER_STATIC:
                glUsage = gl.STATIC_DRAW;
                break;
            case BUFFER_DYNAMIC:
                glUsage = gl.DYNAMIC_DRAW;
                break;
            case BUFFER_STREAM:
                glUsage = gl.STREAM_DRAW;
                break;
            case BUFFER_GPUDYNAMIC:
                glUsage = gl.DYNAMIC_COPY;
                break;
        };

        gl.bindBuffer(gl.ELEMENT_VERTEX_ARRAY, this.data);
        gl.bufferData(gl.ELEMENT_VERTEX_ARRAY, this.storage, null, glUsage);
    };

    unbind?():void{
        gl.bindBuffer(gl.ELEMENT_VERTEX_ARRAY, null);
    };

 
}