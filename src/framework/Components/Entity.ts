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

    public components : Array<Component>;
    public types : any;

    public id : number;
    

    constructor(){

        this.components = new Array();
        this.types = {};
        this.id = id++;

    };

    public Update?(){};

    public addComponent(C : Component){
        if(C.id){
            if(!this.types[C.id]){
                C.entity = this;
                C.Initialize();
                this.components.push(C);
            }
            else {
                console.error("Already has component : ", typeof C);
            };
        }
        else { 
            console.error("invalid Component");
        }

    }; 
 
    
    public findComponent(C : string):Component{
        let c = null;
        if(this.hasComponent(C)){
            this.components.forEach(component => {
                if (component.id === C){
                    c = component;
                }
            });
            return c;
        }
        else {
            console.log(`${C} does not exist in entity!`);
        };
  
    };

    public hasComponent(C : string):boolean{
        if(this.types[C]){
            return true;
        };
        console.log(this.id, "Does not have", C, "!");
        return false;
    };
};