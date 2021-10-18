import {getApplication} from "../framework/globals"
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

export default async function Shader(program : any,vs : string, fs : string) { 
    let fragmentShaderFile = fs;
    this.program = program;
    let gl = getApplication().gl;
    let vertexShader = null;
    let fragmentShader = null;

    await fetch(vs)
    .then(res => res.text())
    .then(data => {
        let vsShaderInfo = data;
        console.log(vsShaderInfo);
        vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vsShaderInfo);
        gl.compileShader(vertexShader);
        let success = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);
        if(!success){
            console.error("vertex::shader::compile::error");
        };
    });
    await fetch(fs)
    .then(res => res.text())
    .then(data => {
        let fsShaderInfo = data;
        console.log(fsShaderInfo);
        fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fsShaderInfo);
        gl.compileShader(fragmentShader);
        let success = gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS);
        if(!success){
            console.error("fragment::shader::compile::error");
        };
    })
    .then(() => {
        let gl = getApplication().gl;

        this.program = gl.createProgram();
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
    
        gl.linkProgram(this.program);
    
        if (! gl.getProgramParameter(this.program, gl.LINK_STATUS)){
            let info = gl.getProgramInfoLog(this.program);
            throw 'Could not compile WebGL program. \n\n' + info;
        };

        program = this.program;
    });

};



