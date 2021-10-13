import {VBO as vbo} from './vbo.js';
import {IBO as ibo} from './ibo.js';
import * as shader from './shader.js';
import {currentGL} from '../framework/globals.js';

class Renderer {
    constructor(vertices, indices, VS, FS){
        if(!(vertices instanceof Array)){
            console.error("you didn't pass in correct format for : vertices {ARRAY}");
        }
        else {
            this.vertices = vertices;
        };
        if(!(indices instanceof Array)){
            console.error("you didn't pass in correct format for : indices {ARRAY}");
        }
        else {
            this.indices = indices;
        };


        if(typeof VS !== String){
            console.error("you didn't pass in correct format for : VS {STRING}");
        }
        else {
            this.VS = VS;
        };
        if(typeof FS !== String){
            console.error("you didn't pass in correct format for : FS {STRING}");
        }
        else {
            this.FS = FS;
        };
        this.VBO = null;
        this.IBO = null;
    };

    initialize(){
        vbo(currentGL, this.vertices);
        ibo(currentGL, this.indices);
    };

    update() {

    };

    get getVBO() {
        return this.VBO;
    };

    set setVBO(VBO){
        this.VBO = VBO;
    };

    get getIBO() {
        return this.VBO;
    };

    set setIBO(IBO){
        this.IBO = IBO;
    };
};

export {Renderer};