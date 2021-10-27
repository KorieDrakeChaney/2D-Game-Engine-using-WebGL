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


var id = 0;

export class VertexBuffer { 

    private data : ArrayBuffer = null; 
    private id : number = 0;
    private numBytes : number;
    private storage : Float32Array;
    private usage : number;
    private gl : any;

    constructor(gl : any, graphicsDevice : GraphicsDevice, vertices : Float32Array, usage : number = BUFFER_STATIC){
        this.id = id++;
        this.usage = usage;
        this.storage = vertices;
        this.gl = gl;
        graphicsDevice.addVBuffer(this);

    };

    setData(d : typeof this.data):boolean{
        if (d){
            this.data = d;
            return true;
        };
        return false;
    };

    get getStorage(){
        return this.storage;
    }
    bind():void{

        if(!this.data){
            this.data = this.gl.createBuffer();
        };
        
        let glUsage : any;

        switch (this.usage) {
            case BUFFER_STATIC:
                glUsage = this.gl.STATIC_DRAW;
                break;
            case BUFFER_DYNAMIC:
                glUsage = this.gl.DYNAMIC_DRAW;
                break;
            case BUFFER_STREAM:
                glUsage = this.gl.STREAM_DRAW;
                break;
            case BUFFER_GPUDYNAMIC:
                glUsage = this.gl.DYNAMIC_COPY;
                break;
        };
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.data);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.storage, glUsage);
        this.gl.vertexAttribPointer(0, 3, this.gl.FLOAT, false, 7 * FLOAT, 0);
        this.gl.enableVertexAttribArray(0);
        this.gl.vertexAttribPointer(1, 4, this.gl.FLOAT, false, 7 * FLOAT, 3 * FLOAT);
        this.gl.enableVertexAttribArray(1);
        console.log('done');
    };

    unbind():void{
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    };


};

/**
 * @class 
 * @name IndexBuffer
 * @description allows an abstraction of a index buffer
 */


 export class IndexBuffer {

    private data : ArrayBuffer; 
    private storage : Uint16Array = null;
    private id : number = 0;
    private numBytes : number;
    private usage : number;
    private gl : any;

    constructor(gl : any, graphicsDevice : GraphicsDevice, indices : Uint16Array, usage : number = BUFFER_STATIC){
        this.id = id++;
        this.storage = indices;
        this.gl = gl;
        this.usage = usage;
        graphicsDevice.addIBuffer(this);
    };

    setData?(d : typeof this.data):boolean{
        if (d){
            this.data = d;
            return true;
        };
        return false;
    };

    get getStorage(){
        return this.storage;
    }

    bind?():void{
        if(!this.data){
            this.data = this.gl.createBuffer();
        };

        let glUsage : any;

        switch (this.usage) {
            case BUFFER_STATIC:
                glUsage = this.gl.STATIC_DRAW;
                break;
            case BUFFER_DYNAMIC:
                glUsage = this.gl.DYNAMIC_DRAW;
                break;
            case BUFFER_STREAM:
                glUsage = this.gl.STREAM_DRAW;
                break;
            case BUFFER_GPUDYNAMIC:
                glUsage = this.gl.DYNAMIC_COPY;
                break;
        }

        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.data);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this.storage,  glUsage);
        this.gl.drawElements(this.gl.TRIANGLES, this.storage.length, this.gl.UNSIGNED_SHORT, 0);
    };

    unbind?():void{
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    };

 
}