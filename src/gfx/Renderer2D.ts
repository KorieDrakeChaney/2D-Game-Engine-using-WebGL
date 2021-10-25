import { getApplication } from '../framework/globals.js';
import vec2 from '../math/vec2.js';
import vec4 from '../math/vec4.js';
import {VertexBuffer, IndexBuffer} from './Buffer.js';
import {
    FLOAT, FLOAT2, FLOAT3, FLOAT4, 
    INT, INT2, INT3, INT4, 
    MAT3, MAT4, 
    BOOL
} from './constants.js';

let gl = getApplication().gl;


export function DrawQuad(
    position : vec2 = new vec2([1, 1]),
    size : vec2 = new vec2([1, 1]), 
    color : vec4 = new vec4([1, 1, 1, 1]), 
    textureID : number = 0):void
    {

        let vertices : Float32Array = new Float32Array(4 * 3 * 4);
        let indices : Uint32Array = new Uint32Array([
            0, 1, 2, 2, 3, 0
        ]);

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
    let graphicsDevice = getApplication().graphicsDevice;
    new VertexBuffer(graphicsDevice, vertices);
    new IndexBuffer(graphicsDevice, indices);
    
};

let getProgram = function(){
    let gl = getApplication().gl;
    let vertexShader = getShader("../../../../res/shader/simpleVS.glsl", gl.VERTEX_SHADER);
    let fragmentShader = getShader("../../../../res/shader/simpleFS.glsl", gl.FRAGMENT_SHADER);

    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    return program;
};





let getShader = function(file : string, shaderType : any){
    let gl = getApplication().gl;

    let xttp = new XMLHttpRequest();
    xttp.open("GET", file, false);
    try {
        xttp.send();
    }catch(err){
        alert("Failed to load shader: " + file);
        return null;
    };

    let shaderSource = xttp.responseText;
    let shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);


    return shader;
};


