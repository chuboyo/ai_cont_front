"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@ctrl";
exports.ids = ["vendor-chunks/@ctrl"];
exports.modules = {

/***/ "(ssr)/./node_modules/@ctrl/react-adsense/dist/adsense.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ctrl/react-adsense/dist/adsense.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Adsense = void 0;\nconst tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nconst react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nfunction Adsense(_a) {\n    var { className = '', style = { display: 'block' }, client, slot, layout = '', layoutKey = '', format = 'auto', responsive = 'false', pageLevelAds = false, adTest, children } = _a, rest = tslib_1.__rest(_a, [\"className\", \"style\", \"client\", \"slot\", \"layout\", \"layoutKey\", \"format\", \"responsive\", \"pageLevelAds\", \"adTest\", \"children\"]);\n    (0, react_1.useEffect)(() => {\n        const p = {};\n        if (pageLevelAds) {\n            p.google_ad_client = client;\n            p.enable_page_level_ads = true;\n        }\n        try {\n            if (typeof window === 'object') {\n                (window.adsbygoogle = window.adsbygoogle || []).push(p);\n            }\n        }\n        catch (_a) {\n            // Pass\n        }\n        // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return (react_1.default.createElement(\"ins\", Object.assign({ className: `adsbygoogle ${className}`, style: style, \"data-ad-client\": client, \"data-ad-slot\": slot, \"data-ad-layout\": layout, \"data-ad-layout-key\": layoutKey, \"data-ad-format\": format, \"data-full-width-responsive\": responsive, \"data-adtest\": adTest }, rest), children));\n}\nexports.Adsense = Adsense;\n//# sourceMappingURL=adsense.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGN0cmwvcmVhY3QtYWRzZW5zZS9kaXN0L2Fkc2Vuc2UuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZUFBZTtBQUNmLGdCQUFnQixtQkFBTyxDQUFDLHVEQUFPO0FBQy9CLHFDQUFxQyxtQkFBTyxDQUFDLHdHQUFPO0FBQ3BEO0FBQ0EsVUFBVSwwQkFBMEIsa0JBQWtCLDZIQUE2SDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUVBQWlFLDBCQUEwQixVQUFVLHVOQUF1TjtBQUM1VDtBQUNBLGVBQWU7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWNvbnQtZnJvbnQtbmV4dC8uL25vZGVfbW9kdWxlcy9AY3RybC9yZWFjdC1hZHNlbnNlL2Rpc3QvYWRzZW5zZS5qcz9kZGY4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BZHNlbnNlID0gdm9pZCAwO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IHJlYWN0XzEgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuZnVuY3Rpb24gQWRzZW5zZShfYSkge1xuICAgIHZhciB7IGNsYXNzTmFtZSA9ICcnLCBzdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJyB9LCBjbGllbnQsIHNsb3QsIGxheW91dCA9ICcnLCBsYXlvdXRLZXkgPSAnJywgZm9ybWF0ID0gJ2F1dG8nLCByZXNwb25zaXZlID0gJ2ZhbHNlJywgcGFnZUxldmVsQWRzID0gZmFsc2UsIGFkVGVzdCwgY2hpbGRyZW4gfSA9IF9hLCByZXN0ID0gdHNsaWJfMS5fX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwiY2xpZW50XCIsIFwic2xvdFwiLCBcImxheW91dFwiLCBcImxheW91dEtleVwiLCBcImZvcm1hdFwiLCBcInJlc3BvbnNpdmVcIiwgXCJwYWdlTGV2ZWxBZHNcIiwgXCJhZFRlc3RcIiwgXCJjaGlsZHJlblwiXSk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHAgPSB7fTtcbiAgICAgICAgaWYgKHBhZ2VMZXZlbEFkcykge1xuICAgICAgICAgICAgcC5nb29nbGVfYWRfY2xpZW50ID0gY2xpZW50O1xuICAgICAgICAgICAgcC5lbmFibGVfcGFnZV9sZXZlbF9hZHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAod2luZG93LmFkc2J5Z29vZ2xlID0gd2luZG93LmFkc2J5Z29vZ2xlIHx8IFtdKS5wdXNoKHApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgLy8gUGFzc1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImluc1wiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBgYWRzYnlnb29nbGUgJHtjbGFzc05hbWV9YCwgc3R5bGU6IHN0eWxlLCBcImRhdGEtYWQtY2xpZW50XCI6IGNsaWVudCwgXCJkYXRhLWFkLXNsb3RcIjogc2xvdCwgXCJkYXRhLWFkLWxheW91dFwiOiBsYXlvdXQsIFwiZGF0YS1hZC1sYXlvdXQta2V5XCI6IGxheW91dEtleSwgXCJkYXRhLWFkLWZvcm1hdFwiOiBmb3JtYXQsIFwiZGF0YS1mdWxsLXdpZHRoLXJlc3BvbnNpdmVcIjogcmVzcG9uc2l2ZSwgXCJkYXRhLWFkdGVzdFwiOiBhZFRlc3QgfSwgcmVzdCksIGNoaWxkcmVuKSk7XG59XG5leHBvcnRzLkFkc2Vuc2UgPSBBZHNlbnNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRzZW5zZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@ctrl/react-adsense/dist/adsense.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@ctrl/react-adsense/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ctrl/react-adsense/dist/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Adsense = void 0;\nvar adsense_1 = __webpack_require__(/*! ./adsense */ \"(ssr)/./node_modules/@ctrl/react-adsense/dist/adsense.js\");\nObject.defineProperty(exports, \"Adsense\", ({ enumerable: true, get: function () { return adsense_1.Adsense; } }));\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGN0cmwvcmVhY3QtYWRzZW5zZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZixnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBVztBQUNuQywyQ0FBMEMsRUFBRSxxQ0FBcUMsNkJBQTZCLEVBQUM7QUFDL0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1jb250LWZyb250LW5leHQvLi9ub2RlX21vZHVsZXMvQGN0cmwvcmVhY3QtYWRzZW5zZS9kaXN0L2luZGV4LmpzP2YwN2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFkc2Vuc2UgPSB2b2lkIDA7XG52YXIgYWRzZW5zZV8xID0gcmVxdWlyZShcIi4vYWRzZW5zZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkc2Vuc2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkc2Vuc2VfMS5BZHNlbnNlOyB9IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@ctrl/react-adsense/dist/index.js\n");

/***/ })

};
;