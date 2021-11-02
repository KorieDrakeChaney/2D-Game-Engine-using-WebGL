import vec2 from '../../../math/vec2.js';
import Component from '../Component.js';

/**
 * @class
 * @name Transform
 * @description The transform component, describes the objects position, rotation, and scale.
 */


export default class Transform extends Component {

    public translation : vec2;
    public scale : vec2;
    public rotation : number;

    public id : string = "Transform";
    public weight : number = 0;
    
    constructor(translation : vec2 = new vec2([0, 0]), scale : vec2 = new vec2([1, 1]), rotation : number = 0){
        super();
        this.translation = translation;
        this.scale = scale;
        this.rotation = rotation;
    };
    
    public Initialize():void{
        if(this.entity){
            this.entity.types.Transform = this.id;
        };
        this.app.RendererManager.addTransform(this);
    };

};
