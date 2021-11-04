import { getApplication } from '../globals.js';
var id = 0;
var Entity = (function () {
    function Entity() {
        this.components = new Array();
        this.types = {};
        this.id = id++;
        getApplication().EntityManager.addEntity(this);
    }
    ;
    Entity.prototype.Update = function () { };
    ;
    Entity.prototype.addComponent = function (C) {
        if (C.id) {
            if (!this.types[C.id]) {
                C.entity = this;
                this.components.push(C);
            }
            else {
                console.warn("Already has component : ", typeof C);
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
            console.warn(C + " does not exist in entity!");
        }
        ;
    };
    ;
    Entity.prototype.hasComponent = function (C) {
        if (this.types[C]) {
            return true;
        }
        ;
        console.warn(this.id + ", Does not have " + C + " !");
        return false;
    };
    ;
    Entity.prototype.Initialize = function () {
        this.components.forEach(function (component) {
            component.Initialize();
        });
    };
    ;
    return Entity;
}());
export default Entity;
;
//# sourceMappingURL=Entity.js.map