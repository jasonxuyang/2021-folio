webpackHotUpdate_N_E("pages/home",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/home/styles.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/home/styles.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#styles_page_wrapper__sXohZ {\\n  opacity: 0;\\n  transition: all 2s ease;\\n}\\n\\n.styles_transition_overlay__2yyDz {\\n  background-color: black;\\n  width: 100vw;\\n  height: 100vh;\\n  transition: height 1s ease-in;\\n  z-index: 4;\\n}\\n\\n.styles_progress_bar__Xah4c {\\n  width: 5px;\\n  background-color: #ffffff;\\n}\\n\\n.styles_progress_bar_wrapper__2nWE6 {\\n  position: fixed;\\n  z-index: 2;\\n  left: 0px;\\n  top: 0px;\\n  bottom: 0px;\\n  width: 5px;\\n  background-image: linear-gradient(360deg, #FBDA61 0%, #FF5ACD 100%);\\n}\\n\\n.styles_main__1uu-n {\\n  z-index: 1;\\n  margin-left: 16.389vw;\\n  width: 80.277vw;\\n  padding: 0 1.667vw;\\n}\\n.styles_main__1uu-n h1 {\\n  margin-bottom: 3.333vw;\\n}\\n.styles_main__1uu-n section {\\n  margin-bottom: 16.667vw;\\n}\\n.styles_main__1uu-n section:last-child {\\n  margin-bottom: 0;\\n}\\n.styles_main__1uu-n .styles_work_section__1GdrS {\\n  margin-left: 6.806vw;\\n}\\n.styles_main__1uu-n .styles_project_card__2abQE {\\n  margin-bottom: 10vw;\\n}\\n.styles_main__1uu-n .styles_project_card__2abQE:last-child {\\n  margin-bottom: 0;\\n}\\n\\n@media only screen and (max-width: 480px) {\\n  .styles_progress_bar_wrapper__2nWE6 {\\n    display: none;\\n  }\\n\\n  .styles_main__1uu-n {\\n    margin-left: 0;\\n    width: 100vw;\\n    padding: 0;\\n  }\\n  .styles_main__1uu-n section {\\n    margin-bottom: 25.6vw;\\n  }\\n  .styles_main__1uu-n .styles_work_section__1GdrS {\\n    width: 100vw;\\n    margin-left: 0;\\n  }\\n  .styles_main__1uu-n .styles_project_card__2abQE {\\n    margin-bottom: 12.8vw;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.module.scss\",\"webpack://../../variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,UAAA;EACA,uBAAA;AADJ;;AAIA;EACI,uBAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,UAAA;AADJ;;AAIA;EACI,UAAA;EACA,yBAAA;AADJ;;AAIA;EACI,eAAA;EACA,UAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,UAAA;EACA,mEAAA;AADJ;;AAIA;EACI,UAAA;EACA,qBChBG;EDiBH,eAAA;EACA,kBAAA;AADJ;AAGI;EACI,sBCfF;ADcN;AAII;EACI,uBCdD;ADYP;AAKI;EACI,gBAAA;AAHR;AAMI;EACI,oBAAA;AAJR;AAOI;EACI,mBC5BD;ADuBP;AAQI;EACI,gBAAA;AANR;;AAWA;EAEI;IACI,aAAA;EATN;;EAYE;IACI,cAAA;IACA,YAAA;IACA,UAAA;EATN;EAWM;IACI,qBCxCA;ED+BV;EAYM;IACI,YAAA;IACA,cAAA;EAVV;EAaM;IACI,qBCnDA;EDwCV;AACF\",\"sourcesContent\":[\"@import '../../variables.scss';\\n\\n#page_wrapper {\\n    opacity: 0;\\n    transition: all 2s ease;\\n}\\n\\n.transition_overlay {\\n    background-color: black;\\n    width: 100vw;\\n    height: 100vh;\\n    transition: height 1s ease-in;\\n    z-index: 4;\\n}\\n\\n.progress_bar {\\n    width: 5px;\\n    background-color: #ffffff;\\n}\\n\\n.progress_bar_wrapper {\\n    position: fixed;\\n    z-index: 2;\\n    left: 0px;\\n    top: 0px;\\n    bottom: 0px;\\n    width: 5px;\\n    background-image: linear-gradient(360deg, #FBDA61 0%, #FF5ACD 100%);\\n}\\n\\n.main {\\n    z-index: 1;\\n    margin-left: $mNav;\\n    width: 83.611vw - (2 * $m24);\\n    padding: 0 $m24;\\n\\n    h1 {\\n        margin-bottom: $m48;\\n    }\\n\\n    section {\\n        margin-bottom: $m240;\\n    }\\n\\n    section:last-child {\\n        margin-bottom: 0;\\n    }\\n\\n    .work_section {\\n        margin-left: $w1 + $m24;\\n    }\\n    \\n    .project_card {\\n        margin-bottom: $m144;\\n    }\\n    \\n    .project_card:last-child {\\n        margin-bottom: 0;\\n    }\\n}\\n\\n\\n@media only screen and (max-width: 480px) {\\n\\n    .progress_bar_wrapper {\\n        display: none;\\n    }\\n\\n    .main {\\n        margin-left: 0;\\n        width: 100vw;\\n        padding: 0;\\n\\n        section {\\n            margin-bottom: $m96Mobile;\\n        }\\n\\n        .work_section {\\n            width: 100vw;\\n            margin-left: 0;\\n        }\\n    \\n        .project_card {\\n            margin-bottom: $m48Mobile;\\n        }\\n    }\\n}\\n\\n\",\"$dark: #1A1A1A;\\n$gray: #808080;\\n$white: #FFFFFF;\\n$blue: #0000FF;\\n$light: #F2F2F2;\\n\\n$h1: 10vw;\\n$h2: 3.333vw;\\n$h3: 2.222vw;\\n$p: 1.667vw;\\n\\n$h1Mobile: 22.4vw;\\n$h2Mobile: 8.533vw;\\n$h3Mobile: 6.4vw;\\n$pMobile: 4.267vw;\\n\\n$mNav: 16.389vw;\\n$m6: 0.417vw;\\n$m12: 0.833vw;\\n$m16: 1.111vw;\\n$m24: 1.667vw;\\n$m32: 2.222vw; \\n$m48: 3.333vw;\\n$m64: 4.444vw;\\n$m96: 6.667vw;\\n$m144: 10vw;\\n$m192: 13.333vw;\\n$m240: 16.667vw;\\n\\n$m12Mobile: 3.2vw;\\n$m16Mobile: 4.267vw;\\n$m32Mobile: 8.533vw;\\n$m48Mobile: 12.8vw;\\n$m64Mobile: 17.067vw;\\n$m96Mobile: 25.6vw;\\n\\n\\n$w1: 5.139vw;\\n$w2: 12.013vw;\\n$w3: 18.819vw;\\n$w4: 25.625vw;\\n$w5: 32.5vw;\\n$w6: 39.306vw;\\n$w7: 46.111vw;\\n$w8: 52.986vw;\\n$w9: 59.792vw;\\n$w10: 66.597vw;\\n$w11: 73.403vw;\\n$w12: 80.278vw;\\n$wFull: 83.611vw;\\n\\n$w1Mobile: 19.733vw;\\n$w2Mobile: 43.733vw;\\n$w3Mobile: 67.467vw;\\n$w4Mobile: 91.467vw;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"page_wrapper\": \"styles_page_wrapper__sXohZ\",\n\t\"transition_overlay\": \"styles_transition_overlay__2yyDz\",\n\t\"progress_bar\": \"styles_progress_bar__Xah4c\",\n\t\"progress_bar_wrapper\": \"styles_progress_bar_wrapper__2nWE6\",\n\t\"main\": \"styles_main__1uu-n\",\n\t\"work_section\": \"styles_work_section__1GdrS\",\n\t\"project_card\": \"styles_project_card__2abQE\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9zdHlsZXMubW9kdWxlLnNjc3M/MWZlZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZ0NBQWdDLGVBQWUsNEJBQTRCLEdBQUcsdUNBQXVDLDRCQUE0QixpQkFBaUIsa0JBQWtCLGtDQUFrQyxlQUFlLEdBQUcsaUNBQWlDLGVBQWUsOEJBQThCLEdBQUcseUNBQXlDLG9CQUFvQixlQUFlLGNBQWMsYUFBYSxnQkFBZ0IsZUFBZSx3RUFBd0UsR0FBRyx5QkFBeUIsZUFBZSwwQkFBMEIsb0JBQW9CLHVCQUF1QixHQUFHLDBCQUEwQiwyQkFBMkIsR0FBRywrQkFBK0IsNEJBQTRCLEdBQUcsMENBQTBDLHFCQUFxQixHQUFHLG1EQUFtRCx5QkFBeUIsR0FBRyxtREFBbUQsd0JBQXdCLEdBQUcsOERBQThELHFCQUFxQixHQUFHLCtDQUErQyx5Q0FBeUMsb0JBQW9CLEtBQUssMkJBQTJCLHFCQUFxQixtQkFBbUIsaUJBQWlCLEtBQUssaUNBQWlDLDRCQUE0QixLQUFLLHFEQUFxRCxtQkFBbUIscUJBQXFCLEtBQUsscURBQXFELDRCQUE0QixLQUFLLEdBQUcsT0FBTyxvSEFBb0gsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sd0RBQXdELG1CQUFtQixpQkFBaUIsOEJBQThCLEdBQUcseUJBQXlCLDhCQUE4QixtQkFBbUIsb0JBQW9CLG9DQUFvQyxpQkFBaUIsR0FBRyxtQkFBbUIsaUJBQWlCLGdDQUFnQyxHQUFHLDJCQUEyQixzQkFBc0IsaUJBQWlCLGdCQUFnQixlQUFlLGtCQUFrQixpQkFBaUIsMEVBQTBFLEdBQUcsV0FBVyxpQkFBaUIseUJBQXlCLG1DQUFtQyxzQkFBc0IsWUFBWSw4QkFBOEIsT0FBTyxpQkFBaUIsK0JBQStCLE9BQU8sNEJBQTRCLDJCQUEyQixPQUFPLHVCQUF1QixrQ0FBa0MsT0FBTywyQkFBMkIsK0JBQStCLE9BQU8sc0NBQXNDLDJCQUEyQixPQUFPLEdBQUcsaURBQWlELCtCQUErQix3QkFBd0IsT0FBTyxlQUFlLHlCQUF5Qix1QkFBdUIscUJBQXFCLHFCQUFxQix3Q0FBd0MsV0FBVywyQkFBMkIsMkJBQTJCLDZCQUE2QixXQUFXLCtCQUErQix3Q0FBd0MsV0FBVyxPQUFPLEdBQUcsc0JBQXNCLGlCQUFpQixrQkFBa0IsaUJBQWlCLGtCQUFrQixjQUFjLGVBQWUsZUFBZSxjQUFjLHNCQUFzQixxQkFBcUIsbUJBQW1CLG9CQUFvQixvQkFBb0IsZUFBZSxnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixnQkFBZ0IsY0FBYyxrQkFBa0Isa0JBQWtCLHNCQUFzQixzQkFBc0Isc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLG1CQUFtQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixjQUFjLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGlCQUFpQixtQkFBbUIsd0JBQXdCLHNCQUFzQixzQkFBc0Isc0JBQXNCLHFCQUFxQjtBQUN0K0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3BhZ2VzL2hvbWUvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3N0eWxlc19wYWdlX3dyYXBwZXJfX3NYb2haIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZTtcXG59XFxuXFxuLnN0eWxlc190cmFuc2l0aW9uX292ZXJsYXlfXzJ5eUR6IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlLWluO1xcbiAgei1pbmRleDogNDtcXG59XFxuXFxuLnN0eWxlc19wcm9ncmVzc19iYXJfX1hhaDRjIHtcXG4gIHdpZHRoOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uc3R5bGVzX3Byb2dyZXNzX2Jhcl93cmFwcGVyX18ybldFNiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyO1xcbiAgbGVmdDogMHB4O1xcbiAgdG9wOiAwcHg7XFxuICBib3R0b206IDBweDtcXG4gIHdpZHRoOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRkJEQTYxIDAlLCAjRkY1QUNEIDEwMCUpO1xcbn1cXG5cXG4uc3R5bGVzX21haW5fXzF1dS1uIHtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW4tbGVmdDogMTYuMzg5dnc7XFxuICB3aWR0aDogODAuMjc3dnc7XFxuICBwYWRkaW5nOiAwIDEuNjY3dnc7XFxufVxcbi5zdHlsZXNfbWFpbl9fMXV1LW4gaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMy4zMzN2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiBzZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2LjY2N3Z3O1xcbn1cXG4uc3R5bGVzX21haW5fXzF1dS1uIHNlY3Rpb246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uc3R5bGVzX21haW5fXzF1dS1uIC5zdHlsZXNfd29ya19zZWN0aW9uX18xR2RyUyB7XFxuICBtYXJnaW4tbGVmdDogNi44MDZ2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiAuc3R5bGVzX3Byb2plY3RfY2FyZF9fMmFiUUUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTB2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiAuc3R5bGVzX3Byb2plY3RfY2FyZF9fMmFiUUU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuc3R5bGVzX3Byb2dyZXNzX2Jhcl93cmFwcGVyX18ybldFNiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc3R5bGVzX21haW5fXzF1dS1uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC5zdHlsZXNfbWFpbl9fMXV1LW4gc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1LjZ2dztcXG4gIH1cXG4gIC5zdHlsZXNfbWFpbl9fMXV1LW4gLnN0eWxlc193b3JrX3NlY3Rpb25fXzFHZHJTIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5zdHlsZXNfbWFpbl9fMXV1LW4gLnN0eWxlc19wcm9qZWN0X2NhcmRfXzJhYlFFIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTIuOHZ3O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUVBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxxQkNoQkc7RURpQkgsZUFBQTtFQUNBLGtCQUFBO0FBREo7QUFHSTtFQUNJLHNCQ2ZGO0FEY047QUFJSTtFQUNJLHVCQ2REO0FEWVA7QUFLSTtFQUNJLGdCQUFBO0FBSFI7QUFNSTtFQUNJLG9CQUFBO0FBSlI7QUFPSTtFQUNJLG1CQzVCRDtBRHVCUDtBQVFJO0VBQ0ksZ0JBQUE7QUFOUjs7QUFXQTtFQUVJO0lBQ0ksYUFBQTtFQVROOztFQVlFO0lBQ0ksY0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBVE47RUFXTTtJQUNJLHFCQ3hDQTtFRCtCVjtFQVlNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7RUFWVjtFQWFNO0lBQ0kscUJDbkRBO0VEd0NWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xcblxcbiNwYWdlX3dyYXBwZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZTtcXG59XFxuXFxuLnRyYW5zaXRpb25fb3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlLWluO1xcbiAgICB6LWluZGV4OiA0O1xcbn1cXG5cXG4ucHJvZ3Jlc3NfYmFyIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnByb2dyZXNzX2Jhcl93cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgICBib3R0b206IDBweDtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZCREE2MSAwJSwgI0ZGNUFDRCAxMDAlKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBtYXJnaW4tbGVmdDogJG1OYXY7XFxuICAgIHdpZHRoOiA4My42MTF2dyAtICgyICogJG0yNCk7XFxuICAgIHBhZGRpbmc6IDAgJG0yNDtcXG5cXG4gICAgaDEge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJG00ODtcXG4gICAgfVxcblxcbiAgICBzZWN0aW9uIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRtMjQwO1xcbiAgICB9XFxuXFxuICAgIHNlY3Rpb246bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgIC53b3JrX3NlY3Rpb24ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR3MSArICRtMjQ7XFxuICAgIH1cXG4gICAgXFxuICAgIC5wcm9qZWN0X2NhcmQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJG0xNDQ7XFxuICAgIH1cXG4gICAgXFxuICAgIC5wcm9qZWN0X2NhcmQ6bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG5cXG4gICAgLnByb2dyZXNzX2Jhcl93cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcblxcbiAgICAgICAgc2VjdGlvbiB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJG05Nk1vYmlsZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC53b3JrX3NlY3Rpb24ge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICAucHJvamVjdF9jYXJkIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkbTQ4TW9iaWxlO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblwiLFwiJGRhcms6ICMxQTFBMUE7XFxuJGdyYXk6ICM4MDgwODA7XFxuJHdoaXRlOiAjRkZGRkZGO1xcbiRibHVlOiAjMDAwMEZGO1xcbiRsaWdodDogI0YyRjJGMjtcXG5cXG4kaDE6IDEwdnc7XFxuJGgyOiAzLjMzM3Z3O1xcbiRoMzogMi4yMjJ2dztcXG4kcDogMS42Njd2dztcXG5cXG4kaDFNb2JpbGU6IDIyLjR2dztcXG4kaDJNb2JpbGU6IDguNTMzdnc7XFxuJGgzTW9iaWxlOiA2LjR2dztcXG4kcE1vYmlsZTogNC4yNjd2dztcXG5cXG4kbU5hdjogMTYuMzg5dnc7XFxuJG02OiAwLjQxN3Z3O1xcbiRtMTI6IDAuODMzdnc7XFxuJG0xNjogMS4xMTF2dztcXG4kbTI0OiAxLjY2N3Z3O1xcbiRtMzI6IDIuMjIydnc7IFxcbiRtNDg6IDMuMzMzdnc7XFxuJG02NDogNC40NDR2dztcXG4kbTk2OiA2LjY2N3Z3O1xcbiRtMTQ0OiAxMHZ3O1xcbiRtMTkyOiAxMy4zMzN2dztcXG4kbTI0MDogMTYuNjY3dnc7XFxuXFxuJG0xMk1vYmlsZTogMy4ydnc7XFxuJG0xNk1vYmlsZTogNC4yNjd2dztcXG4kbTMyTW9iaWxlOiA4LjUzM3Z3O1xcbiRtNDhNb2JpbGU6IDEyLjh2dztcXG4kbTY0TW9iaWxlOiAxNy4wNjd2dztcXG4kbTk2TW9iaWxlOiAyNS42dnc7XFxuXFxuXFxuJHcxOiA1LjEzOXZ3O1xcbiR3MjogMTIuMDEzdnc7XFxuJHczOiAxOC44MTl2dztcXG4kdzQ6IDI1LjYyNXZ3O1xcbiR3NTogMzIuNXZ3O1xcbiR3NjogMzkuMzA2dnc7XFxuJHc3OiA0Ni4xMTF2dztcXG4kdzg6IDUyLjk4NnZ3O1xcbiR3OTogNTkuNzkydnc7XFxuJHcxMDogNjYuNTk3dnc7XFxuJHcxMTogNzMuNDAzdnc7XFxuJHcxMjogODAuMjc4dnc7XFxuJHdGdWxsOiA4My42MTF2dztcXG5cXG4kdzFNb2JpbGU6IDE5LjczM3Z3O1xcbiR3Mk1vYmlsZTogNDMuNzMzdnc7XFxuJHczTW9iaWxlOiA2Ny40Njd2dztcXG4kdzRNb2JpbGU6IDkxLjQ2N3Z3O1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInBhZ2Vfd3JhcHBlclwiOiBcInN0eWxlc19wYWdlX3dyYXBwZXJfX3NYb2haXCIsXG5cdFwidHJhbnNpdGlvbl9vdmVybGF5XCI6IFwic3R5bGVzX3RyYW5zaXRpb25fb3ZlcmxheV9fMnl5RHpcIixcblx0XCJwcm9ncmVzc19iYXJcIjogXCJzdHlsZXNfcHJvZ3Jlc3NfYmFyX19YYWg0Y1wiLFxuXHRcInByb2dyZXNzX2Jhcl93cmFwcGVyXCI6IFwic3R5bGVzX3Byb2dyZXNzX2Jhcl93cmFwcGVyX18ybldFNlwiLFxuXHRcIm1haW5cIjogXCJzdHlsZXNfbWFpbl9fMXV1LW5cIixcblx0XCJ3b3JrX3NlY3Rpb25cIjogXCJzdHlsZXNfd29ya19zZWN0aW9uX18xR2RyU1wiLFxuXHRcInByb2plY3RfY2FyZFwiOiBcInN0eWxlc19wcm9qZWN0X2NhcmRfXzJhYlFFXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/home/styles.module.scss\n");

/***/ })

})