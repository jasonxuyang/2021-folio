webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/home/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/sidebar */ \"./components/shared/sidebar/index.js\");\n/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/about */ \"./components/home/about/index.js\");\n/* harmony import */ var _components_home_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/contact */ \"./components/home/contact/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/sidebarMobile */ \"./components/shared/sidebarMobile/index.js\");\n/* harmony import */ var _components_home_projectCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/home/projectCard */ \"./components/home/projectCard/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/home/2021-folio/pages/home/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var main = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var progressBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var pageWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var transitionOverlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var work = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var about = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var contact = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var scrollY = 0;\n  var wrapperY = 0;\n  var body;\n  var page;\n  var pct = 0;\n  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {\n    initPage();\n    return function () {\n      cleanupPage();\n    };\n  }, []);\n\n  function initPage() {\n    fadeIn();\n    setTimeout(function () {\n      transitionIn();\n    }, 400);\n    main.current.style.position = 'fixed';\n    main.current.style.top = 0;\n    main.current.style.left = 0;\n    progressBar.current.style.position = 'fixed';\n    progressBar.current.style.bottom = 0;\n    progressBar.current.style.left = 0;\n    body = document.body;\n    page = document.documentElement;\n    window.addEventListener('scroll', scroll);\n    window.requestAnimationFrame(render);\n  }\n\n  function cleanupPage() {\n    window.cancelAnimationFrame(render);\n    window.removeEventListener('scroll', scroll);\n    console.log(\"Cleaned up.\");\n  }\n\n  function lerp(a, b, n) {\n    return (1 - n) * a + n * b;\n  }\n\n  function scroll() {\n    scrollY = window.pageYOffset;\n  }\n\n  function getScrollPercent() {\n    var st = 'scrollTop';\n    var sh = 'scrollHeight';\n    return (page[st] || body[st]) / ((page[sh] || body[sh]) - page.clientHeight) * 100;\n  }\n\n  function render() {\n    try {\n      scroll();\n      body.style.height = main.current.clientHeight + 'px';\n      wrapperY = lerp(wrapperY, scrollY, 0.07);\n      wrapperY = Math.floor(wrapperY * 100) / 100;\n      pct = 100 - getScrollPercent();\n      main.current.style.transform = \"translate(0px, -\".concat(wrapperY, \"px)\");\n      progressBar.current.style.height = \"\".concat(pct, \"vh\");\n      window.requestAnimationFrame(render);\n    } catch (error) {\n      console.log(\"Failed to cleanup before next animation frame render.\\n\" + error);\n    }\n  }\n\n  function fadeIn() {\n    setTimeout(function () {\n      pageWrapper.current.style.opacity = '1';\n    }, 800);\n  }\n\n  function transitionIn() {\n    transitionOverlay.current.style.height = '0';\n    setTimeout(function () {\n      transitionOverlay.current.style.bottom = '0';\n    }, 800);\n  }\n\n  function transitionOut(e) {\n    transitionOverlay.current.style.height = '100vh';\n  }\n\n  function scrollToWork(e) {\n    console.log(about.current.getBoundingClientRect());\n    console.log(window.pageYOffset);\n    console.log(window.innerHeight);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.page_wrapper,\n      ref: pageWrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar_wrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar,\n          ref: progressBar\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        topContent: [\"Jason Yang is a designer who codes.\", \"He's currently learning how to build cool things @GT.\"],\n        bottomContent: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: '#Work',\n            ref: work,\n            onClick: scrollToWork,\n            children: \"Work\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 29\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: '#About',\n            ref: about,\n            onClick: scrollToWork,\n            children: \"About\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 29\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: '#About',\n            ref: contact,\n            onClick: scrollToWork,\n            children: \"Contact\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n        ref: main,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          topContent: [\"Jason Yang is a designer who codes.\", \"He's currently learning how to build cool things @GT.\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"Work\",\n          ref: work,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"Work\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.work_section,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project_card,\n              onClick: transitionOut,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_projectCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                imgUrl: \"asset/imgs/cover_bits-of-good.jpg\",\n                title: \"Bits of Good - Helping non-profits connect with donors and volunteers.\",\n                workType: \"Product Design\",\n                workFor: \"Student Org\",\n                side: \"left\",\n                url: \"/bits_of_good\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 140,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 139,\n              columnNumber: 29\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project_card,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_projectCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                imgUrl: \"asset/imgs/cover_hackgt.jpg\",\n                title: \"HackGT - Building a useful event scheduler for our hackathon participants.\",\n                workType: \"Product Design\",\n                workFor: \"Student Org\",\n                side: \"right\",\n                url: \"/project\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 150,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 149,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"About\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 163,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 162,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"Contact\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 167,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 166,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.transition_overlay,\n      ref: transitionOverlay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz8yNGRlIl0sIm5hbWVzIjpbIkhvbWUiLCJtYWluIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJwcm9ncmVzc0JhciIsInBhZ2VXcmFwcGVyIiwidHJhbnNpdGlvbk92ZXJsYXkiLCJ3b3JrIiwiYWJvdXQiLCJjb250YWN0Iiwic2Nyb2xsWSIsIndyYXBwZXJZIiwiYm9keSIsInBhZ2UiLCJwY3QiLCJ1c2VFZmZlY3QiLCJpbml0UGFnZSIsImNsZWFudXBQYWdlIiwiZmFkZUluIiwic2V0VGltZW91dCIsInRyYW5zaXRpb25JbiIsImN1cnJlbnQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJsZXJwIiwiYSIsImIiLCJuIiwicGFnZVlPZmZzZXQiLCJnZXRTY3JvbGxQZXJjZW50Iiwic3QiLCJzaCIsImNsaWVudEhlaWdodCIsImhlaWdodCIsIk1hdGgiLCJmbG9vciIsInRyYW5zZm9ybSIsImVycm9yIiwib3BhY2l0eSIsInRyYW5zaXRpb25PdXQiLCJlIiwic2Nyb2xsVG9Xb3JrIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5uZXJIZWlnaHQiLCJzdHlsZXMiLCJwYWdlX3dyYXBwZXIiLCJwcm9ncmVzc19iYXJfd3JhcHBlciIsInByb2dyZXNzX2JhciIsIndvcmtfc2VjdGlvbiIsInByb2plY3RfY2FyZCIsInRyYW5zaXRpb25fb3ZlcmxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEs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QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixlQWlDSTtBQUFTLFlBQUUsRUFBQyxPQUFaO0FBQUEsaUNBQ0kscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakNKLGVBcUNJO0FBQVMsWUFBRSxFQUFDLFNBQVo7QUFBQSxpQ0FDSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBZ0VJO0FBQUssZUFBUyxFQUFFTCwwREFBTSxDQUFDTSxrQkFBdkI7QUFBMkMsU0FBRyxFQUFFMUQ7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhFSjtBQUFBLGtCQURKO0FBb0VIOztHQXJLUU4sSTs7S0FBQUEsSTtBQXVLTUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9zaWRlYmFyJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvbWUvYWJvdXQnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL2NvbnRhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWRlYmFyTW9iaWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXJNb2JpbGUnO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS9wcm9qZWN0Q2FyZCc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgbWFpbiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgY29uc3QgcGFnZVdyYXBwZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uT3ZlcmxheSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIGNvbnN0IHdvcmsgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBjb25zdCBhYm91dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgIGxldCBzY3JvbGxZID0gMDtcbiAgICBsZXQgd3JhcHBlclkgPSAwO1xuICAgIGxldCBib2R5O1xuICAgIGxldCBwYWdlO1xuICAgIGxldCBwY3QgPSAwO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaW5pdFBhZ2UoKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFudXBQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBpbml0UGFnZSgpIHtcbiAgICAgICAgZmFkZUluKCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRyYW5zaXRpb25JbigpXG4gICAgICAgIH0sIDQwMCk7XG4gICAgICAgIG1haW4uY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIG1haW4uY3VycmVudC5zdHlsZS50b3AgPSAwO1xuICAgICAgICBtYWluLmN1cnJlbnQuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIHByb2dyZXNzQmFyLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBwcm9ncmVzc0Jhci5jdXJyZW50LnN0eWxlLmJvdHRvbSA9IDA7XG4gICAgICAgIHByb2dyZXNzQmFyLmN1cnJlbnQuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBwYWdlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBQYWdlKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xlYW5lZCB1cC5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGVycChhLCBiLCBuKSB7XG4gICAgICAgIHJldHVybiAoMSAtIG4pICogYSArIG4gKiBiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgICAgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxQZXJjZW50KCkge1xuICAgICAgICBjb25zdCBzdCA9ICdzY3JvbGxUb3AnO1xuICAgICAgICBjb25zdCBzaCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICByZXR1cm4gKHBhZ2Vbc3RdfHxib2R5W3N0XSkgLyAoKHBhZ2Vbc2hdfHxib2R5W3NoXSkgLSBwYWdlLmNsaWVudEhlaWdodCkgKiAxMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Nyb2xsKCk7XG4gICAgICAgICAgICBib2R5LnN0eWxlLmhlaWdodCA9IG1haW4uY3VycmVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlclkgPSBsZXJwKHdyYXBwZXJZLCBzY3JvbGxZLCAwLjA3KTtcbiAgICAgICAgICAgIHdyYXBwZXJZID0gTWF0aC5mbG9vcih3cmFwcGVyWSAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgICBwY3QgPSAxMDAgLSBnZXRTY3JvbGxQZXJjZW50KCk7XG4gICAgICAgICAgICBtYWluLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwcHgsIC0ke3dyYXBwZXJZfXB4KWA7XG4gICAgICAgICAgICBwcm9ncmVzc0Jhci5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGAke3BjdH12aGA7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjbGVhbnVwIGJlZm9yZSBuZXh0IGFuaW1hdGlvbiBmcmFtZSByZW5kZXIuXFxuXCIgKyBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWRlSW4oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB9LCA4MDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbkluKCkge1xuICAgICAgICB0cmFuc2l0aW9uT3ZlcmxheS5jdXJyZW50LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uT3ZlcmxheS5jdXJyZW50LnN0eWxlLmJvdHRvbSA9ICcwJztcbiAgICAgICAgfSwgODAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25PdXQoZSkge1xuICAgICAgICB0cmFuc2l0aW9uT3ZlcmxheS5jdXJyZW50LnN0eWxlLmhlaWdodD0gJzEwMHZoJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb1dvcmsoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhYm91dC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLnBhZ2Vfd3JhcHBlcn0gcmVmPXtwYWdlV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfd3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfSByZWY9e3Byb2dyZXNzQmFyfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2lkZWJhciBcbiAgICAgICAgICAgICAgICAgICAgdG9wQ29udGVudCA9IHtbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkphc29uIFlhbmcgaXMgYSBkZXNpZ25lciB3aG8gY29kZXMuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkhlJ3MgY3VycmVudGx5IGxlYXJuaW5nIGhvdyB0byBidWlsZCBjb29sIHRoaW5ncyBAR1QuXCJcbiAgICAgICAgICAgICAgICAgICAgXX1cblxuICAgICAgICAgICAgICAgICAgICBib3R0b21Db250ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsnI1dvcmsnfSByZWY9e3dvcmt9IG9uQ2xpY2s9e3Njcm9sbFRvV29ya30+V29yazwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsnI0Fib3V0J30gcmVmPXthYm91dH0gb25DbGljaz17c2Nyb2xsVG9Xb3JrfT5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsnI0Fib3V0J30gcmVmPXtjb250YWN0fSBvbkNsaWNrPXtzY3JvbGxUb1dvcmt9PkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufSByZWY9e21haW59PlxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhck1vYmlsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcENvbnRlbnQgPSB7W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSmFzb24gWWFuZyBpcyBhIGRlc2lnbmVyIHdobyBjb2Rlcy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhlJ3MgY3VycmVudGx5IGxlYXJuaW5nIGhvdyB0byBidWlsZCBjb29sIHRoaW5ncyBAR1QuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdXb3JrJyByZWY9e3dvcmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPldvcms8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53b3JrX3NlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdF9jYXJkfSBvbkNsaWNrPXt0cmFuc2l0aW9uT3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmwgPSAnYXNzZXQvaW1ncy9jb3Zlcl9iaXRzLW9mLWdvb2QuanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSAnQml0cyBvZiBHb29kIC0gSGVscGluZyBub24tcHJvZml0cyBjb25uZWN0IHdpdGggZG9ub3JzIGFuZCB2b2x1bnRlZXJzLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtUeXBlID0gJ1Byb2R1Y3QgRGVzaWduJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya0ZvciA9ICdTdHVkZW50IE9yZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGUgPSAnbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9ICcvYml0c19vZl9nb29kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdF9jYXJkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmwgPSAnYXNzZXQvaW1ncy9jb3Zlcl9oYWNrZ3QuanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBcIkhhY2tHVCAtIEJ1aWxkaW5nIGEgdXNlZnVsIGV2ZW50IHNjaGVkdWxlciBmb3Igb3VyIGhhY2thdGhvbiBwYXJ0aWNpcGFudHMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtUeXBlID0gJ1Byb2R1Y3QgRGVzaWduJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya0ZvciA9ICdTdHVkZW50IE9yZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGUgPSAncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSAnL3Byb2plY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdBYm91dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWJvdXQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdDb250YWN0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmFuc2l0aW9uX292ZXJsYXl9IHJlZj17dHJhbnNpdGlvbk92ZXJsYXl9PjwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home/index.js\n");

/***/ })

})