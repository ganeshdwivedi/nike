/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/core-util-is";
exports.ids = ["vendor-chunks/core-util-is"];
exports.modules = {

/***/ "(ssr)/./node_modules/core-util-is/lib/util.js":
/*!***********************************************!*\
  !*** ./node_modules/core-util-is/lib/util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n// NOTE: These type checking functions intentionally don't use `instanceof`\n// because it is fragile and can be easily faked with `Object.create()`.\nfunction isArray(arg) {\n    if (Array.isArray) {\n        return Array.isArray(arg);\n    }\n    return objectToString(arg) === \"[object Array]\";\n}\nexports.isArray = isArray;\nfunction isBoolean(arg) {\n    return typeof arg === \"boolean\";\n}\nexports.isBoolean = isBoolean;\nfunction isNull(arg) {\n    return arg === null;\n}\nexports.isNull = isNull;\nfunction isNullOrUndefined(arg) {\n    return arg == null;\n}\nexports.isNullOrUndefined = isNullOrUndefined;\nfunction isNumber(arg) {\n    return typeof arg === \"number\";\n}\nexports.isNumber = isNumber;\nfunction isString(arg) {\n    return typeof arg === \"string\";\n}\nexports.isString = isString;\nfunction isSymbol(arg) {\n    return typeof arg === \"symbol\";\n}\nexports.isSymbol = isSymbol;\nfunction isUndefined(arg) {\n    return arg === void 0;\n}\nexports.isUndefined = isUndefined;\nfunction isRegExp(re) {\n    return objectToString(re) === \"[object RegExp]\";\n}\nexports.isRegExp = isRegExp;\nfunction isObject(arg) {\n    return typeof arg === \"object\" && arg !== null;\n}\nexports.isObject = isObject;\nfunction isDate(d) {\n    return objectToString(d) === \"[object Date]\";\n}\nexports.isDate = isDate;\nfunction isError(e) {\n    return objectToString(e) === \"[object Error]\" || e instanceof Error;\n}\nexports.isError = isError;\nfunction isFunction(arg) {\n    return typeof arg === \"function\";\n}\nexports.isFunction = isFunction;\nfunction isPrimitive(arg) {\n    return arg === null || typeof arg === \"boolean\" || typeof arg === \"number\" || typeof arg === \"string\" || typeof arg === \"symbol\" || // ES6 symbol\n    typeof arg === \"undefined\";\n}\nexports.isPrimitive = isPrimitive;\nexports.isBuffer = __webpack_require__(/*! buffer */ \"buffer\").Buffer.isBuffer;\nfunction objectToString(o) {\n    return Object.prototype.toString.call(o);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29yZS11dGlsLWlzL2xpYi91dGlsLmpzIiwibWFwcGluZ3MiOiJBQUFBLHNEQUFzRDtBQUN0RCxFQUFFO0FBQ0YsMEVBQTBFO0FBQzFFLGdFQUFnRTtBQUNoRSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxxRUFBcUU7QUFDckUsd0JBQXdCO0FBQ3hCLEVBQUU7QUFDRiwwRUFBMEU7QUFDMUUseURBQXlEO0FBQ3pELEVBQUU7QUFDRiwwRUFBMEU7QUFDMUUsNkRBQTZEO0FBQzdELDRFQUE0RTtBQUM1RSwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBQ3hFLDRFQUE0RTtBQUM1RSx5Q0FBeUM7QUFFekMsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSxTQUFTQSxRQUFRQyxHQUFHO0lBQ2xCLElBQUlDLE1BQU1GLE9BQU8sRUFBRTtRQUNqQixPQUFPRSxNQUFNRixPQUFPLENBQUNDO0lBQ3ZCO0lBQ0EsT0FBT0UsZUFBZUYsU0FBUztBQUNqQztBQUNBRyxlQUFlLEdBQUdKO0FBRWxCLFNBQVNLLFVBQVVKLEdBQUc7SUFDcEIsT0FBTyxPQUFPQSxRQUFRO0FBQ3hCO0FBQ0FHLGlCQUFpQixHQUFHQztBQUVwQixTQUFTQyxPQUFPTCxHQUFHO0lBQ2pCLE9BQU9BLFFBQVE7QUFDakI7QUFDQUcsY0FBYyxHQUFHRTtBQUVqQixTQUFTQyxrQkFBa0JOLEdBQUc7SUFDNUIsT0FBT0EsT0FBTztBQUNoQjtBQUNBRyx5QkFBeUIsR0FBR0c7QUFFNUIsU0FBU0MsU0FBU1AsR0FBRztJQUNuQixPQUFPLE9BQU9BLFFBQVE7QUFDeEI7QUFDQUcsZ0JBQWdCLEdBQUdJO0FBRW5CLFNBQVNDLFNBQVNSLEdBQUc7SUFDbkIsT0FBTyxPQUFPQSxRQUFRO0FBQ3hCO0FBQ0FHLGdCQUFnQixHQUFHSztBQUVuQixTQUFTQyxTQUFTVCxHQUFHO0lBQ25CLE9BQU8sT0FBT0EsUUFBUTtBQUN4QjtBQUNBRyxnQkFBZ0IsR0FBR007QUFFbkIsU0FBU0MsWUFBWVYsR0FBRztJQUN0QixPQUFPQSxRQUFRLEtBQUs7QUFDdEI7QUFDQUcsbUJBQW1CLEdBQUdPO0FBRXRCLFNBQVNDLFNBQVNDLEVBQUU7SUFDbEIsT0FBT1YsZUFBZVUsUUFBUTtBQUNoQztBQUNBVCxnQkFBZ0IsR0FBR1E7QUFFbkIsU0FBU0UsU0FBU2IsR0FBRztJQUNuQixPQUFPLE9BQU9BLFFBQVEsWUFBWUEsUUFBUTtBQUM1QztBQUNBRyxnQkFBZ0IsR0FBR1U7QUFFbkIsU0FBU0MsT0FBT0MsQ0FBQztJQUNmLE9BQU9iLGVBQWVhLE9BQU87QUFDL0I7QUFDQVosY0FBYyxHQUFHVztBQUVqQixTQUFTRSxRQUFRQyxDQUFDO0lBQ2hCLE9BQVFmLGVBQWVlLE9BQU8sb0JBQW9CQSxhQUFhQztBQUNqRTtBQUNBZixlQUFlLEdBQUdhO0FBRWxCLFNBQVNHLFdBQVduQixHQUFHO0lBQ3JCLE9BQU8sT0FBT0EsUUFBUTtBQUN4QjtBQUNBRyxrQkFBa0IsR0FBR2dCO0FBRXJCLFNBQVNDLFlBQVlwQixHQUFHO0lBQ3RCLE9BQU9BLFFBQVEsUUFDUixPQUFPQSxRQUFRLGFBQ2YsT0FBT0EsUUFBUSxZQUNmLE9BQU9BLFFBQVEsWUFDZixPQUFPQSxRQUFRLFlBQWEsYUFBYTtJQUN6QyxPQUFPQSxRQUFRO0FBQ3hCO0FBQ0FHLG1CQUFtQixHQUFHaUI7QUFFdEJqQiw4RUFBb0Q7QUFFcEQsU0FBU0QsZUFBZXNCLENBQUM7SUFDdkIsT0FBT0MsT0FBT0MsU0FBUyxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0o7QUFDeEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWtlLy4vbm9kZV9tb2R1bGVzL2NvcmUtdXRpbC1pcy9saWIvdXRpbC5qcz9lYmE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuXG5mdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICBpZiAoQXJyYXkuaXNBcnJheSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFyZyk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5CdWZmZXIuaXNCdWZmZXI7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cbiJdLCJuYW1lcyI6WyJpc0FycmF5IiwiYXJnIiwiQXJyYXkiLCJvYmplY3RUb1N0cmluZyIsImV4cG9ydHMiLCJpc0Jvb2xlYW4iLCJpc051bGwiLCJpc051bGxPclVuZGVmaW5lZCIsImlzTnVtYmVyIiwiaXNTdHJpbmciLCJpc1N5bWJvbCIsImlzVW5kZWZpbmVkIiwiaXNSZWdFeHAiLCJyZSIsImlzT2JqZWN0IiwiaXNEYXRlIiwiZCIsImlzRXJyb3IiLCJlIiwiRXJyb3IiLCJpc0Z1bmN0aW9uIiwiaXNQcmltaXRpdmUiLCJpc0J1ZmZlciIsInJlcXVpcmUiLCJCdWZmZXIiLCJvIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/core-util-is/lib/util.js\n");

/***/ })

};
;