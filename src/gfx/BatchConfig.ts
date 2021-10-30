import { VertexBuffer, IndexBuffer } from "./Buffer.js";
import GraphicsDevice from "./GraphicsDevice.js";
import Texture from "./Texture.js";



export class QuadBatch {

    private maxQuads : number = 1000;
    private verticeCount : number = 10;
    private verticeNumber : number = 4 * this.verticeCount;
    private maxVertices : number = this.maxQuads * this.verticeNumber;
    private maxIndices : number = this.maxQuads * 6;
    private maxTextures : number = null;
    private count : number = 0;
    private vertices : Float32Array = new Float32Array(this.maxVertices);
    private indices : Uint16Array = new Uint16Array(this.maxIndices);
    private gl : any = null;
    private graphicsDevice : GraphicsDevice = null;


    constructor(gl : any, graphicsDevice : GraphicsDevice){
        this.gl = gl;
        this.graphicsDevice = graphicsDevice;
        this.indiceInitialize();
        this.maxTextures = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
    };


    addQuad(vertices : Array<any>):void{
        if (this.count + 1 > this.maxQuads){
            this.flush();
        }

        for(let i = 0; i < 4; i++){
            // position
            this.vertices[0 + ((this.count) * this.verticeNumber) + (i * this.verticeCount)] 
                            = vertices[0 + (i * this.verticeCount)];
            this.vertices[1 + ((this.count) * this.verticeNumber) + (i * this.verticeCount)] 
                            = vertices[1 + (i * this.verticeCount)];
            this.vertices[2 + ((this.count) * this.verticeNumber) + (i * this.verticeCount)] 
                            = vertices[2 + (i * this.verticeCount)];
            // color
            this.vertices[3 + ((this.count) * this.verticeNumber) + (i * this.verticeCount)] 
                            = vertices[3 + (i * this.verticeCount)];
            this.vertices[4 + ((this.count) * this.verticeNumber) + (i * this.verticeCount)] 
                            = vertices[4 + (i * this.verticeCount)];
            this.vertices[5 + ((this.count) * this.verticeNumber) + (i * this.verticeCount)] 
                            = vertices[5 + (i * this.verticeCount)];
            this.vertices[6 + ((this.count) * this.verticeNumber) + (i * this.verticeCount)] 
                            = vertices[6 + (i * this.verticeCount)];
            // tex coords
            this.vertices[7 + ((this.count) * this.verticeNumber) + (i * this.verticeCount)] 
                            = vertices[7 + (i * this.verticeCount)];
            this.vertices[8 + ((this.count) * this.verticeNumber) + (i * this.verticeCount)] 
                            = vertices[8 + (i * this.verticeCount)];
            // tex index 
            this.vertices[9 + ((this.count) * this.verticeNumber) + (i * this.verticeCount)]
                            = vertices[9 + (i * this.verticeCount)];

        };
        
        this.count++;
    };

    flush():void{
        new VertexBuffer(this.gl, this.graphicsDevice, this.vertices);
        new IndexBuffer(this.gl, this.graphicsDevice, this.indices);
        this.reset();
    };

    reset():void{
        this.vertices = new Float32Array(this.maxVertices);
        this.count = 0;
    };


    indiceInitialize():void{
        let offset = 0;
        for(let i = 0; i < this.maxIndices; i+=6){
            this.indices[0 + i] = 0 + offset; // 0
            this.indices[1 + i] = 1 + offset; // 1
            this.indices[2 + i] = 2 + offset; // 2
            this.indices[3 + i] = 3 + offset; // 3
            this.indices[4 + i] = 2 + offset; // 2 
            this.indices[5 + i] = 0 + offset; // 0
            offset += 4;
        };
    };




}