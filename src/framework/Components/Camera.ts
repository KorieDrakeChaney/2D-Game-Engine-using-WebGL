import mat4 from '../../math/mat4.js';
import {getApplication} from '../globals';
import Component from './Component';
import vec3 from '../../math/vec3';

export default class Camera extends Component{

    private mCenter : [number, number];
    private mWidth : number;
    private mViewport : [number, number, number, number];
    private mNearPlane : number;
    private mFarPlane : number;
    private mViewMatrix : mat4;
    private mProjMatrix : mat4;
    private mVPMatrix : mat4;
    private mBgColor : [number, number, number, number];

    constructor(center : [number, number] = [0, 0], width : number = 10, viewportArray : [number, number, number, number] = [0, 0, 100, 100]){
        super();
        this.mCenter = center;
        this.mWidth = width;
        this.mViewport = viewportArray;
        this.mNearPlane = 0;
        this.mFarPlane = 1000;

        this.mViewMatrix = new mat4();
        this.mProjMatrix = new mat4();
        this.mVPMatrix = new mat4();

        this.mBgColor = [1.0, 0.4, 0.3, 1.0];
    };

    initialize(){
        var gl = getApplication().gl;

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

        this.mViewMatrix = 
        mat4.lookAt(
            new vec3([this.mCenter[0], this.mCenter[1], 10]),
            new vec3([this.mCenter[0], this.mCenter[1], 0]),
            new vec3([0, 1, 0])
        );

        let halfWidth = 0.5 * this.mWidth;
        let halfHeight = halfWidth * this.mViewport[3] / this.mViewport[2];

        this.mProjMatrix =
        mat4.orthographic(
            -halfWidth, 
            halfWidth, 
            -halfHeight, 
            halfHeight, 
            this.mNearPlane, 
            this.mFarPlane
        );

        this.mVPMatrix = 
        this.mProjMatrix.multiply(this.mViewMatrix);

    };

    get getCenter() { return this.mCenter; };
    
    set setCenter(center : [number, number]){ 
        this.mCenter[0] = center[0];
        this.mCenter[1] = center[1];
    };

    get getWidth() { return this.mWidth; };
    set setWidth(width : number) { this.mWidth = width; };

    get getViewport() { return this.mViewport; };
    set setViewport(viewportArray : [number, number, number, number]) { 
        this.mViewport = viewportArray;
    };


    get getBgColor() { return this.mBgColor; };
    set setBgColor(color : [number, number,  number, number]) { this.mBgColor = color; };

    get getVPMatrix() {return this.mVPMatrix;};
};
