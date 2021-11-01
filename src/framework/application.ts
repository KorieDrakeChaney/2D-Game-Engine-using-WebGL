import { setApplication } from "./globals.js";
import GraphicsDevice from "../gfx/GraphicsDevice.js";
import RendererManager from "./Components/Renderer/RendererManager.js";

export default class Application {
    
    private _app : any = null;
    private _gl : any = null;
    
    private _time : number = 0;
    private _timeScale : number  = 1;
    private _maxDeltaTime : number  = 0.1;
    
    private _frame : number = 0;
    
    private _autoRender  : boolean = true;
    private _renderNextFrame  : boolean = false;
    
    
    private _scripts : Array<object> = new Array();
    
    
    
    
    private _GraphicsDevice : GraphicsDevice = null;
    private _RendererManager : RendererManager = new RendererManager();
    
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

    addScript(script : any){
        if(script.Update){
            this._scripts.push(script);
        }
        else {
            console.error("Not valid script");
        };
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
        this._RendererManager.Update();
        
        this._scripts.forEach(script => {
            script.Update();
        });

    };


};
