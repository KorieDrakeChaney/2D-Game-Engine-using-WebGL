import vec2 from '../../math/vec2.js';
import Entity from './Entity.js';

/**
 * @class
 * @name Component
 * @description Describes any behavior shared between many Entites.
 */

export default class Component {

    public position : vec2;
    public scale : vec2;
    public rotation : number;

    public entity : Entity;

    public Update?():void;
}

