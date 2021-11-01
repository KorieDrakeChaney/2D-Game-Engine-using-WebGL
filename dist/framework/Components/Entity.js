var id = 0;
var Entity = (function () {
    function Entity() {
        this.components = {};
        this.types = {};
        this.id = id++;
    }
    ;
    Entity.prototype.Update = function () { };
    ;
    Entity.prototype.addComponent = function (C) {
        if (C.id) {
            if (!this.types[C.id]) {
                C.entity = this;
                C.Initialize();
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
        return;
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
    return Entity;
}());
export default Entity;
;
//# sourceMappingURL=Entity.js.map