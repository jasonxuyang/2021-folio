webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/home/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/sidebar */ \"./components/shared/sidebar/index.js\");\n/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/about */ \"./components/home/about/index.js\");\n/* harmony import */ var _components_home_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/contact */ \"./components/home/contact/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/sidebarMobile */ \"./components/shared/sidebarMobile/index.js\");\n/* harmony import */ var _components_home_projectCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/home/projectCard */ \"./components/home/projectCard/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/home/2021-folio/pages/home/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var main = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var progressBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var pageWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n  var scrollY = 0;\n  var wrapperY = 0;\n  var body;\n  var page;\n  var pct = 0;\n  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {\n    initPage();\n    return function () {\n      cleanupPage();\n    };\n  }, []);\n\n  function initPage() {\n    fadeIn();\n    main.current.style.position = 'fixed';\n    main.current.style.top = 0;\n    main.current.style.left = 0;\n    progressBar.current.style.position = 'fixed';\n    progressBar.current.style.bottom = 0;\n    progressBar.current.style.left = 0;\n    body = document.body;\n    page = document.documentElement;\n    window.addEventListener('scroll', scroll);\n    window.requestAnimationFrame(render);\n  }\n\n  function cleanupPage() {\n    window.cancelAnimationFrame(render);\n    window.removeEventListener('scroll', scroll);\n    console.log(\"Cleaned up.\");\n  }\n\n  function lerp(a, b, n) {\n    return (1 - n) * a + n * b;\n  }\n\n  function scroll() {\n    scrollY = window.pageYOffset;\n  }\n\n  function getScrollPercent() {\n    var st = 'scrollTop';\n    var sh = 'scrollHeight';\n    return (page[st] || body[st]) / ((page[sh] || body[sh]) - page.clientHeight) * 100;\n  }\n\n  function render() {\n    try {\n      body.style.height = main.current.clientHeight + 'px';\n      wrapperY = lerp(wrapperY, scrollY, 0.07);\n      wrapperY = Math.floor(wrapperY * 100) / 100;\n      pct = 100 - getScrollPercent();\n      main.current.style.transform = \"translate(0px, -\".concat(wrapperY, \"px)\");\n      progressBar.current.style.height = \"\".concat(pct, \"vh\");\n      window.requestAnimationFrame(render);\n    } catch (error) {\n      console.log(\"Failed to cleanup before next animation frame render.\\n\" + error);\n    }\n  }\n\n  function fadeIn() {\n    setTimeout(function () {\n      pageWrapper.current.style.opacity = '1';\n    }, 800);\n  }\n\n  function moveTo() {}\n\n  function handleClick(e) {\n    e.preventDefault();\n    console.log(\"Hello\");\n    router.push(e.href);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.page_wrapper,\n      ref: pageWrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar_wrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar,\n          ref: progressBar\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        topContent: [\"Jason Yang is a designer who codes.\", \"He's currently learning how to build cool things @GT.\"],\n        bottomLinks: ['Work', 'About', 'Contact']\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n        ref: main,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          topContent: [\"Jason Yang is a designer who codes.\", \"He's currently learning how to build cool things @GT.\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"Work\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"Work\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.work_section,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project_card,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_projectCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                imgUrl: \"asset/imgs/cover_bits-of-good.jpg\",\n                title: \"Bits of Good - Helping non-profits connect with donors and volunteers.\",\n                workType: \"Product Design\",\n                workFor: \"Student Org\",\n                side: \"left\",\n                url: \"/bits_of_good\",\n                handleClick: handleClick\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 124,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 29\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project_card,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_projectCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                imgUrl: \"asset/imgs/cover_hackgt.jpg\",\n                title: \"HackGT - Building a useful event scheduler for our hackathon participants.\",\n                workType: \"Product Design\",\n                workFor: \"Student Org\",\n                side: \"right\",\n                url: \"/project\",\n                handleClick: handleClick\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 135,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"About\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 149,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 148,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"Contact\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n\n_s(Home, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz8yNGRlIl0sIm5hbWVzIjpbIkhvbWUiLCJtYWluIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJwcm9ncmVzc0JhciIsInBhZ2VXcmFwcGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwic2Nyb2xsWSIsIndyYXBwZXJZIiwiYm9keSIsInBhZ2UiLCJwY3QiLCJ1c2VFZmZlY3QiLCJpbml0UGFnZSIsImNsZWFudXBQYWdlIiwiZmFkZUluIiwiY3VycmVudCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImxlcnAiLCJhIiwiYiIsIm4iLCJwYWdlWU9mZnNldCIsImdldFNjcm9sbFBlcmNlbnQiLCJzdCIsInNoIiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0IiwiTWF0aCIsImZsb29yIiwidHJhbnNmb3JtIiwiZXJyb3IiLCJzZXRUaW1lb3V0Iiwib3BhY2l0eSIsIm1vdmVUbyIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImhyZWYiLCJzdHlsZXMiLCJwYWdlX3dyYXBwZXIiLCJwcm9ncmVzc19iYXJfd3JhcHBlciIsInByb2dyZXNzX2JhciIsIndvcmtfc2VjdGlvbiIsInByb2plY3RfY2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDWixNQUFNQyxJQUFJLGdCQUFHQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQWI7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QUMsT0FBWjtBQUFBLGlDQUNJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5DSixlQXVDSTtBQUFTLFlBQUUsRUFBQyxTQUFaO0FBQUEsaUNBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQW1FSDs7R0F0SlFuRCxJO1VBSVVPLHFEOzs7S0FKVlAsSTtBQXdKTUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9zaWRlYmFyJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvbWUvYWJvdXQnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL2NvbnRhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWRlYmFyTW9iaWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXJNb2JpbGUnO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS9wcm9qZWN0Q2FyZCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBjb25zdCBwYWdlV3JhcHBlciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBsZXQgc2Nyb2xsWSA9IDA7XG4gICAgbGV0IHdyYXBwZXJZID0gMDtcbiAgICBsZXQgYm9keTtcbiAgICBsZXQgcGFnZTtcbiAgICBsZXQgcGN0ID0gMDtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGluaXRQYWdlKCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhbnVwUGFnZSgpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gICAgICAgIGZhZGVJbigpO1xuICAgICAgICBtYWluLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBtYWluLmN1cnJlbnQuc3R5bGUudG9wID0gMDtcbiAgICAgICAgbWFpbi5jdXJyZW50LnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICBwcm9ncmVzc0Jhci5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICBwcm9ncmVzc0Jhci5jdXJyZW50LnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgcGFnZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbCk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwUGFnZSgpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGwpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNsZWFuZWQgdXAuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxlcnAoYSwgYiwgbikge1xuICAgICAgICByZXR1cm4gKDEgLSBuKSAqIGEgKyBuICogYjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgICAgIHNjcm9sbFkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsUGVyY2VudCgpIHtcbiAgICAgICAgY29uc3Qgc3QgPSAnc2Nyb2xsVG9wJztcbiAgICAgICAgY29uc3Qgc2ggPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgcmV0dXJuIChwYWdlW3N0XXx8Ym9keVtzdF0pIC8gKChwYWdlW3NoXXx8Ym9keVtzaF0pIC0gcGFnZS5jbGllbnRIZWlnaHQpICogMTAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuaGVpZ2h0ID0gbWFpbi5jdXJyZW50LmNsaWVudEhlaWdodCArICdweCc7XG4gICAgICAgICAgICB3cmFwcGVyWSA9IGxlcnAod3JhcHBlclksIHNjcm9sbFksIDAuMDcpO1xuICAgICAgICAgICAgd3JhcHBlclkgPSBNYXRoLmZsb29yKHdyYXBwZXJZICogMTAwKSAvIDEwMDtcbiAgICAgICAgICAgIHBjdCA9IDEwMCAtIGdldFNjcm9sbFBlcmNlbnQoKTtcbiAgICAgICAgICAgIG1haW4uY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDBweCwgLSR7d3JhcHBlcll9cHgpYDtcbiAgICAgICAgICAgIHByb2dyZXNzQmFyLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7cGN0fXZoYDtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGNsZWFudXAgYmVmb3JlIG5leHQgYW5pbWF0aW9uIGZyYW1lIHJlbmRlci5cXG5cIiArIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZhZGVJbigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwYWdlV3JhcHBlci5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIH0sIDgwMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlVG8oKSB7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsb1wiKTtcbiAgICAgICAgcm91dGVyLnB1c2goZS5ocmVmKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLnBhZ2Vfd3JhcHBlcn0gcmVmPXtwYWdlV3JhcHBlcn0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl93cmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9IHJlZj17cHJvZ3Jlc3NCYXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgXG4gICAgICAgICAgICAgICAgICAgIHRvcENvbnRlbnQgPSB7W1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJKYXNvbiBZYW5nIGlzIGEgZGVzaWduZXIgd2hvIGNvZGVzLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJIZSdzIGN1cnJlbnRseSBsZWFybmluZyBob3cgdG8gYnVpbGQgY29vbCB0aGluZ3MgQEdULlwiXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbUxpbmtzID0ge1tcbiAgICAgICAgICAgICAgICAgICAgICAgICdXb3JrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdBYm91dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGFjdCcsXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0gcmVmPXttYWlufT5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJNb2JpbGUgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BDb250ZW50ID0ge1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkphc29uIFlhbmcgaXMgYSBkZXNpZ25lciB3aG8gY29kZXMuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIZSdzIGN1cnJlbnRseSBsZWFybmluZyBob3cgdG8gYnVpbGQgY29vbCB0aGluZ3MgQEdULlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD0nV29yayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+V29yazwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndvcmtfc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0X2NhcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybCA9ICdhc3NldC9pbWdzL2NvdmVyX2JpdHMtb2YtZ29vZC5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICdCaXRzIG9mIEdvb2QgLSBIZWxwaW5nIG5vbi1wcm9maXRzIGNvbm5lY3Qgd2l0aCBkb25vcnMgYW5kIHZvbHVudGVlcnMuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya1R5cGUgPSAnUHJvZHVjdCBEZXNpZ24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrRm9yID0gJ1N0dWRlbnQgT3JnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZSA9ICdsZWZ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gJy9iaXRzX29mX2dvb2QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljayA9IHtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RfY2FyZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsID0gJ2Fzc2V0L2ltZ3MvY292ZXJfaGFja2d0LmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gXCJIYWNrR1QgLSBCdWlsZGluZyBhIHVzZWZ1bCBldmVudCBzY2hlZHVsZXIgZm9yIG91ciBoYWNrYXRob24gcGFydGljaXBhbnRzLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrVHlwZSA9ICdQcm9kdWN0IERlc2lnbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtGb3IgPSAnU3R1ZGVudCBPcmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlID0gJ3JpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gJy9wcm9qZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdBYm91dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWJvdXQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdDb250YWN0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/index.js\n");

/***/ })

})