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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var path = require('path');
module.exports = {
    mode: "development",
    entry: "./src/main.ts",
    module: {
        rules: [
            { test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
(function () {
    "use strict";
    var __webpack_modules__ = ({
        "./src/Components/Component.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Component = (function () {\r\n    function Component() {\r\n    }\r\n    return Component;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/Components/Component.ts?");
        }),
        "./src/Components/Renderer.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gfx_vertex_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gfx/vertex-buffer */ \"./src/gfx/vertex-buffer.ts\");\n/* harmony import */ var _gfx_index_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gfx/index-buffer */ \"./src/gfx/index-buffer.ts\");\n/* harmony import */ var _gfx_shader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gfx/shader */ \"./src/gfx/shader.ts\");\n/* harmony import */ var _framework_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework/globals */ \"./src/framework/globals.ts\");\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component */ \"./src/Components/Component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\nvar Renderer = (function (_super) {\r\n    __extends(Renderer, _super);\r\n    function Renderer() {\r\n        var _this = _super.call(this) || this;\r\n        _this.VBO = null;\r\n        _this.IBO = null;\r\n        _this.vertices = [0.5, 0.5, 0.0, -0.5, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0];\r\n        _this.indices = [0, 1, 2, 2, 3, 0];\r\n        _this.program = null;\r\n        _this.aPos = null;\r\n        return _this;\r\n    }\r\n    ;\r\n    Renderer.prototype.initialize = function () {\r\n        var gl = _framework_globals__WEBPACK_IMPORTED_MODULE_3__.currentGL;\r\n        this.IBO = (0,_gfx_index_buffer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(gl, this.indices);\r\n        this.VBO = (0,_gfx_vertex_buffer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(gl, this.vertices);\r\n    };\r\n    ;\r\n    Renderer.prototype.draw = function () {\r\n        var _this = this;\r\n        var gl = _framework_globals__WEBPACK_IMPORTED_MODULE_3__.currentGL;\r\n        (0,_gfx_shader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.program, \"../res/shader/simpleVS.glsl\", \"../res/shader/simpleFS.glsl\")\r\n            .then(function () {\r\n            gl.useProgram(_this.program);\r\n            _this.aPos = gl.getAttribLocation(_this.program, 'aPos');\r\n            gl.vertexAttribPointer(_this.aPos, 3, gl.UNSIGNED_SHORT, false, 0, 0);\r\n            gl.enableVertexAttribArray(_this.aPos);\r\n            gl.bindBuffer(gl.ARRAY_BUFFER, _this.VBO);\r\n            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _this.IBO);\r\n            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNTED_SHORT, 0);\r\n        });\r\n    };\r\n    ;\r\n    return Renderer;\r\n}(_Component__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Renderer);\r\n;\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/Components/Renderer.ts?");
        }),
        "./src/framework/application.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ \"./src/framework/globals.ts\");\n\r\n\r\nvar Application = (function () {\r\n    function Application(canvas) {\r\n        this._canvas = canvas;\r\n        this._gl = null;\r\n    }\r\n    ;\r\n    Application.prototype.initialize = function () {\r\n        this._gl = this._canvas.getContext('webgl2') || this._canvas.getContext('experimental-webgl2');\r\n        this._canvas.width = window.innerWidth - 40;\r\n        this._canvas.height = window.innerHeight - 40;\r\n        this._canvas.style.border = \"5px solid black\";\r\n        this._canvas.style.padding = \"1px\";\r\n        try {\r\n            this._gl.viewport(0, 0, this._canvas.width, this._canvas.height);\r\n        }\r\n        catch (err) {\r\n            console.error(err);\r\n        }\r\n        ;\r\n        (0,_globals__WEBPACK_IMPORTED_MODULE_0__.setApplication)(this._canvas);\r\n        (0,_globals__WEBPACK_IMPORTED_MODULE_0__.setGL)(this._gl);\r\n        if (this._gl === null) {\r\n            alert('Your browser does not support webgl');\r\n        }\r\n        ;\r\n    };\r\n    ;\r\n    Application.prototype.clear = function () {\r\n        this._gl.clearColor(0, 0, 0, 1);\r\n        this._gl.clear(this._gl.COLOR_BUFFER_BIT || this._gl.DEPTH_BUFFER_BIT);\r\n    };\r\n    ;\r\n    return Application;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Application);\r\n;\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/framework/application.ts?");
        }),
        "./src/framework/globals.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getApplication\": () => (/* binding */ getApplication),\n/* harmony export */   \"setApplication\": () => (/* binding */ setApplication),\n/* harmony export */   \"getGL\": () => (/* binding */ getGL),\n/* harmony export */   \"setGL\": () => (/* binding */ setGL),\n/* harmony export */   \"currentApplication\": () => (/* binding */ currentApplication),\n/* harmony export */   \"currentGL\": () => (/* binding */ currentGL)\n/* harmony export */ });\nvar currentApplication = null;\r\nvar currentGL = null;\r\nfunction getApplication() {\r\n    return currentApplication;\r\n}\r\n;\r\nfunction setApplication(app) {\r\n    currentApplication = app;\r\n}\r\n;\r\nfunction getGL() {\r\n    return currentGL;\r\n}\r\n;\r\nfunction setGL(gl) {\r\n    currentGL = gl;\r\n}\r\n;\r\n\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/framework/globals.ts?");
        }),
        "./src/gfx/index-buffer.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IBO)\n/* harmony export */ });\nfunction IBO(gl, indices) {\r\n    var _gl = gl;\r\n    var _indices = indices;\r\n    var ibo = gl.createBuffer();\r\n    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);\r\n    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(_indices), gl.STATIC_DRAW);\r\n    return ibo;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/gfx/index-buffer.ts?");
        }),
        "./src/gfx/shader.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Shader)\n/* harmony export */ });\n/* harmony import */ var _framework_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/globals */ \"./src/framework/globals.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nfunction Shader(program, vs, fs) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var fragmentShaderFile, gl, vertexShader, fragmentShader;\r\n        var _this = this;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    fragmentShaderFile = fs;\r\n                    this.program = program;\r\n                    gl = _framework_globals__WEBPACK_IMPORTED_MODULE_0__.currentGL;\r\n                    vertexShader = null;\r\n                    fragmentShader = null;\r\n                    return [4, fetch(vs)\r\n                            .then(function (res) { return res.text(); })\r\n                            .then(function (data) {\r\n                            var vsShaderInfo = data;\r\n                            console.log(vsShaderInfo);\r\n                            vertexShader = gl.createShader(gl.VERTEX_SHADER);\r\n                            gl.shaderSource(vertexShader, vsShaderInfo);\r\n                            gl.compileShader(vertexShader);\r\n                            var success = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);\r\n                            if (!success) {\r\n                                console.error(\"vertex::shader::compile::error\");\r\n                            }\r\n                            ;\r\n                        })];\r\n                case 1:\r\n                    _a.sent();\r\n                    return [4, fetch(fs)\r\n                            .then(function (res) { return res.text(); })\r\n                            .then(function (data) {\r\n                            var fsShaderInfo = data;\r\n                            console.log(fsShaderInfo);\r\n                            fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);\r\n                            gl.shaderSource(fragmentShader, fsShaderInfo);\r\n                            gl.compileShader(fragmentShader);\r\n                            var success = gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS);\r\n                            if (!success) {\r\n                                console.error(\"fragment::shader::compile::error\");\r\n                            }\r\n                            ;\r\n                        })\r\n                            .then(function () {\r\n                            var gl = _framework_globals__WEBPACK_IMPORTED_MODULE_0__.currentGL;\r\n                            _this.program = gl.createProgram();\r\n                            gl.attachShader(_this.program, vertexShader);\r\n                            gl.attachShader(_this.program, fragmentShader);\r\n                            gl.linkProgram(_this.program);\r\n                            if (!gl.getProgramParameter(_this.program, gl.LINK_STATUS)) {\r\n                                var info = gl.getProgramInfoLog(_this.program);\r\n                                throw 'Could not compile WebGL program. \\n\\n' + info;\r\n                            }\r\n                            ;\r\n                            program = _this.program;\r\n                        })];\r\n                case 2:\r\n                    _a.sent();\r\n                    return [2];\r\n            }\r\n        });\r\n    });\r\n}\r\n;\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/gfx/shader.ts?");
        }),
        "./src/gfx/vertex-buffer.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VBO)\n/* harmony export */ });\nfunction VBO(gl, vertices) {\r\n    var _gl = gl;\r\n    var _vertices = vertices;\r\n    var vbo = gl.createBuffer();\r\n    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vbo);\r\n    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Float32Array(_vertices), gl.STATIC_DRAW);\r\n    return vbo;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/gfx/vertex-buffer.ts?");
        }),
        "./src/main.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _framework_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework/application */ \"./src/framework/application.ts\");\n/* harmony import */ var _Components_Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Renderer */ \"./src/Components/Renderer.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar main = (function () {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var app, renderer;\r\n        return __generator(this, function (_a) {\r\n            app = new _framework_application__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('canvas-webgl'));\r\n            app.initialize();\r\n            app.clear();\r\n            renderer = new _Components_Renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n            renderer.initialize();\r\n            renderer.draw();\r\n            return [2];\r\n        });\r\n    });\r\n}());\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/main.ts?");
        })
    });
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (function () {
        __webpack_require__.d = function (exports, definition) {
            for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                }
            }
        };
    })();
    (function () {
        __webpack_require__.o = function (obj, prop) { return (Object.prototype.hasOwnProperty.call(obj, prop)); };
    })();
    (function () {
        __webpack_require__.r = function (exports) {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            }
            Object.defineProperty(exports, '__esModule', { value: true });
        };
    })();
    var __webpack_exports__ = __webpack_require__("./src/main.ts");
})();
(function () {
    "use strict";
})();
var path = require('path');
module.exports = {
    mode: "development",
    entry: "./src/main.ts",
    module: {
        rules: [
            { test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
define("src/framework/globals", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setApplication = exports.getApplication = void 0;
    var currentApplication = null;
    function getApplication() {
        return currentApplication;
    }
    exports.getApplication = getApplication;
    ;
    function setApplication(app) {
        currentApplication = app;
    }
    exports.setApplication = setApplication;
    ;
});
define("src/framework/application", ["require", "exports", "src/framework/globals"], function (require, exports, globals_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Application = (function () {
        function Application(canvas) {
            this.canvas = canvas;
            this.gl = null;
        }
        ;
        Application.prototype.initialize = function () {
            this.gl = this.canvas.getContext('webgl2') || this.canvas.getContext('experimental-webgl2');
            this.canvas.width = window.innerWidth - 40;
            this.canvas.height = window.innerHeight - 40;
            this.canvas.style.border = "5px solid black";
            this.canvas.style.padding = "1px";
            try {
                this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
            }
            catch (err) {
                console.error(err);
            }
            ;
            (0, globals_1.setApplication)(this);
            if (this.gl === null) {
                alert('Your browser does not support webgl');
            }
            ;
        };
        ;
        Application.prototype.clear = function () {
            this.gl.clearColor(0, 0, 0, 1);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
        };
        ;
        return Application;
    }());
    exports.default = Application;
    ;
});
define("src/gfx/shader", ["require", "exports", "src/framework/globals"], function (require, exports, globals_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Shader(program, vs, fs) {
        return __awaiter(this, void 0, void 0, function () {
            var fragmentShaderFile, gl, vertexShader, fragmentShader;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fragmentShaderFile = fs;
                        this.program = program;
                        gl = globals_2.currentGL;
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
                                var gl = globals_2.currentGL;
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
    exports.default = Shader;
    ;
});
define("src/main", ["require", "exports", "src/framework/application", "./Components/Renderer/Renderer"], function (require, exports, application_1, Renderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    application_1 = __importDefault(application_1);
    Renderer_1 = __importDefault(Renderer_1);
    var main = (function () {
        return __awaiter(this, void 0, void 0, function () {
            var app, renderer;
            return __generator(this, function (_a) {
                app = new application_1.default(document.getElementById('canvas-webgl'));
                app.initialize();
                app.clear();
                renderer = new Renderer_1.default();
                return [2];
            });
        });
    }());
});
define("src/framework/Components/Entity", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.default = Entity;
    ;
});
define("src/framework/Components/Component", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Component = (function () {
        function Component() {
        }
        return Component;
    }());
    exports.default = Component;
});
define("src/framework/Components/System", ["require", "exports", "src/framework/Components/Component"], function (require, exports, Component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Component_1 = __importDefault(Component_1);
    var System = (function (_super) {
        __extends(System, _super);
        function System() {
            return _super.call(this) || this;
        }
        ;
        System.Register = function (T) {
            System.components.push(T);
        };
        System.Update = function () {
            this.components.forEach(function (Components) {
                Components.Update();
            });
        };
        return System;
    }(Component_1.default));
    exports.default = System;
    ;
});
define("src/framework/Components/common", ["require", "exports", "src/framework/Components/Component", "./Transform", "src/framework/Components/Entity"], function (require, exports, Component_2, Transform_1, Entity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Entity = exports.Transform = exports.Component = void 0;
    Component_2 = __importDefault(Component_2);
    Transform_1 = __importDefault(Transform_1);
    Entity_1 = __importDefault(Entity_1);
    exports.Component = Component_2.default;
    exports.Transform = Transform_1.default;
    exports.Entity = Entity_1.default;
});
define("src/math/constants", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.epsilon = void 0;
    exports.epsilon = 0.00001;
});
define("src/math/vec3", ["require", "exports", "src/math/quat", "src/math/constants"], function (require, exports, quat_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    quat_1 = __importDefault(quat_1);
    var vec3 = (function () {
        function vec3(values) {
            this.values = new Float32Array(3);
            if (values !== undefined) {
                this.xyz = values;
            }
        }
        Object.defineProperty(vec3.prototype, "x", {
            get: function () {
                return this.values[0];
            },
            set: function (value) {
                this.values[0] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec3.prototype, "y", {
            get: function () {
                return this.values[1];
            },
            set: function (value) {
                this.values[1] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec3.prototype, "z", {
            get: function () {
                return this.values[2];
            },
            set: function (value) {
                this.values[2] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec3.prototype, "xy", {
            get: function () {
                return [
                    this.values[0],
                    this.values[1],
                ];
            },
            set: function (values) {
                this.values[0] = values[0];
                this.values[1] = values[1];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec3.prototype, "xyz", {
            get: function () {
                return [
                    this.values[0],
                    this.values[1],
                    this.values[2],
                ];
            },
            set: function (values) {
                this.values[0] = values[0];
                this.values[1] = values[1];
                this.values[2] = values[2];
            },
            enumerable: false,
            configurable: true
        });
        vec3.prototype.at = function (index) {
            return this.values[index];
        };
        vec3.prototype.reset = function () {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        };
        vec3.prototype.copy = function (dest) {
            if (!dest) {
                dest = new vec3();
            }
            dest.x = this.x;
            dest.y = this.y;
            dest.z = this.z;
            return dest;
        };
        vec3.prototype.negate = function (dest) {
            if (!dest) {
                dest = this;
            }
            dest.x = -this.x;
            dest.y = -this.y;
            dest.z = -this.z;
            return dest;
        };
        vec3.prototype.equals = function (vector, threshold) {
            if (threshold === void 0) { threshold = constants_1.epsilon; }
            if (Math.abs(this.x - vector.x) > threshold) {
                return false;
            }
            if (Math.abs(this.y - vector.y) > threshold) {
                return false;
            }
            if (Math.abs(this.z - vector.z) > threshold) {
                return false;
            }
            return true;
        };
        vec3.prototype.length = function () {
            return Math.sqrt(this.squaredLength());
        };
        vec3.prototype.squaredLength = function () {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            return (x * x + y * y + z * z);
        };
        vec3.prototype.add = function (vector) {
            this.x += vector.x;
            this.y += vector.y;
            this.z += vector.z;
            return this;
        };
        vec3.prototype.subtract = function (vector) {
            this.x -= vector.x;
            this.y -= vector.y;
            this.z -= vector.z;
            return this;
        };
        vec3.prototype.multiply = function (vector) {
            this.x *= vector.x;
            this.y *= vector.y;
            this.z *= vector.z;
            return this;
        };
        vec3.prototype.divide = function (vector) {
            this.x /= vector.x;
            this.y /= vector.y;
            this.z /= vector.z;
            return this;
        };
        vec3.prototype.scale = function (value, dest) {
            if (!dest) {
                dest = this;
            }
            dest.x *= value;
            dest.y *= value;
            dest.z *= value;
            return dest;
        };
        vec3.prototype.normalize = function (dest) {
            if (!dest) {
                dest = this;
            }
            var length = this.length();
            if (length === 1) {
                return this;
            }
            if (length === 0) {
                dest.x = 0;
                dest.y = 0;
                dest.z = 0;
                return dest;
            }
            length = 1.0 / length;
            dest.x *= length;
            dest.y *= length;
            dest.z *= length;
            return dest;
        };
        vec3.prototype.multiplyByMat3 = function (matrix, dest) {
            if (!dest) {
                dest = this;
            }
            return matrix.multiplyVec3(this, dest);
        };
        vec3.prototype.multiplyByQuat = function (quaternion, dest) {
            if (!dest) {
                dest = this;
            }
            return quaternion.multiplyVec3(this, dest);
        };
        vec3.prototype.toQuat = function (dest) {
            if (!dest) {
                dest = new quat_1.default();
            }
            var c = new vec3();
            var s = new vec3();
            c.x = Math.cos(this.x * 0.5);
            s.x = Math.sin(this.x * 0.5);
            c.y = Math.cos(this.y * 0.5);
            s.y = Math.sin(this.y * 0.5);
            c.z = Math.cos(this.z * 0.5);
            s.z = Math.sin(this.z * 0.5);
            dest.x = s.x * c.y * c.z - c.x * s.y * s.z;
            dest.y = c.x * s.y * c.z + s.x * c.y * s.z;
            dest.z = c.x * c.y * s.z - s.x * s.y * c.z;
            dest.w = c.x * c.y * c.z + s.x * s.y * s.z;
            return dest;
        };
        vec3.cross = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec3();
            }
            var x = vector.x;
            var y = vector.y;
            var z = vector.z;
            var x2 = vector2.x;
            var y2 = vector2.y;
            var z2 = vector2.z;
            dest.x = y * z2 - z * y2;
            dest.y = z * x2 - x * z2;
            dest.z = x * y2 - y * x2;
            return dest;
        };
        vec3.dot = function (vector, vector2) {
            var x = vector.x;
            var y = vector.y;
            var z = vector.z;
            var x2 = vector2.x;
            var y2 = vector2.y;
            var z2 = vector2.z;
            return (x * x2 + y * y2 + z * z2);
        };
        vec3.distance = function (vector, vector2) {
            var x = vector2.x - vector.x;
            var y = vector2.y - vector.y;
            var z = vector2.z - vector.z;
            return Math.sqrt(this.squaredDistance(vector, vector2));
        };
        vec3.squaredDistance = function (vector, vector2) {
            var x = vector2.x - vector.x;
            var y = vector2.y - vector.y;
            var z = vector2.z - vector.z;
            return (x * x + y * y + z * z);
        };
        vec3.direction = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec3();
            }
            var x = vector.x - vector2.x;
            var y = vector.y - vector2.y;
            var z = vector.z - vector2.z;
            var length = Math.sqrt(x * x + y * y + z * z);
            if (length === 0) {
                dest.x = 0;
                dest.y = 0;
                dest.z = 0;
                return dest;
            }
            length = 1 / length;
            dest.x = x * length;
            dest.y = y * length;
            dest.z = z * length;
            return dest;
        };
        vec3.mix = function (vector, vector2, time, dest) {
            if (!dest) {
                dest = new vec3();
            }
            dest.x = vector.x + time * (vector2.x - vector.x);
            dest.y = vector.y + time * (vector2.y - vector.y);
            dest.z = vector.z + time * (vector2.z - vector.z);
            return dest;
        };
        vec3.sum = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec3();
            }
            dest.x = vector.x + vector2.x;
            dest.y = vector.y + vector2.y;
            dest.z = vector.z + vector2.z;
            return dest;
        };
        vec3.difference = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec3();
            }
            dest.x = vector.x - vector2.x;
            dest.y = vector.y - vector2.y;
            dest.z = vector.z - vector2.z;
            return dest;
        };
        vec3.product = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec3();
            }
            dest.x = vector.x * vector2.x;
            dest.y = vector.y * vector2.y;
            dest.z = vector.z * vector2.z;
            return dest;
        };
        vec3.quotient = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec3();
            }
            dest.x = vector.x / vector2.x;
            dest.y = vector.y / vector2.y;
            dest.z = vector.z / vector2.z;
            return dest;
        };
        vec3.zero = new vec3([0, 0, 0]);
        vec3.one = new vec3([1, 1, 1]);
        vec3.up = new vec3([0, 1, 0]);
        vec3.right = new vec3([1, 0, 0]);
        vec3.forward = new vec3([0, 0, 1]);
        return vec3;
    }());
    exports.default = vec3;
});
define("src/math/quat", ["require", "exports", "src/math/mat3", "src/math/mat4", "src/math/vec3", "src/math/constants"], function (require, exports, mat3_1, mat4_1, vec3_1, constants_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    mat3_1 = __importDefault(mat3_1);
    mat4_1 = __importDefault(mat4_1);
    vec3_1 = __importDefault(vec3_1);
    var quat = (function () {
        function quat(values) {
            this.values = new Float32Array(4);
            if (values !== undefined) {
                this.xyzw = values;
            }
        }
        Object.defineProperty(quat.prototype, "x", {
            get: function () {
                return this.values[0];
            },
            set: function (value) {
                this.values[0] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(quat.prototype, "y", {
            get: function () {
                return this.values[1];
            },
            set: function (value) {
                this.values[1] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(quat.prototype, "z", {
            get: function () {
                return this.values[2];
            },
            set: function (value) {
                this.values[2] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(quat.prototype, "w", {
            get: function () {
                return this.values[3];
            },
            set: function (value) {
                this.values[3] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(quat.prototype, "xy", {
            get: function () {
                return [
                    this.values[0],
                    this.values[1],
                ];
            },
            set: function (values) {
                this.values[0] = values[0];
                this.values[1] = values[1];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(quat.prototype, "xyz", {
            get: function () {
                return [
                    this.values[0],
                    this.values[1],
                    this.values[2],
                ];
            },
            set: function (values) {
                this.values[0] = values[0];
                this.values[1] = values[1];
                this.values[2] = values[2];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(quat.prototype, "xyzw", {
            get: function () {
                return [
                    this.values[0],
                    this.values[1],
                    this.values[2],
                    this.values[3],
                ];
            },
            set: function (values) {
                this.values[0] = values[0];
                this.values[1] = values[1];
                this.values[2] = values[2];
                this.values[3] = values[3];
            },
            enumerable: false,
            configurable: true
        });
        quat.prototype.at = function (index) {
            return this.values[index];
        };
        quat.prototype.reset = function () {
            for (var i = 0; i < 4; i++) {
                this.values[i] = 0;
            }
        };
        quat.prototype.copy = function (dest) {
            if (!dest) {
                dest = new quat();
            }
            for (var i = 0; i < 4; i++) {
                dest.values[i] = this.values[i];
            }
            return dest;
        };
        quat.prototype.roll = function () {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            return Math.atan2(2.0 * (x * y + w * z), w * w + x * x - y * y - z * z);
        };
        quat.prototype.pitch = function () {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            return Math.atan2(2.0 * (y * z + w * x), w * w - x * x - y * y + z * z);
        };
        quat.prototype.yaw = function () {
            return Math.asin(2.0 * (this.x * this.z - this.w * this.y));
        };
        quat.prototype.equals = function (vector, threshold) {
            if (threshold === void 0) { threshold = constants_2.epsilon; }
            for (var i = 0; i < 4; i++) {
                if (Math.abs(this.values[i] - vector.at(i)) > threshold) {
                    return false;
                }
            }
            return true;
        };
        quat.prototype.setIdentity = function () {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 1;
            return this;
        };
        quat.prototype.calculateW = function () {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            this.w = -(Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z)));
            return this;
        };
        quat.prototype.inverse = function () {
            var dot = quat.dot(this, this);
            if (!dot) {
                this.xyzw = [0, 0, 0, 0];
                return this;
            }
            var invDot = dot ? 1.0 / dot : 0;
            this.x *= -invDot;
            this.y *= -invDot;
            this.z *= -invDot;
            this.w *= invDot;
            return this;
        };
        quat.prototype.conjugate = function () {
            this.values[0] *= -1;
            this.values[1] *= -1;
            this.values[2] *= -1;
            return this;
        };
        quat.prototype.length = function () {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            return Math.sqrt(x * x + y * y + z * z + w * w);
        };
        quat.prototype.normalize = function (dest) {
            if (!dest) {
                dest = this;
            }
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            var length = Math.sqrt(x * x + y * y + z * z + w * w);
            if (!length) {
                dest.x = 0;
                dest.y = 0;
                dest.z = 0;
                dest.w = 0;
                return dest;
            }
            length = 1 / length;
            dest.x = x * length;
            dest.y = y * length;
            dest.z = z * length;
            dest.w = w * length;
            return dest;
        };
        quat.prototype.add = function (other) {
            for (var i = 0; i < 4; i++) {
                this.values[i] += other.at(i);
            }
            return this;
        };
        quat.prototype.multiply = function (other) {
            var q1x = this.values[0];
            var q1y = this.values[1];
            var q1z = this.values[2];
            var q1w = this.values[3];
            var q2x = other.x;
            var q2y = other.y;
            var q2z = other.z;
            var q2w = other.w;
            this.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
            this.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;
            this.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;
            this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
            return this;
        };
        quat.prototype.multiplyVec3 = function (vector, dest) {
            if (!dest) {
                dest = new vec3_1.default();
            }
            var x = vector.x;
            var y = vector.y;
            var z = vector.z;
            var qx = this.x;
            var qy = this.y;
            var qz = this.z;
            var qw = this.w;
            var ix = qw * x + qy * z - qz * y;
            var iy = qw * y + qz * x - qx * z;
            var iz = qw * z + qx * y - qy * x;
            var iw = -qx * x - qy * y - qz * z;
            dest.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
            dest.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
            dest.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
            return dest;
        };
        quat.prototype.toMat3 = function (dest) {
            if (!dest) {
                dest = new mat3_1.default();
            }
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var xy = x * y2;
            var xz = x * z2;
            var yy = y * y2;
            var yz = y * z2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            dest.init([
                1 - (yy + zz),
                xy + wz,
                xz - wy,
                xy - wz,
                1 - (xx + zz),
                yz + wx,
                xz + wy,
                yz - wx,
                1 - (xx + yy),
            ]);
            return dest;
        };
        quat.prototype.toMat4 = function (dest) {
            if (!dest) {
                dest = new mat4_1.default();
            }
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var xy = x * y2;
            var xz = x * z2;
            var yy = y * y2;
            var yz = y * z2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            dest.init([
                1 - (yy + zz),
                xy + wz,
                xz - wy,
                0,
                xy - wz,
                1 - (xx + zz),
                yz + wx,
                0,
                xz + wy,
                yz - wx,
                1 - (xx + yy),
                0,
                0,
                0,
                0,
                1,
            ]);
            return dest;
        };
        quat.dot = function (q1, q2) {
            return q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
        };
        quat.sum = function (q1, q2, dest) {
            if (!dest) {
                dest = new quat();
            }
            dest.x = q1.x + q2.x;
            dest.y = q1.y + q2.y;
            dest.z = q1.z + q2.z;
            dest.w = q1.w + q2.w;
            return dest;
        };
        quat.product = function (q1, q2, dest) {
            if (!dest) {
                dest = new quat();
            }
            var q1x = q1.x;
            var q1y = q1.y;
            var q1z = q1.z;
            var q1w = q1.w;
            var q2x = q2.x;
            var q2y = q2.y;
            var q2z = q2.z;
            var q2w = q2.w;
            dest.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
            dest.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;
            dest.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;
            dest.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
            return dest;
        };
        quat.cross = function (q1, q2, dest) {
            if (!dest) {
                dest = new quat();
            }
            var q1x = q1.x;
            var q1y = q1.y;
            var q1z = q1.z;
            var q1w = q1.w;
            var q2x = q2.x;
            var q2y = q2.y;
            var q2z = q2.z;
            var q2w = q2.w;
            dest.x = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x;
            dest.y = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
            dest.z = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y;
            dest.w = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z;
            return dest;
        };
        quat.shortMix = function (q1, q2, time, dest) {
            if (!dest) {
                dest = new quat();
            }
            if (time <= 0.0) {
                dest.xyzw = q1.xyzw;
                return dest;
            }
            else if (time >= 1.0) {
                dest.xyzw = q2.xyzw;
                return dest;
            }
            var cos = quat.dot(q1, q2);
            var q2a = q2.copy();
            if (cos < 0.0) {
                q2a.inverse();
                cos = -cos;
            }
            var k0;
            var k1;
            if (cos > 0.9999) {
                k0 = 1 - time;
                k1 = 0 + time;
            }
            else {
                var sin = Math.sqrt(1 - cos * cos);
                var angle = Math.atan2(sin, cos);
                var oneOverSin = 1 / sin;
                k0 = Math.sin((1 - time) * angle) * oneOverSin;
                k1 = Math.sin((0 + time) * angle) * oneOverSin;
            }
            dest.x = k0 * q1.x + k1 * q2a.x;
            dest.y = k0 * q1.y + k1 * q2a.y;
            dest.z = k0 * q1.z + k1 * q2a.z;
            dest.w = k0 * q1.w + k1 * q2a.w;
            return dest;
        };
        quat.mix = function (q1, q2, time, dest) {
            if (!dest) {
                dest = new quat();
            }
            var cosHalfTheta = q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
            if (Math.abs(cosHalfTheta) >= 1.0) {
                dest.xyzw = q1.xyzw;
                return dest;
            }
            var halfTheta = Math.acos(cosHalfTheta);
            var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
            if (Math.abs(sinHalfTheta) < 0.001) {
                dest.x = q1.x * 0.5 + q2.x * 0.5;
                dest.y = q1.y * 0.5 + q2.y * 0.5;
                dest.z = q1.z * 0.5 + q2.z * 0.5;
                dest.w = q1.w * 0.5 + q2.w * 0.5;
                return dest;
            }
            var ratioA = Math.sin((1 - time) * halfTheta) / sinHalfTheta;
            var ratioB = Math.sin(time * halfTheta) / sinHalfTheta;
            dest.x = q1.x * ratioA + q2.x * ratioB;
            dest.y = q1.y * ratioA + q2.y * ratioB;
            dest.z = q1.z * ratioA + q2.z * ratioB;
            dest.w = q1.w * ratioA + q2.w * ratioB;
            return dest;
        };
        quat.fromAxisAngle = function (axis, angle, dest) {
            if (!dest) {
                dest = new quat();
            }
            angle *= 0.5;
            var sin = Math.sin(angle);
            dest.x = axis.x * sin;
            dest.y = axis.y * sin;
            dest.z = axis.z * sin;
            dest.w = Math.cos(angle);
            return dest;
        };
        quat.identity = new quat().setIdentity();
        return quat;
    }());
    exports.default = quat;
});
define("src/math/mat2", ["require", "exports", "src/math/vec2", "src/math/constants"], function (require, exports, vec2_1, constants_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    vec2_1 = __importDefault(vec2_1);
    var mat2 = (function () {
        function mat2(values) {
            this.values = new Float32Array(4);
            if (values !== undefined) {
                this.init(values);
            }
        }
        mat2.prototype.at = function (index) {
            return this.values[index];
        };
        mat2.prototype.init = function (values) {
            for (var i = 0; i < 4; i++) {
                this.values[i] = values[i];
            }
            return this;
        };
        mat2.prototype.reset = function () {
            for (var i = 0; i < 4; i++) {
                this.values[i] = 0;
            }
        };
        mat2.prototype.copy = function (dest) {
            if (!dest) {
                dest = new mat2();
            }
            for (var i = 0; i < 4; i++) {
                dest.values[i] = this.values[i];
            }
            return dest;
        };
        mat2.prototype.all = function () {
            var data = [];
            for (var i = 0; i < 4; i++) {
                data[i] = this.values[i];
            }
            return data;
        };
        mat2.prototype.row = function (index) {
            return [
                this.values[index * 2 + 0],
                this.values[index * 2 + 1],
            ];
        };
        mat2.prototype.col = function (index) {
            return [
                this.values[index],
                this.values[index + 2],
            ];
        };
        mat2.prototype.equals = function (matrix, threshold) {
            if (threshold === void 0) { threshold = constants_3.epsilon; }
            for (var i = 0; i < 4; i++) {
                if (Math.abs(this.values[i] - matrix.at(i)) > threshold) {
                    return false;
                }
            }
            return true;
        };
        mat2.prototype.determinant = function () {
            return this.values[0] * this.values[3] - this.values[2] * this.values[1];
        };
        mat2.prototype.setIdentity = function () {
            this.values[0] = 1;
            this.values[1] = 0;
            this.values[2] = 0;
            this.values[3] = 1;
            return this;
        };
        mat2.prototype.transpose = function () {
            var temp = this.values[1];
            this.values[1] = this.values[2];
            this.values[2] = temp;
            return this;
        };
        mat2.prototype.inverse = function () {
            var det = this.determinant();
            if (!det) {
                return null;
            }
            det = 1.0 / det;
            var a11 = this.values[0];
            this.values[0] = det * (this.values[3]);
            this.values[1] = det * (-this.values[1]);
            this.values[2] = det * (-this.values[2]);
            this.values[3] = det * a11;
            return this;
        };
        mat2.prototype.multiply = function (matrix) {
            var a11 = this.values[0];
            var a12 = this.values[1];
            var a21 = this.values[2];
            var a22 = this.values[3];
            this.values[0] = a11 * matrix.at(0) + a12 * matrix.at(2);
            this.values[1] = a11 * matrix.at(1) + a12 * matrix.at(3);
            this.values[2] = a21 * matrix.at(0) + a22 * matrix.at(2);
            this.values[3] = a21 * matrix.at(1) + a22 * matrix.at(3);
            return this;
        };
        mat2.prototype.rotate = function (angle) {
            var a11 = this.values[0];
            var a12 = this.values[1];
            var a21 = this.values[2];
            var a22 = this.values[3];
            var sin = Math.sin(angle);
            var cos = Math.cos(angle);
            this.values[0] = a11 * cos + a12 * sin;
            this.values[1] = a11 * -sin + a12 * cos;
            this.values[2] = a21 * cos + a22 * sin;
            this.values[3] = a21 * -sin + a22 * cos;
            return this;
        };
        mat2.prototype.multiplyVec2 = function (vector, result) {
            var x = vector.x;
            var y = vector.y;
            if (result) {
                result.xy = [
                    x * this.values[0] + y * this.values[1],
                    x * this.values[2] + y * this.values[3],
                ];
                return result;
            }
            else {
                return new vec2_1.default([
                    x * this.values[0] + y * this.values[1],
                    x * this.values[2] + y * this.values[3],
                ]);
            }
        };
        mat2.prototype.scale = function (vector) {
            var a11 = this.values[0];
            var a12 = this.values[1];
            var a21 = this.values[2];
            var a22 = this.values[3];
            var x = vector.x;
            var y = vector.y;
            this.values[0] = a11 * x;
            this.values[1] = a12 * y;
            this.values[2] = a21 * x;
            this.values[3] = a22 * y;
            return this;
        };
        mat2.product = function (m1, m2, result) {
            var a11 = m1.at(0);
            var a12 = m1.at(1);
            var a21 = m1.at(2);
            var a22 = m1.at(3);
            if (result) {
                result.init([
                    a11 * m2.at(0) + a12 * m2.at(2),
                    a11 * m2.at(1) + a12 * m2.at(3),
                    a21 * m2.at(0) + a22 * m2.at(2),
                    a21 * m2.at(1) + a22 * m2.at(3),
                ]);
                return result;
            }
            else {
                return new mat2([
                    a11 * m2.at(0) + a12 * m2.at(2),
                    a11 * m2.at(1) + a12 * m2.at(3),
                    a21 * m2.at(0) + a22 * m2.at(2),
                    a21 * m2.at(1) + a22 * m2.at(3),
                ]);
            }
        };
        mat2.identity = new mat2().setIdentity();
        return mat2;
    }());
    exports.default = mat2;
});
define("src/math/vec2", ["require", "exports", "src/math/vec3", "src/math/constants"], function (require, exports, vec3_2, constants_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    vec3_2 = __importDefault(vec3_2);
    var vec2 = (function () {
        function vec2(values) {
            this.values = new Float32Array(2);
            if (values !== undefined) {
                this.xy = values;
            }
        }
        Object.defineProperty(vec2.prototype, "x", {
            get: function () {
                return this.values[0];
            },
            set: function (value) {
                this.values[0] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec2.prototype, "y", {
            get: function () {
                return this.values[1];
            },
            set: function (value) {
                this.values[1] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec2.prototype, "xy", {
            get: function () {
                return [
                    this.values[0],
                    this.values[1],
                ];
            },
            set: function (values) {
                this.values[0] = values[0];
                this.values[1] = values[1];
            },
            enumerable: false,
            configurable: true
        });
        vec2.prototype.at = function (index) {
            return this.values[index];
        };
        vec2.prototype.reset = function () {
            this.x = 0;
            this.y = 0;
        };
        vec2.prototype.copy = function (dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = this.x;
            dest.y = this.y;
            return dest;
        };
        vec2.prototype.negate = function (dest) {
            if (!dest) {
                dest = this;
            }
            dest.x = -this.x;
            dest.y = -this.y;
            return dest;
        };
        vec2.prototype.equals = function (vector, threshold) {
            if (threshold === void 0) { threshold = constants_4.epsilon; }
            if (Math.abs(this.x - vector.x) > threshold) {
                return false;
            }
            if (Math.abs(this.y - vector.y) > threshold) {
                return false;
            }
            return true;
        };
        vec2.prototype.length = function () {
            return Math.sqrt(this.squaredLength());
        };
        vec2.prototype.squaredLength = function () {
            var x = this.x;
            var y = this.y;
            return (x * x + y * y);
        };
        vec2.prototype.add = function (vector) {
            this.x += vector.x;
            this.y += vector.y;
            return this;
        };
        vec2.prototype.subtract = function (vector) {
            this.x -= vector.x;
            this.y -= vector.y;
            return this;
        };
        vec2.prototype.multiply = function (vector) {
            this.x *= vector.x;
            this.y *= vector.y;
            return this;
        };
        vec2.prototype.divide = function (vector) {
            this.x /= vector.x;
            this.y /= vector.y;
            return this;
        };
        vec2.prototype.scale = function (value, dest) {
            if (!dest) {
                dest = this;
            }
            dest.x *= value;
            dest.y *= value;
            return dest;
        };
        vec2.prototype.normalize = function (dest) {
            if (!dest) {
                dest = this;
            }
            var length = this.length();
            if (length === 1) {
                return this;
            }
            if (length === 0) {
                dest.x = 0;
                dest.y = 0;
                return dest;
            }
            length = 1.0 / length;
            dest.x *= length;
            dest.y *= length;
            return dest;
        };
        vec2.prototype.multiplyMat2 = function (matrix, dest) {
            if (!dest) {
                dest = this;
            }
            return matrix.multiplyVec2(this, dest);
        };
        vec2.prototype.multiplyMat3 = function (matrix, dest) {
            if (!dest) {
                dest = this;
            }
            return matrix.multiplyVec2(this, dest);
        };
        vec2.cross = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec3_2.default();
            }
            var x = vector.x;
            var y = vector.y;
            var x2 = vector2.x;
            var y2 = vector2.y;
            var z = x * y2 - y * x2;
            dest.x = 0;
            dest.y = 0;
            dest.z = z;
            return dest;
        };
        vec2.dot = function (vector, vector2) {
            return (vector.x * vector2.x + vector.y * vector2.y);
        };
        vec2.distance = function (vector, vector2) {
            return Math.sqrt(this.squaredDistance(vector, vector2));
        };
        vec2.squaredDistance = function (vector, vector2) {
            var x = vector2.x - vector.x;
            var y = vector2.y - vector.y;
            return (x * x + y * y);
        };
        vec2.direction = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec2();
            }
            var x = vector.x - vector2.x;
            var y = vector.y - vector2.y;
            var length = Math.sqrt(x * x + y * y);
            if (length === 0) {
                dest.x = 0;
                dest.y = 0;
                return dest;
            }
            length = 1 / length;
            dest.x = x * length;
            dest.y = y * length;
            return dest;
        };
        vec2.mix = function (vector, vector2, time, dest) {
            if (!dest) {
                dest = new vec2();
            }
            var x = vector.x;
            var y = vector.y;
            var x2 = vector2.x;
            var y2 = vector2.y;
            dest.x = x + time * (x2 - x);
            dest.y = y + time * (y2 - y);
            return dest;
        };
        vec2.sum = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = vector.x + vector2.x;
            dest.y = vector.y + vector2.y;
            return dest;
        };
        vec2.difference = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = vector.x - vector2.x;
            dest.y = vector.y - vector2.y;
            return dest;
        };
        vec2.product = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = vector.x * vector2.x;
            dest.y = vector.y * vector2.y;
            return dest;
        };
        vec2.quotient = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = vector.x / vector2.x;
            dest.y = vector.y / vector2.y;
            return dest;
        };
        vec2.zero = new vec2([0, 0]);
        vec2.one = new vec2([1, 1]);
        return vec2;
    }());
    exports.default = vec2;
});
define("src/math/mat3", ["require", "exports", "src/math/mat4", "src/math/quat", "src/math/vec2", "src/math/vec3", "src/math/constants"], function (require, exports, mat4_2, quat_2, vec2_2, vec3_3, constants_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    mat4_2 = __importDefault(mat4_2);
    quat_2 = __importDefault(quat_2);
    vec2_2 = __importDefault(vec2_2);
    vec3_3 = __importDefault(vec3_3);
    var mat3 = (function () {
        function mat3(values) {
            this.values = new Float32Array(9);
            if (values !== undefined) {
                this.init(values);
            }
        }
        mat3.prototype.at = function (index) {
            return this.values[index];
        };
        mat3.prototype.init = function (values) {
            for (var i = 0; i < 9; i++) {
                this.values[i] = values[i];
            }
            return this;
        };
        mat3.prototype.reset = function () {
            for (var i = 0; i < 9; i++) {
                this.values[i] = 0;
            }
        };
        mat3.prototype.copy = function (dest) {
            if (!dest) {
                dest = new mat3();
            }
            for (var i = 0; i < 9; i++) {
                dest.values[i] = this.values[i];
            }
            return dest;
        };
        mat3.prototype.all = function () {
            var data = [];
            for (var i = 0; i < 9; i++) {
                data[i] = this.values[i];
            }
            return data;
        };
        mat3.prototype.row = function (index) {
            return [
                this.values[index * 3 + 0],
                this.values[index * 3 + 1],
                this.values[index * 3 + 2],
            ];
        };
        mat3.prototype.col = function (index) {
            return [
                this.values[index],
                this.values[index + 3],
                this.values[index + 6],
            ];
        };
        mat3.prototype.equals = function (matrix, threshold) {
            if (threshold === void 0) { threshold = constants_5.epsilon; }
            for (var i = 0; i < 9; i++) {
                if (Math.abs(this.values[i] - matrix.at(i)) > threshold) {
                    return false;
                }
            }
            return true;
        };
        mat3.prototype.determinant = function () {
            var a00 = this.values[0];
            var a01 = this.values[1];
            var a02 = this.values[2];
            var a10 = this.values[3];
            var a11 = this.values[4];
            var a12 = this.values[5];
            var a20 = this.values[6];
            var a21 = this.values[7];
            var a22 = this.values[8];
            var det01 = a22 * a11 - a12 * a21;
            var det11 = -a22 * a10 + a12 * a20;
            var det21 = a21 * a10 - a11 * a20;
            return a00 * det01 + a01 * det11 + a02 * det21;
        };
        mat3.prototype.setIdentity = function () {
            this.values[0] = 1;
            this.values[1] = 0;
            this.values[2] = 0;
            this.values[3] = 0;
            this.values[4] = 1;
            this.values[5] = 0;
            this.values[6] = 0;
            this.values[7] = 0;
            this.values[8] = 1;
            return this;
        };
        mat3.prototype.transpose = function () {
            var temp01 = this.values[1];
            var temp02 = this.values[2];
            var temp12 = this.values[5];
            this.values[1] = this.values[3];
            this.values[2] = this.values[6];
            this.values[3] = temp01;
            this.values[5] = this.values[7];
            this.values[6] = temp02;
            this.values[7] = temp12;
            return this;
        };
        mat3.prototype.inverse = function () {
            var a00 = this.values[0];
            var a01 = this.values[1];
            var a02 = this.values[2];
            var a10 = this.values[3];
            var a11 = this.values[4];
            var a12 = this.values[5];
            var a20 = this.values[6];
            var a21 = this.values[7];
            var a22 = this.values[8];
            var det01 = a22 * a11 - a12 * a21;
            var det11 = -a22 * a10 + a12 * a20;
            var det21 = a21 * a10 - a11 * a20;
            var det = a00 * det01 + a01 * det11 + a02 * det21;
            if (!det) {
                return null;
            }
            det = 1.0 / det;
            this.values[0] = det01 * det;
            this.values[1] = (-a22 * a01 + a02 * a21) * det;
            this.values[2] = (a12 * a01 - a02 * a11) * det;
            this.values[3] = det11 * det;
            this.values[4] = (a22 * a00 - a02 * a20) * det;
            this.values[5] = (-a12 * a00 + a02 * a10) * det;
            this.values[6] = det21 * det;
            this.values[7] = (-a21 * a00 + a01 * a20) * det;
            this.values[8] = (a11 * a00 - a01 * a10) * det;
            return this;
        };
        mat3.prototype.multiply = function (matrix) {
            var a00 = this.values[0];
            var a01 = this.values[1];
            var a02 = this.values[2];
            var a10 = this.values[3];
            var a11 = this.values[4];
            var a12 = this.values[5];
            var a20 = this.values[6];
            var a21 = this.values[7];
            var a22 = this.values[8];
            var b00 = matrix.at(0);
            var b01 = matrix.at(1);
            var b02 = matrix.at(2);
            var b10 = matrix.at(3);
            var b11 = matrix.at(4);
            var b12 = matrix.at(5);
            var b20 = matrix.at(6);
            var b21 = matrix.at(7);
            var b22 = matrix.at(8);
            this.values[0] = b00 * a00 + b01 * a10 + b02 * a20;
            this.values[1] = b00 * a01 + b01 * a11 + b02 * a21;
            this.values[2] = b00 * a02 + b01 * a12 + b02 * a22;
            this.values[3] = b10 * a00 + b11 * a10 + b12 * a20;
            this.values[4] = b10 * a01 + b11 * a11 + b12 * a21;
            this.values[5] = b10 * a02 + b11 * a12 + b12 * a22;
            this.values[6] = b20 * a00 + b21 * a10 + b22 * a20;
            this.values[7] = b20 * a01 + b21 * a11 + b22 * a21;
            this.values[8] = b20 * a02 + b21 * a12 + b22 * a22;
            return this;
        };
        mat3.prototype.multiplyVec2 = function (vector, result) {
            var x = vector.x;
            var y = vector.y;
            if (result) {
                result.xy = [
                    x * this.values[0] + y * this.values[3] + this.values[6],
                    x * this.values[1] + y * this.values[4] + this.values[7],
                ];
                return result;
            }
            else {
                return new vec2_2.default([
                    x * this.values[0] + y * this.values[3] + this.values[6],
                    x * this.values[1] + y * this.values[4] + this.values[7],
                ]);
            }
        };
        mat3.prototype.multiplyVec3 = function (vector, result) {
            var x = vector.x;
            var y = vector.y;
            var z = vector.z;
            if (result) {
                result.xyz = [
                    x * this.values[0] + y * this.values[3] + z * this.values[6],
                    x * this.values[1] + y * this.values[4] + z * this.values[7],
                    x * this.values[2] + y * this.values[5] + z * this.values[8],
                ];
                return result;
            }
            else {
                return new vec3_3.default([
                    x * this.values[0] + y * this.values[3] + z * this.values[6],
                    x * this.values[1] + y * this.values[4] + z * this.values[7],
                    x * this.values[2] + y * this.values[5] + z * this.values[8],
                ]);
            }
        };
        mat3.prototype.toMat4 = function (result) {
            if (result) {
                result.init([
                    this.values[0],
                    this.values[1],
                    this.values[2],
                    0,
                    this.values[3],
                    this.values[4],
                    this.values[5],
                    0,
                    this.values[6],
                    this.values[7],
                    this.values[8],
                    0,
                    0,
                    0,
                    0,
                    1,
                ]);
                return result;
            }
            else {
                return new mat4_2.default([
                    this.values[0],
                    this.values[1],
                    this.values[2],
                    0,
                    this.values[3],
                    this.values[4],
                    this.values[5],
                    0,
                    this.values[6],
                    this.values[7],
                    this.values[8],
                    0,
                    0,
                    0,
                    0,
                    1,
                ]);
            }
        };
        mat3.prototype.toQuat = function () {
            var m00 = this.values[0];
            var m01 = this.values[1];
            var m02 = this.values[2];
            var m10 = this.values[3];
            var m11 = this.values[4];
            var m12 = this.values[5];
            var m20 = this.values[6];
            var m21 = this.values[7];
            var m22 = this.values[8];
            var fourXSquaredMinus1 = m00 - m11 - m22;
            var fourYSquaredMinus1 = m11 - m00 - m22;
            var fourZSquaredMinus1 = m22 - m00 - m11;
            var fourWSquaredMinus1 = m00 + m11 + m22;
            var biggestIndex = 0;
            var fourBiggestSquaredMinus1 = fourWSquaredMinus1;
            if (fourXSquaredMinus1 > fourBiggestSquaredMinus1) {
                fourBiggestSquaredMinus1 = fourXSquaredMinus1;
                biggestIndex = 1;
            }
            if (fourYSquaredMinus1 > fourBiggestSquaredMinus1) {
                fourBiggestSquaredMinus1 = fourYSquaredMinus1;
                biggestIndex = 2;
            }
            if (fourZSquaredMinus1 > fourBiggestSquaredMinus1) {
                fourBiggestSquaredMinus1 = fourZSquaredMinus1;
                biggestIndex = 3;
            }
            var biggestVal = Math.sqrt(fourBiggestSquaredMinus1 + 1) * 0.5;
            var mult = 0.25 / biggestVal;
            var result = new quat_2.default();
            switch (biggestIndex) {
                case 0:
                    result.w = biggestVal;
                    result.x = (m12 - m21) * mult;
                    result.y = (m20 - m02) * mult;
                    result.z = (m01 - m10) * mult;
                    break;
                case 1:
                    result.w = (m12 - m21) * mult;
                    result.x = biggestVal;
                    result.y = (m01 + m10) * mult;
                    result.z = (m20 + m02) * mult;
                    break;
                case 2:
                    result.w = (m20 - m02) * mult;
                    result.x = (m01 + m10) * mult;
                    result.y = biggestVal;
                    result.z = (m12 + m21) * mult;
                    break;
                case 3:
                    result.w = (m01 - m10) * mult;
                    result.x = (m20 + m02) * mult;
                    result.y = (m12 + m21) * mult;
                    result.z = biggestVal;
                    break;
            }
            return result;
        };
        mat3.prototype.rotate = function (angle, axis) {
            var x = axis.x;
            var y = axis.y;
            var z = axis.z;
            var length = Math.sqrt(x * x + y * y + z * z);
            if (!length) {
                return null;
            }
            if (length !== 1) {
                length = 1 / length;
                x *= length;
                y *= length;
                z *= length;
            }
            var s = Math.sin(angle);
            var c = Math.cos(angle);
            var t = 1.0 - c;
            var a00 = this.values[0];
            var a01 = this.values[1];
            var a02 = this.values[2];
            var a10 = this.values[4];
            var a11 = this.values[5];
            var a12 = this.values[6];
            var a20 = this.values[8];
            var a21 = this.values[9];
            var a22 = this.values[10];
            var b00 = x * x * t + c;
            var b01 = y * x * t + z * s;
            var b02 = z * x * t - y * s;
            var b10 = x * y * t - z * s;
            var b11 = y * y * t + c;
            var b12 = z * y * t + x * s;
            var b20 = x * z * t + y * s;
            var b21 = y * z * t - x * s;
            var b22 = z * z * t + c;
            this.values[0] = a00 * b00 + a10 * b01 + a20 * b02;
            this.values[1] = a01 * b00 + a11 * b01 + a21 * b02;
            this.values[2] = a02 * b00 + a12 * b01 + a22 * b02;
            this.values[3] = a00 * b10 + a10 * b11 + a20 * b12;
            this.values[4] = a01 * b10 + a11 * b11 + a21 * b12;
            this.values[5] = a02 * b10 + a12 * b11 + a22 * b12;
            this.values[6] = a00 * b20 + a10 * b21 + a20 * b22;
            this.values[7] = a01 * b20 + a11 * b21 + a21 * b22;
            this.values[8] = a02 * b20 + a12 * b21 + a22 * b22;
            return this;
        };
        mat3.product = function (m1, m2, result) {
            var a00 = m1.at(0);
            var a01 = m1.at(1);
            var a02 = m1.at(2);
            var a10 = m1.at(3);
            var a11 = m1.at(4);
            var a12 = m1.at(5);
            var a20 = m1.at(6);
            var a21 = m1.at(7);
            var a22 = m1.at(8);
            var b00 = m2.at(0);
            var b01 = m2.at(1);
            var b02 = m2.at(2);
            var b10 = m2.at(3);
            var b11 = m2.at(4);
            var b12 = m2.at(5);
            var b20 = m2.at(6);
            var b21 = m2.at(7);
            var b22 = m2.at(8);
            if (result) {
                result.init([
                    b00 * a00 + b01 * a10 + b02 * a20,
                    b00 * a01 + b01 * a11 + b02 * a21,
                    b00 * a02 + b01 * a12 + b02 * a22,
                    b10 * a00 + b11 * a10 + b12 * a20,
                    b10 * a01 + b11 * a11 + b12 * a21,
                    b10 * a02 + b11 * a12 + b12 * a22,
                    b20 * a00 + b21 * a10 + b22 * a20,
                    b20 * a01 + b21 * a11 + b22 * a21,
                    b20 * a02 + b21 * a12 + b22 * a22,
                ]);
                return result;
            }
            else {
                return new mat3([
                    b00 * a00 + b01 * a10 + b02 * a20,
                    b00 * a01 + b01 * a11 + b02 * a21,
                    b00 * a02 + b01 * a12 + b02 * a22,
                    b10 * a00 + b11 * a10 + b12 * a20,
                    b10 * a01 + b11 * a11 + b12 * a21,
                    b10 * a02 + b11 * a12 + b12 * a22,
                    b20 * a00 + b21 * a10 + b22 * a20,
                    b20 * a01 + b21 * a11 + b22 * a21,
                    b20 * a02 + b21 * a12 + b22 * a22,
                ]);
            }
        };
        mat3.identity = new mat3().setIdentity();
        return mat3;
    }());
    exports.default = mat3;
});
define("src/math/vec4", ["require", "exports", "src/math/constants"], function (require, exports, constants_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var vec4 = (function () {
        function vec4(values) {
            this.values = new Float32Array(4);
            if (values !== undefined) {
                this.xyzw = values;
            }
        }
        Object.defineProperty(vec4.prototype, "x", {
            get: function () {
                return this.values[0];
            },
            set: function (value) {
                this.values[0] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "y", {
            get: function () {
                return this.values[1];
            },
            set: function (value) {
                this.values[1] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "z", {
            get: function () {
                return this.values[2];
            },
            set: function (value) {
                this.values[2] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "w", {
            get: function () {
                return this.values[3];
            },
            set: function (value) {
                this.values[3] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "xy", {
            get: function () {
                return [
                    this.values[0],
                    this.values[1],
                ];
            },
            set: function (values) {
                this.values[0] = values[0];
                this.values[1] = values[1];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "xyz", {
            get: function () {
                return [
                    this.values[0],
                    this.values[1],
                    this.values[2],
                ];
            },
            set: function (values) {
                this.values[0] = values[0];
                this.values[1] = values[1];
                this.values[2] = values[2];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "xyzw", {
            get: function () {
                return [
                    this.values[0],
                    this.values[1],
                    this.values[2],
                    this.values[3],
                ];
            },
            set: function (values) {
                this.values[0] = values[0];
                this.values[1] = values[1];
                this.values[2] = values[2];
                this.values[3] = values[3];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "r", {
            get: function () {
                return this.values[0];
            },
            set: function (value) {
                this.values[0] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "g", {
            get: function () {
                return this.values[1];
            },
            set: function (value) {
                this.values[1] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "b", {
            get: function () {
                return this.values[2];
            },
            set: function (value) {
                this.values[2] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "a", {
            get: function () {
                return this.values[3];
            },
            set: function (value) {
                this.values[3] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "rg", {
            get: function () {
                return [
                    this.values[0],
                    this.values[1],
                ];
            },
            set: function (values) {
                this.values[0] = values[0];
                this.values[1] = values[1];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "rgb", {
            get: function () {
                return [
                    this.values[0],
                    this.values[1],
                    this.values[2],
                ];
            },
            set: function (values) {
                this.values[0] = values[0];
                this.values[1] = values[1];
                this.values[2] = values[2];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(vec4.prototype, "rgba", {
            get: function () {
                return [
                    this.values[0],
                    this.values[1],
                    this.values[2],
                    this.values[3],
                ];
            },
            set: function (values) {
                this.values[0] = values[0];
                this.values[1] = values[1];
                this.values[2] = values[2];
                this.values[3] = values[3];
            },
            enumerable: false,
            configurable: true
        });
        vec4.prototype.at = function (index) {
            return this.values[index];
        };
        vec4.prototype.reset = function () {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 0;
        };
        vec4.prototype.copy = function (dest) {
            if (!dest) {
                dest = new vec4();
            }
            dest.x = this.x;
            dest.y = this.y;
            dest.z = this.z;
            dest.w = this.w;
            return dest;
        };
        vec4.prototype.negate = function (dest) {
            if (!dest) {
                dest = this;
            }
            dest.x = -this.x;
            dest.y = -this.y;
            dest.z = -this.z;
            dest.w = -this.w;
            return dest;
        };
        vec4.prototype.equals = function (vector, threshold) {
            if (threshold === void 0) { threshold = constants_6.epsilon; }
            if (Math.abs(this.x - vector.x) > threshold) {
                return false;
            }
            if (Math.abs(this.y - vector.y) > threshold) {
                return false;
            }
            if (Math.abs(this.z - vector.z) > threshold) {
                return false;
            }
            if (Math.abs(this.w - vector.w) > threshold) {
                return false;
            }
            return true;
        };
        vec4.prototype.length = function () {
            return Math.sqrt(this.squaredLength());
        };
        vec4.prototype.squaredLength = function () {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            return (x * x + y * y + z * z + w * w);
        };
        vec4.prototype.add = function (vector) {
            this.x += vector.x;
            this.y += vector.y;
            this.z += vector.z;
            this.w += vector.w;
            return this;
        };
        vec4.prototype.subtract = function (vector) {
            this.x -= vector.x;
            this.y -= vector.y;
            this.z -= vector.z;
            this.w -= vector.w;
            return this;
        };
        vec4.prototype.multiply = function (vector) {
            this.x *= vector.x;
            this.y *= vector.y;
            this.z *= vector.z;
            this.w *= vector.w;
            return this;
        };
        vec4.prototype.divide = function (vector) {
            this.x /= vector.x;
            this.y /= vector.y;
            this.z /= vector.z;
            this.w /= vector.w;
            return this;
        };
        vec4.prototype.scale = function (value, dest) {
            if (!dest) {
                dest = this;
            }
            dest.x *= value;
            dest.y *= value;
            dest.z *= value;
            dest.w *= value;
            return dest;
        };
        vec4.prototype.normalize = function (dest) {
            if (!dest) {
                dest = this;
            }
            var length = this.length();
            if (length === 1) {
                return this;
            }
            if (length === 0) {
                dest.x *= 0;
                dest.y *= 0;
                dest.z *= 0;
                dest.w *= 0;
                return dest;
            }
            length = 1.0 / length;
            dest.x *= length;
            dest.y *= length;
            dest.z *= length;
            dest.w *= length;
            return dest;
        };
        vec4.prototype.multiplyMat4 = function (matrix, dest) {
            if (!dest) {
                dest = this;
            }
            return matrix.multiplyVec4(this, dest);
        };
        vec4.mix = function (vector, vector2, time, dest) {
            if (!dest) {
                dest = new vec4();
            }
            dest.x = vector.x + time * (vector2.x - vector.x);
            dest.y = vector.y + time * (vector2.y - vector.y);
            dest.z = vector.z + time * (vector2.z - vector.z);
            dest.w = vector.w + time * (vector2.w - vector.w);
            return dest;
        };
        vec4.sum = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec4();
            }
            dest.x = vector.x + vector2.x;
            dest.y = vector.y + vector2.y;
            dest.z = vector.z + vector2.z;
            dest.w = vector.w + vector2.w;
            return dest;
        };
        vec4.difference = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec4();
            }
            dest.x = vector.x - vector2.x;
            dest.y = vector.y - vector2.y;
            dest.z = vector.z - vector2.z;
            dest.w = vector.w - vector2.w;
            return dest;
        };
        vec4.product = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec4();
            }
            dest.x = vector.x * vector2.x;
            dest.y = vector.y * vector2.y;
            dest.z = vector.z * vector2.z;
            dest.w = vector.w * vector2.w;
            return dest;
        };
        vec4.quotient = function (vector, vector2, dest) {
            if (!dest) {
                dest = new vec4();
            }
            dest.x = vector.x / vector2.x;
            dest.y = vector.y / vector2.y;
            dest.z = vector.z / vector2.z;
            dest.w = vector.w / vector2.w;
            return dest;
        };
        vec4.zero = new vec4([0, 0, 0, 1]);
        vec4.one = new vec4([1, 1, 1, 1]);
        return vec4;
    }());
    exports.default = vec4;
});
define("src/math/mat4", ["require", "exports", "src/math/mat3", "src/math/vec3", "src/math/vec4", "src/math/constants"], function (require, exports, mat3_2, vec3_4, vec4_1, constants_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    mat3_2 = __importDefault(mat3_2);
    vec3_4 = __importDefault(vec3_4);
    vec4_1 = __importDefault(vec4_1);
    var mat4 = (function () {
        function mat4(values) {
            this.values = new Float32Array(16);
            if (values !== undefined) {
                this.init(values);
            }
        }
        mat4.prototype.at = function (index) {
            return this.values[index];
        };
        mat4.prototype.init = function (values) {
            for (var i = 0; i < 16; i++) {
                this.values[i] = values[i];
            }
            return this;
        };
        mat4.prototype.reset = function () {
            for (var i = 0; i < 16; i++) {
                this.values[i] = 0;
            }
        };
        mat4.prototype.copy = function (dest) {
            if (!dest) {
                dest = new mat4();
            }
            for (var i = 0; i < 16; i++) {
                dest.values[i] = this.values[i];
            }
            return dest;
        };
        mat4.prototype.all = function () {
            var data = [];
            for (var i = 0; i < 16; i++) {
                data[i] = this.values[i];
            }
            return data;
        };
        mat4.prototype.row = function (index) {
            return [
                this.values[index * 4 + 0],
                this.values[index * 4 + 1],
                this.values[index * 4 + 2],
                this.values[index * 4 + 3],
            ];
        };
        mat4.prototype.col = function (index) {
            return [
                this.values[index],
                this.values[index + 4],
                this.values[index + 8],
                this.values[index + 12],
            ];
        };
        mat4.prototype.equals = function (matrix, threshold) {
            if (threshold === void 0) { threshold = constants_7.epsilon; }
            for (var i = 0; i < 16; i++) {
                if (Math.abs(this.values[i] - matrix.at(i)) > threshold) {
                    return false;
                }
            }
            return true;
        };
        mat4.prototype.determinant = function () {
            var a00 = this.values[0];
            var a01 = this.values[1];
            var a02 = this.values[2];
            var a03 = this.values[3];
            var a10 = this.values[4];
            var a11 = this.values[5];
            var a12 = this.values[6];
            var a13 = this.values[7];
            var a20 = this.values[8];
            var a21 = this.values[9];
            var a22 = this.values[10];
            var a23 = this.values[11];
            var a30 = this.values[12];
            var a31 = this.values[13];
            var a32 = this.values[14];
            var a33 = this.values[15];
            var det00 = a00 * a11 - a01 * a10;
            var det01 = a00 * a12 - a02 * a10;
            var det02 = a00 * a13 - a03 * a10;
            var det03 = a01 * a12 - a02 * a11;
            var det04 = a01 * a13 - a03 * a11;
            var det05 = a02 * a13 - a03 * a12;
            var det06 = a20 * a31 - a21 * a30;
            var det07 = a20 * a32 - a22 * a30;
            var det08 = a20 * a33 - a23 * a30;
            var det09 = a21 * a32 - a22 * a31;
            var det10 = a21 * a33 - a23 * a31;
            var det11 = a22 * a33 - a23 * a32;
            return (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);
        };
        mat4.prototype.setIdentity = function () {
            this.values[0] = 1;
            this.values[1] = 0;
            this.values[2] = 0;
            this.values[3] = 0;
            this.values[4] = 0;
            this.values[5] = 1;
            this.values[6] = 0;
            this.values[7] = 0;
            this.values[8] = 0;
            this.values[9] = 0;
            this.values[10] = 1;
            this.values[11] = 0;
            this.values[12] = 0;
            this.values[13] = 0;
            this.values[14] = 0;
            this.values[15] = 1;
            return this;
        };
        mat4.prototype.transpose = function () {
            var temp01 = this.values[1];
            var temp02 = this.values[2];
            var temp03 = this.values[3];
            var temp12 = this.values[6];
            var temp13 = this.values[7];
            var temp23 = this.values[11];
            this.values[1] = this.values[4];
            this.values[2] = this.values[8];
            this.values[3] = this.values[12];
            this.values[4] = temp01;
            this.values[6] = this.values[9];
            this.values[7] = this.values[13];
            this.values[8] = temp02;
            this.values[9] = temp12;
            this.values[11] = this.values[14];
            this.values[12] = temp03;
            this.values[13] = temp13;
            this.values[14] = temp23;
            return this;
        };
        mat4.prototype.inverse = function () {
            var a00 = this.values[0];
            var a01 = this.values[1];
            var a02 = this.values[2];
            var a03 = this.values[3];
            var a10 = this.values[4];
            var a11 = this.values[5];
            var a12 = this.values[6];
            var a13 = this.values[7];
            var a20 = this.values[8];
            var a21 = this.values[9];
            var a22 = this.values[10];
            var a23 = this.values[11];
            var a30 = this.values[12];
            var a31 = this.values[13];
            var a32 = this.values[14];
            var a33 = this.values[15];
            var det00 = a00 * a11 - a01 * a10;
            var det01 = a00 * a12 - a02 * a10;
            var det02 = a00 * a13 - a03 * a10;
            var det03 = a01 * a12 - a02 * a11;
            var det04 = a01 * a13 - a03 * a11;
            var det05 = a02 * a13 - a03 * a12;
            var det06 = a20 * a31 - a21 * a30;
            var det07 = a20 * a32 - a22 * a30;
            var det08 = a20 * a33 - a23 * a30;
            var det09 = a21 * a32 - a22 * a31;
            var det10 = a21 * a33 - a23 * a31;
            var det11 = a22 * a33 - a23 * a32;
            var det = (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);
            if (!det) {
                return null;
            }
            det = 1.0 / det;
            this.values[0] = (a11 * det11 - a12 * det10 + a13 * det09) * det;
            this.values[1] = (-a01 * det11 + a02 * det10 - a03 * det09) * det;
            this.values[2] = (a31 * det05 - a32 * det04 + a33 * det03) * det;
            this.values[3] = (-a21 * det05 + a22 * det04 - a23 * det03) * det;
            this.values[4] = (-a10 * det11 + a12 * det08 - a13 * det07) * det;
            this.values[5] = (a00 * det11 - a02 * det08 + a03 * det07) * det;
            this.values[6] = (-a30 * det05 + a32 * det02 - a33 * det01) * det;
            this.values[7] = (a20 * det05 - a22 * det02 + a23 * det01) * det;
            this.values[8] = (a10 * det10 - a11 * det08 + a13 * det06) * det;
            this.values[9] = (-a00 * det10 + a01 * det08 - a03 * det06) * det;
            this.values[10] = (a30 * det04 - a31 * det02 + a33 * det00) * det;
            this.values[11] = (-a20 * det04 + a21 * det02 - a23 * det00) * det;
            this.values[12] = (-a10 * det09 + a11 * det07 - a12 * det06) * det;
            this.values[13] = (a00 * det09 - a01 * det07 + a02 * det06) * det;
            this.values[14] = (-a30 * det03 + a31 * det01 - a32 * det00) * det;
            this.values[15] = (a20 * det03 - a21 * det01 + a22 * det00) * det;
            return this;
        };
        mat4.prototype.multiply = function (matrix) {
            var a00 = this.values[0];
            var a01 = this.values[1];
            var a02 = this.values[2];
            var a03 = this.values[3];
            var a10 = this.values[4];
            var a11 = this.values[5];
            var a12 = this.values[6];
            var a13 = this.values[7];
            var a20 = this.values[8];
            var a21 = this.values[9];
            var a22 = this.values[10];
            var a23 = this.values[11];
            var a30 = this.values[12];
            var a31 = this.values[13];
            var a32 = this.values[14];
            var a33 = this.values[15];
            var b0 = matrix.at(0);
            var b1 = matrix.at(1);
            var b2 = matrix.at(2);
            var b3 = matrix.at(3);
            this.values[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this.values[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this.values[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this.values[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = matrix.at(4);
            b1 = matrix.at(5);
            b2 = matrix.at(6);
            b3 = matrix.at(7);
            this.values[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this.values[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this.values[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this.values[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = matrix.at(8);
            b1 = matrix.at(9);
            b2 = matrix.at(10);
            b3 = matrix.at(11);
            this.values[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this.values[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this.values[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this.values[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = matrix.at(12);
            b1 = matrix.at(13);
            b2 = matrix.at(14);
            b3 = matrix.at(15);
            this.values[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this.values[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this.values[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this.values[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            return this;
        };
        mat4.prototype.multiplyVec3 = function (vector) {
            var x = vector.x;
            var y = vector.y;
            var z = vector.z;
            return new vec3_4.default([
                this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12],
                this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13],
                this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14],
            ]);
        };
        mat4.prototype.multiplyVec4 = function (vector, dest) {
            if (!dest) {
                dest = new vec4_1.default();
            }
            var x = vector.x;
            var y = vector.y;
            var z = vector.z;
            var w = vector.w;
            dest.x = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12] * w;
            dest.y = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13] * w;
            dest.z = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14] * w;
            dest.w = this.values[3] * x + this.values[7] * y + this.values[11] * z + this.values[15] * w;
            return dest;
        };
        mat4.prototype.toMat3 = function () {
            return new mat3_2.default([
                this.values[0],
                this.values[1],
                this.values[2],
                this.values[4],
                this.values[5],
                this.values[6],
                this.values[8],
                this.values[9],
                this.values[10],
            ]);
        };
        mat4.prototype.toInverseMat3 = function () {
            var a00 = this.values[0];
            var a01 = this.values[1];
            var a02 = this.values[2];
            var a10 = this.values[4];
            var a11 = this.values[5];
            var a12 = this.values[6];
            var a20 = this.values[8];
            var a21 = this.values[9];
            var a22 = this.values[10];
            var det01 = a22 * a11 - a12 * a21;
            var det11 = -a22 * a10 + a12 * a20;
            var det21 = a21 * a10 - a11 * a20;
            var det = a00 * det01 + a01 * det11 + a02 * det21;
            if (!det) {
                return null;
            }
            det = 1.0 / det;
            return new mat3_2.default([
                det01 * det,
                (-a22 * a01 + a02 * a21) * det,
                (a12 * a01 - a02 * a11) * det,
                det11 * det,
                (a22 * a00 - a02 * a20) * det,
                (-a12 * a00 + a02 * a10) * det,
                det21 * det,
                (-a21 * a00 + a01 * a20) * det,
                (a11 * a00 - a01 * a10) * det,
            ]);
        };
        mat4.prototype.translate = function (vector) {
            var x = vector.x;
            var y = vector.y;
            var z = vector.z;
            this.values[12] += this.values[0] * x + this.values[4] * y + this.values[8] * z;
            this.values[13] += this.values[1] * x + this.values[5] * y + this.values[9] * z;
            this.values[14] += this.values[2] * x + this.values[6] * y + this.values[10] * z;
            this.values[15] += this.values[3] * x + this.values[7] * y + this.values[11] * z;
            return this;
        };
        mat4.prototype.scale = function (vector) {
            var x = vector.x;
            var y = vector.y;
            var z = vector.z;
            this.values[0] *= x;
            this.values[1] *= x;
            this.values[2] *= x;
            this.values[3] *= x;
            this.values[4] *= y;
            this.values[5] *= y;
            this.values[6] *= y;
            this.values[7] *= y;
            this.values[8] *= z;
            this.values[9] *= z;
            this.values[10] *= z;
            this.values[11] *= z;
            return this;
        };
        mat4.prototype.rotate = function (angle, axis) {
            var x = axis.x;
            var y = axis.y;
            var z = axis.z;
            var length = Math.sqrt(x * x + y * y + z * z);
            if (!length) {
                return null;
            }
            if (length !== 1) {
                length = 1 / length;
                x *= length;
                y *= length;
                z *= length;
            }
            var s = Math.sin(angle);
            var c = Math.cos(angle);
            var t = 1.0 - c;
            var a00 = this.values[0];
            var a01 = this.values[1];
            var a02 = this.values[2];
            var a03 = this.values[3];
            var a10 = this.values[4];
            var a11 = this.values[5];
            var a12 = this.values[6];
            var a13 = this.values[7];
            var a20 = this.values[8];
            var a21 = this.values[9];
            var a22 = this.values[10];
            var a23 = this.values[11];
            var b00 = x * x * t + c;
            var b01 = y * x * t + z * s;
            var b02 = z * x * t - y * s;
            var b10 = x * y * t - z * s;
            var b11 = y * y * t + c;
            var b12 = z * y * t + x * s;
            var b20 = x * z * t + y * s;
            var b21 = y * z * t - x * s;
            var b22 = z * z * t + c;
            this.values[0] = a00 * b00 + a10 * b01 + a20 * b02;
            this.values[1] = a01 * b00 + a11 * b01 + a21 * b02;
            this.values[2] = a02 * b00 + a12 * b01 + a22 * b02;
            this.values[3] = a03 * b00 + a13 * b01 + a23 * b02;
            this.values[4] = a00 * b10 + a10 * b11 + a20 * b12;
            this.values[5] = a01 * b10 + a11 * b11 + a21 * b12;
            this.values[6] = a02 * b10 + a12 * b11 + a22 * b12;
            this.values[7] = a03 * b10 + a13 * b11 + a23 * b12;
            this.values[8] = a00 * b20 + a10 * b21 + a20 * b22;
            this.values[9] = a01 * b20 + a11 * b21 + a21 * b22;
            this.values[10] = a02 * b20 + a12 * b21 + a22 * b22;
            this.values[11] = a03 * b20 + a13 * b21 + a23 * b22;
            return this;
        };
        mat4.frustum = function (left, right, bottom, top, near, far) {
            var rl = (right - left);
            var tb = (top - bottom);
            var fn = (far - near);
            return new mat4([
                (near * 2) / rl,
                0,
                0,
                0,
                0,
                (near * 2) / tb,
                0,
                0,
                (right + left) / rl,
                (top + bottom) / tb,
                -(far + near) / fn,
                -1,
                0,
                0,
                -(far * near * 2) / fn,
                0,
            ]);
        };
        mat4.perspective = function (fov, aspect, near, far) {
            var top = near * Math.tan(fov * Math.PI / 360.0);
            var right = top * aspect;
            return mat4.frustum(-right, right, -top, top, near, far);
        };
        mat4.orthographic = function (left, right, bottom, top, near, far) {
            var rl = (right - left);
            var tb = (top - bottom);
            var fn = (far - near);
            return new mat4([
                2 / rl,
                0,
                0,
                0,
                0,
                2 / tb,
                0,
                0,
                0,
                0,
                -2 / fn,
                0,
                -(left + right) / rl,
                -(top + bottom) / tb,
                -(far + near) / fn,
                1,
            ]);
        };
        mat4.lookAt = function (position, target, up) {
            if (up === void 0) { up = vec3_4.default.up; }
            if (position.equals(target)) {
                return this.identity;
            }
            var z = vec3_4.default.difference(position, target).normalize();
            var x = vec3_4.default.cross(up, z).normalize();
            var y = vec3_4.default.cross(z, x).normalize();
            return new mat4([
                x.x,
                y.x,
                z.x,
                0,
                x.y,
                y.y,
                z.y,
                0,
                x.z,
                y.z,
                z.z,
                0,
                -vec3_4.default.dot(x, position),
                -vec3_4.default.dot(y, position),
                -vec3_4.default.dot(z, position),
                1,
            ]);
        };
        mat4.product = function (m1, m2, result) {
            var a00 = m1.at(0);
            var a01 = m1.at(1);
            var a02 = m1.at(2);
            var a03 = m1.at(3);
            var a10 = m1.at(4);
            var a11 = m1.at(5);
            var a12 = m1.at(6);
            var a13 = m1.at(7);
            var a20 = m1.at(8);
            var a21 = m1.at(9);
            var a22 = m1.at(10);
            var a23 = m1.at(11);
            var a30 = m1.at(12);
            var a31 = m1.at(13);
            var a32 = m1.at(14);
            var a33 = m1.at(15);
            var b00 = m2.at(0);
            var b01 = m2.at(1);
            var b02 = m2.at(2);
            var b03 = m2.at(3);
            var b10 = m2.at(4);
            var b11 = m2.at(5);
            var b12 = m2.at(6);
            var b13 = m2.at(7);
            var b20 = m2.at(8);
            var b21 = m2.at(9);
            var b22 = m2.at(10);
            var b23 = m2.at(11);
            var b30 = m2.at(12);
            var b31 = m2.at(13);
            var b32 = m2.at(14);
            var b33 = m2.at(15);
            if (result) {
                result.init([
                    b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                    b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                    b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                    b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                    b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                    b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                    b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                    b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                    b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                    b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                    b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                    b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                    b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                    b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                    b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                    b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
                ]);
                return result;
            }
            else {
                return new mat4([
                    b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                    b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                    b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                    b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                    b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                    b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                    b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                    b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                    b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                    b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                    b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                    b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                    b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                    b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                    b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                    b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
                ]);
            }
        };
        mat4.identity = new mat4().setIdentity();
        return mat4;
    }());
    exports.default = mat4;
});
define("src/framework/Components/Camera/Camera", ["require", "exports", "src/math/mat4", "src/framework/globals", "src/framework/Components/Component", "src/math/vec3"], function (require, exports, mat4_js_1, globals_3, Component_3, vec3_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    mat4_js_1 = __importDefault(mat4_js_1);
    Component_3 = __importDefault(Component_3);
    vec3_5 = __importDefault(vec3_5);
    var Camera = (function (_super) {
        __extends(Camera, _super);
        function Camera(center, width, viewportArray) {
            if (center === void 0) { center = [0, 0]; }
            if (width === void 0) { width = 10; }
            if (viewportArray === void 0) { viewportArray = [0, 0, 100, 100]; }
            var _this = _super.call(this) || this;
            _this.mCenter = center;
            _this.mWidth = width;
            _this.mViewport = viewportArray;
            _this.mNearPlane = 0;
            _this.mFarPlane = 1000;
            _this.mViewMatrix = new mat4_js_1.default();
            _this.mProjMatrix = new mat4_js_1.default();
            _this.mVPMatrix = new mat4_js_1.default();
            _this.mBgColor = [1.0, 0.4, 0.3, 1.0];
            return _this;
        }
        ;
        Camera.prototype.initialize = function () {
            var gl = (0, globals_3.getApplication)().gl;
            gl.viewport(this.mViewport[0], this.mViewport[1], this.mViewport[2], this.mViewport[3]);
            gl.scissor(this.mViewport[0], this.mViewport[1], this.mViewport[2], this.mViewport[3]);
            gl.clearColor(this.mBgColor[0], this.mBgColor[1], this.mBgColor[2], this.mBgColor[3]);
            gl.enable(gl.SCISSOR_TEST);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.disable(gl.SCISSOR_TEST);
            this.mViewMatrix =
                mat4_js_1.default.lookAt(new vec3_5.default([this.mCenter[0], this.mCenter[1], 10]), new vec3_5.default([this.mCenter[0], this.mCenter[1], 0]), new vec3_5.default([0, 1, 0]));
            var halfWidth = 0.5 * this.mWidth;
            var halfHeight = halfWidth * this.mViewport[3] / this.mViewport[2];
            this.mProjMatrix =
                mat4_js_1.default.orthographic(-halfWidth, halfWidth, -halfHeight, halfHeight, this.mNearPlane, this.mFarPlane);
            this.mVPMatrix =
                this.mProjMatrix.multiply(this.mViewMatrix);
        };
        ;
        Object.defineProperty(Camera.prototype, "getCenter", {
            get: function () { return this.mCenter; },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Camera.prototype, "setCenter", {
            set: function (center) {
                this.mCenter[0] = center[0];
                this.mCenter[1] = center[1];
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Camera.prototype, "getWidth", {
            get: function () { return this.mWidth; },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Camera.prototype, "setWidth", {
            set: function (width) { this.mWidth = width; },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Camera.prototype, "getViewport", {
            get: function () { return this.mViewport; },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Camera.prototype, "setViewport", {
            set: function (viewportArray) {
                this.mViewport = viewportArray;
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Camera.prototype, "getBgColor", {
            get: function () { return this.mBgColor; },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Camera.prototype, "setBgColor", {
            set: function (color) { this.mBgColor = color; },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Camera.prototype, "getVPMatrix", {
            get: function () { return this.mVPMatrix; },
            enumerable: false,
            configurable: true
        });
        ;
        return Camera;
    }(Component_3.default));
    exports.default = Camera;
    ;
});
define("src/framework/Components/Renderer/Renderer", ["require", "exports", "src/framework/Components/Component"], function (require, exports, Component_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Component_4 = __importDefault(Component_4);
    var Renderer = (function (_super) {
        __extends(Renderer, _super);
        function Renderer() {
            return _super.call(this) || this;
        }
        Renderer.prototype.update = function () {
        };
        ;
        return Renderer;
    }(Component_4.default));
    exports.default = Renderer;
    ;
});
define("src/framework/Components/Transform/Transform", ["require", "exports", "../math/vec2", "./Component"], function (require, exports, vec2_3, Component_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    vec2_3 = __importDefault(vec2_3);
    Component_5 = __importDefault(Component_5);
    var Transform = (function (_super) {
        __extends(Transform, _super);
        function Transform(position, scale, rotation) {
            if (position === void 0) { position = new vec2_3.default([0, 0]); }
            if (scale === void 0) { scale = new vec2_3.default([1, 1]); }
            if (rotation === void 0) { rotation = 0; }
            var _this = _super.call(this) || this;
            _this.position = position;
            _this.scale = scale;
            _this.rotation = rotation;
            return _this;
        }
        ;
        return Transform;
    }(Component_5.default));
    exports.default = Transform;
    ;
});
define("src/gfx/index-buffer", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function IBO(gl, indices) {
        var _gl = gl;
        var _indices = indices;
        var ibo = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(_indices), gl.STATIC_DRAW);
        return ibo;
    }
    exports.default = IBO;
    ;
});
define("src/gfx/vertex-buffer", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function VBO(gl, vertices) {
        var _gl = gl;
        var _vertices = vertices;
        var vbo = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vbo);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Float32Array(_vertices), gl.STATIC_DRAW);
        return vbo;
    }
    exports.default = VBO;
    ;
});
define("src/math/tsm", ["require", "exports", "src/math/mat2", "src/math/mat3", "src/math/mat4", "src/math/quat", "src/math/vec2", "src/math/vec3", "src/math/vec4"], function (require, exports, mat2_1, mat3_3, mat4_3, quat_3, vec2_4, vec3_6, vec4_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    mat2_1 = __importDefault(mat2_1);
    mat3_3 = __importDefault(mat3_3);
    mat4_3 = __importDefault(mat4_3);
    quat_3 = __importDefault(quat_3);
    vec2_4 = __importDefault(vec2_4);
    vec3_6 = __importDefault(vec3_6);
    vec4_2 = __importDefault(vec4_2);
    exports.default = {
        vec2: vec2_4.default,
        vec3: vec3_6.default,
        vec4: vec4_2.default,
        mat2: mat2_1.default,
        mat3: mat3_3.default,
        mat4: mat4_3.default,
        quat: quat_3.default,
    };
});
//# sourceMappingURL=out.js.map