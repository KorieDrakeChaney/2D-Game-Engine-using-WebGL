import {getApplication} from '../framework/globals.js';
import Shader from './shader.js';
import {BUFFER_DYNAMIC, BUFFER_GPUDYNAMIC, BUFFER_STATIC, BUFFER_STREAM} from './constants.js'

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
    private numBytes : format

    constructor(vertices : Array<number>, size : Uint32Array){
        this.id = id++;
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
        gl.bindBuffer(gl.VERTEX_ARRAY, this.data);
        gl.bufferData(gl.VERTEX_ARRAY, new Float32Array(this.data), null, gl.DYNAMIC_DRAW);
    };

    unbind():void{
        gl.bindBuffer(gl.VERTEX_ARRAY, null);
    };

    Create(vertices : Array<number>, size : Uint32Array):void{

        gl.bindBuffer(gl.ARRAY_BUFFER, this.data);



    };
}


/**
 * @class 
 * @name IndexBuffer
 * @description allows an abstraction of a index buffer
 */

export class IndexBuffer {

    private data : ArrayBuffer; 


    constructor(indices : Uint32Array, size : Uint32Array){
``
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
        gl.bindBuffer(gl.ELEMENT_VERTEX_ARRAY, this.data);
        gl.bufferData(gl.ELEMENT_VERTEX_ARRAY, new Uint32Array(this.data), null, gl.DYNAMIC_DRAW);
    };

    unbind?():void{
        gl.bindBuffer(gl.ELEMENT_VERTEX_ARRAY, null);
    };

 
}