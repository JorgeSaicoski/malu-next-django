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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./pages/components/Navbar.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Projeto() {\n    var thisIsReady = function thisIsReady() {\n        console.log(router);\n        setReady(true);\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var detailName = router.query.name;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), detail = ref[0], setDetail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), images = ref1[0], setImages = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), ready = ref2[0], setReady = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getProject();\n        setTimeout(function() {\n            getImages();\n        }, [\n            1500\n        ]);\n        setTimeout(function() {\n            thisIsReady();\n        }, [\n            3000\n        ]);\n    }, []);\n    var getProject = function() {\n        var _ref = _asyncToGenerator(_home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, data;\n            return _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(detailName);\n                        _ctx.next = 3;\n                        return fetch(\"http://127.0.0.1:8000/api/projects/name/\".concat(detailName));\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        data = _ctx.sent;\n                        _ctx.next = 9;\n                        return setDetail(data);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProject() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getImages = function() {\n        var _ref = _asyncToGenerator(_home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, data;\n            return _home_bardock_Documents_Coding_Python_django_malu_next_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"http://127.0.0.1:8000/api/images/\".concat(detail.id));\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        data = _ctx.sent;\n                        _ctx.next = 8;\n                        return setImages(data);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getImages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-bodyColor\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            ready === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full flex flex-col min-h-screen justify-around p-28\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        className: \"text-center w-full text-5xl\",\n                        children: detail.name\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-full text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-2xl\",\n                                children: \"Detalhes:\"\n                            }, void 0, false, {\n                                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"w-full text-center text-base\",\n                                children: detail.description\n                            }, void 0, false, {\n                                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: detail.image,\n                        alt: detail.name,\n                        className: \"group-hover:scale-125 ease-in duration-200 h-auto w-1/3 rounded-lg\",\n                        width: 600,\n                        height: 450,\n                        quality: \"90\",\n                        loading: \"eager\",\n                        layout: \"fixed\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-evenly h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce200\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full animate-bounce400\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce600\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce800\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full animate-bounce400\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce600\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full animate-bounce400\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce200\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-[5vw] w-[5vw] bg-headerColor rounded-full mr-1 animate-bounce\"\n                    }, void 0, false, {\n                        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bardock/Documents/Coding/Python/django/malu-next-django/frontend/pages/projetos/[name].js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Projeto, \"FcjA9w1xHqZ7J8QmH/U1VMHXpEo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Projeto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projeto);\nvar _c;\n$RefreshReg$(_c, \"Projeto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZXRvcy9bbmFtZV0uanM/ZjJhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuXG5cbmZ1bmN0aW9uIFByb2pldG8oKSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgZGV0YWlsTmFtZSA9IHJvdXRlci5xdWVyeS5uYW1lXG4gIGNvbnN0IFtkZXRhaWwsIHNldERldGFpbF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cblxuICBmdW5jdGlvbiB0aGlzSXNSZWFkeSgpe1xuICAgIGNvbnNvbGUubG9nKHJvdXRlcilcbiAgICBzZXRSZWFkeSh0cnVlKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQcm9qZWN0KClcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCk9PntcbiAgICAgICAgZ2V0SW1hZ2VzKClcbiAgICAgIH0sXG4gICAgICBbMTUwMF1cbiAgICApXG4gICAgc2V0VGltZW91dChcbiAgICAgICgpPT57XG4gICAgICAgIHRoaXNJc1JlYWR5KClcbiAgICAgIH0sXG4gICAgICBbMzAwMF1cbiAgICApXG4gIH0sW10pXG5cblxuICBsZXQgZ2V0UHJvamVjdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRldGFpbE5hbWUpXG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9wcm9qZWN0cy9uYW1lLyR7ZGV0YWlsTmFtZX1gKVxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIGF3YWl0IHNldERldGFpbChkYXRhKVxuICB9XG4gIGxldCBnZXRJbWFnZXMgPSBhc3luYygpID0+e1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2ltYWdlcy8ke2RldGFpbC5pZH1gKVxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgYXdhaXQgc2V0SW1hZ2VzKGRhdGEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYm9keUNvbG9yXCI+XG4gICAgICA8TmF2YmFyLz5cbiAgICAgIHtyZWFkeT09PSh0cnVlKT9cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4ganVzdGlmeS1hcm91bmQgcC0yOFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LWZ1bGwgdGV4dC01eGxcIj5cbiAgICAgICAgICAgIHtkZXRhaWwubmFtZX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkRldGFsaGVzOjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciB0ZXh0LWJhc2VcIj57ZGV0YWlsLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17ZGV0YWlsLmltYWdlfSBhbHQ9e2RldGFpbC5uYW1lfSBjbGFzc05hbWU9XCJncm91cC1ob3ZlcjpzY2FsZS0xMjUgZWFzZS1pbiBkdXJhdGlvbi0yMDAgaC1hdXRvIHctMS8zIHJvdW5kZWQtbGdcIiB3aWR0aD17NjAwfVxuICAgICAgICAgICAgaGVpZ2h0PXs0NTB9XG4gICAgICAgICAgICBxdWFsaXR5PVwiOTBcIlxuICAgICAgICAgICAgbG9hZGluZz1cImVhZ2VyXCJcbiAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcblxuICAgICAgICAgIC8+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWV2ZW5seSBoLXNjcmVlbic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNXZ3XSB3LVs1dnddIGJnLWhlYWRlckNvbG9yICByb3VuZGVkLWZ1bGwgbXItMSBhbmltYXRlLWJvdW5jZScgPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIG1yLTEgYW5pbWF0ZS1ib3VuY2UyMDAnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIGFuaW1hdGUtYm91bmNlNDAwJyA+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNXZ3XSB3LVs1dnddIGJnLWhlYWRlckNvbG9yICByb3VuZGVkLWZ1bGwgbXItMSBhbmltYXRlLWJvdW5jZTYwMCcgPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIG1yLTEgYW5pbWF0ZS1ib3VuY2U4MDAnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIGFuaW1hdGUtYm91bmNlNDAwJyA+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNXZ3XSB3LVs1dnddIGJnLWhlYWRlckNvbG9yICByb3VuZGVkLWZ1bGwgbXItMSBhbmltYXRlLWJvdW5jZTYwMCcgPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzV2d10gdy1bNXZ3XSBiZy1oZWFkZXJDb2xvciAgcm91bmRlZC1mdWxsIGFuaW1hdGUtYm91bmNlNDAwJyA+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNXZ3XSB3LVs1dnddIGJnLWhlYWRlckNvbG9yICByb3VuZGVkLWZ1bGwgbXItMSBhbmltYXRlLWJvdW5jZTIwMCc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNXZ3XSB3LVs1dnddIGJnLWhlYWRlckNvbG9yICByb3VuZGVkLWZ1bGwgbXItMSBhbmltYXRlLWJvdW5jZScgPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgfVxuXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZXRvXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXZiYXIiLCJJbWFnZSIsIlByb2pldG8iLCJ0aGlzSXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJzZXRSZWFkeSIsImRldGFpbE5hbWUiLCJxdWVyeSIsIm5hbWUiLCJkZXRhaWwiLCJzZXREZXRhaWwiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJyZWFkeSIsImdldFByb2plY3QiLCJzZXRUaW1lb3V0IiwiZ2V0SW1hZ2VzIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJkZXNjcmlwdGlvbiIsInNyYyIsImltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJxdWFsaXR5IiwibG9hZGluZyIsImxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projetos/[name].js\n");

/***/ })

});