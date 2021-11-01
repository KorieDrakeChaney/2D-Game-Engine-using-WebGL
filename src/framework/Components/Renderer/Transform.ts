import vec2 from '../../../math/vec2.js';
import Component from '../Component.js';

/**
 * @class
 * @name Transform
 * @description The transform component, describes the objects position, rotation, and scale.
 */


export default class Transform extends Component {

    public position : vec2;
    public scale : vec2;
    public rotation : number;

    public id : string = "Transform";

    constructor(position : vec2 = new vec2([0, 0]), scale : vec2 = new vec2([1, 1]), rotation : number = 0){
        super();
        this.position = position;
        this.scale = scale;
        this.rotation = rotation;
        
    };
    
    public Initialize():void{
        this.entity.types.Transform = this.id;
        this.app.RendererManager.addTransform(this);
    };

};
