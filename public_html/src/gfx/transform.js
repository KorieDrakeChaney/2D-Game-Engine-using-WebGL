import * as mat4 from '../math/mat4.js';
import * as vec3 from '../math/vec3.js';




class Transform {

    constructor(){
        this.position = vec3.fromValues(0, 0, 0);
        this.rotation = vec3.fromValues(0, 0, 0);
        this.scale = vec3.fromValues(1, 1, 1);
    };


    get getPosition() { return this.position; };
    set setPosition(newPos) { this.position = newPos; };

    get getRotation() { return this.rotation; };
    set setRotation(newRot) { this.rotation = newRot; };
    
    get getScale() { return this.scale; };
    set setScale(newScale) { this.scale = newScale; };

    get getModel() { 
        var model = mat4.create();

        mat4.translate(model, model, this.position);
        
        mat4.rotateX(model, model, this.rotation[0], vec3.fromValues(1, 0, 0));
        mat4.rotateY(model, model, this.rotation[1], vec3.fromValues(0, 1, 0));
        mat4.rotateZ(model, model, this.rotation[2], vec3.fromValues(0, 0, 1));

        mat4.scale(model, model, this.scale);

        return model;

    };

    loadModel(position, rotation, scale){
        var model = mat4.create();

        mat4.translate(model, model, vec3.fromValues(position[0], position[1], position[2]));
        
        mat4.rotateX(model, model, rotation[0], vec3.fromValues(1, 0, 0));
        mat4.rotateY(model, model, rotation[1], vec3.fromValues(0, 1, 0));
        mat4.rotateZ(model, model, rotation[2], vec3.fromValues(0, 0, 1));

        mat4.scale(model, model, vec3.fromValues(scale[0], scale[1], scale[2]));
        var model2 = this.getModel;

        return mat4.multiply(model, model2, model);
    };

}


export {Transform};