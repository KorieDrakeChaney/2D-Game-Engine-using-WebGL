import VBO from '../gfx/vertex-buffer';
import IBO from '../gfx/index-buffer';
import Shader from '../gfx/shader';
import {currentGL} from '../framework/globals';
import {currentApplication} from '../framework/globals';
import Camera from './Camera';
import vec2 from '../math/vec2.js';
import Component from './Component';


export default class Renderer extends Component{

    protected VBO : VBO;
    protected IBO : IBO;
    protected shader : Shader;


    constructor(){
        super();
    }
};
