import {VBO as vbo} from './vbo.js';
import {IBO as ibo} from './ibo.js';
import {Shader as shader} from './shader.js';
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

        if(!(typeof VS === 'string')){
            console.error("you didn't pass in correct format for : VS {STRING}");
        }
        else {
            this.VS = VS;
        };
        if(!(typeof FS === 'string')){
            console.error("you didn't pass in correct format for : FS {STRING}");
        }
        else {
            this.FS = FS;
        };
        this.VBO = null;
        this.IBO = null;
    };

    initialize(){
        this.VBO = vbo(currentGL, this.vertices);
        this.IBO = ibo(currentGL, this.indices);
        shader(this.VS, this.FS);
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