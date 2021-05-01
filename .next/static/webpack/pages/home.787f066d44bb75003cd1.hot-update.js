webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/home/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/sidebar */ \"./components/shared/sidebar/index.js\");\n/* harmony import */ var _components_home_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/work */ \"./components/home/work/index.js\");\n/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/about */ \"./components/home/about/index.js\");\n/* harmony import */ var _components_home_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/home/contact */ \"./components/home/contact/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shared/sidebarMobile */ \"./components/shared/sidebarMobile/index.js\");\n/* harmony import */ var _components_home_projectCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/home/projectCard */ \"./components/home/projectCard/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/home/2021-folio/pages/home/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var main = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();\n  var progressBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();\n  var pageWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();\n  var scrollY = 0;\n  var wrapperY = 0;\n  var body;\n  var page;\n  var pct = 0;\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    initPage();\n    return function () {\n      cleanupPage();\n    };\n  }, []);\n\n  function initPage() {\n    fadeIn();\n    main.current.style.position = 'fixed';\n    main.current.style.top = 0;\n    main.current.style.left = 0;\n    progressBar.current.style.position = 'fixed';\n    progressBar.current.style.bottom = 0;\n    progressBar.current.style.left = 0;\n    body = document.body;\n    page = document.documentElement;\n    window.addEventListener('scroll', scroll);\n    window.requestAnimationFrame(render);\n  }\n\n  function cleanupPage() {\n    window.cancelAnimationFrame(render);\n    window.removeEventListener('scroll', scroll);\n    console.log(\"Cleaned up.\");\n  }\n\n  function lerp(a, b, n) {\n    return (1 - n) * a + n * b;\n  }\n\n  function scroll() {\n    scrollY = window.pageYOffset;\n  }\n\n  function getScrollPercent() {\n    var st = 'scrollTop';\n    var sh = 'scrollHeight';\n    return (page[st] || body[st]) / ((page[sh] || body[sh]) - page.clientHeight) * 100;\n  }\n\n  function render() {\n    try {\n      body.style.height = main.current.clientHeight + 'px';\n      wrapperY = lerp(wrapperY, scrollY, 0.07);\n      wrapperY = Math.floor(wrapperY * 100) / 100;\n      pct = 100 - getScrollPercent();\n      main.current.style.transform = \"translate(0px, -\".concat(wrapperY, \"px)\");\n      progressBar.current.style.height = \"\".concat(pct, \"vh\");\n      window.requestAnimationFrame(render);\n    } catch (error) {\n      console.log(\"Failed to cleanup before next animation frame render.\\n\" + error);\n    }\n  }\n\n  function fadeIn() {\n    setTimeout(function () {\n      pageWrapper.current.style.opacity = '1';\n    }, 800);\n  }\n\n  function moveTo() {}\n\n  function handleClick(e) {\n    e.preventDefault();\n    console.log(\"Hello\");\n    router.push(e.href);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.page_wrapper,\n      ref: pageWrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar_wrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar,\n          ref: progressBar\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        topContent: [\"Jason Yang is a designer who codes.\", \"He's currently learning how to build cool things @GT.\"],\n        bottomLinks: ['Work', 'About', 'Contact']\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n        ref: main,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          topContent: [\"Jason Yang is a designer who codes.\", \"He's currently learning how to build cool things @GT.\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"Work\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"Work\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.work_section,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project_card,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_projectCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                imgUrl: \"asset/imgs/cover_bits-of-good.jpg\",\n                title: \"Bits of Good - Helping non-profits connect with donors and volunteers.\",\n                workType: \"Product Design\",\n                workFor: \"Student Org\",\n                side: \"left\",\n                url: \"/bits_of_good\",\n                handleClick: handleClick\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 123,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 29\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project_card,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_projectCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                imgUrl: \"asset/imgs/cover_hackgt.jpg\",\n                title: \"HackGT - Building a useful event scheduler for our hackathon participants.\",\n                workType: \"Product Design\",\n                workFor: \"Student Org\",\n                side: \"right\",\n                url: \"/project\",\n                handleClick: handleClick\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 134,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 133,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"About\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 148,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"Contact\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 152,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz8yNGRlIl0sIm5hbWVzIjpbIkhvbWUiLCJtYWluIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJwcm9ncmVzc0JhciIsInBhZ2VXcmFwcGVyIiwic2Nyb2xsWSIsIndyYXBwZXJZIiwiYm9keSIsInBhZ2UiLCJwY3QiLCJ1c2VFZmZlY3QiLCJpbml0UGFnZSIsImNsZWFudXBQYWdlIiwiZmFkZUluIiwiY3VycmVudCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImxlcnAiLCJhIiwiYiIsIm4iLCJwYWdlWU9mZnNldCIsImdldFNjcm9sbFBlcmNlbnQiLCJzdCIsInNoIiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0IiwiTWF0aCIsImZsb29yIiwidHJhbnNmb3JtIiwiZXJyb3IiLCJzZXRUaW1lb3V0Iiwib3BhY2l0eSIsIm1vdmVUbyIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwicm91dGVyIiwicHVzaCIsImhyZWYiLCJzdHlsZXMiLCJwYWdlX3dyYXBwZXIiLCJwcm9ncmVzc19iYXJfd3JhcHBlciIsInByb2dyZXNzX2JhciIsIndvcmtfc2VjdGlvbiIsInByb2plY3RfY2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUNaLE1BQU1DLElBQUksZ0JBQUdDLDRDQUFLLENBQUNDLFNBQU4sRUFBYjtBQUNBLE1BQU1DLFdB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SjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5DSixlQXVDSTtBQUFTLFlBQUUsRUFBQyxTQUFaO0FBQUEsaUNBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQW1FSDs7R0FySlFqRCxJOztLQUFBQSxJO0FBdUpNQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2hvbWUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXInO1xuaW1wb3J0IFdvcmsgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL3dvcmsnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS9hYm91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvbWUvY29udGFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZGViYXJNb2JpbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvc2lkZWJhck1vYmlsZSc7XG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL3Byb2plY3RDYXJkJztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBjb25zdCBwYWdlV3JhcHBlciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgbGV0IHNjcm9sbFkgPSAwO1xuICAgIGxldCB3cmFwcGVyWSA9IDA7XG4gICAgbGV0IGJvZHk7XG4gICAgbGV0IHBhZ2U7XG4gICAgbGV0IHBjdCA9IDA7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpbml0UGFnZSgpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYW51cFBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGZ1bmN0aW9uIGluaXRQYWdlKCkge1xuICAgICAgICBmYWRlSW4oKTtcbiAgICAgICAgbWFpbi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgbWFpbi5jdXJyZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgIG1haW4uY3VycmVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHByb2dyZXNzQmFyLmN1cnJlbnQuc3R5bGUuYm90dG9tID0gMDtcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIHBhZ2UgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGwpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cFBhZ2UoKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDbGVhbmVkIHVwLlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZXJwKGEsIGIsIG4pIHtcbiAgICAgICAgcmV0dXJuICgxIC0gbikgKiBhICsgbiAqIGI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgICBzY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbFBlcmNlbnQoKSB7XG4gICAgICAgIGNvbnN0IHN0ID0gJ3Njcm9sbFRvcCc7XG4gICAgICAgIGNvbnN0IHNoID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHJldHVybiAocGFnZVtzdF18fGJvZHlbc3RdKSAvICgocGFnZVtzaF18fGJvZHlbc2hdKSAtIHBhZ2UuY2xpZW50SGVpZ2h0KSAqIDEwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBib2R5LnN0eWxlLmhlaWdodCA9IG1haW4uY3VycmVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlclkgPSBsZXJwKHdyYXBwZXJZLCBzY3JvbGxZLCAwLjA3KTtcbiAgICAgICAgICAgIHdyYXBwZXJZID0gTWF0aC5mbG9vcih3cmFwcGVyWSAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgICBwY3QgPSAxMDAgLSBnZXRTY3JvbGxQZXJjZW50KCk7XG4gICAgICAgICAgICBtYWluLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwcHgsIC0ke3dyYXBwZXJZfXB4KWA7XG4gICAgICAgICAgICBwcm9ncmVzc0Jhci5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGAke3BjdH12aGA7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjbGVhbnVwIGJlZm9yZSBuZXh0IGFuaW1hdGlvbiBmcmFtZSByZW5kZXIuXFxuXCIgKyBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWRlSW4oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB9LCA4MDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVRvKCkge1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG9cIik7XG4gICAgICAgIHJvdXRlci5wdXNoKGUuaHJlZik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5wYWdlX3dyYXBwZXJ9IHJlZj17cGFnZVdyYXBwZXJ9PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfd3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfSByZWY9e3Byb2dyZXNzQmFyfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIFxuICAgICAgICAgICAgICAgICAgICB0b3BDb250ZW50ID0ge1tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSmFzb24gWWFuZyBpcyBhIGRlc2lnbmVyIHdobyBjb2Rlcy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSGUncyBjdXJyZW50bHkgbGVhcm5pbmcgaG93IHRvIGJ1aWxkIGNvb2wgdGhpbmdzIEBHVC5cIlxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBib3R0b21MaW5rcyA9IHtbXG4gICAgICAgICAgICAgICAgICAgICAgICAnV29yaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQWJvdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRhY3QnLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59IHJlZj17bWFpbn0+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyTW9iaWxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wQ29udGVudCA9IHtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJKYXNvbiBZYW5nIGlzIGEgZGVzaWduZXIgd2hvIGNvZGVzLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGUncyBjdXJyZW50bHkgbGVhcm5pbmcgaG93IHRvIGJ1aWxkIGNvb2wgdGhpbmdzIEBHVC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J1dvcmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPldvcms8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53b3JrX3NlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdF9jYXJkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmwgPSAnYXNzZXQvaW1ncy9jb3Zlcl9iaXRzLW9mLWdvb2QuanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSAnQml0cyBvZiBHb29kIC0gSGVscGluZyBub24tcHJvZml0cyBjb25uZWN0IHdpdGggZG9ub3JzIGFuZCB2b2x1bnRlZXJzLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtUeXBlID0gJ1Byb2R1Y3QgRGVzaWduJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya0ZvciA9ICdTdHVkZW50IE9yZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGUgPSAnbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9ICcvYml0c19vZl9nb29kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0X2NhcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybCA9ICdhc3NldC9pbWdzL2NvdmVyX2hhY2tndC5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IFwiSGFja0dUIC0gQnVpbGRpbmcgYSB1c2VmdWwgZXZlbnQgc2NoZWR1bGVyIGZvciBvdXIgaGFja2F0aG9uIHBhcnRpY2lwYW50cy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya1R5cGUgPSAnUHJvZHVjdCBEZXNpZ24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrRm9yID0gJ1N0dWRlbnQgT3JnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZSA9ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9ICcvcHJvamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrID0ge2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD0nQWJvdXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFib3V0IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD0nQ29udGFjdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home/index.js\n");

/***/ })

})