import { setApplication } from "./globals.js";

import {
    FILLMODE
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
    
    private fillModeType : FILLMODE = FILLMODE.RESOLUTION_AUTO;
    
    constructor(app : any){
        this.app = app;
        this.gl = null;


    };

    public initialize():void{ 
        this.gl = this.app.getContext('webgl2') || this.app.getContext('experimental-webgl2');

        this.app.width = window.innerWidth - 40;
        this.app.height = window.innerHeight - 40;

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

        this.resizeCanvas(this.fillModeType);
    };


    set setFillType(newFill : FILLMODE){
        this.fillModeType = newFill;
    };

    public clear():void{ 
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
    };

    public resizeCanvas(fillmode : any):void{
        switch(fillmode){
            case FILLMODE.NONE:
                this.app.width = window.innerWidth - 40;
                this.app.height = window.innerHeight - 40;
                break;
            case FILLMODE.RESOLUTION_AUTO:
                window.addEventListener('resize', () => {
                    this.app.width = window.innerWidth - 40;
                    this.app.height = window.innerHeight - 40;
                });
                break;
            case FILLMODE.RESOLUTION_FIXED:
                window.addEventListener('resize', () => {
                    this.app.width = 400;
                    this.app.width = 300;
                });
                break;
            case FILLMODE.FILL_WINDOW:
                window.addEventListener('resize', () => {
                    this.app.width = window.innerWidth - 40;
                    this.app.height = window.innerHeight - 40;
                });
                break;
            case FILLMODE.KEEP_ASPECT:
                window.addEventListener('resize', () => {
                    this.app.width = window.innerWidth - 40;
                    this.app.height = window.innerWidth / 3;
                });
                break;
            default :
                console.log('day');
                break;
        };
    }

};
