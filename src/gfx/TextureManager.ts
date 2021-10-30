import Texture from "./Texture.js";
/**
 * @class
 * @name TextureManger
 * @description Allows for flexible/dynamic calls to gather textures from the gpu
 */

export default class TextureManger {
    private textures : Array<Texture> = new Array();
    constructor(){

    };

    add(texture : Texture){
        this.textures.push(texture);
    };

    remove(ID : number){
        this.textures.splice(ID, 1);
    };

}