webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/home/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/sidebar */ \"./components/shared/sidebar/index.js\");\n/* harmony import */ var _components_home_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/work */ \"./components/home/work/index.js\");\n/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/about */ \"./components/home/about/index.js\");\n/* harmony import */ var _components_home_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/home/contact */ \"./components/home/contact/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shared/sidebarMobile */ \"./components/shared/sidebarMobile/index.js\");\n/* harmony import */ var _components_home_projectCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/home/projectCard */ \"./components/home/projectCard/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/home/2021-folio/pages/home/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var main = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();\n  var progressBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();\n  var pageWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();\n  var scrollY = 0;\n  var wrapperY = 0;\n  var body;\n  var page;\n  var pct = 0;\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    initPage();\n    return function () {\n      cleanupPage();\n    };\n  }, []);\n\n  function initPage() {\n    fadeIn();\n    main.current.style.position = 'fixed';\n    main.current.style.top = 0;\n    main.current.style.left = 0;\n    progressBar.current.style.position = 'fixed';\n    progressBar.current.style.bottom = 0;\n    progressBar.current.style.left = 0;\n    body = document.body;\n    page = document.documentElement;\n    window.addEventListener('scroll', scroll);\n    window.requestAnimationFrame(render);\n  }\n\n  function cleanupPage() {\n    window.cancelAnimationFrame(render);\n    window.removeEventListener('scroll', scroll);\n    console.log(\"Cleaned up.\");\n  }\n\n  function lerp(a, b, n) {\n    return (1 - n) * a + n * b;\n  }\n\n  function scroll() {\n    scrollY = window.pageYOffset;\n  }\n\n  function getScrollPercent() {\n    var st = 'scrollTop';\n    var sh = 'scrollHeight';\n    return (page[st] || body[st]) / ((page[sh] || body[sh]) - page.clientHeight) * 100;\n  }\n\n  function render() {\n    try {\n      body.style.height = main.current.clientHeight + 'px';\n      wrapperY = lerp(wrapperY, scrollY, 0.07);\n      wrapperY = Math.floor(wrapperY * 100) / 100;\n      pct = 100 - getScrollPercent();\n      main.current.style.transform = \"translate(0px, -\".concat(wrapperY, \"px)\");\n      progressBar.current.style.height = \"\".concat(pct, \"vh\");\n      window.requestAnimationFrame(render);\n    } catch (error) {\n      console.log(\"Failed to cleanup before next animation frame render.\\n\" + error);\n    }\n  }\n\n  function pageTransition() {\n    console.log(\"Page Transitioning!\");\n  }\n\n  function fadeIn() {\n    setTimeout(function () {\n      pageWrapper.current.style.opacity = '1';\n    }, 800);\n  }\n\n  function moveTo() {}\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    setTimeout(function () {\n      router.push(href);\n    }, 1000);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.page_wrapper,\n      ref: pageWrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar_wrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.progress_bar,\n          ref: progressBar\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        topContent: [\"Jason Yang is a designer who codes.\", \"He's currently learning how to build cool things @GT.\"],\n        bottomLinks: ['Work', 'About', 'Contact']\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n        ref: main,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shared_sidebarMobile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          topContent: [\"Jason Yang is a designer who codes.\", \"He's currently learning how to build cool things @GT.\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"Work\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"Work\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.work_section,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project_card,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_projectCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                imgUrl: \"asset/imgs/cover_bits-of-good.jpg\",\n                title: \"Bits of Good - Helping non-profits connect with donors and volunteers.\",\n                workType: \"Product Design\",\n                workFor: \"Student Org\",\n                side: \"left\",\n                url: \"/bits_of_good\",\n                handleClick: handleClick\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 128,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 29\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project_card,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_projectCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                imgUrl: \"asset/imgs/cover_hackgt.jpg\",\n                title: \"HackGT - Building a useful event scheduler for our hackathon participants.\",\n                workType: \"Product Design\",\n                workFor: \"Student Org\",\n                side: \"right\",\n                url: \"/project\",\n                handleClick: handleClick\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 139,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"About\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          id: \"Contact\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 157,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz8yNGRlIl0sIm5hbWVzIjpbIkhvbWUiLCJtYWluIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJwcm9ncmVzc0JhciIsInBhZ2VXcmFwcGVyIiwic2Nyb2xsWSIsIndyYXBwZXJZIiwiYm9keSIsInBhZ2UiLCJwY3QiLCJ1c2VFZmZlY3QiLCJpbml0UGFnZSIsImNsZWFudXBQYWdlIiwiZmFkZUluIiwiY3VycmVudCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImxlcnAiLCJhIiwiYiIsIm4iLCJwYWdlWU9mZnNldCIsImdldFNjcm9sbFBlcmNlbnQiLCJzdCIsInNoIiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0IiwiTWF0aCIsImZsb29yIiwidHJhbnNmb3JtIiwiZXJyb3IiLCJwYWdlVHJhbnNpdGlvbiIsInNldFRpbWVvdXQiLCJvcGFjaXR5IiwibW92ZVRvIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJyb3V0ZXIiLCJwdXNoIiwiaHJlZiIsInN0eWxlcyIsInBhZ2Vfd3JhcHBlciIsInByb2dyZXNzX2Jhcl93cmFwcGVyIiwicHJvZ3Jlc3NfYmFyIiwid29ya19zZWN0aW9uIiwicHJvamVjdF9jYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ1osTUFBTUMsSUFBSSxnQkFBR0MsNENBQUssQ0FBQ0MsU0FBTixF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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKLGVBbUNJO0FBQVMsWUFBRSxFQUFDLE9BQVo7QUFBQSxpQ0FDSSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQ0osZUF1Q0k7QUFBUyxZQUFFLEVBQUMsU0FBWjtBQUFBLGlDQUNJLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFtRUg7O0dBMUpRbEQsSTs7S0FBQUEsSTtBQTRKTUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9zaWRlYmFyJztcbmltcG9ydCBXb3JrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS93b3JrJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvbWUvYWJvdXQnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL2NvbnRhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWRlYmFyTW9iaWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXJNb2JpbGUnO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS9wcm9qZWN0Q2FyZCc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgbWFpbiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgY29uc3QgcGFnZVdyYXBwZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgIGxldCBzY3JvbGxZID0gMDtcbiAgICBsZXQgd3JhcHBlclkgPSAwO1xuICAgIGxldCBib2R5O1xuICAgIGxldCBwYWdlO1xuICAgIGxldCBwY3QgPSAwO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaW5pdFBhZ2UoKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFudXBQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBpbml0UGFnZSgpIHtcbiAgICAgICAgZmFkZUluKCk7XG4gICAgICAgIG1haW4uY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIG1haW4uY3VycmVudC5zdHlsZS50b3AgPSAwO1xuICAgICAgICBtYWluLmN1cnJlbnQuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIHByb2dyZXNzQmFyLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBwcm9ncmVzc0Jhci5jdXJyZW50LnN0eWxlLmJvdHRvbSA9IDA7XG4gICAgICAgIHByb2dyZXNzQmFyLmN1cnJlbnQuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBwYWdlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBQYWdlKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xlYW5lZCB1cC5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGVycChhLCBiLCBuKSB7XG4gICAgICAgIHJldHVybiAoMSAtIG4pICogYSArIG4gKiBiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgICAgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxQZXJjZW50KCkge1xuICAgICAgICBjb25zdCBzdCA9ICdzY3JvbGxUb3AnO1xuICAgICAgICBjb25zdCBzaCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICByZXR1cm4gKHBhZ2Vbc3RdfHxib2R5W3N0XSkgLyAoKHBhZ2Vbc2hdfHxib2R5W3NoXSkgLSBwYWdlLmNsaWVudEhlaWdodCkgKiAxMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSBtYWluLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXJZID0gbGVycCh3cmFwcGVyWSwgc2Nyb2xsWSwgMC4wNyk7XG4gICAgICAgICAgICB3cmFwcGVyWSA9IE1hdGguZmxvb3Iod3JhcHBlclkgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgcGN0ID0gMTAwIC0gZ2V0U2Nyb2xsUGVyY2VudCgpO1xuICAgICAgICAgICAgbWFpbi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMHB4LCAtJHt3cmFwcGVyWX1weClgO1xuICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBgJHtwY3R9dmhgO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gY2xlYW51cCBiZWZvcmUgbmV4dCBhbmltYXRpb24gZnJhbWUgcmVuZGVyLlxcblwiICsgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFnZVRyYW5zaXRpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGFnZSBUcmFuc2l0aW9uaW5nIVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWRlSW4oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGFnZVdyYXBwZXIuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB9LCA4MDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVRvKCkge1xuXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGhyZWYpO1xuICAgICAgICB9LCAxMDAwKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMucGFnZV93cmFwcGVyfSByZWY9e3BhZ2VXcmFwcGVyfT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX3dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0gcmVmPXtwcm9ncmVzc0Jhcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8U2lkZWJhciBcbiAgICAgICAgICAgICAgICAgICAgdG9wQ29udGVudCA9IHtbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkphc29uIFlhbmcgaXMgYSBkZXNpZ25lciB3aG8gY29kZXMuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkhlJ3MgY3VycmVudGx5IGxlYXJuaW5nIGhvdyB0byBidWlsZCBjb29sIHRoaW5ncyBAR1QuXCJcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgYm90dG9tTGlua3MgPSB7W1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1dvcmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Fib3V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250YWN0JyxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufSByZWY9e21haW59PlxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhck1vYmlsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcENvbnRlbnQgPSB7W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSmFzb24gWWFuZyBpcyBhIGRlc2lnbmVyIHdobyBjb2Rlcy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhlJ3MgY3VycmVudGx5IGxlYXJuaW5nIGhvdyB0byBidWlsZCBjb29sIHRoaW5ncyBAR1QuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdXb3JrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Xb3JrPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud29ya19zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RfY2FyZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsID0gJ2Fzc2V0L2ltZ3MvY292ZXJfYml0cy1vZi1nb29kLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gJ0JpdHMgb2YgR29vZCAtIEhlbHBpbmcgbm9uLXByb2ZpdHMgY29ubmVjdCB3aXRoIGRvbm9ycyBhbmQgdm9sdW50ZWVycy4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrVHlwZSA9ICdQcm9kdWN0IERlc2lnbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtGb3IgPSAnU3R1ZGVudCBPcmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlID0gJ2xlZnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSAnL2JpdHNfb2ZfZ29vZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrID0ge2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdF9jYXJkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmwgPSAnYXNzZXQvaW1ncy9jb3Zlcl9oYWNrZ3QuanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBcIkhhY2tHVCAtIEJ1aWxkaW5nIGEgdXNlZnVsIGV2ZW50IHNjaGVkdWxlciBmb3Igb3VyIGhhY2thdGhvbiBwYXJ0aWNpcGFudHMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtUeXBlID0gJ1Byb2R1Y3QgRGVzaWduJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya0ZvciA9ICdTdHVkZW50IE9yZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGUgPSAncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSAnL3Byb2plY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljayA9IHtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J0Fib3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBYm91dCAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J0NvbnRhY3QnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home/index.js\n");

/***/ })

})