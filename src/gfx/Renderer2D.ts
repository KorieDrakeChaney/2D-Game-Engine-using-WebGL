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
        let size : vec2 = data.size
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
    for(let i = 0; i < 4; i++){
        vertices[0 + (offset)] = boxPositions[i][0];
        vertices[1 + (offset)] = boxPositions[i][1];
        vertices[2 + (offset)] = 0;
        vertices[3 + (offset)] = color.x;
        vertices[4 + (offset)] = color.y;
        vertices[5 + (offset)] = color.z;
        vertices[6 + (offset)] = color.w;
        offset+=7;
    };
    let graphicsDevice = getApplication().getGraphicsDevice();
    graphicsDevice.add(vertices);
    
};



