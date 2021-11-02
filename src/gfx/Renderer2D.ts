import { VertexBuffer, IndexBuffer } from "./Buffer.js";
import GraphicsDevice from "./GraphicsDevice.js";
import Texture from "./Texture.js";
import { getApplication } from '../framework/globals.js';
import mat4 from '../math/mat4.js';
import vec2 from '../math/vec2.js';
import vec3 from '../math/vec3.js';
import vec4 from '../math/vec4.js';
import {
    BUFFER_DYNAMIC, BUFFER_GPUDYNAMIC, BUFFER_STATIC, BUFFER_STREAM,
    FLOAT, FLOAT2, FLOAT3, FLOAT4, 
    INT, INT2, INT3, INT4, 
    MAT3, MAT4, 
    BOOL
} from './constants.js';




const maxQuadCount : number = 1250;
const maxVerticeCount = maxQuadCount * 4 *  (3 + 4 + 2 + 1);
const maxIndexCount = maxQuadCount * 6;


class Vertex {
    public Position : vec3;
    public Color : vec4;
    public TexCoord : vec2;
    public TexIndex : number;
}



class RenderData { 

    public Vertices : Float32Array;
    public Indices : Uint16Array;
    
    public QuadBuffer : Array<Vertex>;
    public QuadBufferPtr : number;

    public IndexCount : number = 0;
    
    constructor(){
        this.Vertices = new Float32Array(maxVerticeCount);
        this.Indices = new Uint16Array(maxIndexCount);
        this.QuadBuffer = new Array();
        this.QuadBufferPtr = 0;
    };


};

let data = null;

export default class Renderer2D { 


    static DrawQuad(position : vec2, size : number, color : vec4, texIndex : number = 0):void{
        
        if(data.IndexCount >= maxIndexCount){
            Renderer2D.EndBatch();
            Renderer2D.Flush();
            Renderer2D.BeginBatch();
        };

        // bottom right

        data.QuadBuffer[data.QuadBufferPtr] = new Vertex();

        data.QuadBuffer[data.QuadBufferPtr].Position = new vec3([position.x - size, position.y - size, 0]);
        data.QuadBuffer[data.QuadBufferPtr].Color = color;
        data.QuadBuffer[data.QuadBufferPtr].TexCoord = new vec2([1.0, 1.0])
        data.QuadBuffer[data.QuadBufferPtr].TexIndex = texIndex;

        data.QuadBufferPtr++;
        // bottom left

        data.QuadBuffer[data.QuadBufferPtr] = new Vertex();

        data.QuadBuffer[data.QuadBufferPtr].Position = new vec3([position.x - size, position.y + size, 0]);
        data.QuadBuffer[data.QuadBufferPtr].Color = color;
        data.QuadBuffer[data.QuadBufferPtr].TexCoord = new vec2([0.0, 1.0])
        data.QuadBuffer[data.QuadBufferPtr].TexIndex = texIndex;

        data.QuadBufferPtr++;
        // top right

        data.QuadBuffer[data.QuadBufferPtr] = new Vertex();

        data.QuadBuffer[data.QuadBufferPtr].Position = new vec3([position.x + size, position.y + size, 0]);
        data.QuadBuffer[data.QuadBufferPtr].Color = color;
        data.QuadBuffer[data.QuadBufferPtr].TexCoord = new vec2([1.0, 0.0])
        data.QuadBuffer[data.QuadBufferPtr].TexIndex = texIndex;

        data.QuadBufferPtr++;
        // top left

        data.QuadBuffer[data.QuadBufferPtr] = new Vertex();

        data.QuadBuffer[data.QuadBufferPtr].Position = new vec3([position.x + size, position.y - size, 0]);
        data.QuadBuffer[data.QuadBufferPtr].Color = color;
        data.QuadBuffer[data.QuadBufferPtr].TexCoord = new vec2([0.0, 0.0])
        data.QuadBuffer[data.QuadBufferPtr].TexIndex = texIndex;

        data.QuadBufferPtr++;
        data.IndexCount+=6;

    };

    static BeginBatch():void{
        data = new RenderData();
    };

    static EndBatch():void{
        Renderer2D.indiceInitialize();
        Renderer2D.vertexInitialize();
    };

    static Flush():void{
        new VertexBuffer(data.Vertices, BUFFER_DYNAMIC);
        new IndexBuffer(data.Indices);
    };



    static vertexInitialize():void{
        let count = 10;
        for(let i = 0; i < data.QuadBufferPtr; i++){
            
            // position
            data.Vertices[0 + (count * i)] = data.QuadBuffer[i].Position.x;
            data.Vertices[1 + (count * i)] = data.QuadBuffer[i].Position.y;
            data.Vertices[2 + (count * i)] = data.QuadBuffer[i].Position.z;
            // color
            data.Vertices[3 + (count * i)] = data.QuadBuffer[i].Color.x;
            data.Vertices[4 + (count * i)] = data.QuadBuffer[i].Color.y;
            data.Vertices[5 + (count * i)] = data.QuadBuffer[i].Color.z;
            data.Vertices[6 + (count * i)] = data.QuadBuffer[i].Color.w;
            // texcoord
            data.Vertices[7 + (count * i)] = data.QuadBuffer[i].TexCoord.x;
            data.Vertices[8 + (count * i)] = data.QuadBuffer[i].TexCoord.y;
            // texindex
            data.Vertices[9 + (count * i)] = data.QuadBuffer[i].TexIndex;
        };
    }

    static indiceInitialize():void{
        let offset = 0;
        for(let i = 0; i < maxIndexCount; i+=6){
            data.Indices[0 + i] = 0 + offset; // 0
            data.Indices[1 + i] = 1 + offset; // 1
            data.Indices[2 + i] = 2 + offset; // 2
            data.Indices[3 + i] = 3 + offset; // 3
            data.Indices[4 + i] = 2 + offset; // 2 
            data.Indices[5 + i] = 0 + offset; // 0
            offset += 4;
        };
    };
}











