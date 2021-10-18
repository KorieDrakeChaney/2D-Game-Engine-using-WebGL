var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { getApplication } from "../framework/globals";
export default function Shader(program, vs, fs) {
    return __awaiter(this, void 0, void 0, function () {
        var fragmentShaderFile, gl, vertexShader, fragmentShader;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fragmentShaderFile = fs;
                    this.program = program;
                    gl = getApplication().gl;
                    vertexShader = null;
                    fragmentShader = null;
                    return [4, fetch(vs)
                            .then(function (res) { return res.text(); })
                            .then(function (data) {
                            var vsShaderInfo = data;
                            console.log(vsShaderInfo);
                            vertexShader = gl.createShader(gl.VERTEX_SHADER);
                            gl.shaderSource(vertexShader, vsShaderInfo);
                            gl.compileShader(vertexShader);
                            var success = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);
                            if (!success) {
                                console.error("vertex::shader::compile::error");
                            }
                            ;
                        })];
                case 1:
                    _a.sent();
                    return [4, fetch(fs)
                            .then(function (res) { return res.text(); })
                            .then(function (data) {
                            var fsShaderInfo = data;
                            console.log(fsShaderInfo);
                            fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
                            gl.shaderSource(fragmentShader, fsShaderInfo);
                            gl.compileShader(fragmentShader);
                            var success = gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS);
                            if (!success) {
                                console.error("fragment::shader::compile::error");
                            }
                            ;
                        })
                            .then(function () {
                            var gl = getApplication().gl;
                            _this.program = gl.createProgram();
                            gl.attachShader(_this.program, vertexShader);
                            gl.attachShader(_this.program, fragmentShader);
                            gl.linkProgram(_this.program);
                            if (!gl.getProgramParameter(_this.program, gl.LINK_STATUS)) {
                                var info = gl.getProgramInfoLog(_this.program);
                                throw 'Could not compile WebGL program. \n\n' + info;
                            }
                            ;
                            program = _this.program;
                        })];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
}
;
//# sourceMappingURL=shader.js.map