import Component from "../Component.js";

/**
 * @class 
 * @name Input
 * @description Tracks the Input from the user
 */



export default class Input extends Component{ 
    
    public weight : number = 0;
    public id = "Input";
    public keys : object = {

                // arrows
                Left: 37,
                Up: 38,
                Right: 39,
                Down: 40,

                // space bar
                Space: 32,

                // numbers
                Zero: 48,
                One: 49,
                Two: 50,
                Three: 51,
                Four: 52,
                Five : 53,
                Six : 54,
                Seven : 55,
                Eight : 56,
                Nine : 57,

                // Alphabets
                A : 65,
                B : 66, 
                C : 67,
                D : 68,
                E : 69,
                F : 70,
                G : 71,
                H : 72,
                I : 73,
                J : 74,
                K : 75,
                L : 76,
                M : 77, 
                N : 78, 
                O : 79, 
                P : 80, 
                Q : 81,
                R : 82,
                S : 83,
                T : 84, 
                U : 85, 
                V : 86,
                W : 87,
                X : 88, 
                Y : 89, 
                Z : 90,

                LastKeyCode : 222
    }
    constructor(){
        super();
    };

    Initialize(){
        this.entity.types.Input = this.id;
    };


    

}