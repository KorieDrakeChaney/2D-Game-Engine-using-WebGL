
class Application {

    constructor(canvas){
        this._canvas = canvas;
        this._gl = null;
    };
    initialize(){ 
        this._gl = this._canvas.getContext('webgl2') || this._canvas.getContext('experimental-webgl2');

        this._canvas.width = window.innerWidth - 40;
        this._canvas.height = window.innerHeight - 40;

        if(this._gl === null){
            alert('Your browser does not support webgl');
        };
    };
    clear(){ 
        this._gl.clearColor(1.0, 0.8, 0.94, 1);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT || this._gl.DEPTH_BUFFER_BIT);
    };
    get getGL() { return _gl; };

    get getCanvas() {return _canvas;};

};

export {Application};