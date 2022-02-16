"use strict";
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
exports.id = "pages/api/_pages/profile";
exports.ids = ["pages/api/_pages/profile"];
exports.modules = {

/***/ "(api)/./pages/api/_pages/profile.ts":
/*!*************************************!*\
  !*** ./pages/api/_pages/profile.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nemix_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nemix/wrapper */ \"(api)/../nemix/wrapper.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,nemix_wrapper__WEBPACK_IMPORTED_MODULE_0__.wrap)({\n    loader: async ()=>{\n        return {\n            \"hello\": \"world\"\n        };\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvX3BhZ2VzL3Byb2ZpbGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0M7QUFFcEMsaUVBQWVBLG1EQUFJLENBQUMsQ0FBQztJQUNuQkMsTUFBTSxZQUFjLENBQUM7UUFDbkIsTUFBTSxDQUFDLENBQUM7WUFBQSxDQUFPLFFBQUUsQ0FBTztRQUFBLENBQUM7SUFDM0IsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVtaXgtZXhhbXBsZS8uL3BhZ2VzL2FwaS9fcGFnZXMvcHJvZmlsZS50cz82MTBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdyYXAgfSBmcm9tIFwibmVtaXgvd3JhcHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwKHtcbiAgbG9hZGVyOiBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIHtcImhlbGxvXCI6IFwid29ybGRcIn07XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIndyYXAiLCJsb2FkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/_pages/profile.ts\n");

/***/ }),

/***/ "(api)/../nemix/wrapper.ts":
/*!***************************!*\
  !*** ../nemix/wrapper.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrap\": () => (/* binding */ wrap)\n/* harmony export */ });\nconst wrap = (operations)=>{\n    const ops = Object.keys(operations);\n    const opsString = ops.join(\" | \");\n    return async (req, res)=>{\n        const opHeader = req.headers[\"op\"];\n        if (!opHeader) {\n            res.status(400).json({\n                error: \"op header needs to be specified\"\n            });\n            return;\n        }\n        if (Array.isArray(opHeader)) {\n            res.status(400).json({\n                error: \"accepts only one op header\"\n            });\n            return;\n        }\n        if (!operations[opHeader]) {\n            res.status(400).json({\n                error: `Loader ${operations[opHeader]} cannot be found. Choose one of those [${opsString}]`\n            });\n            return;\n        }\n        try {\n            const jsonValue = await operations[opHeader]({\n                req\n            });\n            if (jsonValue) {\n                res.status(200).json(jsonValue);\n            } else {\n                res.status(200).send(null);\n            }\n            return;\n        } catch (e) {\n            console.error(e);\n            res.status(500).json({\n                error: e\n            });\n            return;\n        }\n    };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi4vbmVtaXgvd3JhcHBlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBdUJBLEtBQUssQ0FBQ0EsSUFBSSxJQUFhQyxVQUFVLEdBQUssQ0FBQztJQUNyQyxLQUFLLENBQUNDLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNILFVBQVU7SUFDbEMsS0FBSyxDQUFDSSxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDLENBQUs7SUFFaEMsTUFBTSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO1FBQzFCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHRixHQUFHLENBQUNHLE9BQU8sQ0FBQyxDQUFJO1FBRWpDLEVBQUUsR0FBR0QsUUFBUSxFQUFFLENBQUM7WUFDZEQsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsS0FBSyxFQUFFLENBQWlDO1lBQUMsQ0FBQztZQUNqRSxNQUFNO1FBQ1IsQ0FBQztRQUVELEVBQUUsRUFBRUMsS0FBSyxDQUFDQyxPQUFPLENBQUNOLFFBQVEsR0FBRyxDQUFDO1lBQzVCRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUFDQyxLQUFLLEVBQUUsQ0FBNEI7WUFBQyxDQUFDO1lBQzVELE1BQU07UUFDUixDQUFDO1FBRUQsRUFBRSxHQUFHWixVQUFVLENBQUNRLFFBQVEsR0FBRyxDQUFDO1lBQzFCRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUNwQkMsS0FBSyxHQUFHLE9BQU8sRUFBRVosVUFBVSxDQUFDUSxRQUFRLEVBQUUsdUNBQXVDLEVBQUVKLFNBQVMsQ0FBQyxDQUFDO1lBQzVGLENBQUM7WUFDRCxNQUFNO1FBQ1IsQ0FBQztRQUVELEdBQUcsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDVyxTQUFTLEdBQUcsS0FBSyxDQUFDZixVQUFVLENBQUNRLFFBQVEsRUFBRSxDQUFDO2dCQUFDRixHQUFHO1lBQUMsQ0FBQztZQUVwRCxFQUFFLEVBQUVTLFNBQVMsRUFBRSxDQUFDO2dCQUNkUixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0ksU0FBUztZQUNoQyxDQUFDLE1BQU0sQ0FBQztnQkFDTlIsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFTSxJQUFJLENBQUMsSUFBSTtZQUMzQixDQUFDO1lBQ0QsTUFBTTtRQUNSLENBQUMsQ0FBQyxLQUFLLEVBQUVDLENBQUMsRUFBRSxDQUFDO1lBQ1hDLE9BQU8sQ0FBQ04sS0FBSyxDQUFDSyxDQUFDO1lBQ2ZWLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQUNDLEtBQUssRUFBRUssQ0FBQztZQUFDLENBQUM7WUFDakMsTUFBTTtRQUNSLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVtaXgtZXhhbXBsZS8uLi9uZW1peC93cmFwcGVyLnRzPzhjOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxudHlwZSBKU09OVmFsdWUgPVxuICB8IHN0cmluZ1xuICB8IG51bWJlclxuICB8IGJvb2xlYW5cbiAgfCB7IFt4OiBzdHJpbmddOiBKU09OVmFsdWUgfVxuICB8IEFycmF5PEpTT05WYWx1ZT47XG5cbnR5cGUgQ2FsbGJhY2sgPSAoeyByZXEgfTogeyByZXE6IE5leHRBcGlSZXF1ZXN0IH0pID0+IFByb21pc2U8SlNPTlZhbHVlIHwgdm9pZCB8IHVuZGVmaW5lZD47XG5cbnR5cGUgT3BlcmF0aW9ucyA9IHtcbiAgW2tleTogc3RyaW5nXTogQ2FsbGJhY2s7XG4gIGxvYWRlcjogQ2FsbGJhY2s7XG59O1xuXG50eXBlIFdyYXBwZXIgPSB7XG4gIChvcGVyYXRpb25zOiBPcGVyYXRpb25zKTogKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8YW55PlxuICApID0+IFByb21pc2U8dm9pZD47XG59O1xuXG5jb25zdCB3cmFwOiBXcmFwcGVyID0gKG9wZXJhdGlvbnMpID0+IHtcbiAgY29uc3Qgb3BzID0gT2JqZWN0LmtleXMob3BlcmF0aW9ucyk7XG4gIGNvbnN0IG9wc1N0cmluZyA9IG9wcy5qb2luKFwiIHwgXCIpO1xuXG4gIHJldHVybiBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBvcEhlYWRlciA9IHJlcS5oZWFkZXJzW1wib3BcIl07XG5cbiAgICBpZiAoIW9wSGVhZGVyKSB7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIm9wIGhlYWRlciBuZWVkcyB0byBiZSBzcGVjaWZpZWRcIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcEhlYWRlcikpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiYWNjZXB0cyBvbmx5IG9uZSBvcCBoZWFkZXJcIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW9wZXJhdGlvbnNbb3BIZWFkZXJdKSB7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICAgIGVycm9yOiBgTG9hZGVyICR7b3BlcmF0aW9uc1tvcEhlYWRlcl19IGNhbm5vdCBiZSBmb3VuZC4gQ2hvb3NlIG9uZSBvZiB0aG9zZSBbJHtvcHNTdHJpbmd9XWAsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QganNvblZhbHVlID0gYXdhaXQgb3BlcmF0aW9uc1tvcEhlYWRlcl0oeyByZXEgfSk7XG5cbiAgICAgIGlmIChqc29uVmFsdWUpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oanNvblZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKG51bGwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCB7IHdyYXAgfTtcbiJdLCJuYW1lcyI6WyJ3cmFwIiwib3BlcmF0aW9ucyIsIm9wcyIsIk9iamVjdCIsImtleXMiLCJvcHNTdHJpbmciLCJqb2luIiwicmVxIiwicmVzIiwib3BIZWFkZXIiLCJoZWFkZXJzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiQXJyYXkiLCJpc0FycmF5IiwianNvblZhbHVlIiwic2VuZCIsImUiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/../nemix/wrapper.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/_pages/profile.ts"));
module.exports = __webpack_exports__;

})();