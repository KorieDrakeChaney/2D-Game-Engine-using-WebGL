import Component from './Component.js';
import * as Renderer2D from "../../gfx/Renderer2D.js";
import vec2 from '../../math/vec2.js';
import vec4 from '../../math/vec4.js';
import { getApplication } from '../Globals.js';


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

    private name : string;

    constructor(name : string = "Entity"){
        this.name = name;
        this.components = new Array();
        this.types = {};
        this.id = id++;

        getApplication().EntitySystem.addEntity(this);
    };

    public Update?(){};
    public Ready?(){};

    public addComponent(C : Component){
        if(C.id){
            if(!this.types[C.id]){
                C.entity = this;
                C.Initialize();
                this.components.push(C);
            }
            else {
                console.warn(`${this.name} already has component : ${C.id}`);
            };
        }
        else { 
            console.warn("invalid Component");
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
            console.warn(`${C} does not exist in ${this.name}!`);
        };
  
    };

    public hasComponent(C : string):boolean{
        if(this.types[C]){
            return true;
        };
        console.warn(`${this.name}, Does not have ${C} !`);
        return false;
    };



};  