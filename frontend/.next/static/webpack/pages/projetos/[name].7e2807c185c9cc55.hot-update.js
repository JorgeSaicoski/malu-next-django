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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./pages/components/Navbar.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Projeto() {\n    var _this = this;\n    var thisIsReady = function thisIsReady() {\n        setReady(true);\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var detailName = router.query.name;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1), id = ref[0], setId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), detail = ref1[0], setDetail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), images = ref2[0], setImages = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), ready = ref3[0], setReady = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getProject();\n        setTimeout(function() {\n            getImages();\n        }, [\n            1500\n        ]);\n        setTimeout(function() {\n            thisIsReady();\n        }, [\n            3000\n        ]);\n    }, []);\n    var getProject = function() {\n        var _ref = _asyncToGenerator(_home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, data;\n            return _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(detailName);\n                        _ctx.next = 3;\n                        return fetch(\"http://127.0.0.1:8000/api/projects/name/\".concat(detailName));\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        data = _ctx.sent;\n                        _ctx.next = 9;\n                        return setDetail(data);\n                    case 9:\n                        _ctx.next = 11;\n                        return setId(detail.id);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProject() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getImages = function() {\n        var _ref = _asyncToGenerator(_home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, data;\n            return _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"http://127.0.0.1:8000/api/images/\".concat(id));\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        data = _ctx.sent;\n                        _ctx.next = 8;\n                        return setImages(data);\n                    case 8:\n                        _ctx.next = 10;\n                        return console.log(detail);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getImages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-bodyColor\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            ready === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full flex flex-col min-h-screen justify-around p-28\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        className: \"text-center w-full text-5xl\",\n                        children: detail.name\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-full text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-2xl\",\n                                children: \"Detalhes:\"\n                            }, void 0, false, {\n                                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"w-full text-center text-base\",\n                                children: detail.description\n                            }, void 0, false, {\n                                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: detail.image,\n                        alt: detail.name,\n                        className: \"group-hover:scale-125 ease-in duration-200 h-auto w-1/3 rounded-lg\",\n                        width: 600,\n                        height: 450,\n                        quality: \"90\",\n                        loading: \"eager\",\n                        layout: \"fixed\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    images.map(function(proj) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"w-screen sm:w-auto group rounded-lg overflow-hidden relative m-10 min-w-[500px] sm:w-[600px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {}, void 0, false, {\n                                    fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    src: proj.url,\n                                    alt: proj.name,\n                                    className: \"group-hover:scale-125 ease-in duration-200 h-full w-auto sm:min-w-[600px] rounded-lg\",\n                                    width: 600,\n                                    height: 450,\n                                    loading: \"eager\",\n                                    layout: \"fixed\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                                    lineNumber: 76,\n                                    columnNumber: 19\n                                }, _this)\n                            ]\n                        }, \"\".concat(proj.name), true, {\n                            fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                            lineNumber: 74,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-evenly h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce200\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full animate-bounce400\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce600\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce800\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full animate-bounce400\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce600\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full animate-bounce400\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce200\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 97,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 98,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Projeto, \"TS5KS15EHjpgn0KRtv4UbHkkNMk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Projeto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projeto);\nvar _c;\n$RefreshReg$(_c, \"Projeto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO2tDQUMzRiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLCtEQUFnRTs7Ozs7NEJBQVE7a0NBQ3ZGLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsb0VBQXFFOzs7Ozs0QkFBUTtrQ0FDNUYsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxvRUFBcUU7Ozs7OzRCQUFPO2tDQUMzRiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLCtEQUFnRTs7Ozs7NEJBQVE7a0NBQ3ZGLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsb0VBQXFFOzs7Ozs0QkFBUTtrQ0FDNUYsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQywrREFBZ0U7Ozs7OzRCQUFRO2tDQUN2Riw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLG9FQUFxRTs7Ozs7NEJBQU87a0NBQzNGLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsaUVBQWtFOzs7Ozs0QkFBUTs7Ozs7O29CQUN2Rjs7Ozs7O1lBS0osQ0FDUDtDQUNGO0dBbkdReEIsT0FBTzs7UUFFQ0wsa0RBQVM7OztBQUZqQkssS0FBQUEsT0FBTztBQXFHaEIsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamV0b3MvW25hbWVdLmpzP2YyYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuXG5mdW5jdGlvbiBQcm9qZXRvKCkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGRldGFpbE5hbWUgPSByb3V0ZXIucXVlcnkubmFtZVxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFtkZXRhaWwsIHNldERldGFpbF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cblxuICBmdW5jdGlvbiB0aGlzSXNSZWFkeSgpe1xuICAgIHNldFJlYWR5KHRydWUpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFByb2plY3QoKVxuICAgIHNldFRpbWVvdXQoXG4gICAgICAoKT0+e1xuICAgICAgICBnZXRJbWFnZXMoKVxuICAgICAgfSxcbiAgICAgIFsxNTAwXVxuICAgIClcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCk9PntcbiAgICAgICAgdGhpc0lzUmVhZHkoKVxuICAgICAgfSxcbiAgICAgIFszMDAwXVxuICAgIClcbiAgfSxbXSlcblxuXG4gIGxldCBnZXRQcm9qZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGV0YWlsTmFtZSlcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3Byb2plY3RzL25hbWUvJHtkZXRhaWxOYW1lfWApXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgYXdhaXQgc2V0RGV0YWlsKGRhdGEpXG4gICAgICBhd2FpdCBzZXRJZChkZXRhaWwuaWQpXG4gIH1cbiAgbGV0IGdldEltYWdlcyA9IGFzeW5jKCkgPT57XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvaW1hZ2VzLyR7aWR9YClcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGF3YWl0IHNldEltYWdlcyhkYXRhKVxuICAgIGF3YWl0IGNvbnNvbGUubG9nKGRldGFpbClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ib2R5Q29sb3JcIj5cbiAgICAgIDxOYXZiYXIvPlxuICAgICAge3JlYWR5PT09KHRydWUpP1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBqdXN0aWZ5LWFyb3VuZCBwLTI4XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHctZnVsbCB0ZXh0LTV4bFwiPlxuICAgICAgICAgICAge2RldGFpbC5uYW1lfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+RGV0YWxoZXM6PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHRleHQtYmFzZVwiPntkZXRhaWwuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtkZXRhaWwuaW1hZ2V9IGFsdD17ZGV0YWlsLm5hbWV9IGNsYXNzTmFtZT1cImdyb3VwLWhvdmVyOnNjYWxlLTEyNSBlYXNlLWluIGR1cmF0aW9uLTIwMCBoLWF1dG8gdy0xLzMgcm91bmRlZC1sZ1wiIHdpZHRoPXs2MDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezQ1MH1cbiAgICAgICAgICAgIHF1YWxpdHk9XCI5MFwiXG4gICAgICAgICAgICBsb2FkaW5nPVwiZWFnZXJcIlxuICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxuXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aW1hZ2VzLm1hcChwcm9qPT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBzbTp3LWF1dG8gZ3JvdXAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgbS0xMCBtaW4tdy1bNTAwcHhdIHNtOnctWzYwMHB4XVwiIGtleT17YCR7cHJvai5uYW1lfWB9PlxuICAgICAgICAgICAgICAgIDxpbWcgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvai51cmx9IGFsdD17cHJvai5uYW1lfSBjbGFzc05hbWU9XCJncm91cC1ob3ZlcjpzY2FsZS0xMjUgZWFzZS1pbiBkdXJhdGlvbi0yMDAgaC1mdWxsIHctYXV0byBzbTptaW4tdy1bNjAwcHhdIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjAwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQ1MH1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImVhZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktZXZlbmx5IGgtc2NyZWVuJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBtci0xIGFuaW1hdGUtYm91bmNlJyA+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNXZ3XSB3LVs1dnddIGJnLWhlYWRlckNvbG9yICByb3VuZGVkLWZ1bGwgbXItMSBhbmltYXRlLWJvdW5jZTIwMCc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNXZ3XSB3LVs1dnddIGJnLWhlYWRlckNvbG9yICByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1ib3VuY2U0MDAnID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBtci0xIGFuaW1hdGUtYm91bmNlNjAwJyA+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNXZ3XSB3LVs1dnddIGJnLWhlYWRlckNvbG9yICByb3VuZGVkLWZ1bGwgbXItMSBhbmltYXRlLWJvdW5jZTgwMCc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNXZ3XSB3LVs1dnddIGJnLWhlYWRlckNvbG9yICByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1ib3VuY2U0MDAnID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBtci0xIGFuaW1hdGUtYm91bmNlNjAwJyA+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNXZ3XSB3LVs1dnddIGJnLWhlYWRlckNvbG9yICByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1ib3VuY2U0MDAnID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBtci0xIGFuaW1hdGUtYm91bmNlMjAwJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs1dnddIHctWzV2d10gYmctaGVhZGVyQ29sb3IgIHJvdW5kZWQtZnVsbCBtci0xIGFuaW1hdGUtYm91bmNlJyA+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICB9XG5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2pldG9cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdmJhciIsIkltYWdlIiwiUHJvamV0byIsInRoaXNJc1JlYWR5Iiwic2V0UmVhZHkiLCJyb3V0ZXIiLCJkZXRhaWxOYW1lIiwicXVlcnkiLCJuYW1lIiwiaWQiLCJzZXRJZCIsImRldGFpbCIsInNldERldGFpbCIsImltYWdlcyIsInNldEltYWdlcyIsInJlYWR5IiwiZ2V0UHJvamVjdCIsInNldFRpbWVvdXQiLCJnZXRJbWFnZXMiLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiZGVzY3JpcHRpb24iLCJzcmMiLCJpbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicXVhbGl0eSIsImxvYWRpbmciLCJsYXlvdXQiLCJtYXAiLCJwcm9qIiwiaW1nIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projetos/[name].js\n");

/***/ })

});