import { getApplication } from '../../globals.js';
import vec2 from '../../../math/vec2.js';
import vec4 from '../../../math/vec4.js';







class Vertex {
    public Position : vec2;
    public Color : vec4;

    constructor(position : vec2, color : vec4) {
        this.Position = position;
        this.Color = color;
    }
};


class quadData{
    public vao : number = 0;
    public vbo : number = 0;
    public ibo : number = 0;
};


class QuadBatch{

    private maxQuadCount : number = 1000;
    private maxVertexCount : number = this.maxQuadCount * 4 * 4;
    private maxIndexCount : number = this.maxQuadCount * 6;
    private maxTextureCount : number = 16;
    private _gl = getApplication().gl;
    private _uMaxNumVertices : number;
    private _uNumUsedVertices : number;
    private  _vao = this._gl.createVertexArray();
    private _vbo = this._gl.createBuffer();
    private _ibo = this._gl.createBuffer();
    private _program = getProgram();
    private vertices : Float32Array = new Float32Array(this.maxVertexCount);
    private indices :  Uint32Array = new Uint32Array(this.maxIndexCount);
    private count : number = 0;

    public add(v : Array<number>):void{
        if(this.count > this.maxQuadCount){
            this.flush();
            this.endBatch();
        }
    }

    public flush():void 
    { 
        this._gl.bindVertexArray(this._vao);
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vbo);
        this._gl.bufferData(this._gl.ARRAY_BUFFER, this.vertices, null, this._gl.DYNAMIC_DRAW);
        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._vbo);
        this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, this.indices, this._gl.DYNAMIC_DRAW);

        this._gl.drawElements(this._gl.TRIANGLES, this.indices.length, this._gl.UNSIGNED_SHORT, 0);
    };


    public startBatch():void{

    };

    public endBatch():void{
        this._gl.useProgram(null);
        this._gl.bindVertexArray(null);
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null);
        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, null);

    };

    public initialize():void{
        let vertices : Array<number> = [0.5, 0.5, 0.0, 
                                        -0.5, 0.5, 0.0, 
                                        -0.5, -0.5, 0.0, 
                                        0.5, -0.5, 0.0];
        let indices : Array<number> = [0, 1, 2, 2, 3, 0];

        this._program = getProgram();
        this._gl.bindVertexArray(this._vao);
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vbo);
        this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(vertices), this._gl.STATIC_DRAW);

        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this._gl.STATIC_DRAW);

        this._gl.vertexAttribPointer(0, 3, this._gl.FLOAT, false, 0, 0);

    };
    public render():void{
        this._gl.enableVertexAttribArray(0);
        this._gl.useProgram(this._program);
        this._gl.bindVertexArray(this._vao);
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vbo);
        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        this._gl.drawElements(this._gl.TRIANGLES, 6, this._gl.UNSIGNED_SHORT, 0);
    };
};


export default class Renderer2D {

    static quadBatch : QuadBatch = new QuadBatch();


    constructor(){
    };

    static DrawQuad(
                    position : vec2 = new vec2([1, 1]),
                    size : vec2 = new vec2([1, 1]), 
                    color : vec4 = new vec4([1, 1, 1, 1]), 
                    textureID : number):void{
        let vertex = new Vertex(position, color);
    }

}

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


