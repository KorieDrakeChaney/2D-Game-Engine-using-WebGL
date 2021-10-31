import vec2 from '../../math/vec2.js';
import Entity from './Entity.js';

/**
 * @class
 * @name Component
 * @description Describes any behavior shared between many Entites.
 */

export default class Component {

    public entity : Entity;
    public id?:string;

    public Update?():void;
    public Initialize?():void;

}

