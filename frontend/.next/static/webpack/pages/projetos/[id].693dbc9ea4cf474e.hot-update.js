"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projetos/[id]",{

/***/ "./pages/projetos/[id].js":
/*!********************************!*\
  !*** ./pages/projetos/[id].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./pages/components/Navbar.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Projeto() {\n    var _this = this;\n    var thisIsReady = function thisIsReady() {\n        setReady(true);\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var detailId = router.query.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), detail = ref[0], setDetail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), images = ref1[0], setImages = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), ready = ref2[0], setReady = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getProject();\n        setTimeout(function() {\n            getImages();\n        }, [\n            1500\n        ]);\n        setTimeout(function() {\n            thisIsReady();\n        }, [\n            3000\n        ]);\n    }, []);\n    var getProject = function() {\n        var _ref = _asyncToGenerator(_home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, data;\n            return _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(detailId);\n                        _ctx.next = 3;\n                        return fetch(\"http://127.0.0.1:8000/api/projects/name/\".concat(detailId));\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        data = _ctx.sent;\n                        _ctx.next = 9;\n                        return setDetail(data);\n                    case 9:\n                        _ctx.next = 11;\n                        return console.log(detail);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProject() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getImages = function() {\n        var _ref = _asyncToGenerator(_home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, data;\n            return _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"http://127.0.0.1:8000/api/images/\".concat(detail.id));\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        data = _ctx.sent;\n                        _ctx.next = 8;\n                        return setImages(data);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getImages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-bodyColor\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            ready === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full flex flex-col min-h-screen justify-around p-28\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        className: \"text-center w-full text-5xl\",\n                        children: detail.name\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-full text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-2xl\",\n                                children: \"Detalhes:\"\n                            }, void 0, false, {\n                                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"w-full text-center text-base\",\n                                children: detail.description\n                            }, void 0, false, {\n                                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: detail.image,\n                        alt: detail.name,\n                        className: \"group-hover:scale-125 ease-in duration-200 h-auto w-1/3 rounded-lg\",\n                        width: 600,\n                        height: 450,\n                        quality: \"90\",\n                        loading: \"eager\",\n                        layout: \"fixed\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this),\n                    images.map(function(proj) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"w-screen sm:w-auto group rounded-lg overflow-hidden relative m-10 min-w-[500px] sm:w-[600px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {}, void 0, false, {\n                                    fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    src: proj.url,\n                                    alt: proj.name,\n                                    className: \"group-hover:scale-125 ease-in duration-200 h-full w-auto sm:min-w-[600px] rounded-lg\",\n                                    width: 600,\n                                    height: 450,\n                                    loading: \"eager\",\n                                    layout: \"fixed\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                                    lineNumber: 74,\n                                    columnNumber: 19\n                                }, _this)\n                            ]\n                        }, \"\".concat(proj.name), true, {\n                            fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                            lineNumber: 72,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-evenly h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce200\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full animate-bounce400\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce600\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce800\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full animate-bounce400\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce600\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full animate-bounce400\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce200\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[id].js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Projeto, \"FcjA9w1xHqZ7J8QmH/U1VMHXpEo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Projeto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projeto);\nvar _c;\n$RefreshReg$(_c, \"Projeto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFDLG9FQUFxRTs7Ozs7NEJBQU87a0NBQzNGLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsK0RBQWdFOzs7Ozs0QkFBUTtrQ0FDdkYsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxvRUFBcUU7Ozs7OzRCQUFRO2tDQUM1Riw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLCtEQUFnRTs7Ozs7NEJBQVE7a0NBQ3ZGLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsb0VBQXFFOzs7Ozs0QkFBTztrQ0FDM0YsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxpRUFBa0U7Ozs7OzRCQUFROzs7Ozs7b0JBQ3ZGOzs7Ozs7WUFLSixDQUNQO0NBQ0Y7R0FqR1F0QixPQUFPOztRQUVDTCxrREFBUzs7O0FBRmpCSyxLQUFBQSxPQUFPO0FBbUdoQiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZXRvcy9baWRdLmpzPzQ0YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuXG5mdW5jdGlvbiBQcm9qZXRvKCkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGRldGFpbElkID0gcm91dGVyLnF1ZXJ5LmlkXG4gIGNvbnN0IFtkZXRhaWwsIHNldERldGFpbF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cblxuICBmdW5jdGlvbiB0aGlzSXNSZWFkeSgpe1xuICAgIHNldFJlYWR5KHRydWUpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFByb2plY3QoKVxuICAgIHNldFRpbWVvdXQoXG4gICAgICAoKT0+e1xuICAgICAgICBnZXRJbWFnZXMoKVxuICAgICAgfSxcbiAgICAgIFsxNTAwXVxuICAgIClcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCk9PntcbiAgICAgICAgdGhpc0lzUmVhZHkoKVxuICAgICAgfSxcbiAgICAgIFszMDAwXVxuICAgIClcbiAgfSxbXSlcblxuXG4gIGxldCBnZXRQcm9qZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGV0YWlsSWQpXG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9wcm9qZWN0cy9uYW1lLyR7ZGV0YWlsSWR9YClcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBhd2FpdCBzZXREZXRhaWwoZGF0YSlcbiAgICAgIGF3YWl0IGNvbnNvbGUubG9nKGRldGFpbClcbiAgfVxuICBsZXQgZ2V0SW1hZ2VzID0gYXN5bmMoKSA9PntcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9pbWFnZXMvJHtkZXRhaWwuaWR9YClcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGF3YWl0IHNldEltYWdlcyhkYXRhKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJvZHlDb2xvclwiPlxuICAgICAgPE5hdmJhci8+XG4gICAgICB7cmVhZHk9PT0odHJ1ZSk/XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGp1c3RpZnktYXJvdW5kIHAtMjhcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsIHRleHQtNXhsXCI+XG4gICAgICAgICAgICB7ZGV0YWlsLm5hbWV9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5EZXRhbGhlczo8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC1iYXNlXCI+e2RldGFpbC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2RldGFpbC5pbWFnZX0gYWx0PXtkZXRhaWwubmFtZX0gY2xhc3NOYW1lPVwiZ3JvdXAtaG92ZXI6c2NhbGUtMTI1IGVhc2UtaW4gZHVyYXRpb24tMjAwIGgtYXV0byB3LTEvMyByb3VuZGVkLWxnXCIgd2lkdGg9ezYwMH1cbiAgICAgICAgICAgIGhlaWdodD17NDUwfVxuICAgICAgICAgICAgcXVhbGl0eT1cIjkwXCJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJlYWdlclwiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXG5cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtpbWFnZXMubWFwKHByb2o9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIHNtOnctYXV0byBncm91cCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSBtLTEwIG1pbi13LVs1MDBweF0gc206dy1bNjAwcHhdXCIga2V5PXtgJHtwcm9qLm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgPGltZyA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qLnVybH0gYWx0PXtwcm9qLm5hbWV9IGNsYXNzTmFtZT1cImdyb3VwLWhvdmVyOnNjYWxlLTEyNSBlYXNlLWluIGR1cmF0aW9uLTIwMCBoLWZ1bGwgdy1hdXRvIHNtOm1pbi13LVs2MDBweF0gcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs2MDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDUwfVxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwiZWFnZXJcIlxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1ldmVubHkgaC1zY3JlZW4nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIG1yLTEgYW5pbWF0ZS1ib3VuY2UnID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBtci0xIGFuaW1hdGUtYm91bmNlMjAwJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBhbmltYXRlLWJvdW5jZTQwMCcgPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIG1yLTEgYW5pbWF0ZS1ib3VuY2U2MDAnID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBtci0xIGFuaW1hdGUtYm91bmNlODAwJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBhbmltYXRlLWJvdW5jZTQwMCcgPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIG1yLTEgYW5pbWF0ZS1ib3VuY2U2MDAnID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBhbmltYXRlLWJvdW5jZTQwMCcgPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIG1yLTEgYW5pbWF0ZS1ib3VuY2UyMDAnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIG1yLTEgYW5pbWF0ZS1ib3VuY2UnID48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIH1cblxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamV0b1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2YmFyIiwiSW1hZ2UiLCJQcm9qZXRvIiwidGhpc0lzUmVhZHkiLCJzZXRSZWFkeSIsInJvdXRlciIsImRldGFpbElkIiwicXVlcnkiLCJpZCIsImRldGFpbCIsInNldERldGFpbCIsImltYWdlcyIsInNldEltYWdlcyIsInJlYWR5IiwiZ2V0UHJvamVjdCIsInNldFRpbWVvdXQiLCJnZXRJbWFnZXMiLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInF1YWxpdHkiLCJsb2FkaW5nIiwibGF5b3V0IiwibWFwIiwicHJvaiIsImltZyIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projetos/[id].js\n");

/***/ })

});