/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/speedometer";
exports.ids = ["vendor-chunks/speedometer"];
exports.modules = {

/***/ "(ssr)/./node_modules/speedometer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/speedometer/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("var tick = 1;\nvar maxTick = 65535;\nvar resolution = 4;\nvar inc = function() {\n    tick = tick + 1 & maxTick;\n};\nvar timer = setInterval(inc, 1000 / resolution | 0);\nif (timer.unref) timer.unref();\nmodule.exports = function(seconds) {\n    var size = resolution * (seconds || 5);\n    var buffer = [\n        0\n    ];\n    var pointer = 1;\n    var last = tick - 1 & maxTick;\n    return function(delta) {\n        var dist = tick - last & maxTick;\n        if (dist > size) dist = size;\n        last = tick;\n        while(dist--){\n            if (pointer === size) pointer = 0;\n            buffer[pointer] = buffer[pointer === 0 ? size - 1 : pointer - 1];\n            pointer++;\n        }\n        if (delta) buffer[pointer - 1] += delta;\n        var top = buffer[pointer - 1];\n        var btm = buffer.length < size ? 0 : buffer[pointer === size ? 0 : pointer];\n        return buffer.length < resolution ? top : (top - btm) * resolution / buffer.length;\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWtlLy4vbm9kZV9tb2R1bGVzL3NwZWVkb21ldGVyL2luZGV4LmpzPzIzMzkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHRpY2sgPSAxXG52YXIgbWF4VGljayA9IDY1NTM1XG52YXIgcmVzb2x1dGlvbiA9IDRcbnZhciBpbmMgPSBmdW5jdGlvbiAoKSB7XG4gIHRpY2sgPSAodGljayArIDEpICYgbWF4VGlja1xufVxuXG52YXIgdGltZXIgPSBzZXRJbnRlcnZhbChpbmMsICgxMDAwIC8gcmVzb2x1dGlvbikgfCAwKVxuaWYgKHRpbWVyLnVucmVmKSB0aW1lci51bnJlZigpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlY29uZHMpIHtcbiAgdmFyIHNpemUgPSByZXNvbHV0aW9uICogKHNlY29uZHMgfHwgNSlcbiAgdmFyIGJ1ZmZlciA9IFswXVxuICB2YXIgcG9pbnRlciA9IDFcbiAgdmFyIGxhc3QgPSAodGljayAtIDEpICYgbWF4VGlja1xuXG4gIHJldHVybiBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICB2YXIgZGlzdCA9ICh0aWNrIC0gbGFzdCkgJiBtYXhUaWNrXG4gICAgaWYgKGRpc3QgPiBzaXplKSBkaXN0ID0gc2l6ZVxuICAgIGxhc3QgPSB0aWNrXG5cbiAgICB3aGlsZSAoZGlzdC0tKSB7XG4gICAgICBpZiAocG9pbnRlciA9PT0gc2l6ZSkgcG9pbnRlciA9IDBcbiAgICAgIGJ1ZmZlcltwb2ludGVyXSA9IGJ1ZmZlcltwb2ludGVyID09PSAwID8gc2l6ZSAtIDEgOiBwb2ludGVyIC0gMV1cbiAgICAgIHBvaW50ZXIrK1xuICAgIH1cblxuICAgIGlmIChkZWx0YSkgYnVmZmVyW3BvaW50ZXIgLSAxXSArPSBkZWx0YVxuXG4gICAgdmFyIHRvcCA9IGJ1ZmZlcltwb2ludGVyIC0gMV1cbiAgICB2YXIgYnRtID0gYnVmZmVyLmxlbmd0aCA8IHNpemUgPyAwIDogYnVmZmVyW3BvaW50ZXIgPT09IHNpemUgPyAwIDogcG9pbnRlcl1cblxuICAgIHJldHVybiBidWZmZXIubGVuZ3RoIDwgcmVzb2x1dGlvbiA/IHRvcCA6ICh0b3AgLSBidG0pICogcmVzb2x1dGlvbiAvIGJ1ZmZlci5sZW5ndGhcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRpY2siLCJtYXhUaWNrIiwicmVzb2x1dGlvbiIsImluYyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ1bnJlZiIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWNvbmRzIiwic2l6ZSIsImJ1ZmZlciIsInBvaW50ZXIiLCJsYXN0IiwiZGVsdGEiLCJkaXN0IiwidG9wIiwiYnRtIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxPQUFPO0FBQ1gsSUFBSUMsVUFBVTtBQUNkLElBQUlDLGFBQWE7QUFDakIsSUFBSUMsTUFBTTtJQUNSSCxPQUFPLEFBQUNBLE9BQU8sSUFBS0M7QUFDdEI7QUFFQSxJQUFJRyxRQUFRQyxZQUFZRixLQUFLLEFBQUMsT0FBT0QsYUFBYztBQUNuRCxJQUFJRSxNQUFNRSxLQUFLLEVBQUVGLE1BQU1FLEtBQUs7QUFFNUJDLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxPQUFPO0lBQ2hDLElBQUlDLE9BQU9SLGFBQWNPLENBQUFBLFdBQVcsQ0FBQTtJQUNwQyxJQUFJRSxTQUFTO1FBQUM7S0FBRTtJQUNoQixJQUFJQyxVQUFVO0lBQ2QsSUFBSUMsT0FBTyxBQUFDYixPQUFPLElBQUtDO0lBRXhCLE9BQU8sU0FBVWEsS0FBSztRQUNwQixJQUFJQyxPQUFPLEFBQUNmLE9BQU9hLE9BQVFaO1FBQzNCLElBQUljLE9BQU9MLE1BQU1LLE9BQU9MO1FBQ3hCRyxPQUFPYjtRQUVQLE1BQU9lLE9BQVE7WUFDYixJQUFJSCxZQUFZRixNQUFNRSxVQUFVO1lBQ2hDRCxNQUFNLENBQUNDLFFBQVEsR0FBR0QsTUFBTSxDQUFDQyxZQUFZLElBQUlGLE9BQU8sSUFBSUUsVUFBVSxFQUFFO1lBQ2hFQTtRQUNGO1FBRUEsSUFBSUUsT0FBT0gsTUFBTSxDQUFDQyxVQUFVLEVBQUUsSUFBSUU7UUFFbEMsSUFBSUUsTUFBTUwsTUFBTSxDQUFDQyxVQUFVLEVBQUU7UUFDN0IsSUFBSUssTUFBTU4sT0FBT08sTUFBTSxHQUFHUixPQUFPLElBQUlDLE1BQU0sQ0FBQ0MsWUFBWUYsT0FBTyxJQUFJRSxRQUFRO1FBRTNFLE9BQU9ELE9BQU9PLE1BQU0sR0FBR2hCLGFBQWFjLE1BQU0sQUFBQ0EsQ0FBQUEsTUFBTUMsR0FBRSxJQUFLZixhQUFhUyxPQUFPTyxNQUFNO0lBQ3BGO0FBQ0YiLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3BlZWRvbWV0ZXIvaW5kZXguanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/speedometer/index.js\n");

/***/ })

};
;