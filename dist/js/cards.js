/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/cards/cards.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/dropdown/dropdown.js":
/*!*****************************************!*\
  !*** ./components/dropdown/dropdown.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest('.dropdown') !== null) {\r\n        const path = e.target.closest('.dropdown');\r\n        if (e.target.className == \"arrow_direction_bottom\") {\r\n            path.classList.toggle(\"show\");\r\n            let totalCounter = 0;\r\n            dropdown(path, totalCounter);  \r\n        } \r\n    }\r\n})\r\n\r\nfunction dropdown(path, totalCounter){\r\n    path.querySelectorAll('.menu__option').forEach(el => {\r\n        el.addEventListener('click', (e)=> {\r\n            let counter = el.querySelector('.counter-item').value;\r\n            if (e.target == el.querySelector('.counter__increment') && counter<4) {\r\n                counter++;\r\n                el.querySelector('.counter-item').value = counter;\r\n                totalCounter++;\r\n            }\r\n            if (e.target == el.querySelector('.counter__decrement') && counter>0) {\r\n                counter--;\r\n                el.querySelector('.counter-item').value = counter;\r\n                totalCounter--;\r\n            }\r\n            if (totalCounter>0 && path.querySelectorAll('.clean').length>0) {\r\n                path.querySelector('.clean').style.visibility=\"visible\";\r\n            }\r\n            if (totalCounter == 0 && path.querySelectorAll('.clean').length>0) {\r\n                path.querySelector('.clean').style.visibility=\"hidden\";\r\n            }\r\n            //path.querySelector('.dropdown__title').textContent = titleCounter(totalCounter, path);\r\n            path.querySelector('.input_default').textContent = titleCounter(totalCounter, path);\r\n            \r\n        })\r\n    })\r\n    if (path.querySelectorAll('.clean').length>0) {\r\n        path.querySelector('.clean').addEventListener('click', () => {\r\n            totalCounter = 0;\r\n            path.querySelector('.dropdown__title').textContent = titleCounter(totalCounter, path);\r\n            path.querySelector('.clean').style.visibility=\"hidden\";\r\n            path.querySelectorAll('.counter-item').forEach((item)=> {\r\n                item.value = 0;\r\n            })\r\n        })\r\n    } \r\n}\r\n\r\nfunction titleCounter(total, path) {\r\n    let word =\"\";\r\n    let title=\"\";\r\n    if (path.querySelector('.dropdown__title').classList.contains('room')){\r\n        path.querySelectorAll('.menu__option').forEach(el => {\r\n            title += el.querySelector('.counter-item').value +\" \"+ el.querySelector('.option__title').textContent + \", \";\r\n        })\r\n        if (total ==0) {\r\n            title= \"Сколько комнат\"\r\n        }\r\n    }\r\n    else {\r\n        title = \"Сколько гостей\";\r\n        switch(total) {\r\n            case 0:\r\n                return title;\r\n            case 1:\r\n                word= \"гость\";\r\n                title = `${total} ${word}`;\r\n                break;\r\n            case 2:\r\n            case 3:\r\n            case 4:\r\n                word= \"гостя\";\r\n                title = `${total} ${word}`;\r\n                break;\r\n            default:\r\n                word= \"гостей\";\r\n                title = `${total} ${word}`;\r\n    }\r\n    }\r\n    return title;\r\n}\r\n\n\n//# sourceURL=webpack:///./components/dropdown/dropdown.js?");

/***/ }),

/***/ "./pages/cards/cards.js":
/*!******************************!*\
  !*** ./pages/cards/cards.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.scss */ \"./pages/cards/cards.scss\");\n/* harmony import */ var _cards_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cards_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dropdown/dropdown */ \"./components/dropdown/dropdown.js\");\n/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./pages/cards/cards.js?");

/***/ }),

/***/ "./pages/cards/cards.scss":
/*!********************************!*\
  !*** ./pages/cards/cards.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/cards/cards.scss?");

/***/ })

/******/ });