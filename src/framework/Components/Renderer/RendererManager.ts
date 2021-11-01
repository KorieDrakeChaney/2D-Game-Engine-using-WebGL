import Component from "../Component.js";
import System from "../System.js";
import Sprite from "./Sprite.js";
import Transform from "./Transform.js";
import * as Renderer2D from "../../../gfx/Renderer2D.js"

/**
 * @class
 * @name RendererManager
 * @description Takes in Sprite and Transform Objects
 */




export default class RendererManager extends System{

    private sprites : Array<Sprite> = new Array();
    private transforms : Array<Transform> = new Array();

    constructor(){
        super();
    }

    addSprite(S : Sprite){
        if(this.sprites[S.entity.id] !== null){
            this.sprites.push(S);
        }
        else {
            console.error(S.entity.id, "Slot has been taken !");
        };
    };

    addTransform(T : Transform){
        if(this.transforms[T.entity.id] !== null){
            this.transforms.push(T);
        }
        else {
            console.error(T.entity.id, "Slot has been taken !");
        };
    };

    Update(){
        for(let i = 0; i < this.sprites.length; i++){

            Renderer2D.DrawQuad({
                position : this.transforms[i].position,
                size : this.transforms[i].scale,
                rotation : this.transforms[i].rotation,
                color : this.sprites[i].color,
            });

        };

    };
}