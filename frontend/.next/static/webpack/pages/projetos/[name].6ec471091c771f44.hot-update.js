"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projetos/[name]",{

/***/ "./pages/projetos/[name].js":
/*!**********************************!*\
  !*** ./pages/projetos/[name].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./pages/components/Navbar.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Projeto() {\n    var thisIsReady = function thisIsReady() {\n        setReady(true);\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var detailName = router.query.name;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), detail = ref[0], setDetail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), images = ref1[0], setImages = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), ready = ref2[0], setReady = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getProject();\n    }, []);\n    var getProject = function() {\n        var _ref = _asyncToGenerator(_home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, data, imagesResponse, dataImages;\n            return _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"http://127.0.0.1:8000/api/projects/name/\".concat(detailName));\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        data = _ctx.sent;\n                        _ctx.next = 8;\n                        return setDetail(data);\n                    case 8:\n                        _ctx.next = 10;\n                        return fetch(\"http://127.0.0.1:8000/api/images/\".concat(detail.id));\n                    case 10:\n                        imagesResponse = _ctx.sent;\n                        _ctx.next = 13;\n                        return imagesResponse.json();\n                    case 13:\n                        dataImages = _ctx.sent;\n                        _ctx.next = 16;\n                        return setImages(dataImages);\n                    case 16:\n                        _ctx.next = 18;\n                        return thisIsReady();\n                    case 18:\n                        console.log(images);\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProject() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-bodyColor\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            ready === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full flex flex-col min-h-screen justify-around p-28\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        className: \"text-center w-full text-5xl\",\n                        children: detail.name\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-full text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-2xl\",\n                                children: \"Detalhes:\"\n                            }, void 0, false, {\n                                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"w-full text-center text-base\",\n                                children: detail.description\n                            }, void 0, false, {\n                                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: detail.image,\n                        alt: detail.name,\n                        className: \"group-hover:scale-125 ease-in duration-200 h-auto w-1/3 rounded-lg\",\n                        width: 600,\n                        height: 450,\n                        quality: \"90\",\n                        loading: \"eager\",\n                        layout: \"fixed\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-evenly h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce200\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full animate-bounce400\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce600\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce800\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full animate-bounce400\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce600\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full animate-bounce400\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce200\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Projeto, \"FcjA9w1xHqZ7J8QmH/U1VMHXpEo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Projeto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projeto);\nvar _c;\n$RefreshReg$(_c, \"Projeto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7b0JBQ0UsaUJBRU4sOERBQUNaLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw4QkFBOEI7O2tDQUN6Qyw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGlFQUFrRTs7Ozs7NEJBQVE7a0NBQ3pGLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsb0VBQXFFOzs7Ozs0QkFBTztrQ0FDM0YsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQywrREFBZ0U7Ozs7OzRCQUFRO2tDQUN2Riw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLG9FQUFxRTs7Ozs7NEJBQVE7a0NBQzVGLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsb0VBQXFFOzs7Ozs0QkFBTztrQ0FDM0YsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQywrREFBZ0U7Ozs7OzRCQUFRO2tDQUN2Riw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLG9FQUFxRTs7Ozs7NEJBQVE7a0NBQzVGLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsK0RBQWdFOzs7Ozs0QkFBUTtrQ0FDdkYsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxvRUFBcUU7Ozs7OzRCQUFPO2tDQUMzRiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGlFQUFrRTs7Ozs7NEJBQVE7Ozs7OztvQkFDdkY7Ozs7OztZQUtKLENBQ1A7Q0FDRjtHQXRFUXZCLE9BQU87O1FBRUNMLGtEQUFTOzs7QUFGakJLLEtBQUFBLE9BQU87QUF3RWhCLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2pldG9zL1tuYW1lXS5qcz9mMmFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5cblxuZnVuY3Rpb24gUHJvamV0bygpIHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBkZXRhaWxOYW1lID0gcm91dGVyLnF1ZXJ5Lm5hbWVcbiAgY29uc3QgW2RldGFpbCwgc2V0RGV0YWlsXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtyZWFkeSwgc2V0UmVhZHldID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuXG4gIGZ1bmN0aW9uIHRoaXNJc1JlYWR5KCl7XG4gICAgc2V0UmVhZHkodHJ1ZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UHJvamVjdCgpXG4gIH0sW10pXG5cblxuICBsZXQgZ2V0UHJvamVjdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3Byb2plY3RzL25hbWUvJHtkZXRhaWxOYW1lfWApXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgYXdhaXQgc2V0RGV0YWlsKGRhdGEpXG4gICAgICBsZXQgaW1hZ2VzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9pbWFnZXMvJHtkZXRhaWwuaWR9YClcbiAgICAgIGxldCBkYXRhSW1hZ2VzID0gYXdhaXQgaW1hZ2VzUmVzcG9uc2UuanNvbigpXG4gICAgICBhd2FpdCBzZXRJbWFnZXMoZGF0YUltYWdlcylcbiAgICAgIGF3YWl0IHRoaXNJc1JlYWR5KClcbiAgICAgIGNvbnNvbGUubG9nKGltYWdlcylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ib2R5Q29sb3JcIj5cbiAgICAgIDxOYXZiYXIvPlxuICAgICAge3JlYWR5PT09KHRydWUpP1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBqdXN0aWZ5LWFyb3VuZCBwLTI4XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHctZnVsbCB0ZXh0LTV4bFwiPlxuICAgICAgICAgICAge2RldGFpbC5uYW1lfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+RGV0YWxoZXM6PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHRleHQtYmFzZVwiPntkZXRhaWwuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtkZXRhaWwuaW1hZ2V9IGFsdD17ZGV0YWlsLm5hbWV9IGNsYXNzTmFtZT1cImdyb3VwLWhvdmVyOnNjYWxlLTEyNSBlYXNlLWluIGR1cmF0aW9uLTIwMCBoLWF1dG8gdy0xLzMgcm91bmRlZC1sZ1wiIHdpZHRoPXs2MDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezQ1MH1cbiAgICAgICAgICAgIHF1YWxpdHk9XCI5MFwiXG4gICAgICAgICAgICBsb2FkaW5nPVwiZWFnZXJcIlxuICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxuXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1ldmVubHkgaC1zY3JlZW4nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIG1yLTEgYW5pbWF0ZS1ib3VuY2UnID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBtci0xIGFuaW1hdGUtYm91bmNlMjAwJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBhbmltYXRlLWJvdW5jZTQwMCcgPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIG1yLTEgYW5pbWF0ZS1ib3VuY2U2MDAnID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBtci0xIGFuaW1hdGUtYm91bmNlODAwJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBhbmltYXRlLWJvdW5jZTQwMCcgPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIG1yLTEgYW5pbWF0ZS1ib3VuY2U2MDAnID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBhbmltYXRlLWJvdW5jZTQwMCcgPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIG1yLTEgYW5pbWF0ZS1ib3VuY2UyMDAnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIG1yLTEgYW5pbWF0ZS1ib3VuY2UnID48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIH1cblxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamV0b1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2YmFyIiwiSW1hZ2UiLCJQcm9qZXRvIiwidGhpc0lzUmVhZHkiLCJzZXRSZWFkeSIsInJvdXRlciIsImRldGFpbE5hbWUiLCJxdWVyeSIsIm5hbWUiLCJkZXRhaWwiLCJzZXREZXRhaWwiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJyZWFkeSIsImdldFByb2plY3QiLCJyZXNwb25zZSIsImRhdGEiLCJpbWFnZXNSZXNwb25zZSIsImRhdGFJbWFnZXMiLCJmZXRjaCIsImpzb24iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJkZXNjcmlwdGlvbiIsInNyYyIsImltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJxdWFsaXR5IiwibG9hZGluZyIsImxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projetos/[name].js\n");

/***/ })

});