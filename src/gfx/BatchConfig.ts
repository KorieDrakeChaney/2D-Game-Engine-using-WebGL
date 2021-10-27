import { VertexBuffer, IndexBuffer } from "./Buffer.js";
import GraphicsDevice from "./GraphicsDevice.js";



export class QuadBatch {

    private maxQuads : number = 100;
    private maxVertices : number = this.maxQuads * (4 * (3 + 4));
    private maxIndices : number = this.maxQuads * 6;
    private count : number = 0;
    private vertices : Float32Array = new Float32Array(this.maxVertices);
    private indices : Uint16Array = new Uint16Array(this.maxIndices);
    private gl : any = null;
    private graphicsDevice : GraphicsDevice = null;


    constructor(gl : any, graphicsDevice : GraphicsDevice){
        this.gl = gl;
        this.graphicsDevice = graphicsDevice;
        this.indiceInitialize();
    };


    addQuad(vertices : Array<any>):void{
        if (this.count + 1 > 100){
            this.flush();
        }

        for(let i = 0; i < 4; i++){
            this.vertices[0 + ((this.count) * 28) + (i * 7)] = vertices[0 + (i * 7)];
            this.vertices[1 + ((this.count) * 28) + (i * 7)] = vertices[1 + (i * 7)];
            this.vertices[2 + ((this.count) * 28) + (i * 7)] = vertices[2 + (i * 7)];
            this.vertices[3 + ((this.count) * 28) + (i * 7)] = vertices[3 + (i * 7)];
            this.vertices[4 + ((this.count) * 28) + (i * 7)] = vertices[4 + (i * 7)];
            this.vertices[5 + ((this.count) * 28) + (i * 7)] = vertices[5 + (i * 7)];
            this.vertices[6 + ((this.count) * 28) + (i * 7)] = vertices[6 + (i * 7)];
        };
        
        this.count++;
    };

    flush(){
        console.log('dam');
        console.log(this.vertices);
        new VertexBuffer(this.gl, this.graphicsDevice, this.vertices);
        new IndexBuffer(this.gl, this.graphicsDevice, this.indices);

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