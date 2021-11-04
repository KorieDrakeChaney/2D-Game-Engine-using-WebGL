/**
 * @class 
 * @name EntityManager
 * @description Holds all information of entities
 */

import Entity from "./Entity";


export default class EntityManager{

    private Entities : Array<Entity> = new Array(1000);

    addEntity(E : Entity){
        if(this.Entities[E.id] == null){
            this.Entities[E.id] = E;
        }
        else {
            console.error("Entity already exist !");
        }
    };


    

    Initialize():void{
        this.Entities.forEach(Entity => {
            Entity.Initialize();
        });
    };
};