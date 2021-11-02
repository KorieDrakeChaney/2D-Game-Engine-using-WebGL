import { setApplication } from "./globals.js";
import GraphicsDevice from "../gfx/GraphicsDevice.js";
import RendererManager from "./Components/Renderer/RendererManager.js";

export class Timer{
    private name : string;
    private timer : number;
    constructor(name : string){
        this.name = name;
        this.timer = Date.now();
    };

    stop():void{
        let elapsedTime = (Date.now() - this.timer)/1000;
        if(elapsedTime >= 3.0){
            console.error(`${this.name}: ${(elapsedTime).toFixed(3)} ms`);
        }
        else {
            console.log(`${this.name}: ${(elapsedTime).toFixed(3)} ms`);
        };
    };
}



export default class Application {
    
    private _app : any = null;
    private _gl : any = null;
    
    private _time : number = 0;
    private _timeScale : number  = 1;
    private _maxDeltaTime : number  = 0.1;
    
    private _frame : number = 0;
    
    private _autoRender  : boolean = true;
    private _renderNextFrame  : boolean = false;
    
    private _FPS : number = 120;
    private _MPF : number = 1000 / this._FPS;
    private _lagTime: number = 0;
    private scene : any = null;
    
    
    
    
    private _GraphicsDevice : GraphicsDevice = null;
    private _RendererManager : RendererManager = new RendererManager();

    private _loopIsRunning : boolean = false;
    
    constructor(app : any){
        this._app = app;
        this.initialize();
    };


    initialize = function():void{ 

        this._gl = this._app.getContext('webgl2') || this._app.getContext('experimental-webgl2');
        this._GraphicsDevice = new GraphicsDevice(this);
        this._app.style.border = "1px solid pink";
        this.resizeCanvasToDisplaySize();

        try {
            this._gl.viewport(0, 0, this._app.width, this._app.height);
        }
        catch(err){
            console.error(err);
        };

        if(this._gl === null){
            alert('Your browser does not support webgl');
        };
        setApplication(this);

    };

    addScene(game : any){
        this.scene = game;
    };  

    draw = function():void{
        this._GraphicsDevice.initalize();
    };

    clear = function():void{ 
        this._gl.clearColor(0, 0, 0, 1);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT || this._gl.DEPTH_BUFFER_BIT);
    };



    resizeCanvasToDisplaySize = function(){

        const dpr = window.devicePixelRatio;
        let width = window.innerWidth - 40;        
        let height = window.innerHeight - 30;
        const needResize = this._app.width !== width || 
                           this._app.height !== height;

        if(needResize){
            this._app.width = width;
            this._app.height = height;
            this._gl.viewport(0, 0, width, height);
        };
    };
    

    public _update(){

        if(this._loopIsRunning){
            requestAnimationFrame( this._update.bind(this) );


            let currentTime = Date.now();
            let elapsedTime = currentTime - this._time;
            this._time = currentTime;
            this._lagTime += elapsedTime;


            this.resizeCanvasToDisplaySize();

            while(this._lagTime >= this._MPF && this._loopIsRunning){
                this.scene.Update();
                this._lagTime -= this._MPF;
            }
            
            this.scene.Render();
        

        };
    }; 

    get gl(){
        return this._gl;
    };

    get GraphicsDevice():GraphicsDevice{
        return this._GraphicsDevice;
    };

    get RendererManager():RendererManager{
        return this._RendererManager;
    }

    start = function(){
        this._loopIsRunning = true;
        this._time = Date.now();
        this._RendererManager.Initialize();

        requestAnimationFrame( this._update.bind(this) );

    };


};
