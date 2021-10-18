import { setApplication } from "./globals";


export default class Application {

    public canvas : any;
    public gl : any;

    constructor(canvas : any){
        this.canvas = canvas;
        this.gl = null;
    };

    public initialize():void{ 
        this.gl = this.canvas.getContext('webgl2') || this.canvas.getContext('experimental-webgl2');

        this.canvas.width = window.innerWidth - 40;
        this.canvas.height = window.innerHeight - 40;

        this.canvas.style.border = "5px solid black";
        this.canvas.style.padding = "1px";
        try {
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
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
