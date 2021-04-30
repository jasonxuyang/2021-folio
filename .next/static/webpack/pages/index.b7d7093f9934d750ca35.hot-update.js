webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/home/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/sidebar */ \"./components/shared/sidebar/index.js\");\n/* harmony import */ var _components_home_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/work */ \"./components/home/work/index.js\");\n/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/about */ \"./components/home/about/index.js\");\n/* harmony import */ var _components_home_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/home/contact */ \"./components/home/contact/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shared/sidebarMobile */ \"./components/shared/sidebarMobile/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/home/2021-folio/pages/home/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var pageWrapper = react__WEBPACK_IMPORTED_MODULE_6___default.a.useRef(null);\n  var progressBar = react__WEBPACK_IMPORTED_MODULE_6___default.a.useRef(null);\n  var scrollY = 0;\n  var wrapperY = 0;\n  var body;\n  var document;\n  var pct = 0;\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    pageWrapper.current.style.position = 'fixed';\n    pageWrapper.current.style.top = 0;\n    pageWrapper.current.style.left = 0;\n    progressBar.current.style.position = 'fixed';\n    progressBar.current.style.bottom = 0;\n    progressBar.current.style.left = 0;\n    body = document.body;\n    document = document.documentElement;\n    window.addEventListener('scroll', scroll);\n    window.requestAnimationFrame(render);\n    return function cleanup() {\n      window.cancelAnimationFrame(render);\n      window.removeEventListener('scroll', scroll);\n      console.log(\"Cleaned up.\");\n    };\n  });\n\n  function lerp(a, b, n) {\n    return (1 - n) * a + n * b;\n  }\n\n  function scroll() {\n    scrollY = window.pageYOffset;\n  }\n\n  function getScrollPercent() {\n    var h = document.documentElement,\n        b = body;\n    st = 'scrollTop', sh = 'scrollHeight';\n    return (document[st] || body[st]) / ((document[sh] || body[sh]) - document.clientHeight) * 100;\n  }\n\n  function render() {\n    try {\n      body.style.height = pageWrapper.current.clientHeight + 'px';\n      wrapperY = lerp(wrapperY, scrollY, 0.07);\n      wrapperY = Math.floor(wrapperY * 100) / 100;\n      pct = 100 - getScrollPercent;\n      pageWrapper.current.style.transform = \"translate(0px, -\".concat(wrapperY, \"px)\");\n      progressBar.current.style.height = \"\".concat(pct, \"vh\");\n      window.requestAnimationFrame(render);\n    } catch (error) {\n      console.log(\"Failed to cleanup before next animation frame render.\\n\" + error);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar_wrapper,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar,\n        ref: progressBar\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      topContent: [\"Jason Yang\", \"I'm a designer who likes to code.\", \"Currently learning how to build cool things @GT.\"],\n      bottomLinks: ['Work', 'About', 'Contact']\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n      ref: pageWrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        topContent: [\"Jason Yang\", \"I'm a designer who likes to code.\", \"Currently learning how to build cool things @GT.\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"Work\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_work__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"About\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"Contact\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"XmeUV0cMvGsEDL0sIiE1YDue/Cs=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz8yNGRlIl0sIm5hbWVzIjpbIkhvbWUiLCJwYWdlV3JhcHBlciIsIlJlYWN0IiwidXNlUmVmIiwicHJvZ3Jlc3NCYXIiLCJzY3JvbGxZIiwid3JhcHBlclkiLCJib2R5IiwiZG9jdW1lbnQiLCJwY3QiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJkb2N1bWVudEVsZW1lbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiY2xlYW51cCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJsZXJwIiwiYSIsImIiLCJuIiwicGFnZVlPZmZzZXQiLCJnZXRTY3JvbGxQZXJjZW50IiwiaCIsInN0Iiwic2giLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJ0cmFuc2Zvcm0iLCJlcnJvciIsInN0eWxlcyIsInByb2dyZXNzX2Jhcl93cmFwcGVyIiwicHJvZ3Jlc3NfYmFyIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUNaLE1BQU1DLFdBQVcsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhLElBQWIsQ0FBcEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdGLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxJQUFiLENBQXBCO0FBQ0EsTUFBSUUsT0FBTyxHQUFHLENBQWQ7QUFDQSxNQUFJQyxRQUFRLEdBQUcsQ0FBZjtBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxRQUFKO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLENBQVY7QUFFQVAsOENB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Q0k7QUFBSyxpQkFBUyxFQUFFRCwwREFBTSxDQUFDRSxZQUF2QjtBQUFxQyxXQUFHLEVBQUV6QztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0kscUVBQUMsa0VBQUQ7QUFDSSxnQkFBVSxFQUFJLENBQ1YsWUFEVSxFQUVWLG1DQUZVLEVBR1Ysa0RBSFUsQ0FEbEI7QUFNSSxpQkFBVyxFQUFJLENBQ1gsTUFEVyxFQUVYLE9BRlcsRUFHWCxTQUhXO0FBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQWlCSTtBQUFLLGVBQVMsRUFBRXVDLDBEQUFNLENBQUNHLElBQXZCO0FBQTZCLFNBQUcsRUFBRTdDLFdBQWxDO0FBQUEsOEJBQ0kscUVBQUMsd0VBQUQ7QUFDSSxrQkFBVSxFQUFJLENBQ1YsWUFEVSxFQUVWLG1DQUZVLEVBR1Ysa0RBSFU7QUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBUUk7QUFBUyxVQUFFLEVBQUMsTUFBWjtBQUFBLCtCQUNJLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosZUFZSTtBQUFTLFVBQUUsRUFBQyxPQUFaO0FBQUEsK0JBQ0kscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSixlQWdCSTtBQUFTLFVBQUUsRUFBQyxTQUFaO0FBQUEsK0JBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKO0FBQUEsa0JBREo7QUF3Q0g7O0dBbEdRRCxJOztLQUFBQSxJO0FBb0dNQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2hvbWUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXInO1xuaW1wb3J0IFdvcmsgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL3dvcmsnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS9hYm91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvbWUvY29udGFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZGViYXJNb2JpbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvc2lkZWJhck1vYmlsZSc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgcGFnZVdyYXBwZXIgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgbGV0IHNjcm9sbFkgPSAwO1xuICAgIGxldCB3cmFwcGVyWSA9IDA7XG4gICAgbGV0IGJvZHk7XG4gICAgbGV0IGRvY3VtZW50O1xuICAgIGxldCBwY3QgPSAwO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHBhZ2VXcmFwcGVyLmN1cnJlbnQuc3R5bGUudG9wID0gMDtcbiAgICAgICAgcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHByb2dyZXNzQmFyLmN1cnJlbnQuc3R5bGUuYm90dG9tID0gMDtcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGRvY3VtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGVhbmVkIHVwLlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbGVycChhLCBiLCBuKSB7XG4gICAgICAgIHJldHVybiAoMSAtIG4pICogYSArIG4gKiBiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgICAgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxQZXJjZW50KCkge1xuICAgICAgICB2YXIgaCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgXG4gICAgICAgICAgICBiID0gYm9keTtcbiAgICAgICAgICAgIHN0ID0gJ3Njcm9sbFRvcCcsXG4gICAgICAgICAgICBzaCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICByZXR1cm4gKGRvY3VtZW50W3N0XXx8Ym9keVtzdF0pIC8gKChkb2N1bWVudFtzaF18fGJvZHlbc2hdKSAtIGRvY3VtZW50LmNsaWVudEhlaWdodCkgKiAxMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSBwYWdlV3JhcHBlci5jdXJyZW50LmNsaWVudEhlaWdodCArICdweCc7XG4gICAgICAgICAgICB3cmFwcGVyWSA9IGxlcnAod3JhcHBlclksIHNjcm9sbFksIDAuMDcpO1xuICAgICAgICAgICAgd3JhcHBlclkgPSBNYXRoLmZsb29yKHdyYXBwZXJZICogMTAwKSAvIDEwMDtcbiAgICAgICAgICAgIHBjdCA9IDEwMCAtIGdldFNjcm9sbFBlcmNlbnQ7XG4gICAgICAgICAgICBwYWdlV3JhcHBlci5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMHB4LCAtJHt3cmFwcGVyWX1weClgO1xuICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBgJHtwY3R9dmhgO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gY2xlYW51cCBiZWZvcmUgbmV4dCBhbmltYXRpb24gZnJhbWUgcmVuZGVyLlxcblwiICsgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX3dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfSByZWY9e3Byb2dyZXNzQmFyfT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8U2lkZWJhciBcbiAgICAgICAgICAgICAgICB0b3BDb250ZW50ID0ge1tcbiAgICAgICAgICAgICAgICAgICAgXCJKYXNvbiBZYW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiSSdtIGEgZGVzaWduZXIgd2hvIGxpa2VzIHRvIGNvZGUuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ3VycmVudGx5IGxlYXJuaW5nIGhvdyB0byBidWlsZCBjb29sIHRoaW5ncyBAR1QuXCJcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIGJvdHRvbUxpbmtzID0ge1tcbiAgICAgICAgICAgICAgICAgICAgJ1dvcmsnLFxuICAgICAgICAgICAgICAgICAgICAnQWJvdXQnLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGFjdCcsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59IHJlZj17cGFnZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyTW9iaWxlIFxuICAgICAgICAgICAgICAgICAgICB0b3BDb250ZW50ID0ge1tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSmFzb24gWWFuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJJ20gYSBkZXNpZ25lciB3aG8gbGlrZXMgdG8gY29kZS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3VycmVudGx5IGxlYXJuaW5nIGhvdyB0byBidWlsZCBjb29sIHRoaW5ncyBAR1QuXCJcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdXb3JrJz5cbiAgICAgICAgICAgICAgICAgICAgPFdvcmsgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD0nQWJvdXQnPlxuICAgICAgICAgICAgICAgICAgICA8QWJvdXQgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD0nQ29udGFjdCc+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/index.js\n");

/***/ })

})