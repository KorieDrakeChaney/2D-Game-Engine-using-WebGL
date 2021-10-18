var Entity = (function () {
    function Entity() {
        this.components = [];
    }
    ;
    Entity.prototype.addComponent = function (component) {
        this.components.push(component);
        component.entity = this;
    };
    ;
    Entity.prototype.findComponent = function (T) {
        this.components.forEach(function (Component) {
            if (typeof Component === typeof T) {
                return Component;
            }
            ;
        });
        return null;
    };
    ;
    return Entity;
}());
export default Entity;
;
//# sourceMappingURL=Entity.js.map