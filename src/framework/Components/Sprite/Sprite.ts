import Texture from "../../../gfx/Texture.js";
import Component from "../Component.js";
import Entity from "../Entity.js";
import Transform from "../Transform/Transform.js";

export default class Sprite extends Component{

    public color : [number, number, number, number];

    public id : string = "Sprite";

    constructor(color : [number, number, number, number] = [1, 0, 0, 1]) {
        super();
        this.color = color;
    };

    public Initialize():void{
        this.entity.types.Sprite = this.id;
        this.entity.components.color = this.color;
    };
}