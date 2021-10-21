import { getApplication } from "./globals";
var gl = getApplication().gl;
export var ShaderType;
(function (ShaderType) {
    ShaderType[ShaderType["VERTEX_SHADER"] = 0] = "VERTEX_SHADER";
    ShaderType[ShaderType["FRAGMENT_SHADER"] = 1] = "FRAGMENT_SHADER";
})(ShaderType || (ShaderType = {}));
;
//# sourceMappingURL=constants.js.map