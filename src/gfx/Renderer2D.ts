import { getApplication } from '../framework/globals.js';
import vec2 from '../math/vec2.js';
import vec4 from '../math/vec4.js';
import { QuadBatch } from './BatchConfig.js';
import {VertexBuffer, IndexBuffer} from './Buffer.js';
import {
    FLOAT, FLOAT2, FLOAT3, FLOAT4, 
    INT, INT2, INT3, INT4, 
    MAT3, MAT4, 
    BOOL
} from './constants.js';

let Quad = {
    position : new vec2([0, 0]),
    size : new vec2([1, 1]),
    rotation : 0,
    color : new vec4([1, 1, 1, 1]),
    textureID : 0
}

export function DrawQuad(data : any = Quad):void
    {
        if (!data.position){
            data.position = Quad.position;
        }
        let position : vec2 = data.position;
        if (!data.size){
            data.size = Quad.size;
        }
        let size : vec2 = data.size;
        if(!data.rotation){
            data.rotation = Quad.rotation;
        };
        let rotation : number = data.rotation;
        if(!data.color){
            data.color = Quad.color;
        };
        let color : vec4 = data.color;
        if(!data.textureID){
            data.textureID = Quad.textureID;
        };
        let textureID : number = data.textureID;
        
        let vertices : Array<number> = [];

    let offset = 0;
    let boxPositions = [[position.x - size.x, position.y - size.y], 
                        [position.x + size.x, position.y - size.y],
                        [position.x + size.x, position.y + size.y], 
                        [position.x - size.x, position.y + size.y] ];

    let texCoords = [
        [1.0, 1.0], // top right 
        [0.0, 1.0], // top left
        [1.0, 0.0], // bottom right
        [0.0, 0.0]  // bottom left
    ];

    for(let i = 0; i < 4; i++){
        // position
        vertices[0 + (offset)] = boxPositions[i][0] * Math.cos(rotation) - boxPositions[i][1]*Math.sin(rotation);
        vertices[1 + (offset)] = boxPositions[i][0] * Math.sin(rotation) + boxPositions[i][1]* Math.cos(rotation);
        vertices[2 + (offset)] = 0;
        // color
        vertices[3 + (offset)] = color.x;  
        vertices[4 + (offset)] = color.y;
        vertices[5 + (offset)] = color.z;
        vertices[6 + (offset)] = color.w;
        // tex coords
        vertices[7 + (offset)] = texCoords[i][0];
        vertices[8 + (offset)] = texCoords[i][1];
        // tex index 
        vertices[9 + (offset)] = textureID;

        offset+=10;
    };
    let graphicsDevice = getApplication().getGraphicsDevice();
    graphicsDevice.add(vertices);
};



