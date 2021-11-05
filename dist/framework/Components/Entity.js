import { getApplication } from '../globals.js';
var id = 0;
var Entity = (function () {
    function Entity(name) {
        if (name === void 0) { name = "Entity"; }
        this.name = name;
        this.components = new Array();
        this.types = {};
        this.id = id++;
        getApplication().EntitySystem.addEntity(this);
    }
    ;
    Entity.prototype.Update = function () { };
    ;
    Entity.prototype.Ready = function () { };
    ;
    Entity.prototype.addComponent = function (C) {
        if (C.id) {
            if (!this.types[C.id]) {
                C.entity = this;
                C.Initialize();
                this.components.push(C);
            }
            else {
                console.warn(this.name + " already has component : " + C.id);
            }
            ;
        }
        else {
            console.warn("invalid Component");
        }
    };
    ;
    Entity.prototype.findComponent = function (C) {
        var c = null;
        if (this.hasComponent(C)) {
            this.components.forEach(function (component) {
                if (component.id === C) {
                    c = component;
                }
            });
            return c;
        }
        else {
            console.warn(C + " does not exist in " + this.name + "!");
        }
        ;
    };
    ;
    Entity.prototype.hasComponent = function (C) {
        if (this.types[C]) {
            return true;
        }
        ;
        console.warn(this.name + ", Does not have " + C + " !");
        return false;
    };
    ;
    return Entity;
}());
export default Entity;
;
//# sourceMappingURL=Entity.js.map