var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Component from "../Component.js";
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite(color) {
        if (color === void 0) { color = [1, 0, 0, 1]; }
        var _this = _super.call(this) || this;
        _this.id = "Sprite";
        _this.color = color;
        return _this;
    }
    ;
    Sprite.prototype.Initialize = function () {
        this.entity.types.Sprite = this.id;
        this.entity.components.color = this.color;
    };
    ;
    return Sprite;
}(Component));
export default Sprite;
//# sourceMappingURL=Sprite.js.map