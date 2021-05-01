webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/home/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/sidebar */ \"./components/shared/sidebar/index.js\");\n/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/about */ \"./components/home/about/index.js\");\n/* harmony import */ var _components_home_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/contact */ \"./components/home/contact/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/sidebarMobile */ \"./components/shared/sidebarMobile/index.js\");\n/* harmony import */ var _components_home_projectCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/home/projectCard */ \"./components/home/projectCard/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/home/2021-folio/pages/home/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var main = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var progressBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var pageWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var transitionOverlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var work = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var about = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var contact = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var scrollY = 0;\n  var wrapperY = 0;\n  var body;\n  var page;\n  var pct = 0;\n  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {\n    initPage();\n    return function () {\n      cleanupPage();\n    };\n  }, []);\n\n  function initPage() {\n    fadeIn();\n    setTimeout(function () {\n      transitionIn();\n    }, 400);\n    main.current.style.position = 'fixed';\n    main.current.style.top = 0;\n    main.current.style.left = 0;\n    progressBar.current.style.position = 'fixed';\n    progressBar.current.style.bottom = 0;\n    progressBar.current.style.left = 0;\n    body = document.body;\n    page = document.documentElement;\n    window.addEventListener('scroll', scroll);\n    window.requestAnimationFrame(render);\n  }\n\n  function cleanupPage() {\n    window.cancelAnimationFrame(render);\n    window.removeEventListener('scroll', scroll);\n    console.log(\"Cleaned up.\");\n  }\n\n  function lerp(a, b, n) {\n    return (1 - n) * a + n * b;\n  }\n\n  function scroll() {\n    scrollY = window.pageYOffset;\n  }\n\n  function getScrollPercent() {\n    var st = 'scrollTop';\n    var sh = 'scrollHeight';\n    return (page[st] || body[st]) / ((page[sh] || body[sh]) - page.clientHeight) * 100;\n  }\n\n  function render() {\n    try {\n      scroll();\n      body.style.height = main.current.clientHeight + 'px';\n      wrapperY = lerp(wrapperY, scrollY, 0.07);\n      wrapperY = Math.floor(wrapperY * 100) / 100;\n      pct = 100 - getScrollPercent();\n      main.current.style.transform = \"translate(0px, -\".concat(wrapperY, \"px)\");\n      progressBar.current.style.height = \"\".concat(pct, \"vh\");\n      window.requestAnimationFrame(render);\n    } catch (error) {\n      console.log(\"Failed to cleanup before next animation frame render.\\n\" + error);\n    }\n  }\n\n  function fadeIn() {\n    setTimeout(function () {\n      pageWrapper.current.style.opacity = '1';\n    }, 800);\n  }\n\n  function transitionIn() {\n    transitionOverlay.current.style.height = '0';\n    setTimeout(function () {\n      transitionOverlay.current.style.bottom = '0';\n    }, 800);\n  }\n\n  function transitionOut(e) {\n    transitionOverlay.current.style.height = '100vh';\n  }\n\n  function scrollToWork(e) {\n    console.log(contact.current.getBoundingClientRect());\n    console.log(window.scrollY);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.page_wrapper,\n      ref: pageWrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar_wrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar,\n          ref: progressBar\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        topContent: [\"Jason Yang is a designer who codes.\", \"He's currently learning how to build cool things @GT.\"],\n        bottomContent: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: '#Work',\n            ref: work,\n            onClick: scrollToWork,\n            children: \"Work\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 29\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: '#About',\n            ref: about,\n            onClick: scrollToWork,\n            children: \"About\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 29\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: '#About',\n            ref: contact,\n            onClick: scrollToWork,\n            children: \"Contact\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n        ref: main,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          topContent: [\"Jason Yang is a designer who codes.\", \"He's currently learning how to build cool things @GT.\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"Work\",\n          ref: work,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"Work\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.work_section,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project_card,\n              onClick: transitionOut,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_projectCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                imgUrl: \"asset/imgs/cover_bits-of-good.jpg\",\n                title: \"Bits of Good - Helping non-profits connect with donors and volunteers.\",\n                workType: \"Product Design\",\n                workFor: \"Student Org\",\n                side: \"left\",\n                url: \"/bits_of_good\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 141,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 29\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project_card,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_projectCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                imgUrl: \"asset/imgs/cover_hackgt.jpg\",\n                title: \"HackGT - Building a useful event scheduler for our hackathon participants.\",\n                workType: \"Product Design\",\n                workFor: \"Student Org\",\n                side: \"right\",\n                url: \"/project\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 151,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 150,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"About\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 164,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 163,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"Contact\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 168,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 167,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.transition_overlay,\n      ref: transitionOverlay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz8yNGRlIl0sIm5hbWVzIjpbIkhvbWUiLCJtYWluIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJwcm9ncmVzc0JhciIsInBhZ2VXcmFwcGVyIiwidHJhbnNpdGlvbk92ZXJsYXkiLCJ3b3JrIiwiYWJvdXQiLCJjb250YWN0Iiwic2Nyb2xsWSIsIndyYXBwZXJZIiwiYm9keSIsInBhZ2UiLCJwY3QiLCJ1c2VFZmZlY3QiLCJpbml0UGFnZSIsImNsZWFudXBQYWdlIiwiZmFkZUluIiwic2V0VGltZW91dCIsInRyYW5zaXRpb25JbiIsImN1cnJlbnQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJsZXJwIiwiYSIsImIiLCJuIiwicGFnZVlPZmZzZXQiLCJnZXRTY3JvbGxQZXJjZW50Iiwic3QiLCJzaCIsImNsaWVudEhlaWdodCIsImhlaWdodCIsIk1hdGgiLCJmbG9vciIsInRyYW5zZm9ybSIsImVycm9yIiwib3BhY2l0eSIsInRyYW5zaXRpb25PdXQiLCJlIiwic2Nyb2xsVG9Xb3JrIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic3R5bGVzIiwicGFnZV93cmFwcGVyIiwicHJvZ3Jlc3NfYmFyX3dyYXBwZXIiLCJwcm9ncmVzc19iYXIiLCJ3b3JrX3NlY3Rpb24iLCJwcm9qZWN0X2NhcmQiLCJ0cmFuc2l0aW9uX292ZXJsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FB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LGlDQUNJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpDSixlQXFDSTtBQUFTLFlBQUUsRUFBQyxTQUFaO0FBQUEsaUNBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWdFSTtBQUFLLGVBQVMsRUFBRUwsMERBQU0sQ0FBQ00sa0JBQXZCO0FBQTJDLFNBQUcsRUFBRXpEO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoRUo7QUFBQSxrQkFESjtBQW9FSDs7R0F0S1FOLEk7O0tBQUFBLEk7QUF3S01BLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9tZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvc2lkZWJhcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL2Fib3V0JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS9jb250YWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lkZWJhck1vYmlsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9zaWRlYmFyTW9iaWxlJztcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvbWUvcHJvamVjdENhcmQnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIGNvbnN0IHBhZ2VXcmFwcGVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgY29uc3QgdHJhbnNpdGlvbk92ZXJsYXkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBjb25zdCB3b3JrID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgY29uc3QgYWJvdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBjb25zdCBjb250YWN0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICBsZXQgc2Nyb2xsWSA9IDA7XG4gICAgbGV0IHdyYXBwZXJZID0gMDtcbiAgICBsZXQgYm9keTtcbiAgICBsZXQgcGFnZTtcbiAgICBsZXQgcGN0ID0gMDtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGluaXRQYWdlKCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhbnVwUGFnZSgpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gICAgICAgIGZhZGVJbigpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0cmFuc2l0aW9uSW4oKVxuICAgICAgICB9LCA0MDApO1xuICAgICAgICBtYWluLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBtYWluLmN1cnJlbnQuc3R5bGUudG9wID0gMDtcbiAgICAgICAgbWFpbi5jdXJyZW50LnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICBwcm9ncmVzc0Jhci5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICBwcm9ncmVzc0Jhci5jdXJyZW50LnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgcGFnZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbCk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwUGFnZSgpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGwpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNsZWFuZWQgdXAuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxlcnAoYSwgYiwgbikge1xuICAgICAgICByZXR1cm4gKDEgLSBuKSAqIGEgKyBuICogYjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgICAgIHNjcm9sbFkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsUGVyY2VudCgpIHtcbiAgICAgICAgY29uc3Qgc3QgPSAnc2Nyb2xsVG9wJztcbiAgICAgICAgY29uc3Qgc2ggPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgcmV0dXJuIChwYWdlW3N0XXx8Ym9keVtzdF0pIC8gKChwYWdlW3NoXXx8Ym9keVtzaF0pIC0gcGFnZS5jbGllbnRIZWlnaHQpICogMTAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNjcm9sbCgpO1xuICAgICAgICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSBtYWluLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXJZID0gbGVycCh3cmFwcGVyWSwgc2Nyb2xsWSwgMC4wNyk7XG4gICAgICAgICAgICB3cmFwcGVyWSA9IE1hdGguZmxvb3Iod3JhcHBlclkgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgcGN0ID0gMTAwIC0gZ2V0U2Nyb2xsUGVyY2VudCgpO1xuICAgICAgICAgICAgbWFpbi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMHB4LCAtJHt3cmFwcGVyWX1weClgO1xuICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBgJHtwY3R9dmhgO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gY2xlYW51cCBiZWZvcmUgbmV4dCBhbmltYXRpb24gZnJhbWUgcmVuZGVyLlxcblwiICsgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmFkZUluKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBhZ2VXcmFwcGVyLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgfSwgODAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25JbigpIHtcbiAgICAgICAgdHJhbnNpdGlvbk92ZXJsYXkuY3VycmVudC5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbk92ZXJsYXkuY3VycmVudC5zdHlsZS5ib3R0b20gPSAnMCc7XG4gICAgICAgIH0sIDgwMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uT3V0KGUpIHtcbiAgICAgICAgdHJhbnNpdGlvbk92ZXJsYXkuY3VycmVudC5zdHlsZS5oZWlnaHQ9ICcxMDB2aCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9Xb3JrKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coY29udGFjdC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LnNjcm9sbFkpO1xuICAgICAgICBcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMucGFnZV93cmFwcGVyfSByZWY9e3BhZ2VXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl93cmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9IHJlZj17cHJvZ3Jlc3NCYXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIFxuICAgICAgICAgICAgICAgICAgICB0b3BDb250ZW50ID0ge1tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSmFzb24gWWFuZyBpcyBhIGRlc2lnbmVyIHdobyBjb2Rlcy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSGUncyBjdXJyZW50bHkgbGVhcm5pbmcgaG93IHRvIGJ1aWxkIGNvb2wgdGhpbmdzIEBHVC5cIlxuICAgICAgICAgICAgICAgICAgICBdfVxuXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbUNvbnRlbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycjV29yayd9IHJlZj17d29ya30gb25DbGljaz17c2Nyb2xsVG9Xb3JrfT5Xb3JrPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycjQWJvdXQnfSByZWY9e2Fib3V0fSBvbkNsaWNrPXtzY3JvbGxUb1dvcmt9PkFib3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycjQWJvdXQnfSByZWY9e2NvbnRhY3R9IG9uQ2xpY2s9e3Njcm9sbFRvV29ya30+Q29udGFjdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59IHJlZj17bWFpbn0+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyTW9iaWxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wQ29udGVudCA9IHtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJKYXNvbiBZYW5nIGlzIGEgZGVzaWduZXIgd2hvIGNvZGVzLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGUncyBjdXJyZW50bHkgbGVhcm5pbmcgaG93IHRvIGJ1aWxkIGNvb2wgdGhpbmdzIEBHVC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J1dvcmsnIHJlZj17d29ya30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+V29yazwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndvcmtfc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0X2NhcmR9IG9uQ2xpY2s9e3RyYW5zaXRpb25PdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybCA9ICdhc3NldC9pbWdzL2NvdmVyX2JpdHMtb2YtZ29vZC5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICdCaXRzIG9mIEdvb2QgLSBIZWxwaW5nIG5vbi1wcm9maXRzIGNvbm5lY3Qgd2l0aCBkb25vcnMgYW5kIHZvbHVudGVlcnMuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya1R5cGUgPSAnUHJvZHVjdCBEZXNpZ24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrRm9yID0gJ1N0dWRlbnQgT3JnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZSA9ICdsZWZ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gJy9iaXRzX29mX2dvb2QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0X2NhcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybCA9ICdhc3NldC9pbWdzL2NvdmVyX2hhY2tndC5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IFwiSGFja0dUIC0gQnVpbGRpbmcgYSB1c2VmdWwgZXZlbnQgc2NoZWR1bGVyIGZvciBvdXIgaGFja2F0aG9uIHBhcnRpY2lwYW50cy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya1R5cGUgPSAnUHJvZHVjdCBEZXNpZ24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrRm9yID0gJ1N0dWRlbnQgT3JnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZSA9ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9ICcvcHJvamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J0Fib3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBYm91dCAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J0NvbnRhY3QnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYW5zaXRpb25fb3ZlcmxheX0gcmVmPXt0cmFuc2l0aW9uT3ZlcmxheX0+PC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/index.js\n");

/***/ })

})