import Component from "./Component.js";


export default class System extends Component{

    protected static components : Array<Component>;

    constructor(){
        super(); 
        
    };

    public static Register(T : Component):void{
        System.components.push(T);
    } 

    public static Update():void{
        this.components.forEach(Components =>{
            Components.Update();
        }); 
    }   

}; 