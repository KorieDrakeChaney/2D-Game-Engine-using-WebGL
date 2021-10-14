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
    return Entity;
}());
export default Entity;
//# sourceMappingURL=Entity.js.map