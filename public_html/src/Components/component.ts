import vec2 from '../math/vec2';


/**
 * @class
 * @name Component
 * @description Describes any behavior shared between many Entites.
 */

export default class Component {
    public position : vec2;
    public scale : vec2;
    public rotation : number;

    public entity : any = null;
}

