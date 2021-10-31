import { setApplication } from "./globals.js";
import GraphicsDevice from "../gfx/GraphicsDevice.js";

export default class Application {
    
    private app : any = null;
    private gl : any = null;
    
    private GraphicsDevice : GraphicsDevice = null;
    private time : number = 0;
    private timeScale : number  = 1;
    private maxDeltaTime : number  = 0.1;
    
    private frame : number = 0;
    
    private autoRender  : boolean = true;
    private renderNextFrame  : boolean = false;
    

    private scripts : Array<object> = new Array();

    constructor(app : any){
        this.app = app;
        this.initialize();
    };


    initialize = function():void{ 

        this.gl = this.app.getContext('webgl2') || this.app.getContext('experimental-webgl2');
        this.GraphicsDevice = new GraphicsDevice(this);
        this.app.style.border = "1px solid pink";
        this.resizeCanvasToDisplaySize();

        try {
            this.gl.viewport(0, 0, this.app.width, this.app.height);
        }
        catch(err){
            console.error(err);
        };

        if(this.gl === null){
            alert('Your browser does not support webgl');
        };
        setApplication(this);

    };

    addScript(script : any){
        if(script.update){
            this.scripts.push(script);
        }
        else {
            console.error("Not valid script");
        };
    };

    draw = function():void{
        this.GraphicsDevice.initalize();
    };

    clear = function():void{ 
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
    };

    resizeCanvasToDisplaySize = function(){

        const dpr = window.devicePixelRatio;
        let width = window.innerWidth - 40;        
        let height = window.innerHeight - 30;
        const needResize = this.app.width !== width || 
                           this.app.height !== height;

        if(needResize){
            this.app.width = width;
            this.app.height = height;
        };
    };
    



    getGL = function(){
        return this.gl;
    };

    getGraphicsDevice = function():GraphicsDevice{
        return this.GraphicsDevice;
    };


    start = function(){
        this.scripts.forEach(script => {
            script.update();
        });
    };


};
