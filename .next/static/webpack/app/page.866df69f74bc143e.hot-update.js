"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/ProductCollection.jsx":
/*!**************************************************!*\
  !*** ./src/app/components/ProductCollection.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ \"(app-pages-browser)/./node_modules/react-loader-spinner/dist/module.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ProductCollection = ()=>{\n    _s();\n    const [collections, setCollections] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const collectionHandler = async ()=>{\n        setLoading(true);\n        try {\n            // const response = await fetch(`https://next-resort-project.vercel.app/api/admin/add-product`)\n            const response1 = await fetch(\"http://localhost:3001//api/admin/add-product\");\n            const newData = await response1.json();\n            console.log(\"productData:\", newData);\n            setCollections(newData.data);\n        } catch (error) {\n            setError(response.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        collectionHandler();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"productSection\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                align: \"center\",\n                children: \"Select your Stay\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            collections ? collections.map((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"proDetail\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"title\",\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.image,\n                                    alt: item.title,\n                                    className: \"roomImage\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pamen\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"price\",\n                                            children: [\n                                                \"Rs. \",\n                                                item.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 16\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: \"Amenities\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                item.amen.map((serve, i)=>{\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"amenities\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            children: [\n                                                                \"*\",\n                                                                serve\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                                            lineNumber: 57,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 23\n                                                    }, undefined);\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 16\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/detail/\".concat(item._id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"detail\",\n                                            children: \"Details  \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, item._id, true, {\n                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 15\n                }, undefined);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    height: \"50vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__.Circles, {\n                    height: \"80\",\n                    width: \"80\",\n                    color: \"black\",\n                    ariaLabel: \"circles-loading\",\n                    wrapperStyle: {},\n                    wrapperClass: \"\",\n                    visible: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 16\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                lineNumber: 73,\n                columnNumber: 12\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProductCollection, \"UotMu/9uXdEgzBwM5XgdDycaFEk=\");\n_c = ProductCollection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCollection);\nvar _c;\n$RefreshReg$(_c, \"ProductCollection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9kdWN0Q29sbGVjdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLNEI7QUFDc0I7QUFDSjtBQUc5QyxNQUFNSyxvQkFBb0I7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1TLG9CQUFvQjtRQUN4QkQsV0FBVztRQUNaLElBQUk7WUFDSCwrRkFBK0Y7WUFDL0YsTUFBTUUsWUFBVyxNQUFNQyxNQUFPO1lBQzlCLE1BQU1DLFVBQVUsTUFBTUYsVUFBU0csSUFBSTtZQUVuQ0MsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkg7WUFFNUJSLGVBQWVRLFFBQVFJLElBQUk7UUFDNUIsRUFBRSxPQUFPWCxPQUFPO1lBQ2ZDLFNBQVNJLFNBQVNPLE9BQU87UUFDMUIsU0FBUTtZQUNQVCxXQUFXO1FBQ2I7SUFFQTtJQUVBVCxnREFBU0EsQ0FBQztRQUNOVTtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDZiw4REFBQ0M7Z0JBQUdDLE9BQU07MEJBQVM7Ozs7OztZQUNsQmxCLGNBQWdCQSxZQUFZbUIsR0FBRyxDQUFDLENBQUNDO2dCQUNoQyxxQkFDSSw4REFBQ0w7b0JBQW1CQyxXQUFVOztzQ0FDOUIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQVNJLEtBQUtDLEtBQUs7Ozs7Ozs4Q0FDbEMsOERBQUNDOzs7Ozs4Q0FDRCw4REFBQ0M7b0NBQUlDLEtBQUtKLEtBQUtLLEtBQUs7b0NBQUVDLEtBQUtOLEtBQUtDLEtBQUs7b0NBQUVMLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FFbkQsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDZCw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNmLDhEQUFDVzs0Q0FBR1gsV0FBVTs7Z0RBQVE7Z0RBQUtJLEtBQUtRLEtBQUs7Ozs7Ozs7c0RBQ3BDLDhEQUFDYjs7OERBQ0MsOERBQUNjOzhEQUFHOzs7Ozs7Z0RBQ0hULEtBQUtVLElBQUksQ0FBQ1gsR0FBRyxDQUFDLENBQUNZLE9BQU9DO29EQUNyQixxQkFDRSw4REFBQ2pCO3dEQUFJQyxXQUFVO2tFQUNiLDRFQUFDRDs7Z0VBQUk7Z0VBQUVnQjs7Ozs7Ozt1REFEdUJDOzs7OztnREFJcEM7Ozs7Ozs7Ozs7Ozs7OENBR0YsOERBQUNqQjtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ3RCLGlEQUFJQTt3Q0FBQ3VDLE1BQU0sV0FBb0IsT0FBVGIsS0FBS2MsR0FBRztrREFDekMsNEVBQUNDOzRDQUFPbkIsV0FBVTtzREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBdEJYSSxLQUFLYyxHQUFHOzs7OztZQTZCeEIsbUJBQ0csOERBQUNuQjtnQkFBSXFCLE9BQU87b0JBQ1hDLFNBQVM7b0JBQ1RDLGdCQUFnQjtvQkFDaEJDLFlBQVk7b0JBQ1pDLFFBQVE7Z0JBQ1o7MEJBQ08sNEVBQUMxQyx5REFBT0E7b0JBQ3JCMEMsUUFBTztvQkFDUEMsT0FBTTtvQkFDTkMsT0FBTTtvQkFDTkMsV0FBVTtvQkFDVkMsY0FBYyxDQUFDO29CQUNmQyxjQUFhO29CQUNiQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFQO0dBbkZFL0M7S0FBQUE7QUFxRk4sK0RBQWVBLGlCQUFpQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvZHVjdENvbGxlY3Rpb24uanN4PzBlZTkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cInVzZSBjbGllbnRcIlxyXG5cclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2lyY2xlcyB9IGZyb20gJ3JlYWN0LWxvYWRlci1zcGlubmVyJ1xyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RDb2xsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NvbGxlY3Rpb25zLCBzZXRDb2xsZWN0aW9uc10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgY29sbGVjdGlvbkhhbmRsZXIgPSBhc3luYygpPT57XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICB0cnkge1xyXG4gICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL25leHQtcmVzb3J0LXByb2plY3QudmVyY2VsLmFwcC9hcGkvYWRtaW4vYWRkLXByb2R1Y3RgKVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvL2FwaS9hZG1pbi9hZGQtcHJvZHVjdGApXHJcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdERhdGE6XCIsIG5ld0RhdGEpXHJcblxyXG4gICAgICBzZXRDb2xsZWN0aW9ucyhuZXdEYXRhLmRhdGEpXHJcbiAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IocmVzcG9uc2UubWVzc2FnZSlcclxuICAgICB9ZmluYWxseXtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29sbGVjdGlvbkhhbmRsZXIoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RTZWN0aW9uXCI+XHJcbiAgICAgICAgPGgxIGFsaWduPSdjZW50ZXInPlNlbGVjdCB5b3VyIFN0YXk8L2gxPlxyXG4gICAgICAgIHtjb2xsZWN0aW9ucyA/ICggY29sbGVjdGlvbnMubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLl9pZH0gY2xhc3NOYW1lPVwicHJvRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT1cInJvb21JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhbWVuJz5cclxuICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByaWNlXCI+UnMuIHtpdGVtLnByaWNlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+QW1lbml0aWVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uYW1lbi5tYXAoKHNlcnZlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW1lbml0aWVzXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4qe3NlcnZlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsLyR7aXRlbS5faWR9YH0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZXRhaWxcIj5EZXRhaWxzICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSkgKTogKFxyXG4gICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICc1MHZoJywgIFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICA8Q2lyY2xlc1xyXG4gIGhlaWdodD1cIjgwXCJcclxuICB3aWR0aD1cIjgwXCJcclxuICBjb2xvcj1cImJsYWNrXCJcclxuICBhcmlhTGFiZWw9XCJjaXJjbGVzLWxvYWRpbmdcIlxyXG4gIHdyYXBwZXJTdHlsZT17e319XHJcbiAgd3JhcHBlckNsYXNzPVwiXCJcclxuICB2aXNpYmxlPXt0cnVlfVxyXG4gIC8+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENvbGxlY3Rpb25cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2lyY2xlcyIsIlByb2R1Y3RDb2xsZWN0aW9uIiwiY29sbGVjdGlvbnMiLCJzZXRDb2xsZWN0aW9ucyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbGxlY3Rpb25IYW5kbGVyIiwicmVzcG9uc2UiLCJmZXRjaCIsIm5ld0RhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJhbGlnbiIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsImJyIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoMiIsInByaWNlIiwiaDMiLCJhbWVuIiwic2VydmUiLCJpIiwiaHJlZiIsIl9pZCIsImJ1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJhcmlhTGFiZWwiLCJ3cmFwcGVyU3R5bGUiLCJ3cmFwcGVyQ2xhc3MiLCJ2aXNpYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProductCollection.jsx\n"));

/***/ })

});