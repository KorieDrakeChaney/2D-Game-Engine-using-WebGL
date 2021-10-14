import * as mat4 from '../math/mat4.js';
import {currentGL} from '../framework/globals.js';



class Camera {
    constructor(center, width, viewportArray){
        this.mCenter = center;
        this.mWidth = width;
        this.mViewport = viewportArray;
        this.mNearPlane = 0;
        this.mFarPlane = 1000;

        this.mViewMatrix = mat4.create();
        this.mProjMatrix = mat4.create();
        this.mVPMatrix = mat4.create();

        this.mBgColor = [1.0, 0.4, 0.3, 1.0];
    };

    initialize(){
        var gl = currentGL;

        gl.viewport(
            this.mViewport[0],
            this.mViewport[1],
            this.mViewport[2],
            this.mViewport[3]
        );

        gl.scissor(
            this.mViewport[0],
            this.mViewport[1],
            this.mViewport[2],
            this.mViewport[3]
        );

        gl.clearColor(
            this.mBgColor[0],
            this.mBgColor[1],
            this.mBgColor[2],
            this.mBgColor[3]
        );

        gl.enable(gl.SCISSOR_TEST);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.disable(gl.SCISSOR_TEST);

        mat4.lookAt(this.mViewMatrix,
            [this.mCenter[0], this.mCenter[1], 10],
            [this.mCenter[0], this.mCenter[1], 0],
            [0, 1, 0]
        );

        var halfWidth = 0.5 * this.mWidth;
        var halfHeight = halfWidth * this.mViewport[3] / this.mViewport[2];

        mat4.ortho(this.mProjMatrix, 
            -halfWidth, 
            halfWidth, 
            -halfHeight, 
            halfHeight, 
            this.mNearPlane, 
            this.mFarPlane
        );

        mat4.multiply(this.mVPMatrix, this.mProjMatrix, this.mViewMatrix);

    };

    get getCenter() { return this.mCenter; };
    set setCenter(center){ 
        this.mCenter[0] = center[0];
        this.mCenter[1] = center[1];
    };

    get getWidth() { return this.mWidth; };
    set setWidth(width) { this.mWidth = width; };

    get getViewport() { return this.mViewPort; };
    set setViewport(viewportArray) { 
        this.mViewport = viewportArray;
    };


    get getBgColor() { return this.mBgColor; };
    set setBgColor(color) { this.mBgColor = color; };

    get getVPMatrix() {return this.mVPMatrix;};
};

export {Camera};