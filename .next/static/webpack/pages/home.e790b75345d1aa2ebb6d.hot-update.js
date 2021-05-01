webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/home/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/sidebar */ \"./components/shared/sidebar/index.js\");\n/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/about */ \"./components/home/about/index.js\");\n/* harmony import */ var _components_home_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/contact */ \"./components/home/contact/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/sidebarMobile */ \"./components/shared/sidebarMobile/index.js\");\n/* harmony import */ var _components_home_projectCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/home/projectCard */ \"./components/home/projectCard/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/home/2021-folio/pages/home/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var main = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var progressBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var pageWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var transitionOverlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var work = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var about = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var contact = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var scrollY = 0;\n  var wrapperY = 0;\n  var body;\n  var page;\n  var pct = 0;\n  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {\n    initPage();\n    return function () {\n      cleanupPage();\n    };\n  }, []);\n\n  function initPage() {\n    fadeIn();\n    setTimeout(function () {\n      transitionIn();\n    }, 400);\n    main.current.style.position = 'fixed';\n    main.current.style.top = 0;\n    main.current.style.left = 0;\n    progressBar.current.style.position = 'fixed';\n    progressBar.current.style.bottom = 0;\n    progressBar.current.style.left = 0;\n    body = document.body;\n    page = document.documentElement;\n    window.addEventListener('scroll', scroll);\n    window.requestAnimationFrame(render);\n  }\n\n  function cleanupPage() {\n    window.cancelAnimationFrame(render);\n    window.removeEventListener('scroll', scroll);\n    console.log(\"Cleaned up.\");\n  }\n\n  function lerp(a, b, n) {\n    return (1 - n) * a + n * b;\n  }\n\n  function scroll() {\n    scrollY = window.scrollY;\n  }\n\n  function getScrollPercent() {\n    var st = 'scrollTop';\n    var sh = 'scrollHeight';\n    return (page[st] || body[st]) / ((page[sh] || body[sh]) - page.clientHeight) * 100;\n  }\n\n  function render() {\n    try {\n      scroll();\n      body.style.height = main.current.clientHeight + 'px';\n      wrapperY = lerp(wrapperY, scrollY, 0.07);\n      wrapperY = Math.floor(wrapperY * 100) / 100;\n      pct = 100 - getScrollPercent();\n      main.current.style.transform = \"translate(0px, -\".concat(wrapperY, \"px)\");\n      progressBar.current.style.height = \"\".concat(pct, \"vh\");\n      window.requestAnimationFrame(render);\n    } catch (error) {\n      console.log(\"Failed to cleanup before next animation frame render.\\n\" + error);\n    }\n  }\n\n  function fadeIn() {\n    setTimeout(function () {\n      pageWrapper.current.style.opacity = '1';\n    }, 800);\n  }\n\n  function transitionIn() {\n    transitionOverlay.current.style.height = '0';\n    setTimeout(function () {\n      transitionOverlay.current.style.bottom = '0';\n    }, 800);\n  }\n\n  function transitionOut(e) {\n    transitionOverlay.current.style.height = '100vh';\n  }\n\n  function scrollToWork(e) {\n    console.log(contact.current.getBoundingClientRect());\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.page_wrapper,\n      ref: pageWrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar_wrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar,\n          ref: progressBar\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        topContent: [\"Jason Yang is a designer who codes.\", \"He's currently learning how to build cool things @GT.\"],\n        bottomContent: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: '#Work',\n            ref: work,\n            onClick: scrollToWork,\n            children: \"Work\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 29\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: '#About',\n            ref: about,\n            onClick: scrollToWork,\n            children: \"About\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 29\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: '#About',\n            ref: contact,\n            onClick: scrollToWork,\n            children: \"Contact\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n        ref: main,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          topContent: [\"Jason Yang is a designer who codes.\", \"He's currently learning how to build cool things @GT.\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"Work\",\n          ref: work,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"Work\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.work_section,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project_card,\n              onClick: transitionOut,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_projectCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                imgUrl: \"asset/imgs/cover_bits-of-good.jpg\",\n                title: \"Bits of Good - Helping non-profits connect with donors and volunteers.\",\n                workType: \"Product Design\",\n                workFor: \"Student Org\",\n                side: \"left\",\n                url: \"/bits_of_good\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 138,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 137,\n              columnNumber: 29\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project_card,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_projectCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                imgUrl: \"asset/imgs/cover_hackgt.jpg\",\n                title: \"HackGT - Building a useful event scheduler for our hackathon participants.\",\n                workType: \"Product Design\",\n                workFor: \"Student Org\",\n                side: \"right\",\n                url: \"/project\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 148,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 147,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"About\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 161,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 160,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"Contact\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 165,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 164,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.transition_overlay,\n      ref: transitionOverlay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz8yNGRlIl0sIm5hbWVzIjpbIkhvbWUiLCJtYWluIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJwcm9ncmVzc0JhciIsInBhZ2VXcmFwcGVyIiwidHJhbnNpdGlvbk92ZXJsYXkiLCJ3b3JrIiwiYWJvdXQiLCJjb250YWN0Iiwic2Nyb2xsWSIsIndyYXBwZXJZIiwiYm9keSIsInBhZ2UiLCJwY3QiLCJ1c2VFZmZlY3QiLCJpbml0UGFnZSIsImNsZWFudXBQYWdlIiwiZmFkZUluIiwic2V0VGltZW91dCIsInRyYW5zaXRpb25JbiIsImN1cnJlbnQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJsZXJwIiwiYSIsImIiLCJuIiwiZ2V0U2Nyb2xsUGVyY2VudCIsInN0Iiwic2giLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJ0cmFuc2Zvcm0iLCJlcnJvciIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uT3V0IiwiZSIsInNjcm9sbFRvV29yayIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0eWxlcyIsInBhZ2Vfd3JhcHBlciIsInByb2dyZXNzX2Jhcl93cmFwcGVyIiwicHJvZ3Jlc3NfYmFyIiwid29ya19zZWN0aW9uIiwicHJvamVjdF9jYXJkIiwidHJhbnNpdGlvbl9vdmVybGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ1os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QUFBLGdCQWpDSixlQXFDSTtBQUFTLFlBQUUsRUFBQyxTQUFaO0FBQUEsaUNBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWdFSTtBQUFLLGVBQVMsRUFBRUwsMERBQU0sQ0FBQ00sa0JBQXZCO0FBQTJDLFNBQUcsRUFBRXhEO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoRUo7QUFBQSxrQkFESjtBQW9FSDs7R0FuS1FOLEk7O0tBQUFBLEk7QUFxS01BLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9tZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvc2lkZWJhcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL2Fib3V0JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS9jb250YWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lkZWJhck1vYmlsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9zaWRlYmFyTW9iaWxlJztcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvbWUvcHJvamVjdENhcmQnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIGNvbnN0IHBhZ2VXcmFwcGVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgY29uc3QgdHJhbnNpdGlvbk92ZXJsYXkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBjb25zdCB3b3JrID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgY29uc3QgYWJvdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBjb25zdCBjb250YWN0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICBsZXQgc2Nyb2xsWSA9IDA7XG4gICAgbGV0IHdyYXBwZXJZID0gMDtcbiAgICBsZXQgYm9keTtcbiAgICBsZXQgcGFnZTtcbiAgICBsZXQgcGN0ID0gMDtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGluaXRQYWdlKCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhbnVwUGFnZSgpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gICAgICAgIGZhZGVJbigpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0cmFuc2l0aW9uSW4oKVxuICAgICAgICB9LCA0MDApO1xuICAgICAgICBtYWluLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBtYWluLmN1cnJlbnQuc3R5bGUudG9wID0gMDtcbiAgICAgICAgbWFpbi5jdXJyZW50LnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICBwcm9ncmVzc0Jhci5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICBwcm9ncmVzc0Jhci5jdXJyZW50LnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgcGFnZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbCk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwUGFnZSgpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGwpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNsZWFuZWQgdXAuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxlcnAoYSwgYiwgbikge1xuICAgICAgICByZXR1cm4gKDEgLSBuKSAqIGEgKyBuICogYjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgICAgIHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxQZXJjZW50KCkge1xuICAgICAgICBjb25zdCBzdCA9ICdzY3JvbGxUb3AnO1xuICAgICAgICBjb25zdCBzaCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICByZXR1cm4gKHBhZ2Vbc3RdfHxib2R5W3N0XSkgLyAoKHBhZ2Vbc2hdfHxib2R5W3NoXSkgLSBwYWdlLmNsaWVudEhlaWdodCkgKiAxMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Nyb2xsKCk7XG4gICAgICAgICAgICBib2R5LnN0eWxlLmhlaWdodCA9IG1haW4uY3VycmVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlclkgPSBsZXJwKHdyYXBwZXJZLCBzY3JvbGxZLCAwLjA3KTtcbiAgICAgICAgICAgIHdyYXBwZXJZID0gTWF0aC5mbG9vcih3cmFwcGVyWSAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgICBwY3QgPSAxMDAgLSBnZXRTY3JvbGxQZXJjZW50KCk7XG4gICAgICAgICAgICBtYWluLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwcHgsIC0ke3dyYXBwZXJZfXB4KWA7XG4gICAgICAgICAgICBwcm9ncmVzc0Jhci5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGAke3BjdH12aGA7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjbGVhbnVwIGJlZm9yZSBuZXh0IGFuaW1hdGlvbiBmcmFtZSByZW5kZXIuXFxuXCIgKyBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWRlSW4oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB9LCA4MDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbkluKCkge1xuICAgICAgICB0cmFuc2l0aW9uT3ZlcmxheS5jdXJyZW50LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uT3ZlcmxheS5jdXJyZW50LnN0eWxlLmJvdHRvbSA9ICcwJztcbiAgICAgICAgfSwgODAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25PdXQoZSkge1xuICAgICAgICB0cmFuc2l0aW9uT3ZlcmxheS5jdXJyZW50LnN0eWxlLmhlaWdodD0gJzEwMHZoJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb1dvcmsoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhjb250YWN0LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMucGFnZV93cmFwcGVyfSByZWY9e3BhZ2VXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl93cmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9IHJlZj17cHJvZ3Jlc3NCYXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIFxuICAgICAgICAgICAgICAgICAgICB0b3BDb250ZW50ID0ge1tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSmFzb24gWWFuZyBpcyBhIGRlc2lnbmVyIHdobyBjb2Rlcy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSGUncyBjdXJyZW50bHkgbGVhcm5pbmcgaG93IHRvIGJ1aWxkIGNvb2wgdGhpbmdzIEBHVC5cIlxuICAgICAgICAgICAgICAgICAgICBdfVxuXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbUNvbnRlbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycjV29yayd9IHJlZj17d29ya30gb25DbGljaz17c2Nyb2xsVG9Xb3JrfT5Xb3JrPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycjQWJvdXQnfSByZWY9e2Fib3V0fSBvbkNsaWNrPXtzY3JvbGxUb1dvcmt9PkFib3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycjQWJvdXQnfSByZWY9e2NvbnRhY3R9IG9uQ2xpY2s9e3Njcm9sbFRvV29ya30+Q29udGFjdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59IHJlZj17bWFpbn0+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyTW9iaWxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wQ29udGVudCA9IHtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJKYXNvbiBZYW5nIGlzIGEgZGVzaWduZXIgd2hvIGNvZGVzLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGUncyBjdXJyZW50bHkgbGVhcm5pbmcgaG93IHRvIGJ1aWxkIGNvb2wgdGhpbmdzIEBHVC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J1dvcmsnIHJlZj17d29ya30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+V29yazwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndvcmtfc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0X2NhcmR9IG9uQ2xpY2s9e3RyYW5zaXRpb25PdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybCA9ICdhc3NldC9pbWdzL2NvdmVyX2JpdHMtb2YtZ29vZC5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICdCaXRzIG9mIEdvb2QgLSBIZWxwaW5nIG5vbi1wcm9maXRzIGNvbm5lY3Qgd2l0aCBkb25vcnMgYW5kIHZvbHVudGVlcnMuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya1R5cGUgPSAnUHJvZHVjdCBEZXNpZ24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrRm9yID0gJ1N0dWRlbnQgT3JnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZSA9ICdsZWZ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gJy9iaXRzX29mX2dvb2QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0X2NhcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybCA9ICdhc3NldC9pbWdzL2NvdmVyX2hhY2tndC5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IFwiSGFja0dUIC0gQnVpbGRpbmcgYSB1c2VmdWwgZXZlbnQgc2NoZWR1bGVyIGZvciBvdXIgaGFja2F0aG9uIHBhcnRpY2lwYW50cy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya1R5cGUgPSAnUHJvZHVjdCBEZXNpZ24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrRm9yID0gJ1N0dWRlbnQgT3JnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZSA9ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9ICcvcHJvamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J0Fib3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBYm91dCAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J0NvbnRhY3QnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYW5zaXRpb25fb3ZlcmxheX0gcmVmPXt0cmFuc2l0aW9uT3ZlcmxheX0+PC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/index.js\n");

/***/ })

})