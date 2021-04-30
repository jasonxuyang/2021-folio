webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/home/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/sidebar */ \"./components/shared/sidebar/index.js\");\n/* harmony import */ var _components_home_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/work */ \"./components/home/work/index.js\");\n/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/about */ \"./components/home/about/index.js\");\n/* harmony import */ var _components_home_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/home/contact */ \"./components/home/contact/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shared/sidebarMobile */ \"./components/shared/sidebarMobile/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/home/2021-folio/pages/home/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var pageWrapper = react__WEBPACK_IMPORTED_MODULE_6___default.a.useRef(null);\n  var scrollY = 0;\n  var wrapperY = 0;\n  var body;\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    pageWrapper.current.style.position = 'fixed';\n    pageWrapper.current.style.top = 0;\n    pageWrapper.current.style.left = 0;\n    console.log(pageWrapper.current.clientHeight);\n    body = document.body;\n    window.addEventListener('scroll', scroll);\n    window.requestAnimationFrame(render);\n    return function cleanup() {\n      window.cancelAnimationFrame(render);\n      window.removeEventListener('scroll', scroll);\n      console.log(\"Cleaned up.\");\n    };\n  });\n\n  function lerp(a, b, n) {\n    return (1 - n) * a + n * b;\n  }\n\n  function scroll() {\n    scrollY = window.pageYOffset;\n  }\n\n  function render() {\n    try {\n      body.style.height = pageWrapper.current.clientHeight + 'px';\n      wrapperY = lerp(wrapperY, scrollY, 0.07);\n      wrapperY = Math.floor(wrapperY * 100) / 100;\n      pageWrapper.current.style.transform = \"translate(0px, -\".concat(wrapperY, \"px)\");\n      window.requestAnimationFrame(render);\n    } catch (error) {\n      console.log(\"Failed to cleanup before next animation frame render.\\n\" + error);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      topContent: [\"Jason Yang\", \"I'm a designer who likes to code.\", \"Currently learning how to build cool things @GT.\"],\n      bottomLinks: ['Work', 'About', 'Contact']\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      topContent: [\"Jason Yang\", \"I'm a designer who likes to code.\", \"Currently learning how to build cool things @GT.\"]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n      ref: pageWrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"Work\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_work__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"About\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"Contact\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"X0/wMPutB63JUAchJwVE3w/RTWc=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz8yNGRlIl0sIm5hbWVzIjpbIkhvbWUiLCJwYWdlV3JhcHBlciIsIlJlYWN0IiwidXNlUmVmIiwic2Nyb2xsWSIsIndyYXBwZXJZIiwiYm9keSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRIZWlnaHQiLCJkb2N1bWVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJjbGVhbnVwIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVycCIsImEiLCJiIiwibiIsInBhZ2VZT2Zmc2V0IiwiaGVpZ2h0IiwiTWF0aCIsImZsb29yIiwidHJhbnNmb3JtIiwiZXJyb3IiLCJzdHlsZXMiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ1osTUFBTUMsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYixDQUFwQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxDQUFkO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLENBQWY7QUFDQSxNQUFJQyxJQUFKO0FBRUFKLDhDQUFLLENBQUNLLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQk4sZUFBVyxDQUFDTyxPQUFaLENBQW9CQyxLQUFwQixDQUEwQkMsUUFBMUIsR0FBcUMsT0FBckM7QUFDQVQsZUFBVyxDQUFDTyxPQUFaLENBQW9CQyxLQUFwQixDQUEwQkUsR0FBMUIsR0FBZ0MsQ0FBaEM7QUFDQVYsZUFBVyxDQUFDTyxPQUFaLENBQW9CQyxLQUFwQixDQUEwQkcsSUFBMUIsR0FBaUMsQ0FBakM7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVliLFdBQVcsQ0FBQ08sT0FBWixDQUFvQk8sWUFBaEM7QUFDQVQsUUFBSSxHQUFHVSxRQUFRLENBQUNWLElBQWhCO0FBQ0FXLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLE1BQWxDO0FBQ0FGLFVBQU0sQ0FBQ0cscUJBQVAsQ0FBNkJDLE1BQTdCO0FBRUEsV0FBTyxTQUFTQyxPQUFULEdBQW1CO0FBQ3RCTCxZQUFNLENBQUNNLG9CQUFQLENBQTRCRixNQUE1QjtBQUNBSixZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTCxNQUFyQztBQUNBTixhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0gsS0FKRDtBQUtILEdBZEQ7O0FBZ0JBLFdBQVNXLElBQVQsQ0FBY0MsQ0FBZCxFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQ25CLFdBQU8sQ0FBQyxJQUFJQSxDQUFMLElBQVVGLENBQVYsR0FBY0UsQ0FBQyxHQUFHRCxDQUF6QjtBQUNIOztBQUVELFdBQVNSLE1BQVQsR0FBa0I7QUFDZGYsV0FBTyxHQUFHYSxNQUFNLENBQUNZLFdBQWpCO0FBQ0g7O0FBRUQsV0FBU1IsTUFBVCxHQUFrQjtBQUNkLFFBQUk7QUFDQWYsVUFBSSxDQUFDRyxLQUFMLENBQVdxQixNQUFYLEdBQW9CN0IsV0FBVyxDQUFDTyxPQUFaLENBQW9CTyxZQUFwQixHQUFtQyxJQUF2RDtBQUNBVixjQUFRLEdBQUdvQixJQUFJLENBQUNwQixRQUFELEVBQVdELE9BQVgsRUFBb0IsSUFBcEIsQ0FBZjtBQUNBQyxjQUFRLEdBQUcwQixJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLFFBQVEsR0FBRyxHQUF0QixJQUE2QixHQUF4QztBQUNBSixpQkFBVyxDQUFDTyxPQUFaLENBQW9CQyxLQUFwQixDQUEwQndCLFNBQTFCLDZCQUF5RDVCLFFBQXpEO0FBQ0FZLFlBQU0sQ0FBQ0cscUJBQVAsQ0FBNkJDLE1BQTdCO0FBQ0gsS0FORCxDQU1FLE9BQU9hLEtBQVAsRUFBYztBQUNackIsYUFBTyxDQUFDQyxHQUFSLENBQVksNERBQTREb0IsS0FBeEU7QUFDSDtBQUNKOztBQUVELHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsa0VBQUQ7QUFDSSxnQkFBVSxFQUFJLENBQ1YsWUFEVSxFQUVWLG1DQUZVLEVBR1Ysa0RBSFUsQ0FEbEI7QUFNSSxpQkFBVyxFQUFJLENBQ1gsTUFEVyxFQUVYLE9BRlcsRUFHWCxTQUhXO0FBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWFJLHFFQUFDLHdFQUFEO0FBQ0ksZ0JBQVUsRUFBSSxDQUNWLFlBRFUsRUFFVixtQ0FGVSxFQUdWLGtEQUhVO0FBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSixlQW9CSTtBQUFLLGVBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsSUFBdkI7QUFBNkIsU0FBRyxFQUFFbkMsV0FBbEM7QUFBQSw4QkFDSTtBQUFTLFVBQUUsRUFBQyxNQUFaO0FBQUEsK0JBQ0kscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUtJO0FBQVMsVUFBRSxFQUFDLE9BQVo7QUFBQSwrQkFDSSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBU0k7QUFBUyxVQUFFLEVBQUMsU0FBWjtBQUFBLCtCQUNJLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJKO0FBQUEsa0JBREo7QUFvQ0g7O0dBOUVRRCxJOztLQUFBQSxJO0FBZ0ZNQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2hvbWUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXInO1xuaW1wb3J0IFdvcmsgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL3dvcmsnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS9hYm91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvbWUvY29udGFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZGViYXJNb2JpbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvc2lkZWJhck1vYmlsZSc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgcGFnZVdyYXBwZXIgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgbGV0IHNjcm9sbFkgPSAwO1xuICAgIGxldCB3cmFwcGVyWSA9IDA7XG4gICAgbGV0IGJvZHk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBwYWdlV3JhcHBlci5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS50b3AgPSAwO1xuICAgICAgICBwYWdlV3JhcHBlci5jdXJyZW50LnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICBjb25zb2xlLmxvZyhwYWdlV3JhcHBlci5jdXJyZW50LmNsaWVudEhlaWdodCk7XG4gICAgICAgIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGVhbmVkIHVwLlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbGVycChhLCBiLCBuKSB7XG4gICAgICAgIHJldHVybiAoMSAtIG4pICogYSArIG4gKiBiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgICAgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBib2R5LnN0eWxlLmhlaWdodCA9IHBhZ2VXcmFwcGVyLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXJZID0gbGVycCh3cmFwcGVyWSwgc2Nyb2xsWSwgMC4wNyk7XG4gICAgICAgICAgICB3cmFwcGVyWSA9IE1hdGguZmxvb3Iod3JhcHBlclkgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDBweCwgLSR7d3JhcHBlcll9cHgpYDtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGNsZWFudXAgYmVmb3JlIG5leHQgYW5pbWF0aW9uIGZyYW1lIHJlbmRlci5cXG5cIiArIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8U2lkZWJhciBcbiAgICAgICAgICAgICAgICB0b3BDb250ZW50ID0ge1tcbiAgICAgICAgICAgICAgICAgICAgXCJKYXNvbiBZYW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiSSdtIGEgZGVzaWduZXIgd2hvIGxpa2VzIHRvIGNvZGUuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ3VycmVudGx5IGxlYXJuaW5nIGhvdyB0byBidWlsZCBjb29sIHRoaW5ncyBAR1QuXCJcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIGJvdHRvbUxpbmtzID0ge1tcbiAgICAgICAgICAgICAgICAgICAgJ1dvcmsnLFxuICAgICAgICAgICAgICAgICAgICAnQWJvdXQnLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGFjdCcsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2lkZWJhck1vYmlsZSBcbiAgICAgICAgICAgICAgICB0b3BDb250ZW50ID0ge1tcbiAgICAgICAgICAgICAgICAgICAgXCJKYXNvbiBZYW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiSSdtIGEgZGVzaWduZXIgd2hvIGxpa2VzIHRvIGNvZGUuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ3VycmVudGx5IGxlYXJuaW5nIGhvdyB0byBidWlsZCBjb29sIHRoaW5ncyBAR1QuXCJcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0gcmVmPXtwYWdlV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J1dvcmsnPlxuICAgICAgICAgICAgICAgICAgICA8V29yayAvPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdBYm91dCc+XG4gICAgICAgICAgICAgICAgICAgIDxBYm91dCAvPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdDb250YWN0Jz5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home/index.js\n");

/***/ })

})