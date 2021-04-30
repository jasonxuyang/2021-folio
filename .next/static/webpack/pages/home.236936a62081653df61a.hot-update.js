webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/home/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/sidebar */ \"./components/shared/sidebar/index.js\");\n/* harmony import */ var _components_home_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/work */ \"./components/home/work/index.js\");\n/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/about */ \"./components/home/about/index.js\");\n/* harmony import */ var _components_home_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/home/contact */ \"./components/home/contact/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shared/sidebarMobile */ \"./components/shared/sidebarMobile/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/home/2021-folio/pages/home/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var pageWrapper = react__WEBPACK_IMPORTED_MODULE_6___default.a.useRef(null);\n  var progressBar = react__WEBPACK_IMPORTED_MODULE_6___default.a.useRef(null);\n  var scrollY = 0;\n  var wrapperY = 0;\n  var body;\n  var pct = 0;\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    pageWrapper.current.style.position = 'fixed';\n    pageWrapper.current.style.top = 0;\n    pageWrapper.current.style.left = 0;\n    progressBar.current.style.position = 'fixed';\n    progressBar.current.style.bottom = 0;\n    progressBar.current.style.left = 0;\n    body = document.body;\n    window.addEventListener('scroll', scroll);\n    window.requestAnimationFrame(render);\n    return function cleanup() {\n      window.cancelAnimationFrame(render);\n      window.removeEventListener('scroll', scroll);\n      console.log(\"Cleaned up.\");\n    };\n  });\n\n  function lerp(a, b, n) {\n    return (1 - n) * a + n * b;\n  }\n\n  function scroll() {\n    scrollY = window.pageYOffset;\n  }\n\n  function getScrollPercent() {\n    var h = document.documentElement,\n        b = document.body,\n        st = 'scrollTop',\n        sh = 'scrollHeight';\n    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;\n  }\n\n  function render() {\n    try {\n      body.style.height = pageWrapper.current.clientHeight + 'px';\n      wrapperY = lerp(wrapperY, scrollY, 0.07);\n      wrapperY = Math.floor(wrapperY * 100) / 100;\n      pct = 100 - getScrollPercent;\n      console.log(pct);\n      pageWrapper.current.style.transform = \"translate(0px, -\".concat(wrapperY, \"px)\");\n      progressBar.current.style.height = \"\".concat(pct, \"vh\");\n      window.requestAnimationFrame(render);\n    } catch (error) {\n      console.log(\"Failed to cleanup before next animation frame render.\\n\" + error);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar_wrapper,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar,\n        ref: progressBar\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      topContent: [\"Jason Yang\", \"I'm a designer who likes to code.\", \"Currently learning how to build cool things @GT.\"],\n      bottomLinks: ['Work', 'About', 'Contact']\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n      ref: pageWrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        topContent: [\"Jason Yang\", \"I'm a designer who likes to code.\", \"Currently learning how to build cool things @GT.\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"Work\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_work__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"About\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"Contact\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"XmeUV0cMvGsEDL0sIiE1YDue/Cs=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz8yNGRlIl0sIm5hbWVzIjpbIkhvbWUiLCJwYWdlV3JhcHBlciIsIlJlYWN0IiwidXNlUmVmIiwicHJvZ3Jlc3NCYXIiLCJzY3JvbGxZIiwid3JhcHBlclkiLCJib2R5IiwicGN0IiwidXNlRWZmZWN0IiwiY3VycmVudCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiY2xlYW51cCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJsZXJwIiwiYSIsImIiLCJuIiwicGFnZVlPZmZzZXQiLCJnZXRTY3JvbGxQZXJjZW50IiwiaCIsImRvY3VtZW50RWxlbWVudCIsInN0Iiwic2giLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJ0cmFuc2Zvcm0iLCJlcnJvciIsInN0eWxlcyIsInByb2dyZXNzX2Jhcl93cmFwcGVyIiwicHJvZ3Jlc3NfYmFyIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUNaLE1BQU1DLFdBQVcsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhLElBQWIsQ0FBcEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdGLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxJQUFiLENBQXBCO0FBQ0EsTUFBSUUsT0FBTyxHQUFHLENBQWQ7QUFDQSxNQUFJQyxRQUFRLEdBQUcsQ0FBZjtBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxHQUFHLEdBQUcsQ0FBVjtBQUVBTiw4Q0FBSyxDQUFDTyxTQUFOLENB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QUssaUJBQVMsRUFBRUQsMERBQU0sQ0FBQ0UsWUFBdkI7QUFBcUMsV0FBRyxFQUFFekM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJLHFFQUFDLGtFQUFEO0FBQ0ksZ0JBQVUsRUFBSSxDQUNWLFlBRFUsRUFFVixtQ0FGVSxFQUdWLGtEQUhVLENBRGxCO0FBTUksaUJBQVcsRUFBSSxDQUNYLE1BRFcsRUFFWCxPQUZXLEVBR1gsU0FIVztBQU5uQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFpQkk7QUFBSyxlQUFTLEVBQUV1QywwREFBTSxDQUFDRyxJQUF2QjtBQUE2QixTQUFHLEVBQUU3QyxXQUFsQztBQUFBLDhCQUNJLHFFQUFDLHdFQUFEO0FBQ0ksa0JBQVUsRUFBSSxDQUNWLFlBRFUsRUFFVixtQ0FGVSxFQUdWLGtEQUhVO0FBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVFJO0FBQVMsVUFBRSxFQUFDLE1BQVo7QUFBQSwrQkFDSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKLGVBWUk7QUFBUyxVQUFFLEVBQUMsT0FBWjtBQUFBLCtCQUNJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkosZUFnQkk7QUFBUyxVQUFFLEVBQUMsU0FBWjtBQUFBLCtCQUNJLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSjtBQUFBLGtCQURKO0FBd0NIOztHQWpHUUQsSTs7S0FBQUEsSTtBQW1HTUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9zaWRlYmFyJztcbmltcG9ydCBXb3JrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS93b3JrJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvbWUvYWJvdXQnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL2NvbnRhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWRlYmFyTW9iaWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXJNb2JpbGUnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IHBhZ2VXcmFwcGVyID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGxldCBzY3JvbGxZID0gMDtcbiAgICBsZXQgd3JhcHBlclkgPSAwO1xuICAgIGxldCBib2R5O1xuICAgIGxldCBwY3QgPSAwO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHBhZ2VXcmFwcGVyLmN1cnJlbnQuc3R5bGUudG9wID0gMDtcbiAgICAgICAgcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHByb2dyZXNzQmFyLmN1cnJlbnQuc3R5bGUuYm90dG9tID0gMDtcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGwpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsZWFuZWQgdXAuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBsZXJwKGEsIGIsIG4pIHtcbiAgICAgICAgcmV0dXJuICgxIC0gbikgKiBhICsgbiAqIGI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgICBzY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbFBlcmNlbnQoKSB7XG4gICAgICAgIHZhciBoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBcbiAgICAgICAgICAgIGIgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgICAgICAgc3QgPSAnc2Nyb2xsVG9wJyxcbiAgICAgICAgICAgIHNoID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHJldHVybiAoaFtzdF18fGJbc3RdKSAvICgoaFtzaF18fGJbc2hdKSAtIGguY2xpZW50SGVpZ2h0KSAqIDEwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBib2R5LnN0eWxlLmhlaWdodCA9IHBhZ2VXcmFwcGVyLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXJZID0gbGVycCh3cmFwcGVyWSwgc2Nyb2xsWSwgMC4wNyk7XG4gICAgICAgICAgICB3cmFwcGVyWSA9IE1hdGguZmxvb3Iod3JhcHBlclkgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgcGN0ID0gMTAwIC0gZ2V0U2Nyb2xsUGVyY2VudDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBjdCk7XG4gICAgICAgICAgICBwYWdlV3JhcHBlci5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMHB4LCAtJHt3cmFwcGVyWX1weClgO1xuICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBgJHtwY3R9dmhgO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gY2xlYW51cCBiZWZvcmUgbmV4dCBhbmltYXRpb24gZnJhbWUgcmVuZGVyLlxcblwiICsgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX3dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfSByZWY9e3Byb2dyZXNzQmFyfT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8U2lkZWJhciBcbiAgICAgICAgICAgICAgICB0b3BDb250ZW50ID0ge1tcbiAgICAgICAgICAgICAgICAgICAgXCJKYXNvbiBZYW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiSSdtIGEgZGVzaWduZXIgd2hvIGxpa2VzIHRvIGNvZGUuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ3VycmVudGx5IGxlYXJuaW5nIGhvdyB0byBidWlsZCBjb29sIHRoaW5ncyBAR1QuXCJcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIGJvdHRvbUxpbmtzID0ge1tcbiAgICAgICAgICAgICAgICAgICAgJ1dvcmsnLFxuICAgICAgICAgICAgICAgICAgICAnQWJvdXQnLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGFjdCcsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59IHJlZj17cGFnZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyTW9iaWxlIFxuICAgICAgICAgICAgICAgICAgICB0b3BDb250ZW50ID0ge1tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSmFzb24gWWFuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJJ20gYSBkZXNpZ25lciB3aG8gbGlrZXMgdG8gY29kZS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3VycmVudGx5IGxlYXJuaW5nIGhvdyB0byBidWlsZCBjb29sIHRoaW5ncyBAR1QuXCJcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdXb3JrJz5cbiAgICAgICAgICAgICAgICAgICAgPFdvcmsgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD0nQWJvdXQnPlxuICAgICAgICAgICAgICAgICAgICA8QWJvdXQgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD0nQ29udGFjdCc+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/index.js\n");

/***/ })

})