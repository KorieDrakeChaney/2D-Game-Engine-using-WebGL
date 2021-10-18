/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Component.ts":
/*!*************************************!*\
  !*** ./src/Components/Component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Component = (function () {\r\n    function Component() {\r\n    }\r\n    return Component;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/Components/Component.ts?");

/***/ }),

/***/ "./src/Components/Renderer.ts":
/*!************************************!*\
  !*** ./src/Components/Renderer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gfx_vertex_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gfx/vertex-buffer */ \"./src/gfx/vertex-buffer.ts\");\n/* harmony import */ var _gfx_index_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gfx/index-buffer */ \"./src/gfx/index-buffer.ts\");\n/* harmony import */ var _gfx_shader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gfx/shader */ \"./src/gfx/shader.ts\");\n/* harmony import */ var _framework_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework/globals */ \"./src/framework/globals.ts\");\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component */ \"./src/Components/Component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\nvar Renderer = (function (_super) {\r\n    __extends(Renderer, _super);\r\n    function Renderer() {\r\n        var _this = _super.call(this) || this;\r\n        _this.VBO = null;\r\n        _this.IBO = null;\r\n        _this.vertices = [0.5, 0.5, 0.0, -0.5, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0];\r\n        _this.indices = [0, 1, 2, 2, 3, 0];\r\n        _this.program = null;\r\n        _this.aPos = null;\r\n        return _this;\r\n    }\r\n    ;\r\n    Renderer.prototype.initialize = function () {\r\n        var gl = _framework_globals__WEBPACK_IMPORTED_MODULE_3__.currentGL;\r\n        this.IBO = (0,_gfx_index_buffer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(gl, this.indices);\r\n        this.VBO = (0,_gfx_vertex_buffer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(gl, this.vertices);\r\n    };\r\n    ;\r\n    Renderer.prototype.draw = function () {\r\n        var _this = this;\r\n        var gl = _framework_globals__WEBPACK_IMPORTED_MODULE_3__.currentGL;\r\n        (0,_gfx_shader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.program, \"../res/shader/simpleVS.glsl\", \"../res/shader/simpleFS.glsl\")\r\n            .then(function () {\r\n            gl.useProgram(_this.program);\r\n            _this.aPos = gl.getAttribLocation(_this.program, 'aPos');\r\n            gl.vertexAttribPointer(_this.aPos, 3, gl.UNSIGNED_SHORT, false, 0, 0);\r\n            gl.enableVertexAttribArray(_this.aPos);\r\n            gl.bindBuffer(gl.ARRAY_BUFFER, _this.VBO);\r\n            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _this.IBO);\r\n            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNTED_SHORT, 0);\r\n        });\r\n    };\r\n    ;\r\n    return Renderer;\r\n}(_Component__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Renderer);\r\n;\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/Components/Renderer.ts?");

/***/ }),

/***/ "./src/framework/application.ts":
/*!**************************************!*\
  !*** ./src/framework/application.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ \"./src/framework/globals.ts\");\n\r\n\r\nvar Application = (function () {\r\n    function Application(canvas) {\r\n        this._canvas = canvas;\r\n        this._gl = null;\r\n    }\r\n    ;\r\n    Application.prototype.initialize = function () {\r\n        this._gl = this._canvas.getContext('webgl2') || this._canvas.getContext('experimental-webgl2');\r\n        this._canvas.width = window.innerWidth - 40;\r\n        this._canvas.height = window.innerHeight - 40;\r\n        this._canvas.style.border = \"5px solid black\";\r\n        this._canvas.style.padding = \"1px\";\r\n        try {\r\n            this._gl.viewport(0, 0, this._canvas.width, this._canvas.height);\r\n        }\r\n        catch (err) {\r\n            console.error(err);\r\n        }\r\n        ;\r\n        (0,_globals__WEBPACK_IMPORTED_MODULE_0__.setApplication)(this._canvas);\r\n        (0,_globals__WEBPACK_IMPORTED_MODULE_0__.setGL)(this._gl);\r\n        if (this._gl === null) {\r\n            alert('Your browser does not support webgl');\r\n        }\r\n        ;\r\n    };\r\n    ;\r\n    Application.prototype.clear = function () {\r\n        this._gl.clearColor(0, 0, 0, 1);\r\n        this._gl.clear(this._gl.COLOR_BUFFER_BIT || this._gl.DEPTH_BUFFER_BIT);\r\n    };\r\n    ;\r\n    return Application;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Application);\r\n;\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/framework/application.ts?");

/***/ }),

/***/ "./src/framework/globals.ts":
/*!**********************************!*\
  !*** ./src/framework/globals.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getApplication\": () => (/* binding */ getApplication),\n/* harmony export */   \"setApplication\": () => (/* binding */ setApplication),\n/* harmony export */   \"getGL\": () => (/* binding */ getGL),\n/* harmony export */   \"setGL\": () => (/* binding */ setGL),\n/* harmony export */   \"currentApplication\": () => (/* binding */ currentApplication),\n/* harmony export */   \"currentGL\": () => (/* binding */ currentGL)\n/* harmony export */ });\nvar currentApplication = null;\r\nvar currentGL = null;\r\nfunction getApplication() {\r\n    return currentApplication;\r\n}\r\n;\r\nfunction setApplication(app) {\r\n    currentApplication = app;\r\n}\r\n;\r\nfunction getGL() {\r\n    return currentGL;\r\n}\r\n;\r\nfunction setGL(gl) {\r\n    currentGL = gl;\r\n}\r\n;\r\n\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/framework/globals.ts?");

/***/ }),

/***/ "./src/gfx/index-buffer.ts":
/*!*********************************!*\
  !*** ./src/gfx/index-buffer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IBO)\n/* harmony export */ });\nfunction IBO(gl, indices) {\r\n    var _gl = gl;\r\n    var _indices = indices;\r\n    var ibo = gl.createBuffer();\r\n    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);\r\n    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(_indices), gl.STATIC_DRAW);\r\n    return ibo;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/gfx/index-buffer.ts?");

/***/ }),

/***/ "./src/gfx/shader.ts":
/*!***************************!*\
  !*** ./src/gfx/shader.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Shader)\n/* harmony export */ });\n/* harmony import */ var _framework_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/globals */ \"./src/framework/globals.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nfunction Shader(program, vs, fs) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var fragmentShaderFile, gl, vertexShader, fragmentShader;\r\n        var _this = this;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    fragmentShaderFile = fs;\r\n                    this.program = program;\r\n                    gl = _framework_globals__WEBPACK_IMPORTED_MODULE_0__.currentGL;\r\n                    vertexShader = null;\r\n                    fragmentShader = null;\r\n                    return [4, fetch(vs)\r\n                            .then(function (res) { return res.text(); })\r\n                            .then(function (data) {\r\n                            var vsShaderInfo = data;\r\n                            console.log(vsShaderInfo);\r\n                            vertexShader = gl.createShader(gl.VERTEX_SHADER);\r\n                            gl.shaderSource(vertexShader, vsShaderInfo);\r\n                            gl.compileShader(vertexShader);\r\n                            var success = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);\r\n                            if (!success) {\r\n                                console.error(\"vertex::shader::compile::error\");\r\n                            }\r\n                            ;\r\n                        })];\r\n                case 1:\r\n                    _a.sent();\r\n                    return [4, fetch(fs)\r\n                            .then(function (res) { return res.text(); })\r\n                            .then(function (data) {\r\n                            var fsShaderInfo = data;\r\n                            console.log(fsShaderInfo);\r\n                            fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);\r\n                            gl.shaderSource(fragmentShader, fsShaderInfo);\r\n                            gl.compileShader(fragmentShader);\r\n                            var success = gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS);\r\n                            if (!success) {\r\n                                console.error(\"fragment::shader::compile::error\");\r\n                            }\r\n                            ;\r\n                        })\r\n                            .then(function () {\r\n                            var gl = _framework_globals__WEBPACK_IMPORTED_MODULE_0__.currentGL;\r\n                            _this.program = gl.createProgram();\r\n                            gl.attachShader(_this.program, vertexShader);\r\n                            gl.attachShader(_this.program, fragmentShader);\r\n                            gl.linkProgram(_this.program);\r\n                            if (!gl.getProgramParameter(_this.program, gl.LINK_STATUS)) {\r\n                                var info = gl.getProgramInfoLog(_this.program);\r\n                                throw 'Could not compile WebGL program. \\n\\n' + info;\r\n                            }\r\n                            ;\r\n                            program = _this.program;\r\n                        })];\r\n                case 2:\r\n                    _a.sent();\r\n                    return [2];\r\n            }\r\n        });\r\n    });\r\n}\r\n;\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/gfx/shader.ts?");

/***/ }),

/***/ "./src/gfx/vertex-buffer.ts":
/*!**********************************!*\
  !*** ./src/gfx/vertex-buffer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VBO)\n/* harmony export */ });\nfunction VBO(gl, vertices) {\r\n    var _gl = gl;\r\n    var _vertices = vertices;\r\n    var vbo = gl.createBuffer();\r\n    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vbo);\r\n    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Float32Array(_vertices), gl.STATIC_DRAW);\r\n    return vbo;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/gfx/vertex-buffer.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _framework_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework/application */ \"./src/framework/application.ts\");\n/* harmony import */ var _Components_Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Renderer */ \"./src/Components/Renderer.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar main = (function () {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var app, renderer;\r\n        return __generator(this, function (_a) {\r\n            app = new _framework_application__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('canvas-webgl'));\r\n            app.initialize();\r\n            app.clear();\r\n            renderer = new _Components_Renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n            renderer.initialize();\r\n            renderer.draw();\r\n            return [2];\r\n        });\r\n    });\r\n}());\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;