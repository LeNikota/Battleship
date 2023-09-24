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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Barlow:wght@400;500&family=Big+Shoulders+Stencil+Text:wght@700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  box-sizing: border-box;\n  font-family: \"Barlow\", sans-serif;\n  user-select: none;\n  --primary: #eeeeee;\n  --secondary: #f05454;\n  --tertiary: #30475e;\n  --text: #1d242b;\n  --border: #160f30;\n  --border-inner: #160f3017;\n  --border-ship: #0065d8;\n  --bg-ship: rgba(0, 0, 255, 0.06);\n  --border-ship-sunk: #0065d8;\n  --bg-ship-sunk: #eb455f;\n  --border-ship-selected: rgb(17, 235, 71);\n  --bg-ship-selected: rgba(0, 255, 64, 0.05);\n  --tile-hit: #eb455f;\n  --tile-hit-water: #5287ff;\n  --dialog-bg: #00000050;\n  --button: rgb(220, 220, 255);\n  --border-warning: #eb455f;\n  --border-notification: #273dff;\n}\n\nbody {\n  margin: 0 auto;\n  max-width: 1200px;\n  background-color: var(--primary);\n  color: var(--text);\n}\n\nh1 {\n  font-family: \"Big Shoulders Stencil Text\", cursive;\n  text-align: center;\n  font-size: 6rem;\n}\n\nh2 {\n  font-weight: 500;\n  font-size: 2rem;\n  margin: 0px;\n}\n\nimg {\n  height: 30px;\n}\n\nbutton:hover {\n  filter: opacity(0.9);\n}\n\nbutton:active {\n  filter: opacity(0.7);\n}\n\nmain {\n  margin: 60px 0;\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n/* Board */\n\n.board {\n  width: 500px;\n  height: 500px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-auto-rows: 50px;\n  border: 3px var(--border) solid;\n}\n\n.board__tile {\n  border-right: 1px var(--border-inner) solid;\n  border-bottom: 1px var(--border-inner) solid;\n  position: relative;\n}\n\n.board__tile:nth-child(10n) {\n  border-right: none;\n}\n\n.board__tile:nth-child(n + 91) {\n  border-bottom: none;\n}\n\n.board__tile.water {\n  background-color: var(--tile-hit-water);\n}\n\n.board__tile.hit {\n  background-color: var(--tile-hit);\n}\n\n.board.player {\n  cursor: not-allowed;\n}\n\n.board.enemy {\n  cursor: crosshair;\n}\n\n/* Ship */\n\n.ship::before {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  right: -1px;\n  bottom: -1px;\n  border-top: solid var(--border-ship) 3px;\n  border-bottom: solid var(--border-ship) 3px;\n  background-color: var(--bg-ship);\n  pointer-events: none;\n}\n\n.ship.one::before {\n  border: solid var(--border-ship) 3px;\n}\n\n.ship.start::before {\n  border-left: solid var(--border-ship) 3px;\n}\n\n.ship.end::before {\n  border-right: solid var(--border-ship) 3px;\n}\n\n.ship.vertical::before {\n  border: solid var(--border-ship) 3px;\n  border-top: none;\n  border-bottom: none;\n}\n\n.ship.start.vertical::before {\n  border-top: solid var(--border-ship) 3px;\n}\n\n.ship.end.vertical::before {\n  border-bottom: solid var(--border-ship) 3px;\n}\n\n.hit::before {\n  background-color: var(--bg-ship-sunk) !important;\n  border-color: var(--border-ship-sunk) !important;\n}\n\n.selected {\n  background-color: var(--bg-ship-selected) !important;\n  border-color: var(--border-ship-selected) !important;\n}\n\n/* Dialog window */\n\n.dialog {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: var(--dialog-bg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.dialog-window {\n  background-color: var(--primary);\n  padding: 1.25rem;\n  text-align: center;\n}\n\n.dialog-window h3 {\n  font-weight: 400;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.dialog-window__sidebar {\n  display: grid;\n  align-content: space-between;\n}\n\n.setup-button-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  height: 150px;\n}\n\n.setup-button-container button {\n  background: var(--button);\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  font-size: 1.25rem;\n  cursor: pointer;\n  outline: inherit;\n  transition: filter ease 0.2s;\n}\n\n.game-setup {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n/* Ship selection */\n\n.ship-selection {\n  min-width: 250px;\n}\n\n.ship-selection-option {\n  display: grid;\n  grid-template-columns: 30px 1fr;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.ship-selection-option p {\n  font-size: 1.25rem;\n  margin: 0;\n}\n\n.ship-selection-option div {\n  width: calc(50px * var(--size));\n  height: 50px;\n  background-color: var(--bg-ship);\n  border: 3px solid var(--border-ship);\n  cursor: pointer;\n}\n\n/* Ship selection rotated */\n\n.ship-selection.rotated {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n\n.ship-selection.rotated .ship-selection-option {\n  grid-template-columns: 1fr;\n  grid-template-rows: 30px 1fr;\n  align-items: flex-start;\n}\n\n.ship-selection.rotated .ship-selection-option div {\n  width: 50px;\n  height: calc(50px * var(--size));\n}\n\n/* Message box */\n\n.message {\n  background-color: var(--primary);\n  border: var(--border) 4px solid;\n  border-radius: 4px;\n  position: fixed;\n  top: 140%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: ease 0.7s;\n  pointer-events: none;\n  width: 100px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.message img {\n  height: 50px;\n}\n\n.message__text {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n.message.warning {\n  border-color: var(--border-warning);\n}\n\n.message.notification {\n  border-color: var(--border-notification);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMessage: () => (/* binding */ displayMessage),\n/* harmony export */   init: () => (/* binding */ init),\n/* harmony export */   pointerEvents: () => (/* binding */ pointerEvents),\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard),\n/* harmony export */   resetBoards: () => (/* binding */ resetBoards),\n/* harmony export */   toggleDialogWindow: () => (/* binding */ toggleDialogWindow),\n/* harmony export */   updateSetupWindow: () => (/* binding */ updateSetupWindow)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/scripts/pubsub.js\");\n/* harmony import */ var _notification_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notification.svg */ \"./src/notification.svg\");\n/* harmony import */ var _warning_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../warning.svg */ \"./src/warning.svg\");\n\n\n\n\nconst dialogEl = document.querySelector('.dialog');\nconst setupBoardEl = document.querySelector('.setup.board');\nconst playerBoardEl = document.querySelector('.player.board');\nconst enemyBoardEl = document.querySelector('.enemy.board');\nconst boards = document.querySelectorAll('.board');\nconst shipSelectionEl = document.querySelector('.ship-selection');\nconst setupButtonContainerEl = document.querySelector('.setup-button-container');\nconst messageEl = document.querySelector('.message');\n\nconst SHIP_SIZES_LIST = {\n  large: 4,\n  big: 3,\n  middle: 2,\n  small: 1,\n};\nconst BOARD_TYPES = {\n  setup: setupBoardEl,\n  player: playerBoardEl,\n  enemy: enemyBoardEl,\n};\nconst IMAGES_LIST = {\n  notification: _notification_svg__WEBPACK_IMPORTED_MODULE_1__,\n  warning: _warning_svg__WEBPACK_IMPORTED_MODULE_2__,\n};\nlet selectedShipEl = null;\nlet isHorizontal = true;\nlet messageTimeoutID = null;\n\nfunction fillBoardsWithTiles() {\n  boards.forEach((board) => {\n    for (let x = 0; x < 10; x++) {\n      for (let y = 0; y < 10; y++) {\n        const tile = document.createElement('div');\n        tile.className = 'board__tile';\n        tile.dataset.x = x;\n        tile.dataset.y = y;\n        board.appendChild(tile);\n      }\n    }\n  });\n}\n\nfunction resetBoards() {\n  clearBoard('setup');\n  clearBoard('player');\n  clearBoard('enemy');\n  fillBoardsWithTiles();\n  resetShipSelectionEl();\n}\n\nfunction selectShip(shipEl) {\n  if (selectedShipEl) {\n    selectedShipEl.classList.remove('selected');\n  }\n  shipEl.classList.add('selected');\n  selectedShipEl = shipEl;\n}\n\nfunction deselectShip() {\n  if (selectedShipEl) {\n    selectedShipEl.classList.remove('selected');\n    selectedShipEl = null;\n  }\n}\n\nfunction toggleShipOrientation() {\n  isHorizontal = !isHorizontal;\n  shipSelectionEl.classList.toggle('rotated');\n}\n\nfunction pointerEvents(enable = true) {\n  const html = document.documentElement;\n  html.style.pointerEvents = enable ? 'auto' : 'none';\n}\n\nfunction shipSelectionElClick({ target }) {\n  if (!(target.classList[0] in SHIP_SIZES_LIST)) {\n    return;\n  }\n\n  if (target === selectedShipEl) {\n    deselectShip();\n  } else {\n    selectShip(target);\n  }\n}\n\nfunction setupBoardElClick({ target }) {\n  if (!(selectedShipEl && target.classList.contains('board__tile'))) {\n    return;\n  }\n\n  const size = SHIP_SIZES_LIST[selectedShipEl.classList[0]];\n  const x = +target.dataset.x;\n  const y = +target.dataset.y;\n\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('setupBoardClick', {\n    size, isHorizontal, x, y,\n  });\n}\n\nfunction enemyBoardElClick({ target }) {\n  if (!target.classList.contains('board__tile')) {\n    return;\n  }\n\n  const x = +target.dataset.x;\n  const y = +target.dataset.y;\n\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('enemyBoardClick', { x, y });\n}\n\nfunction setupButtonContainerElClick({ target }) {\n  switch (target.textContent) {\n    case 'Random':\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('placeShipRandomly', null);\n      break;\n    case 'Reset':\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('resetBoard', null);\n      break;\n    case 'Rotate (R)':\n      toggleShipOrientation();\n      break;\n    case 'Start':\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('startGame', null);\n      break;\n  }\n}\n\nfunction clearBoard(type) {\n  const boardEl = BOARD_TYPES[type];\n\n  while (boardEl.firstChild) {\n    boardEl.removeChild(boardEl.lastChild);\n  }\n}\n\nfunction clearShipSelectionEl() {\n  while (shipSelectionEl.firstChild) {\n    shipSelectionEl.removeChild(shipSelectionEl.firstChild);\n  }\n}\n\nfunction resetShipSelectionEl() {\n  shipSelectionEl.innerHTML = `\n    <div class=\"ship-selection-option\">\n      <p class=\"amount\">1x</p>\n      <div class=\"large\" style=\"--size: 4\"></div>\n    </div>\n    <div class=\"ship-selection-option\">\n      <p class=\"amount\">2x</p>\n      <div class=\"big\" style=\"--size: 3\"></div>\n    </div>\n    <div class=\"ship-selection-option\">\n      <p class=\"amount\">3x</p>\n      <div class=\"middle\" style=\"--size: 2\"></div>\n    </div>\n    <div class=\"ship-selection-option\">\n      <p class=\"amount\">4x</p>\n      <div class=\"small\" style=\"--size: 1\"></div>\n    </div>   \n  `;\n}\n\nfunction updateSetupWindow(board) {\n  renderBoard('setup', board);\n\n  if (board.getShips().length === 10) {\n    deselectShip();\n    clearShipSelectionEl();\n  }\n\n  if (board.getShips().length === 0) {\n    deselectShip();\n    resetShipSelectionEl();\n  }\n\n  if (selectedShipEl) {\n    const amountDisplay = selectedShipEl.previousElementSibling;\n    const amountLeft = amountDisplay.textContent[0] - 1;\n    amountDisplay.textContent = `${amountLeft}x`;\n\n    if (amountLeft < 1) {\n      selectedShipEl.parentElement.remove();\n      deselectShip();\n    }\n  }\n}\n\nfunction renderBoard(type, board, renderShip = true) {\n  clearBoard(type);\n  const boardEl = BOARD_TYPES[type];\n  const tilesEl = [];\n\n  board.getTiles().forEach((row) => {\n    const tileRow = [];\n    row.forEach((tile) => {\n      const [x, y] = tile.cords;\n      const tileEl = document.createElement('div');\n      tileEl.classList.add('board__tile');\n\n      if (tile.hit) {\n        tileEl.classList.add('water');\n      }\n      if (tile.hit && tile.ship) {\n        tileEl.classList.add('hit');\n      }\n\n      tileEl.dataset.x = x;\n      tileEl.dataset.y = y;\n      tileRow.push(tileEl);\n    });\n    tilesEl.push(tileRow);\n  });\n\n  if (!renderShip) {\n    boardEl.append(...tilesEl.flat());\n    return;\n  }\n\n  board.getShips().forEach(({ ship, x, y }) => {\n    const isHorizontal = ship.getOrientation();\n    const shipStart = isHorizontal ? y : x;\n    const shipEnd = (isHorizontal ? y : x) + ship.getLength() - 1;\n\n    if (shipStart === shipEnd) {\n      tilesEl[x][y].classList.add('ship', 'one');\n      return;\n    }\n\n    if (isHorizontal) {\n      for (let i = y; i <= shipEnd; i++) {\n        if (shipStart === i) {\n          tilesEl[x][i].classList.add('ship', 'start');\n        } else if (i < shipEnd) {\n          tilesEl[x][i].classList.add('ship');\n        } else {\n          tilesEl[x][i].classList.add('ship', 'end');\n        }\n      }\n    } else {\n      for (let i = x; i <= shipEnd; i++) {\n        if (shipStart === i) {\n          tilesEl[i][y].classList.add('ship', 'vertical', 'start');\n        } else if (i < shipEnd) {\n          tilesEl[i][y].classList.add('ship', 'vertical');\n        } else {\n          tilesEl[i][y].classList.add('ship', 'vertical', 'end');\n        }\n      }\n    }\n  });\n\n  boardEl.append(...tilesEl.flat());\n}\n\nfunction toggleDialogWindow() {\n  dialogEl.style.display = dialogEl.style.display === 'none' ? 'flex' : 'none';\n}\n\nfunction displayMessage(message, type = 'warning', timer = 2000) {\n  clearTimeout(messageTimeoutID);\n  messageEl.classList.remove('warning', 'notification');\n  messageEl.classList.add(type);\n  messageEl.firstElementChild.src = IMAGES_LIST[type];\n  messageEl.lastElementChild.textContent = message;\n\n  const width = messageEl.firstElementChild.offsetWidth + messageEl.lastElementChild.offsetWidth + +getComputedStyle(messageEl, null).getPropertyValue('padding').match(/\\d+/)[0];\n  messageEl.style.width = `${width}px`;\n  messageEl.style.top = '80%';\n\n  messageTimeoutID = setTimeout(() => { messageEl.style.top = '140%'; }, timer);\n}\n\nfunction init() {\n  fillBoardsWithTiles();\n  shipSelectionEl.addEventListener('click', shipSelectionElClick);\n  setupBoardEl.addEventListener('click', setupBoardElClick);\n  enemyBoardEl.addEventListener('click', enemyBoardElClick);\n  setupButtonContainerEl.addEventListener('click', setupButtonContainerElClick);\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/dom.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nclass Gameboard {\n  #tiles;\n\n  #ships;\n\n  constructor() {\n    this.#tiles = Array.from(new Array(10), (v, x) => new Array(10).fill().map((v, y) => ({ hit: false, cords: [x, y] })));\n    this.#ships = [];\n  }\n\n  checkTileValidity(x, y) {\n    return !(x < 0 || y < 0 || x > 9 || y > 9);\n  }\n\n  checkPlacementValidity(x, y, length, isHorizontal) {\n    const tilesToCheck = [];\n\n    if (isHorizontal) {\n      const yOffsetLeft = (y === 0) ? 0 : -1;\n      const yOffsetRight = (y === 9) ? 1 : 2;\n\n      if (x !== 0) { tilesToCheck.push(...this.#tiles[x - 1].slice(y + yOffsetLeft, y + length + yOffsetRight)); }\n      tilesToCheck.push(...this.#tiles[x].slice(y + yOffsetLeft, y + length + yOffsetRight));\n      if (x !== 9) { tilesToCheck.push(...this.#tiles[x + 1].slice(y + yOffsetLeft, y + length + yOffsetRight)); }\n    } else {\n      const xOffsetTop = (x === 0) ? 0 : -1;\n      const xOffsetBottom = (x === 9 - length) ? 0 : 1;\n\n      for (let i = x + xOffsetTop; i <= x + length + xOffsetBottom; i++) {\n        if (y !== 0) { tilesToCheck.push(this.#tiles[i][y - 1]); }\n        tilesToCheck.push(this.#tiles[i][y]);\n        if (y !== 9) { tilesToCheck.push(this.#tiles[i][y + 1]); }\n      }\n    }\n\n    return !tilesToCheck.some((tile) => 'ship' in tile);\n  }\n\n  placeShip(ship, x, y) {\n    const length = (ship.getLength() - 1);\n    const isHorizontal = ship.getOrientation();\n\n    if (isHorizontal && (!this.checkTileValidity(x, y) || y + length >= 10)) {\n      throw ('Placement is out of bounds');\n    }\n    if (!isHorizontal && (!this.checkTileValidity(x, y) || x + length >= 10)) {\n      throw ('Placement is out of bounds');\n    }\n    if (!this.checkPlacementValidity(x, y, length, isHorizontal)) {\n      throw ('Placing near or across already placed ship');\n    }\n\n    if (isHorizontal) {\n      for (let i = y; i <= y + length; i++) {\n        this.#tiles[x][i].ship = ship;\n      }\n    } else {\n      for (let i = x; i <= x + length; i++) {\n        this.#tiles[i][y].ship = ship;\n      }\n    }\n\n    this.#ships.push({ ship, x, y });\n    return this;\n  }\n\n  placeShipsRandomly(Ship) {\n    this.reset();\n    const MAX_ATTEMPTS_PER_SHIP = 100;\n    const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];\n\n    shipLengths.forEach((length) => {\n      let shipPlaced = false;\n      let attempts = 0;\n\n      while (!shipPlaced) {\n        const x = Math.floor(Math.random() * 10);\n        const y = Math.floor(Math.random() * 10);\n        const isVertical = !!Math.floor(Math.random() * 2);\n        const ship = new Ship(length);\n        if (isVertical) ship.toggleOrientation();\n\n        try {\n          this.placeShip(ship, x, y);\n          shipPlaced = true;\n        } catch {\n          attempts++;\n          if (attempts > MAX_ATTEMPTS_PER_SHIP) {\n            this.reset();\n            throw `Exceeded placement attempts limit for a ship of length ${length}`;\n          }\n        }\n      }\n    });\n\n    return this;\n  }\n\n  reset() {\n    this.#tiles = Array.from(new Array(10), (v, x) => new Array(10).fill().map((v, y) => ({ hit: false, cords: [x, y] })));\n    this.#ships = [];\n  }\n\n  receiveAttack(x, y) {\n    if (!this.checkTileValidity(x, y)) { throw ('The tile is out of bounds'); }\n\n    const tile = this.#tiles[x][y];\n\n    if (tile.hit) { throw ('The tile has been already hit'); }\n\n    tile.hit = true;\n\n    if (!tile.ship) { return; }\n\n    const { ship } = tile;\n    ship.hit();\n\n    if (ship.isSunk()) {\n      const tilesAroundShip = this.getTilesAroundShip(ship);\n      tilesAroundShip.forEach((tile) => { tile.hit = true; });\n    }\n  }\n\n  getTile(x, y) {\n    return { ...this.#tiles[x][y] };\n  }\n\n  getTiles() {\n    return this.#tiles.map((row) => row.map((tile) => ({ ...tile, cords: [...tile.cords] })));\n  }\n\n  getTilesAroundShip(ship) {\n    const tilesAroundShip = [];\n\n    const { x, y } = this.#ships.find(({ ship: s }) => s === ship);\n\n    if (!(typeof x === 'number' && typeof y === 'number')) {\n      throw 'Tiles around the ship have not been found';\n    }\n\n    const isHorizontal = ship.getOrientation();\n    const shipLength = ship.getLength();\n\n    if (isHorizontal) {\n      for (let i = x - 1; i <= x + 1; i++) {\n        for (let j = y - 1; j <= y + shipLength; j++) {\n          if (this.checkTileValidity(i, j)) {\n            tilesAroundShip.push(this.#tiles[i][j]);\n          }\n        }\n      }\n    } else {\n      for (let i = x - 1; i <= x + shipLength; i++) {\n        for (let j = y - 1; j <= y + 1; j++) {\n          if (this.checkTileValidity(i, j)) {\n            tilesAroundShip.push(this.#tiles[i][j]);\n          }\n        }\n      }\n    }\n\n    return tilesAroundShip;\n  }\n\n  getShips() {\n    return this.#ships;\n  }\n\n  checkAllShipsSunk() {\n    return this.#ships.every(({ ship }) => ship.isSunk());\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/scripts/dom.js\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ \"./src/scripts/pubsub.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\n\n\n\n\n\n\n_dom__WEBPACK_IMPORTED_MODULE_1__.init();\n\nconst playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst player = new _player__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nconst ai = new _player__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nplayer.setOpponent(ai);\nai.setOpponent(player);\n\nfunction handleSetUpBoardClick({\n  size, isHorizontal, x, y,\n}) {\n  try {\n    playerBoard.placeShip(\n      isHorizontal ? new _ship__WEBPACK_IMPORTED_MODULE_4__[\"default\"](size) : new _ship__WEBPACK_IMPORTED_MODULE_4__[\"default\"](size).toggleOrientation(),\n      x,\n      y,\n    );\n    _dom__WEBPACK_IMPORTED_MODULE_1__.updateSetupWindow(playerBoard);\n  } catch (error) {\n    _dom__WEBPACK_IMPORTED_MODULE_1__.displayMessage(error);\n  }\n}\n\nfunction handleEnemyBoardClick({ x, y }) {\n  try {\n    player.attackOpponent(x, y);\n    _dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard('enemy', ai.getBoard(), false);\n    if (player.checkWin()) {\n      handleEndGameEvent(true);\n      return;\n    }\n\n    ai.randomAttackOpponent();\n    _dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard('player', player.getBoard());\n    if (ai.checkWin()) {\n      handleEndGameEvent(false);\n    }\n  } catch (error) {\n    _dom__WEBPACK_IMPORTED_MODULE_1__.displayMessage(error);\n  }\n}\n\nfunction handlePlaceShipRandomlyEvent() {\n  try {\n    playerBoard.placeShipsRandomly(_ship__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    _dom__WEBPACK_IMPORTED_MODULE_1__.updateSetupWindow(playerBoard);\n  } catch (error) {\n    _dom__WEBPACK_IMPORTED_MODULE_1__.displayMessage(error);\n  }\n}\n\nfunction handleResetBoardEvent() {\n  playerBoard.reset();\n  _dom__WEBPACK_IMPORTED_MODULE_1__.updateSetupWindow(playerBoard);\n}\n\nfunction handleStartGameEvent() {\n  if (playerBoard.getShips().length !== 10) {\n    _dom__WEBPACK_IMPORTED_MODULE_1__.displayMessage('Not all ships have been placed');\n    return;\n  }\n  player.setBoard(playerBoard);\n  ai.setBoard(new _gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().placeShipsRandomly(_ship__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\n\n  _dom__WEBPACK_IMPORTED_MODULE_1__.toggleDialogWindow();\n  _dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard('player', playerBoard);\n}\n\nfunction handleEndGameEvent(win) {\n  _dom__WEBPACK_IMPORTED_MODULE_1__.pointerEvents(false);\n\n  const message = win ? 'You win' : 'You lose';\n  let countdown = 9;\n\n  _dom__WEBPACK_IMPORTED_MODULE_1__.displayMessage(message, 'notification');\n\n  const countdownIntervalId = setInterval(() => {\n    _dom__WEBPACK_IMPORTED_MODULE_1__.displayMessage(`${message}, new game in ${countdown--} seconds`, 'notification');\n  }, 1000);\n\n  setTimeout(() => {\n    clearInterval(countdownIntervalId);\n    _dom__WEBPACK_IMPORTED_MODULE_1__.displayMessage('Starting new game...', 'notification', 1000);\n    playerBoard.reset();\n    _dom__WEBPACK_IMPORTED_MODULE_1__.resetBoards();\n    _dom__WEBPACK_IMPORTED_MODULE_1__.toggleDialogWindow();\n    _dom__WEBPACK_IMPORTED_MODULE_1__.pointerEvents(true);\n  }, 10000);\n}\n\n_pubsub__WEBPACK_IMPORTED_MODULE_2__[\"default\"].subscribe('setupBoardClick', handleSetUpBoardClick);\n_pubsub__WEBPACK_IMPORTED_MODULE_2__[\"default\"].subscribe('enemyBoardClick', handleEnemyBoardClick);\n_pubsub__WEBPACK_IMPORTED_MODULE_2__[\"default\"].subscribe('placeShipRandomly', handlePlaceShipRandomlyEvent);\n_pubsub__WEBPACK_IMPORTED_MODULE_2__[\"default\"].subscribe('resetBoard', handleResetBoardEvent);\n_pubsub__WEBPACK_IMPORTED_MODULE_2__[\"default\"].subscribe('startGame', handleStartGameEvent);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n  #board;\n\n  #opponent;\n\n  #shipCords;\n\n  #adjacentTiles;\n\n  constructor(board, opponent = null) {\n    this.#board = board;\n    this.#opponent = opponent;\n\n    /* AI properties for randomAttackOpponent */\n    this.#shipCords = {\n      start: null,\n      end: null,\n      waterEnd: false, // true if has reached the most right side of a ship, next attacks will go to the left side of the ship\n      isHorizontal: null,\n    };\n    this.#adjacentTiles = [[-1, 0], [1, 0], [0, -1], [0, 1]];\n  }\n\n  attackOpponent(x, y) {\n    const opponentBoard = this.#opponent.getBoard();\n    opponentBoard.receiveAttack(x, y);\n  }\n\n  setOpponent(opponent) {\n    if (opponent === this) { throw ('Setting yourself as an opponent'); }\n\n    this.#opponent = opponent;\n  }\n\n  getBoard() {\n    return this.#board;\n  }\n\n  setBoard(board) {\n    this.#board = board;\n    return this.#board;\n  }\n\n  getBoardTiles() {\n    return this.#board.getTiles();\n  }\n\n  checkWin() {\n    return this.#opponent.getBoard().checkAllShipsSunk();\n  }\n\n  randomAttackOpponent() {\n    const opponentBoard = this.#opponent.getBoard();\n    const opponentBoardTiles = opponentBoard.getTiles();\n    const intactTilesCords = [];\n    let attackCords = null;\n\n    if (this.#shipCords.start && this.#shipCords.end) {\n      const startCord = this.#shipCords.start;\n      const endCord = this.#shipCords.end;\n\n      if (this.#shipCords.isHorizontal) {\n        attackCords = !this.#shipCords.waterEnd ? [endCord[0], endCord[1] + 1] : [startCord[0], startCord[1] - 1];\n      } else {\n        attackCords = !this.#shipCords.waterEnd ? [endCord[0] + 1, endCord[1]] : [startCord[0] - 1, startCord[1]];\n      }\n\n      if (this.#shipCords.waterEnd) {\n        this.#shipCords.start = attackCords;\n      } else {\n        this.#shipCords.end = attackCords;\n      }\n    } else if (this.#shipCords.start) {\n      const [x, y] = this.#shipCords.start;\n      while (true) {\n        const [xOffset, yOffset] = this.#adjacentTiles.pop();\n        attackCords = [x + xOffset, y + yOffset];\n        if (!opponentBoard.checkTileValidity(...attackCords)) { continue; }\n        if (opponentBoard.getTile(...attackCords).hit) { continue; }\n\n        break;\n      }\n    } else {\n      for (let x = 0; x < opponentBoardTiles.length; x++) {\n        for (let y = 0; y < opponentBoardTiles[x].length; y++) {\n          if (!opponentBoardTiles[x][y].hit) { intactTilesCords.push([x, y]); }\n        }\n      }\n      attackCords = intactTilesCords[Math.floor(Math.random() * intactTilesCords.length)];\n    }\n\n    opponentBoard.receiveAttack(...attackCords);\n\n    const tile = opponentBoard.getTile(...attackCords);\n    if (!tile.ship) {\n      if (this.#shipCords.end) { this.#shipCords.waterEnd = true; }\n\n      return;\n    }\n\n    if (tile.ship.isSunk()) {\n      this.#shipCords = {\n        start: null,\n        end: null,\n        waterEnd: false,\n        isHorizontal: null,\n      };\n      this.#adjacentTiles = [[-1, 0], [1, 0], [0, -1], [0, 1]];\n      return;\n    }\n    if (!this.#shipCords.start) {\n      this.#shipCords.start = attackCords;\n      return;\n    }\n    if (!this.#shipCords.end) {\n      this.#shipCords.end = attackCords;\n\n      let startCord = this.#shipCords.start;\n      let endCord = this.#shipCords.end;\n      this.#shipCords.isHorizontal = startCord[0] === endCord[0]; // Check if ship is horizontal or vertical\n\n      if (endCord[0] < startCord[0] || endCord[1] < startCord[1]) { // Swap start and end if necessary\n        const temp = endCord;\n        endCord = startCord;\n        startCord = temp;\n        this.#shipCords.start = startCord;\n        this.#shipCords.end = endCord;\n      }\n\n      const possibleWaterEndCords = this.#shipCords.isHorizontal ? [endCord[0], endCord[1] + 1] : [endCord[0] + 1, endCord[1]];\n\n      if (!opponentBoard.checkTileValidity(...possibleWaterEndCords) || opponentBoard.getTile(...possibleWaterEndCords).hit) {\n        this.#shipCords.waterEnd = true;\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/pubsub.js":
/*!*******************************!*\
  !*** ./src/scripts/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst PubSub = {\n  events: {},\n\n  subscribe(eventName, fn) {\n    this.events[eventName] = this.events[eventName] || [];\n    this.events[eventName].push(fn);\n  },\n\n  publish(eventName, data) {\n    if (!this.events[eventName]) return;\n    this.events[eventName].forEach((fn) => fn(data));\n  },\n\n  removeAllEvents() {\n    const eventNames = Object.keys(this.events);\n    eventNames.forEach((eventName) => {\n      delete this.events[eventName];\n    });\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PubSub);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/pubsub.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  #length;\n\n  #hits;\n\n  #isHorizontal;\n\n  constructor(length = 1) {\n    this.#length = length;\n    this.#hits = 0;\n    this.#isHorizontal = true;\n  }\n\n  isSunk() {\n    return this.#hits >= this.#length;\n  }\n\n  hit() {\n    this.#hits++;\n  }\n\n  getOrientation() {\n    return this.#isHorizontal;\n  }\n\n  toggleOrientation() {\n    this.#isHorizontal = !this.#isHorizontal;\n    return this;\n  }\n\n  getLength() {\n    return this.#length;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/ship.js?");

/***/ }),

/***/ "./src/notification.svg":
/*!******************************!*\
  !*** ./src/notification.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d004994e7f33e7d4976.svg\";\n\n//# sourceURL=webpack://battleship/./src/notification.svg?");

/***/ }),

/***/ "./src/warning.svg":
/*!*************************!*\
  !*** ./src/warning.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a19ec05808eacc5f7843.svg\";\n\n//# sourceURL=webpack://battleship/./src/warning.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;