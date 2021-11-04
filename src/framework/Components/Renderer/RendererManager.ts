import Component from "../Component.js";
import System from "../System.js";
import Sprite from "./Sprite.js";
import Transform from "../Physics/Transform.js";
import * as Renderer2D from "../../../gfx/Renderer2D.js"
import {BUFFER_DYNAMIC, BUFFER_GPUDYNAMIC, BUFFER_STATIC, BUFFER_STREAM} from "../../../gfx/constants.js";
import GraphicsDevice from "../../../gfx/GraphicsDevice.js";
import { getApplication } from "../../globals.js";
import mat4 from "../../../math/mat4.js";
import vec3 from "../../../math/vec3.js";


/**
 * @class
 * @name RendererManager
 * @description Takes in Sprite and Transform Objects
 */




export default class RendererManager extends System{

    private sprites : Array<Sprite> = new Array();
    private transforms : Array<Transform> = new Array();

    private graphicsDevice : GraphicsDevice;

    constructor(){
        super();
        this.graphicsDevice = this.app.GraphicsDevice;
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
            console.error(T.entity.id, "Does not have transform added");
        };
    };

    Update(){
        for(let i = 0; i < this.sprites.length; i++){
            Renderer2D.DrawQuad({
                color : this.sprites[i].color, 
                translation : this.transforms[i].translation,
                rotation : this.transforms[i].rotation,
                scale : this.transforms[i].scale, 
                id : this.sprites[i].entity.id
            });
        };

        for(let i = 0; i < this.transforms.length;i++){


        };
    };
}