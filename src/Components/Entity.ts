import Component from './Component';

/**
 * @class
 * @name Entity
 * @description Entity are any given "thing" in the scene.
 */


export default class Entity {

    public components : Array<Component>

    constructor(){
        this.components = [];
    };

    public addComponent(component : Component){
        this.components.push(component);
        component.entity = this;
    };
}