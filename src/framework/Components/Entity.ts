import Component from './Component.js';

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
 
    public findComponent(T : Component):Component{
        this.components.forEach(Component => {
            if (typeof Component === typeof T){
                return Component;
            } ;
        });
        return null;
    };
};