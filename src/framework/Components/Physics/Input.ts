import Component from "../Component.js";

/**
 * @class 
 * @name Input
 * @description Tracks the Input from the user
 */



export default class Input extends Component{ 
    
    public weight : number = 0;
    public id = "Input";

    constructor(){
        super();
    };

    Initialize(){
        this.entity.types.Input = this.id;
    };
}