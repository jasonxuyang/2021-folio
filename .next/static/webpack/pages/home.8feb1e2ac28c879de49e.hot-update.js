webpackHotUpdate_N_E("pages/home",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/home/styles.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/home/styles.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#styles_page_wrapper__sXohZ {\\n  opacity: 0;\\n  transition: all 2s ease;\\n}\\n\\n.styles_transition_overlay__2yyDz {\\n  background-image: linear-gradient(360deg, #FBDA61 0%, #FF5ACD 100%);\\n  width: 100vw;\\n  height: 100vh;\\n  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), height 0.5s ease-in;\\n  position: fixed;\\n  bottom: 0;\\n  transform: translate(0, 200vh);\\n}\\n\\n.styles_progress_bar__Xah4c {\\n  width: 5px;\\n  background-color: #ffffff;\\n}\\n\\n.styles_progress_bar_wrapper__2nWE6 {\\n  position: fixed;\\n  left: 0px;\\n  top: 0px;\\n  bottom: 0px;\\n  width: 5px;\\n  background-image: linear-gradient(360deg, #FBDA61 0%, #FF5ACD 100%);\\n}\\n\\n.styles_main__1uu-n {\\n  margin-left: 16.389vw;\\n  width: 80.277vw;\\n  padding: 0 1.667vw;\\n}\\n.styles_main__1uu-n h1 {\\n  margin-bottom: 3.333vw;\\n}\\n.styles_main__1uu-n section {\\n  margin-bottom: 16.667vw;\\n}\\n.styles_main__1uu-n section:last-child {\\n  margin-bottom: 0;\\n}\\n.styles_main__1uu-n .styles_work_section__1GdrS {\\n  margin-left: 6.806vw;\\n}\\n.styles_main__1uu-n .styles_project_card__2abQE {\\n  margin-bottom: 10vw;\\n}\\n.styles_main__1uu-n .styles_project_card__2abQE:last-child {\\n  margin-bottom: 0;\\n}\\n\\n@media only screen and (max-width: 480px) {\\n  .styles_progress_bar_wrapper__2nWE6 {\\n    display: none;\\n  }\\n\\n  .styles_main__1uu-n {\\n    margin-left: 0;\\n    width: 100vw;\\n    padding: 0;\\n  }\\n  .styles_main__1uu-n section {\\n    margin-bottom: 25.6vw;\\n  }\\n  .styles_main__1uu-n .styles_work_section__1GdrS {\\n    width: 100vw;\\n    margin-left: 0;\\n  }\\n  .styles_main__1uu-n .styles_project_card__2abQE {\\n    margin-bottom: 12.8vw;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.module.scss\",\"webpack://../../variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,UAAA;EACA,uBAAA;AADJ;;AAIA;EACI,mEAAA;EACA,YAAA;EACA,aAAA;EACA,6EAAA;EAEA,eAAA;EACA,SAAA;EACA,8BAAA;AAFJ;;AAKA;EACI,UAAA;EACA,yBAAA;AAFJ;;AAKA;EACI,eAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,UAAA;EACA,mEAAA;AAFJ;;AAKA;EACI,qBCjBG;EDkBH,eAAA;EACA,kBAAA;AAFJ;AAII;EACI,sBChBF;ADcN;AAKI;EACI,uBCfD;ADYP;AAMI;EACI,gBAAA;AAJR;AAOI;EACI,oBAAA;AALR;AAQI;EACI,mBC7BD;ADuBP;AASI;EACI,gBAAA;AAPR;;AAYA;EAEI;IACI,aAAA;EAVN;;EAaE;IACI,cAAA;IACA,YAAA;IACA,UAAA;EAVN;EAYM;IACI,qBCzCA;ED+BV;EAaM;IACI,YAAA;IACA,cAAA;EAXV;EAcM;IACI,qBCpDA;EDwCV;AACF\",\"sourcesContent\":[\"@import '../../variables.scss';\\n\\n#page_wrapper {\\n    opacity: 0;\\n    transition: all 2s ease;\\n}\\n\\n.transition_overlay {\\n    background-image: linear-gradient(360deg, #FBDA61 0%, #FF5ACD 100%);\\n    width: 100vw;\\n    height: 100vh;\\n    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),\\n                height 0.5s ease-in;\\n    position: fixed;\\n    bottom: 0;\\n    transform: translate(0, 200vh);\\n}\\n\\n.progress_bar {\\n    width: 5px;\\n    background-color: #ffffff;\\n}\\n\\n.progress_bar_wrapper {\\n    position: fixed;\\n    left: 0px;\\n    top: 0px;\\n    bottom: 0px;\\n    width: 5px;\\n    background-image: linear-gradient(360deg, #FBDA61 0%, #FF5ACD 100%);\\n}\\n\\n.main {\\n    margin-left: $mNav;\\n    width: 83.611vw - (2 * $m24);\\n    padding: 0 $m24;\\n\\n    h1 {\\n        margin-bottom: $m48;\\n    }\\n\\n    section {\\n        margin-bottom: $m240;\\n    }\\n\\n    section:last-child {\\n        margin-bottom: 0;\\n    }\\n\\n    .work_section {\\n        margin-left: $w1 + $m24;\\n    }\\n    \\n    .project_card {\\n        margin-bottom: $m144;\\n    }\\n    \\n    .project_card:last-child {\\n        margin-bottom: 0;\\n    }\\n}\\n\\n\\n@media only screen and (max-width: 480px) {\\n\\n    .progress_bar_wrapper {\\n        display: none;\\n    }\\n\\n    .main {\\n        margin-left: 0;\\n        width: 100vw;\\n        padding: 0;\\n\\n        section {\\n            margin-bottom: $m96Mobile;\\n        }\\n\\n        .work_section {\\n            width: 100vw;\\n            margin-left: 0;\\n        }\\n    \\n        .project_card {\\n            margin-bottom: $m48Mobile;\\n        }\\n    }\\n}\\n\\n\",\"$dark: #1A1A1A;\\n$gray: #808080;\\n$white: #FFFFFF;\\n$blue: #0000FF;\\n$light: #F2F2F2;\\n\\n$h1: 10vw;\\n$h2: 3.333vw;\\n$h3: 2.222vw;\\n$p: 1.667vw;\\n\\n$h1Mobile: 22.4vw;\\n$h2Mobile: 8.533vw;\\n$h3Mobile: 6.4vw;\\n$pMobile: 4.267vw;\\n\\n$mNav: 16.389vw;\\n$m6: 0.417vw;\\n$m12: 0.833vw;\\n$m16: 1.111vw;\\n$m24: 1.667vw;\\n$m32: 2.222vw; \\n$m48: 3.333vw;\\n$m64: 4.444vw;\\n$m96: 6.667vw;\\n$m144: 10vw;\\n$m192: 13.333vw;\\n$m240: 16.667vw;\\n\\n$m12Mobile: 3.2vw;\\n$m16Mobile: 4.267vw;\\n$m32Mobile: 8.533vw;\\n$m48Mobile: 12.8vw;\\n$m64Mobile: 17.067vw;\\n$m96Mobile: 25.6vw;\\n\\n\\n$w1: 5.139vw;\\n$w2: 12.013vw;\\n$w3: 18.819vw;\\n$w4: 25.625vw;\\n$w5: 32.5vw;\\n$w6: 39.306vw;\\n$w7: 46.111vw;\\n$w8: 52.986vw;\\n$w9: 59.792vw;\\n$w10: 66.597vw;\\n$w11: 73.403vw;\\n$w12: 80.278vw;\\n$wFull: 83.611vw;\\n\\n$w1Mobile: 19.733vw;\\n$w2Mobile: 43.733vw;\\n$w3Mobile: 67.467vw;\\n$w4Mobile: 91.467vw;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"page_wrapper\": \"styles_page_wrapper__sXohZ\",\n\t\"transition_overlay\": \"styles_transition_overlay__2yyDz\",\n\t\"progress_bar\": \"styles_progress_bar__Xah4c\",\n\t\"progress_bar_wrapper\": \"styles_progress_bar_wrapper__2nWE6\",\n\t\"main\": \"styles_main__1uu-n\",\n\t\"work_section\": \"styles_work_section__1GdrS\",\n\t\"project_card\": \"styles_project_card__2abQE\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9zdHlsZXMubW9kdWxlLnNjc3M/MWZlZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZ0NBQWdDLGVBQWUsNEJBQTRCLEdBQUcsdUNBQXVDLHdFQUF3RSxpQkFBaUIsa0JBQWtCLGtGQUFrRixvQkFBb0IsY0FBYyxtQ0FBbUMsR0FBRyxpQ0FBaUMsZUFBZSw4QkFBOEIsR0FBRyx5Q0FBeUMsb0JBQW9CLGNBQWMsYUFBYSxnQkFBZ0IsZUFBZSx3RUFBd0UsR0FBRyx5QkFBeUIsMEJBQTBCLG9CQUFvQix1QkFBdUIsR0FBRywwQkFBMEIsMkJBQTJCLEdBQUcsK0JBQStCLDRCQUE0QixHQUFHLDBDQUEwQyxxQkFBcUIsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcsbURBQW1ELHdCQUF3QixHQUFHLDhEQUE4RCxxQkFBcUIsR0FBRywrQ0FBK0MseUNBQXlDLG9CQUFvQixLQUFLLDJCQUEyQixxQkFBcUIsbUJBQW1CLGlCQUFpQixLQUFLLGlDQUFpQyw0QkFBNEIsS0FBSyxxREFBcUQsbUJBQW1CLHFCQUFxQixLQUFLLHFEQUFxRCw0QkFBNEIsS0FBSyxHQUFHLE9BQU8sb0hBQW9ILFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFlBQVksS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLHdEQUF3RCxtQkFBbUIsaUJBQWlCLDhCQUE4QixHQUFHLHlCQUF5QiwwRUFBMEUsbUJBQW1CLG9CQUFvQixxR0FBcUcsc0JBQXNCLGdCQUFnQixxQ0FBcUMsR0FBRyxtQkFBbUIsaUJBQWlCLGdDQUFnQyxHQUFHLDJCQUEyQixzQkFBc0IsZ0JBQWdCLGVBQWUsa0JBQWtCLGlCQUFpQiwwRUFBMEUsR0FBRyxXQUFXLHlCQUF5QixtQ0FBbUMsc0JBQXNCLFlBQVksOEJBQThCLE9BQU8saUJBQWlCLCtCQUErQixPQUFPLDRCQUE0QiwyQkFBMkIsT0FBTyx1QkFBdUIsa0NBQWtDLE9BQU8sMkJBQTJCLCtCQUErQixPQUFPLHNDQUFzQywyQkFBMkIsT0FBTyxHQUFHLGlEQUFpRCwrQkFBK0Isd0JBQXdCLE9BQU8sZUFBZSx5QkFBeUIsdUJBQXVCLHFCQUFxQixxQkFBcUIsd0NBQXdDLFdBQVcsMkJBQTJCLDJCQUEyQiw2QkFBNkIsV0FBVywrQkFBK0Isd0NBQXdDLFdBQVcsT0FBTyxHQUFHLHNCQUFzQixpQkFBaUIsa0JBQWtCLGlCQUFpQixrQkFBa0IsY0FBYyxlQUFlLGVBQWUsY0FBYyxzQkFBc0IscUJBQXFCLG1CQUFtQixvQkFBb0Isb0JBQW9CLGVBQWUsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGNBQWMsa0JBQWtCLGtCQUFrQixzQkFBc0Isc0JBQXNCLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixtQkFBbUIsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsY0FBYyxnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixpQkFBaUIsbUJBQW1CLHdCQUF3QixzQkFBc0Isc0JBQXNCLHNCQUFzQixxQkFBcUI7QUFDanVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9wYWdlcy9ob21lL3N0eWxlcy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNzdHlsZXNfcGFnZV93cmFwcGVyX19zWG9oWiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2U7XFxufVxcblxcbi5zdHlsZXNfdHJhbnNpdGlvbl9vdmVybGF5X18yeXlEeiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRkJEQTYxIDAlLCAjRkY1QUNEIDEwMCUpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpLCBoZWlnaHQgMC41cyBlYXNlLWluO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjAwdmgpO1xcbn1cXG5cXG4uc3R5bGVzX3Byb2dyZXNzX2Jhcl9fWGFoNGMge1xcbiAgd2lkdGg6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5zdHlsZXNfcHJvZ3Jlc3NfYmFyX3dyYXBwZXJfXzJuV0U2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZCREE2MSAwJSwgI0ZGNUFDRCAxMDAlKTtcXG59XFxuXFxuLnN0eWxlc19tYWluX18xdXUtbiB7XFxuICBtYXJnaW4tbGVmdDogMTYuMzg5dnc7XFxuICB3aWR0aDogODAuMjc3dnc7XFxuICBwYWRkaW5nOiAwIDEuNjY3dnc7XFxufVxcbi5zdHlsZXNfbWFpbl9fMXV1LW4gaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMy4zMzN2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiBzZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2LjY2N3Z3O1xcbn1cXG4uc3R5bGVzX21haW5fXzF1dS1uIHNlY3Rpb246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uc3R5bGVzX21haW5fXzF1dS1uIC5zdHlsZXNfd29ya19zZWN0aW9uX18xR2RyUyB7XFxuICBtYXJnaW4tbGVmdDogNi44MDZ2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiAuc3R5bGVzX3Byb2plY3RfY2FyZF9fMmFiUUUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTB2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiAuc3R5bGVzX3Byb2plY3RfY2FyZF9fMmFiUUU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuc3R5bGVzX3Byb2dyZXNzX2Jhcl93cmFwcGVyX18ybldFNiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc3R5bGVzX21haW5fXzF1dS1uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC5zdHlsZXNfbWFpbl9fMXV1LW4gc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1LjZ2dztcXG4gIH1cXG4gIC5zdHlsZXNfbWFpbl9fMXV1LW4gLnN0eWxlc193b3JrX3NlY3Rpb25fXzFHZHJTIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5zdHlsZXNfbWFpbl9fMXV1LW4gLnN0eWxlc19wcm9qZWN0X2NhcmRfXzJhYlFFIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTIuOHZ3O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLG1FQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2RUFBQTtFQUVBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtRUFBQTtBQUZKOztBQUtBO0VBQ0kscUJDakJHO0VEa0JILGVBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUk7RUFDSSxzQkNoQkY7QURjTjtBQUtJO0VBQ0ksdUJDZkQ7QURZUDtBQU1JO0VBQ0ksZ0JBQUE7QUFKUjtBQU9JO0VBQ0ksb0JBQUE7QUFMUjtBQVFJO0VBQ0ksbUJDN0JEO0FEdUJQO0FBU0k7RUFDSSxnQkFBQTtBQVBSOztBQVlBO0VBRUk7SUFDSSxhQUFBO0VBVk47O0VBYUU7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUFWTjtFQVlNO0lBQ0kscUJDekNBO0VEK0JWO0VBYU07SUFDSSxZQUFBO0lBQ0EsY0FBQTtFQVhWO0VBY007SUFDSSxxQkNwREE7RUR3Q1Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMuc2Nzcyc7XFxuXFxuI3BhZ2Vfd3JhcHBlciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlO1xcbn1cXG5cXG4udHJhbnNpdGlvbl9vdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZCREE2MSAwJSwgI0ZGNUFDRCAxMDAlKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKSxcXG4gICAgICAgICAgICAgICAgaGVpZ2h0IDAuNXMgZWFzZS1pbjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIwMHZoKTtcXG59XFxuXFxuLnByb2dyZXNzX2JhciB7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5wcm9ncmVzc19iYXJfd3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNGQkRBNjEgMCUsICNGRjVBQ0QgMTAwJSk7XFxufVxcblxcbi5tYWluIHtcXG4gICAgbWFyZ2luLWxlZnQ6ICRtTmF2O1xcbiAgICB3aWR0aDogODMuNjExdncgLSAoMiAqICRtMjQpO1xcbiAgICBwYWRkaW5nOiAwICRtMjQ7XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRtNDg7XFxuICAgIH1cXG5cXG4gICAgc2VjdGlvbiB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAkbTI0MDtcXG4gICAgfVxcblxcbiAgICBzZWN0aW9uOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAud29ya19zZWN0aW9uIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkdzEgKyAkbTI0O1xcbiAgICB9XFxuICAgIFxcbiAgICAucHJvamVjdF9jYXJkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRtMTQ0O1xcbiAgICB9XFxuICAgIFxcbiAgICAucHJvamVjdF9jYXJkOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuXFxuICAgIC5wcm9ncmVzc19iYXJfd3JhcHBlciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5tYWluIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG5cXG4gICAgICAgIHNlY3Rpb24ge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRtOTZNb2JpbGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAud29ya19zZWN0aW9uIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgLnByb2plY3RfY2FyZCB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJG00OE1vYmlsZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIixcIiRkYXJrOiAjMUExQTFBO1xcbiRncmF5OiAjODA4MDgwO1xcbiR3aGl0ZTogI0ZGRkZGRjtcXG4kYmx1ZTogIzAwMDBGRjtcXG4kbGlnaHQ6ICNGMkYyRjI7XFxuXFxuJGgxOiAxMHZ3O1xcbiRoMjogMy4zMzN2dztcXG4kaDM6IDIuMjIydnc7XFxuJHA6IDEuNjY3dnc7XFxuXFxuJGgxTW9iaWxlOiAyMi40dnc7XFxuJGgyTW9iaWxlOiA4LjUzM3Z3O1xcbiRoM01vYmlsZTogNi40dnc7XFxuJHBNb2JpbGU6IDQuMjY3dnc7XFxuXFxuJG1OYXY6IDE2LjM4OXZ3O1xcbiRtNjogMC40MTd2dztcXG4kbTEyOiAwLjgzM3Z3O1xcbiRtMTY6IDEuMTExdnc7XFxuJG0yNDogMS42Njd2dztcXG4kbTMyOiAyLjIyMnZ3OyBcXG4kbTQ4OiAzLjMzM3Z3O1xcbiRtNjQ6IDQuNDQ0dnc7XFxuJG05NjogNi42Njd2dztcXG4kbTE0NDogMTB2dztcXG4kbTE5MjogMTMuMzMzdnc7XFxuJG0yNDA6IDE2LjY2N3Z3O1xcblxcbiRtMTJNb2JpbGU6IDMuMnZ3O1xcbiRtMTZNb2JpbGU6IDQuMjY3dnc7XFxuJG0zMk1vYmlsZTogOC41MzN2dztcXG4kbTQ4TW9iaWxlOiAxMi44dnc7XFxuJG02NE1vYmlsZTogMTcuMDY3dnc7XFxuJG05Nk1vYmlsZTogMjUuNnZ3O1xcblxcblxcbiR3MTogNS4xMzl2dztcXG4kdzI6IDEyLjAxM3Z3O1xcbiR3MzogMTguODE5dnc7XFxuJHc0OiAyNS42MjV2dztcXG4kdzU6IDMyLjV2dztcXG4kdzY6IDM5LjMwNnZ3O1xcbiR3NzogNDYuMTExdnc7XFxuJHc4OiA1Mi45ODZ2dztcXG4kdzk6IDU5Ljc5MnZ3O1xcbiR3MTA6IDY2LjU5N3Z3O1xcbiR3MTE6IDczLjQwM3Z3O1xcbiR3MTI6IDgwLjI3OHZ3O1xcbiR3RnVsbDogODMuNjExdnc7XFxuXFxuJHcxTW9iaWxlOiAxOS43MzN2dztcXG4kdzJNb2JpbGU6IDQzLjczM3Z3O1xcbiR3M01vYmlsZTogNjcuNDY3dnc7XFxuJHc0TW9iaWxlOiA5MS40Njd2dztcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJwYWdlX3dyYXBwZXJcIjogXCJzdHlsZXNfcGFnZV93cmFwcGVyX19zWG9oWlwiLFxuXHRcInRyYW5zaXRpb25fb3ZlcmxheVwiOiBcInN0eWxlc190cmFuc2l0aW9uX292ZXJsYXlfXzJ5eUR6XCIsXG5cdFwicHJvZ3Jlc3NfYmFyXCI6IFwic3R5bGVzX3Byb2dyZXNzX2Jhcl9fWGFoNGNcIixcblx0XCJwcm9ncmVzc19iYXJfd3JhcHBlclwiOiBcInN0eWxlc19wcm9ncmVzc19iYXJfd3JhcHBlcl9fMm5XRTZcIixcblx0XCJtYWluXCI6IFwic3R5bGVzX21haW5fXzF1dS1uXCIsXG5cdFwid29ya19zZWN0aW9uXCI6IFwic3R5bGVzX3dvcmtfc2VjdGlvbl9fMUdkclNcIixcblx0XCJwcm9qZWN0X2NhcmRcIjogXCJzdHlsZXNfcHJvamVjdF9jYXJkX18yYWJRRVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/home/styles.module.scss\n");

/***/ })

})