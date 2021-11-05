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

const maxQuadCount : number = 10000;
const maxVerticeCount : number = maxQuadCount * 4 *  (3 + 4 + 2 + 1);
const maxIndexCount : number = maxQuadCount * 6;


export class Vertex {
    public Position : vec3;
    public Color : vec4;
    public TexCoord : vec2;
    public TexIndex : number;
}



var idCheck = 0; // keeps track of new ids

var bufferID = 0;

class RenderData { 

    public Vertices : Float32Array;
    public Indices : Uint16Array;
    
    public QuadBuffer : Array<Vertex>;
    public QuadBufferPtr : number;

    public IndexCount : number = 0;

    public MaxPtr : number = 0;

    public ID : number = 0; 

    public bufferID : number; 

    constructor(){
        this.Vertices = new Float32Array(maxVerticeCount);
        this.Indices = new Uint16Array(maxIndexCount);
        this.QuadBuffer = new Array();
        this.QuadBufferPtr = 0;
        this.bufferID = bufferID++;
    };


};

let data = null;


let QuadData = {
    position : new vec2([0, 0]), 
    size : new vec2([1, 1]), 
    color : new vec4([1, 1, 1, 1]), 
    texIndex : 0
}


export function DrawQuad(quad : any = QuadData):void{

    if(data.IndexCount >= maxIndexCount){
        EndBatch();
        Flush();
        BeginBatch();
    };

    if(!quad.translation){
        quad.translation = QuadData.position;
    };
    let originalPos = quad.translation.add(QuadData.position);

    if(!quad.scale){
        quad.scale = QuadData.size;
    };
    let size = quad.scale.multiply(QuadData.size);

    if(!quad.rotation){
        quad.rotation = 0;
    };
    let rotation = quad.rotation;

    if(!quad.color){
        quad.color = QuadData.color;
    };
    let color = quad.color;

    if(!quad.texIndex){
        quad.texIndex = QuadData.texIndex;
    };
    let texIndex = quad.texIndex;
    // bottom left
    if(quad.id){
        data.ID = quad.id;

    }
    else if(quad.id == null) {
        quad.id = data.ID++;
    };

    let id = quad.id;

    while(id >= maxQuadCount){
        id -= maxQuadCount;
    };

    data.QuadBufferPtr = 4 * id;

    if(data.QuadBuffer[data.QuadBufferPtr] == null){
        data.IndexCount+=6;
    };
    
    
    data.QuadBuffer[data.QuadBufferPtr] = new Vertex();

    let center = originalPos;
 
    let position = new vec2([center.x + (((originalPos.x - size.x) - center.x) * Math.cos(rotation)) - (((originalPos.y - size.y) - center.y) * Math.sin(rotation)), 
                             center.y + (((originalPos.x - size.x) - center.x) * Math.sin(rotation)) + (((originalPos.y - size.y) - center.y) * Math.cos(rotation))]);

    data.QuadBuffer[data.QuadBufferPtr].Position = new vec3([position.x, position.y, 0]);
    data.QuadBuffer[data.QuadBufferPtr].Color = color;
    data.QuadBuffer[data.QuadBufferPtr].TexCoord = new vec2([1.0, 1.0])
    data.QuadBuffer[data.QuadBufferPtr].TexIndex = texIndex;

    data.QuadBufferPtr++;
    // top left

    data.QuadBuffer[data.QuadBufferPtr] = new Vertex();

    position = new vec2([center.x + (((originalPos.x - size.x) - center.x) * Math.cos(rotation)) - (((originalPos.y + size.y) - center.y) * Math.sin(rotation)), 
        center.y + (((originalPos.x - size.x) - center.x) * Math.sin(rotation)) + (((originalPos.y + size.y) - center.y) * Math.cos(rotation))]);

    data.QuadBuffer[data.QuadBufferPtr].Position = new vec3([position.x, position.y, 0]);
    data.QuadBuffer[data.QuadBufferPtr].Color = color;
    data.QuadBuffer[data.QuadBufferPtr].TexCoord = new vec2([0.0, 1.0])
    data.QuadBuffer[data.QuadBufferPtr].TexIndex = texIndex;

    data.QuadBufferPtr++;
    // top right

    data.QuadBuffer[data.QuadBufferPtr] = new Vertex();

    position = new vec2([center.x + (((originalPos.x + size.x) - center.x) * Math.cos(rotation)) - (((originalPos.y + size.y) - center.y) * Math.sin(rotation)), 
        center.y + (((originalPos.x + size.x) - center.x) * Math.sin(rotation)) + (((originalPos.y + size.y) - center.y) * Math.cos(rotation))]);

    data.QuadBuffer[data.QuadBufferPtr].Position = new vec3([position.x, position.y, 0]);
    data.QuadBuffer[data.QuadBufferPtr].Color = color;
    data.QuadBuffer[data.QuadBufferPtr].TexCoord = new vec2([1.0, 0.0])
    data.QuadBuffer[data.QuadBufferPtr].TexIndex = texIndex;

    data.QuadBufferPtr++;
    // bottom right

    data.QuadBuffer[data.QuadBufferPtr] = new Vertex();

    position = new vec2([center.x + (((originalPos.x + size.x) - center.x) * Math.cos(rotation)) - (((originalPos.y - size.y) - center.y) * Math.sin(rotation)), 
        center.y + (((originalPos.x + size.x) - center.x) * Math.sin(rotation)) + (((originalPos.y - size.y) - center.y) * Math.cos(rotation))]);

    data.QuadBuffer[data.QuadBufferPtr].Position = new vec3([position.x, position.y, 0]);
    data.QuadBuffer[data.QuadBufferPtr].Color = color;
    data.QuadBuffer[data.QuadBufferPtr].TexCoord = new vec2([0.0, 0.0])
    data.QuadBuffer[data.QuadBufferPtr].TexIndex = texIndex;

    data.QuadBufferPtr++;
    
    if (data.MaxPtr < data.QuadBufferPtr){
        data.MaxPtr = data.QuadBufferPtr;
    };


};

export function BeginBatch():void{
        data = new RenderData();
    };

export function EndBatch():void{
        indiceInitialize();
        vertexInitialize();
    };

export function Flush():void
    {
        if(idCheck == data.bufferID){
            new VertexBuffer(data.Vertices, data.bufferID, BUFFER_DYNAMIC);
            new IndexBuffer(data.Indices, data.bufferID);
            idCheck++;
        }
    };



export function vertexInitialize():void{
        let count = 10;
        for(let i = 0; i < data.MaxPtr; i++){
            
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

export function indiceInitialize():void{
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











