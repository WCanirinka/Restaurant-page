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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n\n\nconst renderAbout = () => {\n  const contentContainer = document.querySelector('#container');\n  const contentHome = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'content-home');\n  const pic = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'pic-item');\n  const about = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'par-comment', 'misunderstood chef with great talents and a touch that you will never be able to test');\n\n  contentHome.appendChild(pic);\n  contentHome.appendChild(about);\n  contentContainer.appendChild(contentHome);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderAbout);\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/chef-menu.js":
/*!**************************!*\
  !*** ./src/chef-menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n\n\nconst menuChef = [\n  ['Matoke', 'BIF2000', 'Native banana'],\n  ['Ugali', 'BIF1500', 'Maize/Cassava'],\n  ['Maharagwe', 'BIF2500', 'soft/hard'],\n  ['Chapati', 'BIF3000', 'Brown or White'],\n];\n\nconst renderMenu = () => {\n  const contentContainer = document.querySelector('#container');\n  const contentHome = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'content-home');\n  menuChef.forEach(item => {\n    const menuDiv = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'menu-sec');\n    const foodName = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'food-name', item[0]);\n    const price = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'price', item[1]);\n    const description = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'description', item[2]);\n\n    menuDiv.appendChild(foodName);\n    menuDiv.appendChild(price);\n    menuDiv.appendChild(description);\n    contentHome.appendChild(menuDiv);\n    contentContainer.appendChild(contentHome);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderMenu);\n\n//# sourceURL=webpack:///./src/chef-menu.js?");

/***/ }),

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createHtmlElement = (type, className, textContent = '') => {\n  const element = document.createElement(type);\n\n  element.classList.add(className);\n\n  if (textContent !== '') element.innerText = textContent;\n\n  return element;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createHtmlElement);\n\n\n//# sourceURL=webpack:///./src/create.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n\n\nconst renderHeader = () => {\n  const contentContainer = document.querySelector('#container');\n  const navBar = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('nav', 'nav');\n  const logo = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'logo', 'Wilos Restaurant');\n  const menuLi = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', 'menu');\n  const menuItems = ['Home', 'About Us', 'Chef Menu'];\n\n  menuItems.forEach(menu => {\n    const navItems = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'nav-items', menu);\n    menuLi.appendChild(navItems);\n  });\n\n  navBar.appendChild(logo);\n  navBar.appendChild(menuLi);\n  contentContainer.appendChild(navBar);\n  return (contentContainer);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderHeader);\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n\n\nconst renderHome = () => {\n  const contentContainer = document.querySelector('#container ');\n  const contentHome = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'content-home');\n  const title = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n    'h1',\n    'head-content',\n    'Come and witness the greatest meals ever',\n  );\n  const paragraph = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n    'p',\n    'item-par',\n    'It has been a pleasure serving you the greatest taste of all time. You might underestimate us because you are yet to try us. This is my invite to you to cone and test the wonders of our cuisine and we promise you will never remain the same',\n  );\n  const buttonClick = Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('btn', 'btn', 'Go to menu');\n\n  contentHome.appendChild(title);\n  contentHome.appendChild(paragraph);\n  contentHome.appendChild(buttonClick);\n  contentContainer.appendChild(contentHome);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderHome);\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _chef_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chef-menu */ \"./src/chef-menu.js\");\n\n\n\n\n\n\nconst contentContainer = document.querySelector('#container');\n\nconst clearContent = () => {\n  contentContainer.innerHTML = '';\n};\n\nconst home = () => {\n  clearContent();\n  Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\nconst menu = () => {\n  clearContent();\n  Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_chef_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n};\n\nconst about = () => {\n  clearContent();\n  Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\nhome();\n\ndocument.addEventListener('click', e => {\n  if (e.target.innerText === 'Home') home();\n\n  if (e.target.innerText === 'Chef Menu' || e.target.innerText === 'Go to Menu') menu();\n\n  if ((e.target.innerText === 'About Us')) about();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clearContent);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });