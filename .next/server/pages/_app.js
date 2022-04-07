/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/Store.js":
/*!**********************!*\
  !*** ./lib/Store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"StoreProvider\": () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n// import Cookies from 'js-cookie';\n// There was a problem with retreiving data from js-cookie... Revised storage is in \n//   localstorage . Standard Calling variable is store.. but as it may raise conflicts with the file-name\n//   we are using the name as Cookies for now\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst initialState = {\n    userInfo: store_js__WEBPACK_IMPORTED_MODULE_1___default().get('userInfo') ? JSON.parse(JSON.stringify(store_js__WEBPACK_IMPORTED_MODULE_1___default().get('userInfo'))) : null\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case 'USER_LOGIN':\n            return {\n                ...state,\n                userInfo: action.payload\n            };\n        case 'USER_LOGOUT':\n            return {\n                ...state,\n                userInfo: null\n            };\n        default:\n            return state;\n    }\n}\nfunction StoreProvider(props) {\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/dennyzhong/Desktop/Dutao Web/Dutao-Classified-Dubai-Nextjs-AWS-React/lib/Store.js\",\n        lineNumber: 37,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvU3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsRUFBbUM7QUFDbkMsRUFBb0Y7QUFDcEYsRUFBeUc7QUFDekcsRUFBNkM7QUFHZjtBQUNtQjtBQUcxQyxLQUFLLENBQUNHLEtBQUssaUJBQUdGLG9EQUFhO0FBRWxDLEtBQUssQ0FBQ0csWUFBWSxHQUFHLENBQUM7SUFDcEJDLFFBQVEsRUFBRUwsbURBQVcsQ0FBQyxDQUFVLGFBQzVCTyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNULG1EQUFXLENBQUMsQ0FBVSxlQUNoRCxJQUFJO0FBQ1YsQ0FBQztTQUVRVSxPQUFPLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFLENBQUM7SUFDL0IsTUFBTSxDQUFFQSxNQUFNLENBQUNDLElBQUk7UUFDakIsSUFBSSxDQUFDLENBQVk7WUFDZixNQUFNLENBQUMsQ0FBQzttQkFBSUYsS0FBSztnQkFBRU4sUUFBUSxFQUFFTyxNQUFNLENBQUNFLE9BQU87WUFBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxDQUFhO1lBQ2hCLE1BQU0sQ0FBQyxDQUFDO21CQUNISCxLQUFLO2dCQUNSTixRQUFRLEVBQUUsSUFBSTtZQUNoQixDQUFDOztZQUdELE1BQU0sQ0FBQ00sS0FBSzs7QUFFbEIsQ0FBQztBQUVNLFNBQVNJLGFBQWEsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDcEMsS0FBSyxNQUFFTCxLQUFLLE1BQUVNLFFBQVEsTUFBSWYsaURBQVUsQ0FBQ1EsT0FBTyxFQUFFTixZQUFZO0lBQzFELEtBQUssQ0FBQ2MsS0FBSyxHQUFHLENBQUM7UUFBQ1AsS0FBSztRQUFFTSxRQUFRO0lBQUMsQ0FBQztJQUNqQyxNQUFNLDZFQUFFZCxLQUFLLENBQUNnQixRQUFRO1FBQUNELEtBQUssRUFBRUEsS0FBSztrQkFBR0YsS0FBSyxDQUFDSSxRQUFROzs7Ozs7QUFDdEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9TdG9yZS5qcz9kMTRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG4vLyBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggcmV0cmVpdmluZyBkYXRhIGZyb20ganMtY29va2llLi4uIFJldmlzZWQgc3RvcmFnZSBpcyBpbiBcbi8vICAgbG9jYWxzdG9yYWdlIC4gU3RhbmRhcmQgQ2FsbGluZyB2YXJpYWJsZSBpcyBzdG9yZS4uIGJ1dCBhcyBpdCBtYXkgcmFpc2UgY29uZmxpY3RzIHdpdGggdGhlIGZpbGUtbmFtZVxuLy8gICB3ZSBhcmUgdXNpbmcgdGhlIG5hbWUgYXMgQ29va2llcyBmb3Igbm93XG5cblxuaW1wb3J0IENvb2tpZXMgZnJvbSAnc3RvcmUtanMnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlckluZm86IENvb2tpZXMuZ2V0KCd1c2VySW5mbycpXG4gICAgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KENvb2tpZXMuZ2V0KCd1c2VySW5mbycpKSlcbiAgICA6IG51bGwsXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1VTRVJfTE9HSU4nOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJJbmZvOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgJ1VTRVJfTE9HT1VUJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VySW5mbzogbnVsbFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JlUHJvdmlkZXIocHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2ggfTtcbiAgcmV0dXJuIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17dmFsdWV9Pntwcm9wcy5jaGlsZHJlbn08L1N0b3JlLlByb3ZpZGVyPjtcbn0iXSwibmFtZXMiOlsiQ29va2llcyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJ1c2VySW5mbyIsImdldCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiU3RvcmVQcm92aWRlciIsInByb3BzIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/Store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Store */ \"./lib/Store.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_Store__WEBPACK_IMPORTED_MODULE_2__.StoreProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/dennyzhong/Desktop/Dutao Web/Dutao-Classified-Dubai-Nextjs-AWS-React/pages/_app.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/dennyzhong/Desktop/Dutao Web/Dutao-Classified-Dubai-Nextjs-AWS-React/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dennyzhong/Desktop/Dutao Web/Dutao-Classified-Dubai-Nextjs-AWS-React/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkI7QUFDZTtTQUVuQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSw2RUFDREMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBYzs4RkFDMUJMLHFEQUFhO2tHQUNURSxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXBDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IHsgU3RvcmVQcm92aWRlciB9IGZyb20gJy4uL2xpYi9TdG9yZSc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKCAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgd3JhcHBlclwiPlxuICAgICAgICA8U3RvcmVQcm92aWRlcj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9TdG9yZVByb3ZpZGVyPlxuICAgICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiU3RvcmVQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("store-js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();