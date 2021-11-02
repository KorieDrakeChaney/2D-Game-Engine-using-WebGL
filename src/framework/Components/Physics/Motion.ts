import Component from "../Component.js";
import Input from "./Input.js";
import Transform from "./Transform.js";


/**
 * @class 
 * @name Motion
 * @description Takes in input and translates that to the transform
 */


export default class Motion extends Component{

    private Transform : Transform = null;
    private Input : Input = null;

    public id : string = "Motion";
    public weight : number = 2;

    constructor(){
        super();
    };

    Initialize(){
        if(!this.entity.hasComponent("Transform")){
            console.log("dam");
        };
        if(!this.entity.hasComponent("Input")){
            console.log("damm");
        };

        this.entity.types.Motion = this.id;
    };
}