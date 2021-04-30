webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/home/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/sidebar */ \"./components/shared/sidebar/index.js\");\n/* harmony import */ var _components_home_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/work */ \"./components/home/work/index.js\");\n/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/about */ \"./components/home/about/index.js\");\n/* harmony import */ var _components_home_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/home/contact */ \"./components/home/contact/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/home/2021-folio/pages/home/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var pageWrapper = react__WEBPACK_IMPORTED_MODULE_6___default.a.useRef(null);\n  var scrollY = 0;\n  var wrapperY = 0;\n  var body;\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    pageWrapper.current.style.position = 'fixed';\n    pageWrapper.current.style.top = 0;\n    pageWrapper.current.style.left = 0;\n    console.log(pageWrapper.current.clientHeight);\n    body = document.body;\n    window.addEventListener('scroll', scroll);\n    window.requestAnimationFrame(render);\n    return function cleanup() {\n      window.cancelAnimationFrame(render);\n      window.removeEventListener('scroll', scroll);\n      console.log(\"Cleaned up.\");\n    };\n  });\n\n  function lerp(a, b, n) {\n    return (1 - n) * a + n * b;\n  }\n\n  function scroll() {\n    scrollY = window.pageYOffset;\n  }\n\n  function render() {\n    body.style.height = pageWrapper.current.clientHeight + 'px';\n    wrapperY = lerp(wrapperY, scrollY, 0.07);\n    wrapperY = Math.floor(wrapperY * 100) / 100;\n    pageWrapper.current.style.transform = \"translate(0px, -\".concat(wrapperY, \"px)\");\n    window.requestAnimationFrame(render);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      topContent: [\"Hi, I'm Jason.\", \"I study CM at Georgia Tech.\"],\n      bottomLinks: ['Work', 'About', 'Contact']\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n      ref: pageWrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"Work\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_work__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"About\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        id: \"Contact\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"X0/wMPutB63JUAchJwVE3w/RTWc=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz8yNGRlIl0sIm5hbWVzIjpbIkhvbWUiLCJwYWdlV3JhcHBlciIsIlJlYWN0IiwidXNlUmVmIiwic2Nyb2xsWSIsIndyYXBwZXJZIiwiYm9keSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRIZWlnaHQiLCJkb2N1bWVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJjbGVhbnVwIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVycCIsImEiLCJiIiwibiIsInBhZ2VZT2Zmc2V0IiwiaGVpZ2h0IiwiTWF0aCIsImZsb29yIiwidHJhbnNmb3JtIiwic3R5bGVzIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUNaLE1BQU1DLFdBQVcsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhLElBQWIsQ0FBcEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsQ0FBZDtBQUNBLE1BQUlDLFFBQVEsR0FBRyxDQUFmO0FBQ0EsTUFBSUMsSUFBSjtBQUVBSiw4Q0FBSyxDQUFDSyxTQUFOLENBQWdCLFlBQU07QUFDbEJOLGVBQVcsQ0FBQ08sT0FBWixDQUFvQkMsS0FBcEIsQ0FBMEJDLFFBQTFCLEdBQXFDLE9BQXJDO0FBQ0FULGVBQVcsQ0FBQ08sT0FBWixDQUFvQkMsS0FBcEIsQ0FBMEJFLEdBQTFCLEdBQWdDLENBQWhDO0FBQ0FWLGVBQVcsQ0FBQ08sT0FBWixDQUFvQkMsS0FBcEIsQ0FBMEJHLElBQTFCLEdBQWlDLENBQWpDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixXQUFXLENBQUNPLE9BQVosQ0FBb0JPLFlBQWhDO0FBQ0FULFFBQUksR0FBR1UsUUFBUSxDQUFDVixJQUFoQjtBQUNBVyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxNQUFsQztBQUNBRixVQUFNLENBQUNHLHFCQUFQLENBQTZCQyxNQUE3QjtBQUVBLFdBQU8sU0FBU0MsT0FBVCxHQUFtQjtBQUN0QkwsWUFBTSxDQUFDTSxvQkFBUCxDQUE0QkYsTUFBNUI7QUFDQUosWUFBTSxDQUFDTyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0wsTUFBckM7QUFDQU4sYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNILEtBSkQ7QUFLSCxHQWREOztBQWdCQSxXQUFTVyxJQUFULENBQWNDLENBQWQsRUFBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUNuQixXQUFPLENBQUMsSUFBSUEsQ0FBTCxJQUFVRixDQUFWLEdBQWNFLENBQUMsR0FBR0QsQ0FBekI7QUFDSDs7QUFFRCxXQUFTUixNQUFULEdBQWtCO0FBQ2RmLFdBQU8sR0FBR2EsTUFBTSxDQUFDWSxXQUFqQjtBQUNIOztBQUVELFdBQVNSLE1BQVQsR0FBa0I7QUFDZGYsUUFBSSxDQUFDRyxLQUFMLENBQVdxQixNQUFYLEdBQW9CN0IsV0FBVyxDQUFDTyxPQUFaLENBQW9CTyxZQUFwQixHQUFtQyxJQUF2RDtBQUNBVixZQUFRLEdBQUdvQixJQUFJLENBQUNwQixRQUFELEVBQVdELE9BQVgsRUFBb0IsSUFBcEIsQ0FBZjtBQUNBQyxZQUFRLEdBQUcwQixJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLFFBQVEsR0FBRyxHQUF0QixJQUE2QixHQUF4QztBQUNBSixlQUFXLENBQUNPLE9BQVosQ0FBb0JDLEtBQXBCLENBQTBCd0IsU0FBMUIsNkJBQXlENUIsUUFBekQ7QUFDQVksVUFBTSxDQUFDRyxxQkFBUCxDQUE2QkMsTUFBN0I7QUFDSDs7QUFFRCxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGtFQUFEO0FBQ0ksZ0JBQVUsRUFBSSxDQUNWLGdCQURVLEVBRVYsNkJBRlUsQ0FEbEI7QUFLSSxpQkFBVyxFQUFJLENBQ1gsTUFEVyxFQUVYLE9BRlcsRUFHWCxTQUhXO0FBTG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVlJO0FBQUssZUFBUyxFQUFFYSwwREFBTSxDQUFDQyxJQUF2QjtBQUE2QixTQUFHLEVBQUVsQyxXQUFsQztBQUFBLDhCQUNJO0FBQVMsVUFBRSxFQUFDLE1BQVo7QUFBQSwrQkFDSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0k7QUFBUyxVQUFFLEVBQUMsT0FBWjtBQUFBLCtCQUNJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFTSTtBQUFTLFVBQUUsRUFBQyxTQUFaO0FBQUEsK0JBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSjtBQUFBLGtCQURKO0FBNEJIOztHQWxFUUQsSTs7S0FBQUEsSTtBQW9FTUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9zaWRlYmFyJztcbmltcG9ydCBXb3JrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS93b3JrJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvbWUvYWJvdXQnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL2NvbnRhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBwYWdlV3JhcHBlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBsZXQgc2Nyb2xsWSA9IDA7XG4gICAgbGV0IHdyYXBwZXJZID0gMDtcbiAgICBsZXQgYm9keTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHBhZ2VXcmFwcGVyLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBwYWdlV3JhcHBlci5jdXJyZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgIHBhZ2VXcmFwcGVyLmN1cnJlbnQuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2VXcmFwcGVyLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGwpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsZWFuZWQgdXAuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBsZXJwKGEsIGIsIG4pIHtcbiAgICAgICAgcmV0dXJuICgxIC0gbikgKiBhICsgbiAqIGI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgICBzY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSBwYWdlV3JhcHBlci5jdXJyZW50LmNsaWVudEhlaWdodCArICdweCc7XG4gICAgICAgIHdyYXBwZXJZID0gbGVycCh3cmFwcGVyWSwgc2Nyb2xsWSwgMC4wNyk7XG4gICAgICAgIHdyYXBwZXJZID0gTWF0aC5mbG9vcih3cmFwcGVyWSAqIDEwMCkgLyAxMDA7XG4gICAgICAgIHBhZ2VXcmFwcGVyLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwcHgsIC0ke3dyYXBwZXJZfXB4KWA7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNpZGViYXIgXG4gICAgICAgICAgICAgICAgdG9wQ29udGVudCA9IHtbXG4gICAgICAgICAgICAgICAgICAgIFwiSGksIEknbSBKYXNvbi5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJJIHN0dWR5IENNIGF0IEdlb3JnaWEgVGVjaC5cIixcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIGJvdHRvbUxpbmtzID0ge1tcbiAgICAgICAgICAgICAgICAgICAgJ1dvcmsnLFxuICAgICAgICAgICAgICAgICAgICAnQWJvdXQnLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGFjdCcsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59IHJlZj17cGFnZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdXb3JrJz5cbiAgICAgICAgICAgICAgICAgICAgPFdvcmsgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD0nQWJvdXQnPlxuICAgICAgICAgICAgICAgICAgICA8QWJvdXQgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD0nQ29udGFjdCc+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/index.js\n");

/***/ })

})