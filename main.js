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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/mystyles.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/mystyles.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/theatre.jpg */ \"./Assets/theatre.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: bisque;\\r\\n  font-family: 'Pacifico', cursive;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  padding: 1rem;\\r\\n  align-items: center;\\r\\n  border: 2px solid green;\\r\\n}\\r\\n\\r\\nheader h1 {\\r\\n  font-size: 3rem;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 50%;\\r\\n  height: 70%;\\r\\n  cursor: pointer;\\r\\n  border: 5px solid black;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border: 3px solid black;\\r\\n  margin-top: 2rem;\\r\\n  font-size: 2rem;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\r\\n  gap: 2rem;\\r\\n  margin: 1rem auto 1rem auto;\\r\\n  width: 80%;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;\\r\\n  border-radius: 1rem;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.grid-item {\\r\\n  border: 2px solid gray;\\r\\n  padding: 5px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  background-color: rgba(222, 184, 135, 0.2);\\r\\n  border-radius: 1rem;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  color: antiquewhite;\\r\\n}\\r\\n\\r\\n.grid-item > p {\\r\\n  margin-top: 0.6rem;\\r\\n}\\r\\n\\r\\n.grid-item > hr {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.grid-item > img {\\r\\n  width: 70%;\\r\\n  height: 23vw;\\r\\n}\\r\\n\\r\\n.graphic {\\r\\n  height: 15vw;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 5px;\\r\\n  width: 40%;\\r\\n  background-color: burlywood;\\r\\n  border: none;\\r\\n  margin: 0.4rem;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  filter: invert(100%);\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 2rem;\\r\\n  background-color: peru;\\r\\n  width: 80%;\\r\\n  border: 2px solid green;\\r\\n  margin: 0 auto;\\r\\n  height: 100vh;\\r\\n  overflow-y: auto;\\r\\n  backdrop-filter: blur(50px);\\r\\n}\\r\\n\\r\\n.comment h2 {\\r\\n  font-size: 3rem;\\r\\n  font-family: monospace;\\r\\n}\\r\\n\\r\\n.comment > form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.comment > img {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.comment > table {\\r\\n  border: 2px solid black;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.comment > form > input,\\r\\n.comment > form > textarea {\\r\\n  width: 40%;\\r\\n  padding: 1rem;\\r\\n  margin: 0.5rem 0 0.5rem 0;\\r\\n  border-radius: 1rem;\\r\\n  border: none;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.comment > form > input:focus,\\r\\n.comment > form > textarea:focus,\\r\\n.comment > form > input:hover,\\r\\n.comment > form > textarea:hover {\\r\\n  outline: none;\\r\\n  box-shadow: 0 0 3px 4px;\\r\\n}\\r\\n\\r\\n.link button {\\r\\n  cursor: pointer;\\r\\n  border-radius: 0.7rem;\\r\\n  padding: 0.7rem;\\r\\n  margin: 1rem;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.comment > form > button {\\r\\n  padding: 1rem;\\r\\n  width: 20%;\\r\\n  font-size: 1rem;\\r\\n  border-radius: 20%;\\r\\n  border: none;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n  margin-top: 0.5rem;\\r\\n  background-color: chocolate;\\r\\n  color: antiquewhite;\\r\\n}\\r\\n\\r\\n.link button:hover {\\r\\n  filter: invert(100%);\\r\\n}\\r\\n\\r\\n.comment > form > button:hover {\\r\\n  box-shadow: 0 0 3px 4px;\\r\\n  filter: invert(100%);\\r\\n}\\r\\n\\r\\n.fa-circle-xmark {\\r\\n  align-self: flex-end;\\r\\n  font-size: 2rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment .episode-class {\\r\\n  border: 5px solid black;\\r\\n  border-collapse: collapse;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.comment .episode-class tr {\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\n.link {\\r\\n  text-align: right;\\r\\n}\\r\\n\\r\\n.link a {\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.user-comments {\\r\\n  border: 2px solid brown;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  transition: all 0.5s ease-in-out;\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.love-div {\\r\\n  border: 2px solid bisque;\\r\\n  padding: 5px;\\r\\n  border-radius: 50%;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.fa-heart:hover {\\r\\n  color: crimson;\\r\\n  transform: scale(1.5);\\r\\n  filter: invert(100%);\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 790px) {\\r\\n  .grid-item > img {\\r\\n    width: 40%;\\r\\n    height: 30vw;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cinescope/./src/mystyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://cinescope/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://cinescope/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://cinescope/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/mystyles.css":
/*!**************************!*\
  !*** ./src/mystyles.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./mystyles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/mystyles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://cinescope/./src/mystyles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://cinescope/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://cinescope/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://cinescope/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://cinescope/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://cinescope/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://cinescope/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mystyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mystyles.css */ \"./src/mystyles.css\");\n/* harmony import */ var _modules_dbcaller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dbcaller.js */ \"./src/modules/dbcaller.js\");\n/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _Assets_company_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/company_logo.png */ \"./Assets/company_logo.png\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n\n\n\n\n\n\n\nconst logoDiv = document.querySelector('.logo-div');\nconst component = () => {\n  const element = document.createElement('div');\n  const mycompanyLogo = new Image();\n  mycompanyLogo.src = _Assets_company_logo_png__WEBPACK_IMPORTED_MODULE_3__;\n  mycompanyLogo.className = 'logo';\n  mycompanyLogo.alt = 'Company Logo';\n  mycompanyLogo.title = 'Company Logo';\n  element.appendChild(mycompanyLogo);\n  return element;\n};\nlogoDiv.appendChild(component());\n\nwindow.onload = () => {\n  (0,_modules_dbcaller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\ndocument.addEventListener('click', (e) => {\n  const { id } = e.target;\n  let collector = e.target.classList;\n  collector = Array.from(collector);\n  if (collector.includes('btn-comment')) {\n    (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n  } else if (collector.includes('fa-heart')) {\n    (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(id, e);\n  }\n});\n\n\n//# sourceURL=webpack://cinescope/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dbcaller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dbcaller.js */ \"./src/modules/dbcaller.js\");\n/* harmony import */ var _commentFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentFunction.js */ \"./src/modules/commentFunction.js\");\n\n\n\nconst main = document.querySelector('main');\n\nconst oneMovie = async (a) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${a}`);\n  const data = await response.json();\n  return data;\n};\n\nconst epiGetter = async (a) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${a}/episodes`);\n  const data = await response.json();\n  return data;\n};\n\nconst commentPop = async (a) => {\n  const movie = await oneMovie(a);\n  const episodes = await epiGetter(a);\n  main.innerHTML = '';\n  const commentSection = document.createElement('div');\n  commentSection.className = 'comment';\n  main.appendChild(commentSection);\n  commentSection.innerHTML = `<i class=\"fa-sharp fa-solid fa-circle-xmark fa-beat-fade\"></i><img src=\"${movie.image.medium}\" alt=\"${movie.name}\" title=\"${movie.name}\">\n    <h2>${movie.name}</h2>\n    <table>\n        <tr><td>Runtime: ${movie.runtime} </td><td>Status: ${movie.status} </td>\n        </tr>\n        <tr><td>Ended on: ${movie.ended} </td><td>Rating: ${movie.rating.average} </td>\n        </tr>\n    </table>\n    <p>The first twenty episodes<p>\n    <table class=\"episode-class\"></table>\n    <p>For more information about the movie, please click <a href=\"${movie.officialSite}\">this link</a></p>\n    <h3>Comments (2)</h3>\n    <div class=\"user-comments\"></div>\n    <form id=\"form\">\n        <h3>Add a comment</h3>\n        <input class=\"user-name\" type=\"text\" placeholder=\"Your name\" required>\n        <textarea class=\"user-comment\" cols=\"30\" rows=\"10\" placeholder=\"Your insights\" required></textarea>\n        <button class=\"comment-post\" type=\"submit\">Comment</button>\n    </form>`;\n\n  const episodeClass = document.querySelector('.episode-class');\n  let count = 0;\n  while (count <= 20) {\n    episodeClass.innerHTML += `<tr><td>Episode Name: ${episodes[count].name} </td><td>Air-Date: ${episodes[count].airdate} </td><td class=\"link\">\n      <a href=\"${episodes[count].url}\"><button>Link to the episode</button></a></td></tr>`;\n    count += 1;\n  }\n  main.scrollIntoView({ behavior: 'smooth' });\n  const divCom = document.querySelector('.user-comments');\n  const payLoad2 = { item_id: a };\n  (0,_commentFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(divCom, payLoad2);\n\n  document.querySelector('.comment-post').addEventListener('click', (e) => {\n    e.preventDefault();\n    const userName = document.querySelector('.user-name').value;\n    const userComment = document.querySelector('.user-comment').value;\n    if (userName === '' || userComment === '') return;\n    const payLoad = { item_id: a, username: userName, comment: userComment };\n    document.querySelector('.user-name').value = '';\n    document.querySelector('.user-comment').value = '';\n    const b = userName;\n    (0,_commentFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(payLoad, e, b);\n  });\n};\n\ndocument.addEventListener('click', (e) => {\n  let collector = e.target.classList;\n  collector = Array.from(collector);\n  if (collector.includes('fa-circle-xmark')) {\n    (0,_dbcaller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentPop);\n\n\n//# sourceURL=webpack://cinescope/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/commentFunction.js":
/*!****************************************!*\
  !*** ./src/modules/commentFunction.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentGetter = async (a) => {\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xns1ROZAkOXmd23EMLBX/comments?item_id=${a.item_id}`;\n  const response = await fetch(url);\n  const data = response.json();\n  return data;\n};\n\nconst commentPoster = async (a) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xns1ROZAkOXmd23EMLBX/comments';\n  const options = {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: `${a.item_id}`,\n      username: `${a.username}`,\n      comment: `${a.comment}`,\n    }),\n    headers: { 'Content-Type': 'application/json; charset=UTF-8' },\n  };\n  await fetch(url, options);\n};\n\nconst commentsFunction = async (...args) => {\n  if (args.length === 3) {\n    await commentPoster(args[0]);\n    const commentData = await commentGetter(args[0]);\n    const { length } = commentData;\n    const commentDiv = args[1].target.parentElement.previousElementSibling;\n    commentDiv.previousElementSibling.innerHTML = `<h3>Comments (${length})</h3>`;\n    commentDiv.innerHTML = '';\n    commentData.forEach((comment) => {\n      commentDiv.innerHTML += `<p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>`;\n    });\n  } else {\n    const commentData = await commentGetter(args[1]);\n    const { length } = commentData;\n    args[0].previousElementSibling.innerHTML = `<h3>Comments (${length})</h3>`;\n    commentData.forEach((comment) => {\n      args[0].innerHTML += `<p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>`;\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsFunction);\n\n//# sourceURL=webpack://cinescope/./src/modules/commentFunction.js?");

/***/ }),

/***/ "./src/modules/database.js":
/*!*********************************!*\
  !*** ./src/modules/database.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\r\n\r\nconst main = document.querySelector('main');\r\nconst Mcounter = document.querySelector('header h1');\r\n\r\nconst database = (itemArr) => {\r\n  main.innerHTML = '';\r\n  const wrapper = document.createElement('div');\r\n  wrapper.className = 'wrapper';\r\n  main.appendChild(wrapper);\r\n\r\n  const newlist = itemArr.slice(0, 16);\r\n\r\n  newlist.forEach((movie) => {\r\n    const genre = movie.genres.join(', ');\r\n    const card = document.createElement('div');\r\n    card.className = 'grid-item';\r\n\r\n    card.innerHTML = `<img src='${movie.image.original}' alt=\"Movie graphic\" title='${movie.name}' class=\"graphic\">\r\n        <p>${movie.name}</p><hr>\r\n        <div class=\"love-div\" ><i class=\"fa-regular fa-heart\" id=${movie.id}></i></div>\r\n        <div class=\"likes\" id=\"${movie.id}\">0 likes</div>\r\n        <p>${genre}</p>\r\n        <p>Language: ${movie.language}</p>\r\n        <p>Premiered on ${movie.premiered}</p><hr>\r\n        <button type=\"button\" id='${movie.id}' class=\"btn btn-comment\">Comment</button>\r\n        <button type=\"button\" id='${movie.id}' class=\"btn btn-reserve\">Reserve</button>`;\r\n    wrapper.appendChild(card);\r\n  });\r\n  Mcounter.innerHTML = `<h1>CineScope Movie database (${newlist.length})</h1>`;\r\n\r\n  const likeDiv = document.querySelectorAll('.likes');\r\n  (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(likeDiv);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (database);\n\n//# sourceURL=webpack://cinescope/./src/modules/database.js?");

/***/ }),

/***/ "./src/modules/dbcaller.js":
/*!*********************************!*\
  !*** ./src/modules/dbcaller.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database.js */ \"./src/modules/database.js\");\n\n\nconst getMovies = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const data = await response.json();\n  return data;\n};\n\nconst pageLoader = async () => {\n  const movieBank = await getMovies();\n  (0,_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(movieBank);\n};\n\nconst dbcaller = () => pageLoader();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbcaller);\n\n\n//# sourceURL=webpack://cinescope/./src/modules/dbcaller.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst likeGetter = async () => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xns1ROZAkOXmd23EMLBX/likes';\n  const response = await fetch(url);\n  const data = response.json();\n  return data;\n};\n\nconst likePoster = async (a) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xns1ROZAkOXmd23EMLBX/likes';\n  const options = {\n    method: 'POST',\n    body: JSON.stringify({ item_id: `${a}` }),\n    headers: { 'Content-Type': 'application/json; charset=UTF-8' },\n  };\n  await fetch(url, options);\n};\n\nconst likesFunction = async (...args) => {\n  if (args.length === 1) {\n    const newValue = await likeGetter();\n    const divlist = args[0];\n    for (let i = 0; i < newValue.length; i += 1) {\n      if (newValue[i].item_id === 'undefined') {\n        i += 1;\n      } else {\n        let value = Number(newValue[i].item_id);\n        value = divlist[value - 1];\n        value.innerHTML = `${newValue[i].likes} Likes`;\n      }\n    }\n  } else {\n    await likePoster(args[0]);\n    const newValue = await likeGetter();\n    const likeDiv = args[1].target.parentElement.nextElementSibling;\n    const currentLikes = newValue.filter((like) => like.item_id === args[0]);\n    likeDiv.innerHTML = `<p>${currentLikes[0].likes} likes</p>`;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likesFunction);\n\n//# sourceURL=webpack://cinescope/./src/modules/likes.js?");

/***/ }),

/***/ "./Assets/company_logo.png":
/*!*********************************!*\
  !*** ./Assets/company_logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"429c0e06f13da17d5fde.png\";\n\n//# sourceURL=webpack://cinescope/./Assets/company_logo.png?");

/***/ }),

/***/ "./Assets/theatre.jpg":
/*!****************************!*\
  !*** ./Assets/theatre.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b7163ed6c59d15eaf3cf.jpg\";\n\n//# sourceURL=webpack://cinescope/./Assets/theatre.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;