import * as Renderer2D from "../../gfx/Renderer2D.js";
import vec4 from '../../math/vec4.js';
var id = 0;
var Entity = (function () {
    function Entity() {
        this.components = {};
        this.types = {};
        this.id = id++;
    }
    ;
    Entity.prototype.addComponent = function (T) {
        if (T.id) {
            if (!this.types[T.id]) {
                T.entity = this;
                T.Initialize();
            }
            else {
                console.error("Already has component : ", typeof T);
            }
            ;
        }
        else {
            console.error("invalid Component");
        }
    };
    ;
    Entity.prototype.draw = function () {
        if (!this.hasComponent("Transform") || !this.hasComponent("Sprite")) {
            return;
        }
        new Renderer2D.DrawQuad({
            position: this.components.position,
            size: this.components.scale,
            rotation: this.components.rotation,
            color: new vec4(this.components.color)
        });
    };
    ;
    Entity.prototype.findComponent = function (T) {
        return;
    };
    ;
    Entity.prototype.hasComponent = function (T) {
        if (this.types[T]) {
            return true;
        }
        ;
        console.log(this.id, "Does not have", T, "!");
        return false;
    };
    ;
    return Entity;
}());
export default Entity;
;
//# sourceMappingURL=Entity.js.map