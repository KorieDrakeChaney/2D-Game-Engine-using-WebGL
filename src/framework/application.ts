import { setApplication } from "./globals";
import { setGL } from "./globals";


export default class Application {

    private _canvas : any;
    private _gl : any;

    constructor(canvas : any){
        this._canvas = canvas;
        this._gl = null;
    };

    public initialize():void{ 
        this._gl = this._canvas.getContext('webgl2') || this._canvas.getContext('experimental-webgl2');

        this._canvas.width = window.innerWidth - 40;
        this._canvas.height = window.innerHeight - 40;

        this._canvas.style.border = "5px solid black";
        this._canvas.style.padding = "1px";
        try {
            this._gl.viewport(0, 0, this._canvas.width, this._canvas.height);
        }
        catch(err){
            console.error(err);
        };

        setApplication(this._canvas);
        setGL(this._gl);

        if(this._gl === null){
            alert('Your browser does not support webgl');
        };
    };

    public clear():void{ 
        this._gl.clearColor(0, 0, 0, 1);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT || this._gl.DEPTH_BUFFER_BIT);
    };

};
