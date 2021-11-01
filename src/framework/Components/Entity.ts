import Component from './Component.js';
import * as Renderer2D from "../../gfx/Renderer2D.js";
import vec2 from '../../math/vec2.js';
import vec4 from '../../math/vec4.js';


/**
 * @class
 * @name Entity
 * @description Entity are any given "thing" in the scene.
 */


let id = 0;

export default class Entity {

    public components : any;
    public types : any;

    public id : number;
    

    constructor(){

        this.components = {};
        this.types = {};
        this.id = id++;

    };

    public Update?(){};

    public addComponent(C : Component){
        if(C.id){
            if(!this.types[C.id]){
                C.entity = this;
                C.Initialize();
            }
            else {
                console.error("Already has component : ", typeof C);
            };
        }
        else { 
            console.error("invalid Component");
        }

    }; 
 
    
    public findComponent(C : Component):Component{
        return;
    };

    public hasComponent(C : string):boolean{
        if(this.types[C]){
            return true;
        };
        console.log(this.id, "Does not have", C, "!");
        return false;
    };
};