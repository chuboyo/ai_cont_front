"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/copy-anything";
exports.ids = ["vendor-chunks/copy-anything"];
exports.modules = {

/***/ "(ssr)/./node_modules/copy-anything/dist/cjs/index.cjs":
/*!*******************************************************!*\
  !*** ./node_modules/copy-anything/dist/cjs/index.cjs ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nconst isWhat = __webpack_require__(/*! is-what */ \"(ssr)/./node_modules/is-what/dist/cjs/index.cjs\");\n\nfunction assignProp(carry, key, newVal, originalObject, includeNonenumerable) {\n  const propType = {}.propertyIsEnumerable.call(originalObject, key) ? \"enumerable\" : \"nonenumerable\";\n  if (propType === \"enumerable\")\n    carry[key] = newVal;\n  if (includeNonenumerable && propType === \"nonenumerable\") {\n    Object.defineProperty(carry, key, {\n      value: newVal,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    });\n  }\n}\nfunction copy(target, options = {}) {\n  if (isWhat.isArray(target)) {\n    return target.map((item) => copy(item, options));\n  }\n  if (!isWhat.isPlainObject(target)) {\n    return target;\n  }\n  const props = Object.getOwnPropertyNames(target);\n  const symbols = Object.getOwnPropertySymbols(target);\n  return [...props, ...symbols].reduce((carry, key) => {\n    if (isWhat.isArray(options.props) && !options.props.includes(key)) {\n      return carry;\n    }\n    const val = target[key];\n    const newVal = copy(val, options);\n    assignProp(carry, key, newVal, target, options.nonenumerable);\n    return carry;\n  }, {});\n}\n\nexports.copy = copy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29weS1hbnl0aGluZy9kaXN0L2Nqcy9pbmRleC5janMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsZUFBZSxtQkFBTyxDQUFDLGdFQUFTOztBQUVoQztBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY29udC1mcm9udC1uZXh0Ly4vbm9kZV9tb2R1bGVzL2NvcHktYW55dGhpbmcvZGlzdC9janMvaW5kZXguY2pzP2I0ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpc1doYXQgPSByZXF1aXJlKCdpcy13aGF0Jyk7XG5cbmZ1bmN0aW9uIGFzc2lnblByb3AoY2FycnksIGtleSwgbmV3VmFsLCBvcmlnaW5hbE9iamVjdCwgaW5jbHVkZU5vbmVudW1lcmFibGUpIHtcbiAgY29uc3QgcHJvcFR5cGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9yaWdpbmFsT2JqZWN0LCBrZXkpID8gXCJlbnVtZXJhYmxlXCIgOiBcIm5vbmVudW1lcmFibGVcIjtcbiAgaWYgKHByb3BUeXBlID09PSBcImVudW1lcmFibGVcIilcbiAgICBjYXJyeVtrZXldID0gbmV3VmFsO1xuICBpZiAoaW5jbHVkZU5vbmVudW1lcmFibGUgJiYgcHJvcFR5cGUgPT09IFwibm9uZW51bWVyYWJsZVwiKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhcnJ5LCBrZXksIHtcbiAgICAgIHZhbHVlOiBuZXdWYWwsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNvcHkodGFyZ2V0LCBvcHRpb25zID0ge30pIHtcbiAgaWYgKGlzV2hhdC5pc0FycmF5KHRhcmdldCkpIHtcbiAgICByZXR1cm4gdGFyZ2V0Lm1hcCgoaXRlbSkgPT4gY29weShpdGVtLCBvcHRpb25zKSk7XG4gIH1cbiAgaWYgKCFpc1doYXQuaXNQbGFpbk9iamVjdCh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBjb25zdCBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIGNvbnN0IHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCk7XG4gIHJldHVybiBbLi4ucHJvcHMsIC4uLnN5bWJvbHNdLnJlZHVjZSgoY2FycnksIGtleSkgPT4ge1xuICAgIGlmIChpc1doYXQuaXNBcnJheShvcHRpb25zLnByb3BzKSAmJiAhb3B0aW9ucy5wcm9wcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2Fycnk7XG4gICAgfVxuICAgIGNvbnN0IHZhbCA9IHRhcmdldFtrZXldO1xuICAgIGNvbnN0IG5ld1ZhbCA9IGNvcHkodmFsLCBvcHRpb25zKTtcbiAgICBhc3NpZ25Qcm9wKGNhcnJ5LCBrZXksIG5ld1ZhbCwgdGFyZ2V0LCBvcHRpb25zLm5vbmVudW1lcmFibGUpO1xuICAgIHJldHVybiBjYXJyeTtcbiAgfSwge30pO1xufVxuXG5leHBvcnRzLmNvcHkgPSBjb3B5O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/copy-anything/dist/cjs/index.cjs\n");

/***/ })

};
;