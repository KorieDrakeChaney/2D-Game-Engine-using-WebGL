import {currentGL} from '../framework/globals.js';

class Shader {
    constructor(vertexShader, fragmentShader){
        this.vertexShader = vertexShader;
        this.fragmentShader = fragmentShader;
        this.mVertexShader = null;
        this.mFragmentShader = null;
        this.mProgram;
    };

    initialize(){
        var gl = currentGL;
        try{
            this.mVertexShader = this._createShader(this.vertexShader, gl.VERTEX_SHADER);
            this.mFragmentShader = this._createShader(this.fragmentShader, gl.FRAGMENT_SHADER);
        }
        catch(e){
            console.error(e);
        }
    };
    
     _createShader(filePath, shaderType){ 
        var gl = currentGL;
    
    
        var source = null;

        var xmlReq = new XMLHttpRequest();
        xmlReq.open('GET', filePath, false);
        try {
            xmlReq.send();
        } catch (error) {
            alert("Failed to load shader: " + filePath);
            return null;
        }
        source = xmlReq.responseText;
        var shader = gl.createShader(shaderType);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert("A shader compiling error occurred: " + `${fileName}` + " " + gl.getShaderInfoLog(shader));
        }
        return shader;
    };

    getProgram() { 


        var gl = currentGL;

        this.mProgram = gl.createProgram();
        gl.attachShader(this.mProgram, this.mVertexShader);
        gl.attachShader(this.mProgram, this.mFragmentShader);
        gl.linkProgram(this.mProgram);

        gl.deleteShader(this.mVertexShader);
        gl.deleteShader(this.mFragmentShader);

        return this.mProgram
    };


};

export {Shader};