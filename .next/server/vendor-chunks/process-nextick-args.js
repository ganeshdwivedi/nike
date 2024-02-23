"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/process-nextick-args";
exports.ids = ["vendor-chunks/process-nextick-args"];
exports.modules = {

/***/ "(ssr)/./node_modules/process-nextick-args/index.js":
/*!****************************************************!*\
  !*** ./node_modules/process-nextick-args/index.js ***!
  \****************************************************/
/***/ ((module) => {

eval("\nif (typeof process === \"undefined\" || !process.version || process.version.indexOf(\"v0.\") === 0 || process.version.indexOf(\"v1.\") === 0 && process.version.indexOf(\"v1.8.\") !== 0) {\n    module.exports = {\n        nextTick: nextTick\n    };\n} else {\n    module.exports = process;\n}\nfunction nextTick(fn, arg1, arg2, arg3) {\n    if (typeof fn !== \"function\") {\n        throw new TypeError('\"callback\" argument must be a function');\n    }\n    var len = arguments.length;\n    var args, i;\n    switch(len){\n        case 0:\n        case 1:\n            return process.nextTick(fn);\n        case 2:\n            return process.nextTick(function afterTickOne() {\n                fn.call(null, arg1);\n            });\n        case 3:\n            return process.nextTick(function afterTickTwo() {\n                fn.call(null, arg1, arg2);\n            });\n        case 4:\n            return process.nextTick(function afterTickThree() {\n                fn.call(null, arg1, arg2, arg3);\n            });\n        default:\n            args = new Array(len - 1);\n            i = 0;\n            while(i < args.length){\n                args[i++] = arguments[i];\n            }\n            return process.nextTick(function afterTick() {\n                fn.apply(null, args);\n            });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy1uZXh0aWNrLWFyZ3MvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJLE9BQU9BLFlBQVksZUFDbkIsQ0FBQ0EsUUFBUUMsT0FBTyxJQUNoQkQsUUFBUUMsT0FBTyxDQUFDQyxPQUFPLENBQUMsV0FBVyxLQUNuQ0YsUUFBUUMsT0FBTyxDQUFDQyxPQUFPLENBQUMsV0FBVyxLQUFLRixRQUFRQyxPQUFPLENBQUNDLE9BQU8sQ0FBQyxhQUFhLEdBQUc7SUFDbEZDLE9BQU9DLE9BQU8sR0FBRztRQUFFQyxVQUFVQTtJQUFTO0FBQ3hDLE9BQU87SUFDTEYsT0FBT0MsT0FBTyxHQUFHSjtBQUNuQjtBQUVBLFNBQVNLLFNBQVNDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7SUFDcEMsSUFBSSxPQUFPSCxPQUFPLFlBQVk7UUFDNUIsTUFBTSxJQUFJSSxVQUFVO0lBQ3RCO0lBQ0EsSUFBSUMsTUFBTUMsVUFBVUMsTUFBTTtJQUMxQixJQUFJQyxNQUFNQztJQUNWLE9BQVFKO1FBQ1IsS0FBSztRQUNMLEtBQUs7WUFDSCxPQUFPWCxRQUFRSyxRQUFRLENBQUNDO1FBQzFCLEtBQUs7WUFDSCxPQUFPTixRQUFRSyxRQUFRLENBQUMsU0FBU1c7Z0JBQy9CVixHQUFHVyxJQUFJLENBQUMsTUFBTVY7WUFDaEI7UUFDRixLQUFLO1lBQ0gsT0FBT1AsUUFBUUssUUFBUSxDQUFDLFNBQVNhO2dCQUMvQlosR0FBR1csSUFBSSxDQUFDLE1BQU1WLE1BQU1DO1lBQ3RCO1FBQ0YsS0FBSztZQUNILE9BQU9SLFFBQVFLLFFBQVEsQ0FBQyxTQUFTYztnQkFDL0JiLEdBQUdXLElBQUksQ0FBQyxNQUFNVixNQUFNQyxNQUFNQztZQUM1QjtRQUNGO1lBQ0VLLE9BQU8sSUFBSU0sTUFBTVQsTUFBTTtZQUN2QkksSUFBSTtZQUNKLE1BQU9BLElBQUlELEtBQUtELE1BQU0sQ0FBRTtnQkFDdEJDLElBQUksQ0FBQ0MsSUFBSSxHQUFHSCxTQUFTLENBQUNHLEVBQUU7WUFDMUI7WUFDQSxPQUFPZixRQUFRSyxRQUFRLENBQUMsU0FBU2dCO2dCQUMvQmYsR0FBR2dCLEtBQUssQ0FBQyxNQUFNUjtZQUNqQjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWtlLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MtbmV4dGljay1hcmdzL2luZGV4LmpzP2ZjZTAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgIXByb2Nlc3MudmVyc2lvbiB8fFxuICAgIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MC4nKSA9PT0gMCB8fFxuICAgIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MS4nKSA9PT0gMCAmJiBwcm9jZXNzLnZlcnNpb24uaW5kZXhPZigndjEuOC4nKSAhPT0gMCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHsgbmV4dFRpY2s6IG5leHRUaWNrIH07XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHByb2Nlc3Ncbn1cblxuZnVuY3Rpb24gbmV4dFRpY2soZm4sIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiY2FsbGJhY2tcIiBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGFyZ3MsIGk7XG4gIHN3aXRjaCAobGVuKSB7XG4gIGNhc2UgMDpcbiAgY2FzZSAxOlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZuKTtcbiAgY2FzZSAyOlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGlja09uZSgpIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgYXJnMSk7XG4gICAgfSk7XG4gIGNhc2UgMzpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2tUd28oKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIGFyZzEsIGFyZzIpO1xuICAgIH0pO1xuICBjYXNlIDQ6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrVGhyZWUoKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgIH0pO1xuICBkZWZhdWx0OlxuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBhcmdzLmxlbmd0aCkge1xuICAgICAgYXJnc1tpKytdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2soKSB7XG4gICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsicHJvY2VzcyIsInZlcnNpb24iLCJpbmRleE9mIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5leHRUaWNrIiwiZm4iLCJhcmcxIiwiYXJnMiIsImFyZzMiLCJUeXBlRXJyb3IiLCJsZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiaSIsImFmdGVyVGlja09uZSIsImNhbGwiLCJhZnRlclRpY2tUd28iLCJhZnRlclRpY2tUaHJlZSIsIkFycmF5IiwiYWZ0ZXJUaWNrIiwiYXBwbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/process-nextick-args/index.js\n");

/***/ })

};
;