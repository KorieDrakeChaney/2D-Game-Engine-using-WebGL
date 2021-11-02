import Texture from "../../../gfx/Texture.js";
import vec4 from "../../../math/vec4.js";
import Component from "../Component.js";
import Transform from "../Physics/Transform.js";


export default class Sprite extends Component{

    public color : vec4;

    public id : string = "Sprite";
    public weight : number = 0;

    constructor(color : vec4 = new vec4([1, 0, 0, 1])) {
        super();
        this.color = color;
    };
    
    public Initialize():void{
        this.entity.types.Sprite = this.id;
        this.app.RendererManager.addSprite(this);
    };
}