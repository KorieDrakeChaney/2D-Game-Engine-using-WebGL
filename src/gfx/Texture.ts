import TextureManger from "./TextureManager.js";
import {getApplication} from "../Framework/Globals.js"
/**
 * @class
 * @name Texture
 * @description Holds information for Texture Manager
 */

let id = 0;

export default class Texture {
    private dataID : ArrayBuffer = null;
    private textureManager : TextureManger = null;
    private gl : any;
    private id : number;


    constructor(src : string){
        let image = new Image();
        image.src = src;
        image.onload = async function() {
            Texture.render(image);
        };
    };

    static render(image : any):void{
        let gl = getApplication().getGL;
        let texCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            0.0,  0.0,
            1.0,  0.0,
            0.0,  1.0,
            0.0,  1.0,
            1.0,  0.0,
            1.0,  1.0]), gl.STATIC_DRAW);


        // Create a texture.
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        
        // Set the parameters so we can render any size image.
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        
        // Upload the image into the texture.
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

    };

    bind():void { 
        if(!this.dataID){
            this.dataID = this.gl.createSampler();
        };

        this.gl.bindTexture(this.gl.SAMPLER_2D, this.dataID);
    };

    changeData(ID : typeof this.dataID):void{
        this.dataID = ID;
    };
    
    unbind():void{

    };
};

export function loadTexture(path : String) {
    let texture = null;

    

    return texture;
};