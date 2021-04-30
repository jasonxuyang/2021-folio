webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/home/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/sidebar */ \"./components/shared/sidebar/index.js\");\n/* harmony import */ var _components_home_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/work */ \"./components/home/work/index.js\");\n/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/about */ \"./components/home/about/index.js\");\n/* harmony import */ var _components_home_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/home/contact */ \"./components/home/contact/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/home/2021-folio/pages/home/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var pageWrapper = react__WEBPACK_IMPORTED_MODULE_6___default.a.useRef(null);\n  var scrollY = 0;\n  var wrapperY = 0;\n  var body;\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    // pageWrapper.current.style.position = 'fixed';\n    // pageWrapper.current.style.top = 0;\n    // pageWrapper.current.style.left = 0;\n    console.log(pageWrapper.current.clientHeight);\n    body = document.body;\n    window.addEventListener('scroll', scroll);\n    window.requestAnimationFrame(render);\n    return function cleanup() {\n      window.removeEventListener('scroll', scroll);\n      window.cancelAnimationFrame(render);\n    };\n  }, []);\n\n  function lerp(a, b, n) {\n    return (1 - n) * a + n * b;\n  }\n\n  function scroll() {\n    scrollY = window.pageYOffset;\n    console.log(pageWrapper.current.clientHeight + \" \" + body.clientHeight);\n  }\n\n  function render() {\n    body.style.height = pageWrapper.current.clientHeight + 'px';\n    wrapperY = lerp(wrapperY, scrollY, 0.05);\n    wrapperY = Math.floor(wrapperY * 100) / 100;\n    pageWrapper.current.style.transform = \"translate(0px, -\".concat(wrapperY, \"px)\");\n    window.requestAnimationFrame(render);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      topContent: [\"Hi, I'm Jason.\", \"I study CM at Georgia Tech.\"],\n      bottomLinks: ['Work', 'About', 'Contact']\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n      ref: pageWrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"Work\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_work__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"About\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"Contact\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"X0/wMPutB63JUAchJwVE3w/RTWc=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz8yNGRlIl0sIm5hbWVzIjpbIkhvbWUiLCJwYWdlV3JhcHBlciIsIlJlYWN0IiwidXNlUmVmIiwic2Nyb2xsWSIsIndyYXBwZXJZIiwiYm9keSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiY2xpZW50SGVpZ2h0IiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImxlcnAiLCJhIiwiYiIsIm4iLCJwYWdlWU9mZnNldCIsInN0eWxlIiwiaGVpZ2h0IiwiTWF0aCIsImZsb29yIiwidHJhbnNmb3JtIiwic3R5bGVzIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUNaLE1BQU1DLFdBQVcsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhLElBQWIsQ0FBcEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsQ0FBZDtBQUNBLE1BQUlDLFFBQVEsR0FBRyxDQUFmO0FBQ0EsTUFBSUMsSUFBSjtBQUVBSiw4Q0FBSyxDQUFDSyxTQUFOLENBQWdCLFlBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixXQUFXLENBQUNTLE9BQVosQ0FBb0JDLFlBQWhDO0FBQ0FMLFFBQUksR0FBR00sUUFBUSxDQUFDTixJQUFoQjtBQUNBTyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxNQUFsQztBQUNBRixVQUFNLENBQUNHLHFCQUFQLENBQTZCQyxNQUE3QjtBQUVBLFdBQU8sU0FBU0MsT0FBVCxHQUFtQjtBQUN0QkwsWUFBTSxDQUFDTSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0osTUFBckM7QUFDQUYsWUFBTSxDQUFDTyxvQkFBUCxDQUE0QkgsTUFBNUI7QUFDSCxLQUhEO0FBSUgsR0FiRCxFQWFHLEVBYkg7O0FBZUEsV0FBU0ksSUFBVCxDQUFjQyxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUI7QUFDbkIsV0FBTyxDQUFDLElBQUlBLENBQUwsSUFBVUYsQ0FBVixHQUFjRSxDQUFDLEdBQUdELENBQXpCO0FBQ0g7O0FBRUQsV0FBU1IsTUFBVCxHQUFrQjtBQUNkWCxXQUFPLEdBQUdTLE1BQU0sQ0FBQ1ksV0FBakI7QUFDQWpCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixXQUFXLENBQUNTLE9BQVosQ0FBb0JDLFlBQXBCLEdBQW1DLEdBQW5DLEdBQXlDTCxJQUFJLENBQUNLLFlBQTFEO0FBQ0g7O0FBRUQsV0FBU00sTUFBVCxHQUFrQjtBQUNkWCxRQUFJLENBQUNvQixLQUFMLENBQVdDLE1BQVgsR0FBb0IxQixXQUFXLENBQUNTLE9BQVosQ0FBb0JDLFlBQXBCLEdBQW1DLElBQXZEO0FBQ0FOLFlBQVEsR0FBR2dCLElBQUksQ0FBQ2hCLFFBQUQsRUFBV0QsT0FBWCxFQUFvQixJQUFwQixDQUFmO0FBQ0FDLFlBQVEsR0FBR3VCLElBQUksQ0FBQ0MsS0FBTCxDQUFXeEIsUUFBUSxHQUFHLEdBQXRCLElBQTZCLEdBQXhDO0FBQ0FKLGVBQVcsQ0FBQ1MsT0FBWixDQUFvQmdCLEtBQXBCLENBQTBCSSxTQUExQiw2QkFBeUR6QixRQUF6RDtBQUNBUSxVQUFNLENBQUNHLHFCQUFQLENBQTZCQyxNQUE3QjtBQUNIOztBQUVELHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsa0VBQUQ7QUFDSSxnQkFBVSxFQUFJLENBQ1YsZ0JBRFUsRUFFViw2QkFGVSxDQURsQjtBQUtJLGlCQUFXLEVBQUksQ0FDWCxNQURXLEVBRVgsT0FGVyxFQUdYLFNBSFc7QUFMbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBWUk7QUFBSyxlQUFTLEVBQUVjLDBEQUFNLENBQUNDLElBQXZCO0FBQTZCLFNBQUcsRUFBRS9CLFdBQWxDO0FBQUEsOEJBQ0k7QUFBUyxVQUFFLEVBQUMsTUFBWjtBQUFBLCtCQUNJLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLSTtBQUFTLFVBQUUsRUFBQyxPQUFaO0FBQUEsK0JBQ0kscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQVNJO0FBQVMsVUFBRSxFQUFDLFNBQVo7QUFBQSwrQkFDSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKO0FBQUEsa0JBREo7QUE0Qkg7O0dBbEVRRCxJOztLQUFBQSxJO0FBb0VNQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2hvbWUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXInO1xuaW1wb3J0IFdvcmsgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL3dvcmsnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS9hYm91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvbWUvY29udGFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IHBhZ2VXcmFwcGVyID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGxldCBzY3JvbGxZID0gMDtcbiAgICBsZXQgd3JhcHBlclkgPSAwO1xuICAgIGxldCBib2R5O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIC8vIHBhZ2VXcmFwcGVyLmN1cnJlbnQuc3R5bGUudG9wID0gMDtcbiAgICAgICAgLy8gcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgY29uc29sZS5sb2cocGFnZVdyYXBwZXIuY3VycmVudC5jbGllbnRIZWlnaHQpO1xuICAgICAgICBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbCk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbCk7XG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGZ1bmN0aW9uIGxlcnAoYSwgYiwgbikge1xuICAgICAgICByZXR1cm4gKDEgLSBuKSAqIGEgKyBuICogYjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgICAgIHNjcm9sbFkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2VXcmFwcGVyLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICsgXCIgXCIgKyBib2R5LmNsaWVudEhlaWdodCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBib2R5LnN0eWxlLmhlaWdodCA9IHBhZ2VXcmFwcGVyLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgd3JhcHBlclkgPSBsZXJwKHdyYXBwZXJZLCBzY3JvbGxZLCAwLjA1KTtcbiAgICAgICAgd3JhcHBlclkgPSBNYXRoLmZsb29yKHdyYXBwZXJZICogMTAwKSAvIDEwMDtcbiAgICAgICAgcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDBweCwgLSR7d3JhcHBlcll9cHgpYDtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8U2lkZWJhciBcbiAgICAgICAgICAgICAgICB0b3BDb250ZW50ID0ge1tcbiAgICAgICAgICAgICAgICAgICAgXCJIaSwgSSdtIEphc29uLlwiLFxuICAgICAgICAgICAgICAgICAgICBcIkkgc3R1ZHkgQ00gYXQgR2VvcmdpYSBUZWNoLlwiLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgYm90dG9tTGlua3MgPSB7W1xuICAgICAgICAgICAgICAgICAgICAnV29yaycsXG4gICAgICAgICAgICAgICAgICAgICdBYm91dCcsXG4gICAgICAgICAgICAgICAgICAgICdDb250YWN0JyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0gcmVmPXtwYWdlV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J1dvcmsnPlxuICAgICAgICAgICAgICAgICAgICA8V29yayAvPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdBYm91dCc+XG4gICAgICAgICAgICAgICAgICAgIDxBYm91dCAvPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdDb250YWN0Jz5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home/index.js\n");

/***/ })

})