import vec2 from '../../../math/vec2';
import Component from '../Component';



/**
 * @class
 * @name Transform
 * @description The transform component, describing the objects position, rotation, and scale.
 */


export default class Transform extends Component {

    constructor(position : vec2 = new vec2([0, 0]), scale : vec2 = new vec2([1, 1]), rotation : number = 0){
        super();
        this.position = position;
        this.scale = scale;
        this.rotation = rotation;
    };
};
