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
import vec2 from '../../../math/vec2.js';
import Component from '../Component.js';
var Transform = (function (_super) {
    __extends(Transform, _super);
    function Transform(position, scale, rotation) {
        if (position === void 0) { position = new vec2([0, 0]); }
        if (scale === void 0) { scale = new vec2([1, 1]); }
        if (rotation === void 0) { rotation = 0; }
        var _this = _super.call(this) || this;
        _this.position = position;
        _this.scale = scale;
        _this.rotation = rotation;
        return _this;
    }
    ;
    return Transform;
}(Component));
export default Transform;
;
//# sourceMappingURL=Transform.js.map