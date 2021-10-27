import { getApplication } from '../framework/globals.js';
import GraphicsDevice from './GraphicsDevice.js';

/**
 * @function
 * @name Shader
 * @functiondesc  A shader is a program that is responsible for rendering graphical primitives on a device's
 * graphics processor. The shader is generated from a shader definition. This shader definition specifies
 * the code for processing vertices and fragments processed by the GPU. The language of the code is GLSL
 * (or more specifically ESSL, the OpenGL ES Shading Language). The shader definition also describes how
 * the PlayCanvas engine should map vertex buffer elements onto the attributes specified in the vertex
 * shader code.
 * @description Creates a new shader object
 *
 *
 *
 */


export default class Shader { 

    public attributes : Array<any>;
    public uniforms : Array<any>;
    public samplers : Array<any>;

    private ready : boolean = false;
    private failed : boolean = false;

    private defintion : object = { 
        attributes : 0, 
        uniforms : 0, 
        samplers : 0
    }; 


    constructor(graphicsDevice : GraphicsDevice, definition : Object){

        this.init();



    };

    init(){
        this.attributes = [];
        this.uniforms = [];
        this.samplers = [];

        this.ready = false;
        this.failed = false;
    }

};


export let getProgram = function(gl : any){
    
    let vertexShader = this.getShader(gl, "../../../../res/shader/simpleVS.glsl", gl.VERTEX_SHADER);
    let fragmentShader = this.getShader(gl, "../../../../res/shader/simpleFS.glsl", gl.FRAGMENT_SHADER);

    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    return program;
};

export let getShader = function(gl : any, file : string, shaderType : any){

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