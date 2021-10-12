/* global mat4, gEngine, vec3, vec2, Renderer */

function MyGame(htmlCanvasID){
    
    
    this.mConstColorShader = null;
    this.canvasID = htmlCanvasID;
    this.whiteScale = [0, 0];
    this.redScale = [0.05, 0.05];
    this.whiteRotation = 1;
    this.redRotation = 0;
    this.mCamera = null;
    this.mWhiteSq = null;
    this.mRedSq = null;
    this.mVertexBuffer = null;
    
    gEngine.Core.initializeEngineCore(htmlCanvasID);
    gEngine.Utils.autoResizeCanvas(gEngine.Core.getCanvas(htmlCanvasID));

    
    this.initialize();

};


MyGame.prototype.initialize = function() {
    // Step A: set up the cameras
    
    
    var gl = gEngine.Core.getGL();
    
    this.mCamera = new Camera(
        vec2.fromValues(20, 60),
        10, 
        [0, 0, gl.canvas.width, gl.canvas.height]
    );
    
        // Step B: Activate the drawing Camera
    
    window.addEventListener('resize', () => {
       this.mCamera.changeCameraViewport([0, 0, gl.canvas.width, gl.canvas.height]);
    });
    
    this.mCamera.setBackgroundColor([0, 0.8, 0.94, 1.0]);
            // sets the background color to pink lul
    
    // Step B: create the shader
    this.mConstColorShader = new SimpleShader(
        "src/GLSLShaders/SimpleVS.glsl", 
        "src/GLSLShaders/SimpleFS.glsl", 
        );


    // Step C: Create the renderable objects
    this.mWhiteSq = new Renderer(this.mConstColorShader, this.mCamera.getVPMatrix());
    this.mWhiteSq.setColor([1, 0.8, 1, 1]);

    // Step D: Initialize the white renderable object: center
    this.mWhiteSq.getForm().setAll([20, 60, -((gl.canvas.height * 10)/gl.canvas.width)], [4, 4, 4], [0, 0, 0]);
    this.mWhiteSq.initialize();
    gl.enable(gl.DEPTH_TEST);
    // E: Start the game loop running
    gEngine.GameLoop.start(this);
    
 
};



MyGame.prototype.update = function() { 
  
    // For this very simple game, let's move the white square
    this.Input();
    // Step A: move the white square
    
};


MyGame.prototype.draw = function(){
    // Step A: clear the canvas
    gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1.0]);
    
    this.mCamera.setupViewProjection();

    
    //Step C: Activate the white shader to drawg

    this.mWhiteSq.render();
    // Step D: Activate the red shader to draw
};



MyGame.prototype.Input = function(){
    

  var keys = gEngine.Input.keys;
  
  var whiteXform = this.mWhiteSq.getForm();

  if(gEngine.Input.isKeyPressed(keys.Right)){
      if(whiteXform.getX() > 27.5){
          whiteXform.setX(27.5);
      }else {
        whiteXform.incPosBy(0.05);
      }
  };
  if(gEngine.Input.isKeyPressed(keys.Left)){
      if(whiteXform.getX() < 12.5){
          whiteXform.setX(12.5);
      }else {
        whiteXform.incPosBy(-0.05);
      }
  };
  
  if(gEngine.Input.isKeyClicked(keys.Up)){
      this.whiteRotation *= -1;
  };

};