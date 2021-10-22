import { setApplication } from "./globals.js";





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
        this.app.style.border = "1px solid pink";
        this.resizeCanvasToDisplaySize();

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

    public resizeCanvasToDisplaySize(){

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
    

};
