"use strict"; 

var Renderer = function(shader, viewProjMatrix) {
    
    var gl = gEngine.Core.getGL();
    
    this.VAO = gl.createVertexArray();
    this.IBO = gl.createBuffer();
    this.VBO = gl.createBuffer();

    this.mCompiledShader = shader;  // the shader for shading this object
    this.mShaderVertexPositionAttribute = null;
    this.mPixelColor = null;
    this.mViewProjTransform = null;
    this.mVPMatrix = viewProjMatrix;
    this.mLightObject = null;
    this.mColor = [1, 0, 1, 1]; // Color for the fragment shader
    this.mForm = new Transform();
    
    this.vertices = [0.5, 0.5, 0.0, -0.5, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0];
    this.indices = [0, 1, 2, 2, 3, 0];
};
       
        

Renderer.prototype.initialize = function() {

    var gl = gEngine.Core.getGL();

        // Step D: gets a reference to the aSquareVertexPosition attribute
    this.mShaderVertexPositioAttribute = gl.getAttribLocation(this.mCompiledShader, "aVertexPosition");
    // Step F: Describe the characters of the vertex position
        // Step G: Gets a reference to the uniform variable uPixelColor
    this.mPixelColor = gl.getUniformLocation(this.mCompiledShader, "uPixelColor");

    this.mModel= gl.getUniformLocation(this.mCompiledShader, "uModelViewMatrix");

    this.mViewProjTransform = gl.getUniformLocation(this.mCompiledShader, "uProjectionMatrix");


    this.run();
};

Renderer.prototype.run = function() {
        var gl = gEngine.Core.getGL();
    
        gl.bindVertexArray(this.VAO);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.IBO);

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);
        gl.vertexAttribPointer(this.mShaderVertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
        this.activateShader(this.mColor, this.mVPMatrix);
        
};



Renderer.prototype.getVAO = function() { return this.VAO; };
    
Renderer.prototype.setVAO = function (vertexArrayObject){
        this.VAO = vertexArrayObject;
    };
    
Renderer.prototype.getVBO = function() { return this.VBO; };
    
Renderer.prototype.setVBO = function(VertexBufferObject) {
        this.VBO = VertexBufferObject;
    };
    
    
Renderer.prototype.getIBO = function () { return this.IBO; };
    
Renderer.prototype.setIBO = function (IndexBufferObject) {
        this.IBO = IndexBufferObject;
    };
    
Renderer.prototype.getData = function() {return this.data;};
    
Renderer.prototype.setData = function(newData) { 
        this.data = newData;
    };
    

Renderer.prototype.render = function(){
    var gl = gEngine.Core.getGL();
    

    gl.useProgram(this.mCompiledShader);
    gl.bindVertexArray(this.VAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.IBO);
    this.loadObjectTransform();
    try {
        this.loadObjectTransform(this.mForm.getModel());
        this.activateShader();
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }
    catch(err){
        console.log(err);
    };
   this.cleanBuffer();
};

Renderer.prototype.activateShader = function(pixelColor = [1, 0, 0, 1], vpMatrix = [
    1, 0, 0, 0, 
    0, 1, 0, 0, 
    0, 0, 1, 0, 
    0, 0, 0, 1
]){

  var gl = gEngine.Core.getGL();
  gl.useProgram(this.mCompiledShader);
  gl.enableVertexAttribArray(this.mShaderVertexPositioAttribute);
  gl.enableVertexAttribArray(this.mModel);
  gl.uniform4fv(this.mPixelColor, pixelColor);
  gl.uniformMatrix4fv(this.mViewProjTransform, false, this.mVPMatrix);

};

Renderer.prototype.changeIndices = function(ind) {
    this.indices = ind;
};

Renderer.prototype.changeVertices = function(vert) {
    this.vertices = vert;
};

Renderer.prototype.cleanBuffer = function(){
    var gl = gEngine.Core.getGL();
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    gl.bindVertexArray(null);
    gl.useProgram(null);

};

Renderer.prototype.loadObjectTransform = function(modelTransform = [
    1, 0, 0, 0, 
    0, 1, 0, 0, 
    0, 0, 1 ,0, 
    0, 0, 0, 1
]){
  var gl = gEngine.Core.getGL();
  gl.uniformMatrix4fv(this.mModel, false, modelTransform);
};

Renderer.prototype.getShader = function() { return this.mCompiledShader;};


Renderer.prototype.getModel = function() { return this.mModel; };
Renderer.prototype.setModel = function(model) { model = this.mModel; };


Renderer.prototype.setColor = function(color){this.mColor = color;};
Renderer.prototype.getColor = function(){return this.mColor;};
Renderer.prototype.getForm = function() {return this.mForm;};