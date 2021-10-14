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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _framework_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework/application */ \"./src/framework/application.ts\");\n\r\nvar main = (function () {\r\n    var app = new _framework_application__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('canvas-webgl'));\r\n    app.initialize();\r\n    app.clear();\r\n}());\r\n\n\n//# sourceURL=webpack://2d_game_using_webgl/./src/main.ts?");

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