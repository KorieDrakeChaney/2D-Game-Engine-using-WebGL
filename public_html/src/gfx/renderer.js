import * as vbo from './vbo.js';
import * as ibo from './ibo.js';
import * as shader from './shader.js';

export default class Renderer {
    constructor(vertices, indices, VS, FS){
        this.vertices = vertices;
        this.indices = indices;
        this.VS = VS;
        this.FS = FS;
        this.VBO = null;
        this.IBO = null;
    };

    update() {

    };

    get VBO() {
        return this.VBO;
    };

    set VBO(VBO){
        this.VBO = VBO;
    };

    get IBO() {
        return this.VBO;
    };

    set IBO(IBO){
        this.IBO = IBO;
    };
};