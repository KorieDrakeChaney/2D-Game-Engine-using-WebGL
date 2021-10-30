import TextureManger from "./TextureManager.js";
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


    constructor(gl : any, textureManager : TextureManger){
        this.textureManager = textureManager;
        this.gl = gl;    

        this.textureManager.add(this);

        this.id = id++;
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