import mat4 from '../math/mat4.js';
import {BUFFER_DYNAMIC, BUFFER_GPUDYNAMIC, BUFFER_STATIC, BUFFER_STREAM,
        FLOAT, FLOAT2, FLOAT3, FLOAT4, 
        INT, INT2, INT3, INT4, 
        MAT3, MAT4, 
        BOOL,
    
        VERTEX_POSITION, COLOR, TEXTURE_COORD, TEXTURE_INDEX} from './constants.js';
import GraphicsDevice from './GraphicsDevice.js';
import { getApplication } from '../framework/globals.js';


    /**
     * @class 
     * @name VertexBuffer
     * @description allows an abstraction of a vertex buffer
     */


var id = 0;

export class VertexBuffer { 

    private data : ArrayBuffer = null; 
    public id : number = 0;
    private numBytes : number;
    private storage : Float32Array;
    private usage : number;
    private gl : any;

    constructor(vertices : Float32Array, usage : number = BUFFER_STATIC){
        this.id = id++;
        this.usage = usage;
        this.storage = vertices;
        this.gl = getApplication().gl;
        getApplication().GraphicsDevice.addVBuffer(this);
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

        this.data = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.data);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.storage, glUsage);

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

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.data);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, this.storage);

        this.gl.vertexAttribPointer(VERTEX_POSITION, 3, this.gl.FLOAT, false, 10 * FLOAT, 0);
        this.gl.enableVertexAttribArray(VERTEX_POSITION);
        this.gl.vertexAttribPointer(COLOR, 4, this.gl.FLOAT, false, 10 * FLOAT, 3 * FLOAT);
        this.gl.enableVertexAttribArray(COLOR);
        this.gl.vertexAttribPointer(TEXTURE_COORD, 2, this.gl.FLOAT, false, 10 * FLOAT, 7 * FLOAT);
        this.gl.enableVertexAttribArray(TEXTURE_COORD);
        this.gl.vertexAttribPointer(TEXTURE_INDEX, 1, this.gl.FLOAT, false, 10 * FLOAT, 9 * FLOAT);
        this.gl.enableVertexAttribArray(TEXTURE_INDEX);


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
    public id : number = 0;
    private numBytes : number;
    private usage : number;
    private gl : any;

    constructor(indices : Uint16Array, usage : number = BUFFER_STATIC){
        this.id = id++;
        this.storage = indices;
        this.usage = usage;
        this.gl = getApplication().gl;
        getApplication().GraphicsDevice.addIBuffer(this);

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
        
        this.data = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.data);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this.storage,  glUsage);


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



        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.data);
        this.gl.drawElements(this.gl.TRIANGLES, this.storage.length, this.gl.UNSIGNED_SHORT, 0);
    };

    unbind?():void{
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    };

 
}