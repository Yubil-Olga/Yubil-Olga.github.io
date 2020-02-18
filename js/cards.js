/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"cards": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./pages/cards/cards.js","vendors~cards~formelements","vendors~cards"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/card-room/card-room.js":
/*!*******************************************!*\
  !*** ./components/card-room/card-room.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./components/card-room/card-room.js?");

/***/ }),

/***/ "./components/date-dropdown/date-dropdown.js":
/*!***************************************************!*\
  !*** ./components/date-dropdown/date-dropdown.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker/dist/js/datepicker */ \"../node_modules/air-datepicker/dist/js/datepicker.js\");\n/* harmony import */ var air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/input */ \"./components/input/input.js\");\n\r\n\r\n\r\n$('.datepicker-here').datepicker(\r\n    {   \r\n        showButtonPanel: true,\r\n        clearButton: true,\r\n        toggleSelected: true,\r\n        navTitles: {\r\n            days: 'MM <i>yyyy</i>',\r\n            months: 'yyyy',\r\n            years: 'yyyy1 - yyyy2'\r\n        },\r\n        prevHtml: '<i class=\"material-icons\">arrow_back</i>',\r\n        nextHtml: '<i class=\"material-icons\">arrow_forward</i>',\r\n        onShow: function (dp, animationCompleted) {\r\n            if (!animationCompleted) {\r\n                if (dp.$datepicker.find('.apply--button').html()===undefined) {\r\n                    dp.$datepicker.children('.datepicker--buttons').append('<span class=\"apply--button\">Применить</span></div>')\r\n                }\r\n                dp.$datepicker.find('.apply--button').click(function(event) {\r\n                    dp.hide();\r\n                 });\r\n            }\r\n        }\r\n    }\r\n);\r\n$('.dropdown-arrow').click(function() {\r\n    $(this).siblings('input').datepicker().data('datepicker').show();\r\n})\r\n\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./components/date-dropdown/date-dropdown.js?");

/***/ }),

/***/ "./components/dropdown/dropdown.js":
/*!*****************************************!*\
  !*** ./components/dropdown/dropdown.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.querySelectorAll('.dropdown .arrow_direction_bottom').forEach(e => {\r\n    e.addEventListener('click', () => {\r\n        const path = e.closest('.dropdown');\r\n        path.classList.toggle(\"show\");\r\n        let totalCounter = 0;\r\n        dropdown(path, totalCounter);  \r\n    })\r\n})\r\n\r\nfunction dropdown(path, totalCounter){\r\n    path.querySelectorAll('.menu__option').forEach(el => {\r\n        el.addEventListener('click', (e)=> {\r\n            let counter = el.querySelector('.counter-item').value;\r\n            if (e.target == el.querySelector('.counter__increment') && counter<4) {\r\n                counter++;\r\n                el.querySelector('.counter-item').value = counter;\r\n                totalCounter++;\r\n            }\r\n            if (e.target == el.querySelector('.counter__decrement') && counter>0) {\r\n                counter--;\r\n                el.querySelector('.counter-item').value = counter;\r\n                totalCounter--;\r\n            }\r\n            if (totalCounter>0 && path.querySelectorAll('.clean').length>0) {\r\n                path.querySelector('.clean').style.visibility=\"visible\";\r\n            }\r\n            if (totalCounter == 0 && path.querySelectorAll('.clean').length>0) {\r\n                path.querySelector('.clean').style.visibility=\"hidden\";\r\n            }\r\n            path.querySelector('.dropdown__title').textContent = titleCounter(totalCounter, path);\r\n        })\r\n    })\r\n    if (path.querySelectorAll('.clean').length>0) {\r\n        path.querySelector('.clean').addEventListener('click', () => {\r\n            totalCounter = 0;\r\n            path.querySelector('.dropdown__title').textContent = titleCounter(totalCounter, path);\r\n            path.querySelector('.clean').style.visibility=\"hidden\";\r\n            path.querySelectorAll('.counter-item').forEach((item)=> {\r\n                item.value = 0;\r\n            })\r\n        })\r\n    } \r\n}\r\n\r\nfunction titleCounter(total, path) {\r\n    let word =\"\";\r\n    let title=\"\";\r\n    if (path.querySelector('.dropdown__title').classList.contains('room')){\r\n        path.querySelectorAll('.menu__option').forEach(el => {\r\n            title += el.querySelector('.counter-item').value +\" \"+ el.querySelector('.option__title').textContent + \", \";\r\n        })\r\n        if (total ==0) {\r\n            title= \"Сколько комнат\"\r\n        }\r\n    }\r\n    else {\r\n        title = \"Сколько гостей\";\r\n        switch(total) {\r\n            case 0:\r\n                return title;\r\n            case 1:\r\n                word= \"гость\";\r\n                title = `${total} ${word}`;\r\n                break;\r\n            case 2:\r\n            case 3:\r\n            case 4:\r\n                word= \"гостя\";\r\n                title = `${total} ${word}`;\r\n                break;\r\n            default:\r\n                word= \"гостей\";\r\n                title = `${total} ${word}`;\r\n    }\r\n    }\r\n    return title;\r\n}\r\n\n\n//# sourceURL=webpack:///./components/dropdown/dropdown.js?");

/***/ }),

/***/ "./components/form-booking/form-booking.js":
/*!*************************************************!*\
  !*** ./components/form-booking/form-booking.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _date_dropdown_date_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-dropdown/date-dropdown */ \"./components/date-dropdown/date-dropdown.js\");\n/* harmony import */ var _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown/dropdown */ \"./components/dropdown/dropdown.js\");\n/* harmony import */ var _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nlet arrival;\r\nlet departure;\r\nconst price = Number.parseInt(document.querySelector('.form-booking .room-details__price').textContent);\r\ndocument.querySelector('.form-booking .room-details__price').textContent = price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0, minimumFractionDigits: 0});\r\n\r\n$('.arrival .datepicker-here').datepicker({\r\n    onSelect: function(formattedDate, date, inst) {\r\n        arrival = new Date(date);\r\n        if (departure !== undefined) {\r\n            priceCulc();\r\n        }\r\n    }\r\n});\r\n\r\n$('.departure .datepicker-here').datepicker({\r\n    onSelect: function(formattedDate, date, inst) {\r\n        departure = new Date(date);\r\n        if (arrival !== undefined) {\r\n            priceCulc();\r\n        }\r\n    }\r\n});\r\nfunction priceCulc() {\r\n    let days = 0;\r\n    if (departure > arrival) {\r\n        days = (departure - arrival)/86400000;\r\n        if (days == 1) {\r\n            document.querySelector('.form-booking .order-item__days').textContent = days + ' сутки';\r\n        }\r\n        else {\r\n            document.querySelector('.form-booking .order-item__days').textContent = days + ' суток';\r\n        }\r\n        document.querySelector('.form-booking .order-item__price').textContent = days*price;\r\n    }  \r\n    else {\r\n        document.querySelector('.form-booking .order-item__days').textContent = 0;\r\n        document.querySelector('.form-booking .order-item__price').textContent = 0;\r\n    }\r\n    totalSum();\r\n}\r\nfunction totalSum() {\r\n    let sum = 0;\r\n    document.querySelectorAll('.order-item__price').forEach(el => {\r\n        sum += Number.parseInt(el.textContent);\r\n    })\r\n    sum -= Number.parseInt(document.querySelector('.form-booking__order-details .discount').getAttribute('date-discount'));\r\n    if (sum>=0) {\r\n        document.querySelector('.item-total__price').textContent = sum.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0, minimumFractionDigits: 0});\r\n    }\r\n    else {\r\n        document.querySelector('.item-total__price').textContent = 0;\r\n    }\r\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./components/form-booking/form-booking.js?");

/***/ }),

/***/ "./components/form-login/form-login.js":
/*!*********************************************!*\
  !*** ./components/form-login/form-login.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./components/form-login/form-login.js?");

/***/ }),

/***/ "./components/form-registration/form-registration.js":
/*!***********************************************************!*\
  !*** ./components/form-registration/form-registration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./components/form-registration/form-registration.js?");

/***/ }),

/***/ "./components/form-selection/form-selection.js":
/*!*****************************************************!*\
  !*** ./components/form-selection/form-selection.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _date_dropdown_date_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-dropdown/date-dropdown */ \"./components/date-dropdown/date-dropdown.js\");\n/* harmony import */ var _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown/dropdown */ \"./components/dropdown/dropdown.js\");\n/* harmony import */ var _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./components/form-selection/form-selection.js?");

/***/ }),

/***/ "./components/input/input.js":
/*!***********************************!*\
  !*** ./components/input/input.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask/dist/jquery.inputmask */ \"../node_modules/inputmask/dist/jquery.inputmask.js\");\n/* harmony import */ var inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_0__);\n\r\n$('.mask').inputmask({\r\n    alias: 'datetime',\r\n    inputFormat: 'dd.mm.yyyy',\r\n    placeholder: 'ДД.ММ.ГГГГ',\r\n    min: '01.01.2020',\r\n\tmax: '31.12.2030'\r\n  })\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./components/input/input.js?");

/***/ }),

/***/ "./pages/cards/cards.js":
/*!******************************!*\
  !*** ./pages/cards/cards.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.scss */ \"./pages/cards/cards.scss\");\n/* harmony import */ var _cards_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cards_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_form_selection_form_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/form-selection/form-selection */ \"./components/form-selection/form-selection.js\");\n/* harmony import */ var _components_form_registration_form_registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/form-registration/form-registration */ \"./components/form-registration/form-registration.js\");\n/* harmony import */ var _components_form_registration_form_registration__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_form_registration_form_registration__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_form_login_form_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form-login/form-login */ \"./components/form-login/form-login.js\");\n/* harmony import */ var _components_form_login_form_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_form_login_form_login__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_form_booking_form_booking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/form-booking/form-booking */ \"./components/form-booking/form-booking.js\");\n/* harmony import */ var _components_card_room_card_room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/card-room/card-room */ \"./components/card-room/card-room.js\");\n/* harmony import */ var _components_card_room_card_room__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_card_room_card_room__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./pages/cards/cards.js?");

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