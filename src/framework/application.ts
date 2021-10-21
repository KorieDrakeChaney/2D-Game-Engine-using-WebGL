import { setApplication } from "./globals.js";

import {
    FILLMODE_FILL_WINDOW, FILLMODE_KEEP_ASPECT,
    RESOLUTION_AUTO, RESOLUTION_FIXED
} from './constants.js';


class Progress { 
    private length : number;
    private count : number = 0;
    constructor(length : number){
        this.length = length;
    };

    inc() {
        this.count++;
    };

    done(){
        return (this.count === this.length);
    };
}


export default class Application {

    public app : any;
    public gl : any;



    private time : number = 0;
    private timeScale : number = 1;
    private maxDeltaTime : number = 0.1;

    private frame : number = 0;

    private autoRender : boolean = true;
    private renderNextFrame : boolean = false;
    
    constructor(app : any){
        this.app = app;
        this.gl = null;


    };

    public initialize():void{ 
        this.gl = this.app.getContext('webgl2') || this.app.getContext('experimental-webgl2');

        this.app.width = window.innerWidth - 40;
        this.app.height = window.innerHeight - 40;

        this.app.style.border = "5px solid black";
        this.app.style.padding = "1px";

        try {
            this.gl.viewport(0, 0, this.app.width, this.app.height);
        }
        catch(err){
            console.error(err);
        };

        setApplication(this);

        if(this.gl === null){
            alert('Your browser does not support webgl');
        };
    };

    public clear():void{ 
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
    };

};
