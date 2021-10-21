/**
 * @class 
 * @name VertexBuffer
 * @description allows an abstraction of a vertex buffer
 */

export class VertexBuffer { 

    constructor(){

    };

    setData?():boolean{
        return true;
    };

    bind?():void{
        
    };

    unbind?():void{

    };

    static Create(vertices : Array<number>, size : Uint32Array){

    };
}


/**
 * @class 
 * @name IndexBuffer
 * @description allows an abstraction of a index buffer
 */

export class IndexBuffer {

    constructor(){

    };

    setData?():boolean{
        return true;
    };

    bind?():void{
        
    };

    unbind?():void{

    };

    static Create(indices : Uint32Array, size : Uint32Array){

    };
}