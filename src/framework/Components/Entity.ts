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

    private id : number;
    

    constructor(){

        this.components = {};
        this.types = {};
        this.id = id++;

    };

    public addComponent(T : Component){
        if(T.id){
            if(!this.types[T.id]){
                T.entity = this;
                T.Initialize();
            }
            else {
                console.error("Already has component : ", typeof T);
            };
        }
        else { 
            console.error("invalid Component");
        }

    }; 
 
    public draw():void{
        if(!this.hasComponent("Transform") || !this.hasComponent("Sprite")){

            return;
        }
        new Renderer2D.DrawQuad({
            position : this.components.position, 
            size : this.components.scale, 
            rotation : this.components.rotation,
            color : new vec4(this.components.color)
        });
        


    };

    public findComponent(T : Component):Component{
        return;
    };

    public hasComponent(T : string):boolean{
        if(this.types[T]){
            return true;
        };
        console.log(this.id, "Does not have", T, "!");
        return false;
    };
};