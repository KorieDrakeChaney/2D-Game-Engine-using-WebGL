import Entity from "./Entity.js";
import System from "./System.js";

/**
 * @class 
 * @name EntityManager
 * @description Holds all information of entities
 */


export default class EntitySystem extends System{

    private Entities : Array<Entity> = new Array();

    addEntity(E : Entity){
        if(this.Entities[E.id] == null){
            this.Entities[E.id] = E;
        }
        else {
            console.error("Entity already exist !");
        }
    };

    Ready():void{
        console.log(this.Entities.length);
        this.Entities.forEach(Entity => {
            Entity.Ready();
        });
    };

    Update():void{
        this.Entities.forEach(Entity => {
            Entity.Update();
        });
    }


};