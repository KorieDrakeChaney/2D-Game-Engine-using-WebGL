
/**
 * @class
 * @name GraphicsDevice
 *@description Creates a new graphics device. 
 * 
 * 
 * 
 * 
*/


class GraphicsDevice {
    constructor(canvas){

        this.canvas = canvas;

        // local width/height without pixelRatio applied 
        this._width = 0;
        this._height = 0;

        this.shaders = [];
        this.buffers = [];
        this.textures = [];


        this._shaderStats = {
            vsCompiled: 0,
            fsCompiled: 0, 
            linked: 0, 
            materialShaders: 0, 
            compileTime: 0
        }
    };
 
};