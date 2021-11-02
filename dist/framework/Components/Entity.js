import { getApplication } from '../globals.js';
import { Timer } from '../Application.js';
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
                console.error("Already has component : ", typeof C);
            }
            ;
        }
        else {
            console.error("invalid Component");
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
            console.log(C + " does not exist in entity!");
        }
        ;
    };
    ;
    Entity.prototype.hasComponent = function (C) {
        if (this.types[C]) {
            return true;
        }
        ;
        console.log(this.id, "Does not have", C, "!");
        return false;
    };
    ;
    Entity.prototype.Initialize = function () {
        this.sort();
        this.components.forEach(function (component) {
            component.Initialize();
        });
    };
    ;
    Entity.prototype.sort = function () {
        var timer = new Timer("Entity Sort");
        var c = 0;
        var newArray = new Array();
        var _loop_1 = function (i) {
            this_1.components.forEach(function (component) {
                if (component.weight === i) {
                    newArray[c] = component;
                    c++;
                }
                ;
            });
        };
        var this_1 = this;
        for (var i = 0; i < 3; i++) {
            _loop_1(i);
        }
        ;
        this.components = newArray;
        timer.stop();
    };
    ;
    return Entity;
}());
export default Entity;
;
//# sourceMappingURL=Entity.js.map