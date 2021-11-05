import vec2 from '../../../math/vec2.js';
import vec3 from '../../../math/vec3.js';
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
        this.app.RendererSystem.addTransform(this);
    };


    public set TranslateX(x : number){
        this.translation = new vec2([x, this.translation.y]);
    };

    public set TranslateY(y : number){
        this.translation = new vec2([this.translation.x, y]);
    };

    public get TranslateX(){
        return this.translation.x;
    };

    public get TranslateY(){
        return this.translation.y;
    };

    public set ScaleX(x : number){
        this.scale = new vec2([x, this.scale.y]);
    };

    public set ScaleY(y : number){
        this.scale = new vec2([this.scale.x, y]);
    };

    public get ScaleX(){
        return this.scale.x;
    };

    public get ScaleY(){
        return this.scale.y;
    };

};
