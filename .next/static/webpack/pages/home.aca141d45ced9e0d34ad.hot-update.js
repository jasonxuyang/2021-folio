webpackHotUpdate_N_E("pages/home",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/home/styles.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/home/styles.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#styles_page_wrapper__sXohZ {\\n  opacity: 0;\\n  transition: all 2s ease;\\n}\\n\\n.styles_transition__3ioZ9 {\\n  height: 100vw;\\n  width: 100vw;\\n  z-index: 0;\\n}\\n\\n.styles_progress_bar__Xah4c {\\n  width: 5px;\\n  background-color: #ffffff;\\n}\\n\\n.styles_progress_bar_wrapper__2nWE6 {\\n  position: fixed;\\n  z-index: -2;\\n  left: 0px;\\n  top: 0px;\\n  bottom: 0px;\\n  width: 5px;\\n  background-image: linear-gradient(360deg, #FBDA61 0%, #FF5ACD 100%);\\n}\\n\\n.styles_main__1uu-n {\\n  z-index: -3;\\n  margin-left: 16.389vw;\\n  width: 80.277vw;\\n  padding: 0 1.667vw;\\n}\\n.styles_main__1uu-n h1 {\\n  margin-bottom: 3.333vw;\\n}\\n.styles_main__1uu-n section {\\n  margin-bottom: 16.667vw;\\n}\\n.styles_main__1uu-n section:last-child {\\n  margin-bottom: 0;\\n}\\n.styles_main__1uu-n .styles_work_section__1GdrS {\\n  margin-left: 6.806vw;\\n}\\n.styles_main__1uu-n .styles_project_card__2abQE {\\n  margin-bottom: 10vw;\\n}\\n.styles_main__1uu-n .styles_project_card__2abQE:last-child {\\n  margin-bottom: 0;\\n}\\n\\n@media only screen and (max-width: 480px) {\\n  .styles_progress_bar_wrapper__2nWE6 {\\n    display: none;\\n  }\\n\\n  .styles_main__1uu-n {\\n    margin-left: 0;\\n    width: 100vw;\\n    padding: 0;\\n  }\\n  .styles_main__1uu-n section {\\n    margin-bottom: 25.6vw;\\n  }\\n  .styles_main__1uu-n .styles_work_section__1GdrS {\\n    width: 100vw;\\n    margin-left: 0;\\n  }\\n  .styles_main__1uu-n .styles_project_card__2abQE {\\n    margin-bottom: 12.8vw;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.module.scss\",\"webpack://../../variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,UAAA;EACA,uBAAA;AADJ;;AAIA;EACI,aAAA;EACA,YAAA;EAEA,UAAA;AAFJ;;AAKA;EACI,UAAA;EACA,yBAAA;AAFJ;;AAKA;EACI,eAAA;EACA,WAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,UAAA;EACA,mEAAA;AAFJ;;AAKA;EACI,WAAA;EACA,qBCfG;EDgBH,eAAA;EACA,kBAAA;AAFJ;AAII;EACI,sBCdF;ADYN;AAKI;EACI,uBCbD;ADUP;AAMI;EACI,gBAAA;AAJR;AAOI;EACI,oBAAA;AALR;AAQI;EACI,mBC3BD;ADqBP;AASI;EACI,gBAAA;AAPR;;AAYA;EAEI;IACI,aAAA;EAVN;;EAaE;IACI,cAAA;IACA,YAAA;IACA,UAAA;EAVN;EAYM;IACI,qBCvCA;ED6BV;EAaM;IACI,YAAA;IACA,cAAA;EAXV;EAcM;IACI,qBClDA;EDsCV;AACF\",\"sourcesContent\":[\"@import '../../variables.scss';\\n\\n#page_wrapper {\\n    opacity: 0;\\n    transition: all 2s ease;\\n}\\n\\n.transition {\\n    height: 100vw;\\n    width: 100vw;\\n    // background-color: #FAFAFA;\\n    z-index: 0;\\n}\\n\\n.progress_bar {\\n    width: 5px;\\n    background-color: #ffffff;\\n}\\n\\n.progress_bar_wrapper {\\n    position: fixed;\\n    z-index: -2;\\n    left: 0px;\\n    top: 0px;\\n    bottom: 0px;\\n    width: 5px;\\n    background-image: linear-gradient(360deg, #FBDA61 0%, #FF5ACD 100%);\\n}\\n\\n.main {\\n    z-index: -3;\\n    margin-left: $mNav;\\n    width: 83.611vw - (2 * $m24);\\n    padding: 0 $m24;\\n\\n    h1 {\\n        margin-bottom: $m48;\\n    }\\n\\n    section {\\n        margin-bottom: $m240;\\n    }\\n\\n    section:last-child {\\n        margin-bottom: 0;\\n    }\\n\\n    .work_section {\\n        margin-left: $w1 + $m24;\\n    }\\n    \\n    .project_card {\\n        margin-bottom: $m144;\\n    }\\n    \\n    .project_card:last-child {\\n        margin-bottom: 0;\\n    }\\n}\\n\\n\\n@media only screen and (max-width: 480px) {\\n\\n    .progress_bar_wrapper {\\n        display: none;\\n    }\\n\\n    .main {\\n        margin-left: 0;\\n        width: 100vw;\\n        padding: 0;\\n\\n        section {\\n            margin-bottom: $m96Mobile;\\n        }\\n\\n        .work_section {\\n            width: 100vw;\\n            margin-left: 0;\\n        }\\n    \\n        .project_card {\\n            margin-bottom: $m48Mobile;\\n        }\\n    }\\n}\\n\\n\",\"$dark: #1A1A1A;\\n$gray: #808080;\\n$white: #FFFFFF;\\n$blue: #0000FF;\\n$light: #F2F2F2;\\n\\n$h1: 10vw;\\n$h2: 3.333vw;\\n$h3: 2.222vw;\\n$p: 1.667vw;\\n\\n$h1Mobile: 22.4vw;\\n$h2Mobile: 8.533vw;\\n$h3Mobile: 6.4vw;\\n$pMobile: 4.267vw;\\n\\n$mNav: 16.389vw;\\n$m6: 0.417vw;\\n$m12: 0.833vw;\\n$m16: 1.111vw;\\n$m24: 1.667vw;\\n$m32: 2.222vw; \\n$m48: 3.333vw;\\n$m64: 4.444vw;\\n$m96: 6.667vw;\\n$m144: 10vw;\\n$m192: 13.333vw;\\n$m240: 16.667vw;\\n\\n$m12Mobile: 3.2vw;\\n$m16Mobile: 4.267vw;\\n$m32Mobile: 8.533vw;\\n$m48Mobile: 12.8vw;\\n$m64Mobile: 17.067vw;\\n$m96Mobile: 25.6vw;\\n\\n\\n$w1: 5.139vw;\\n$w2: 12.013vw;\\n$w3: 18.819vw;\\n$w4: 25.625vw;\\n$w5: 32.5vw;\\n$w6: 39.306vw;\\n$w7: 46.111vw;\\n$w8: 52.986vw;\\n$w9: 59.792vw;\\n$w10: 66.597vw;\\n$w11: 73.403vw;\\n$w12: 80.278vw;\\n$wFull: 83.611vw;\\n\\n$w1Mobile: 19.733vw;\\n$w2Mobile: 43.733vw;\\n$w3Mobile: 67.467vw;\\n$w4Mobile: 91.467vw;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"page_wrapper\": \"styles_page_wrapper__sXohZ\",\n\t\"transition\": \"styles_transition__3ioZ9\",\n\t\"progress_bar\": \"styles_progress_bar__Xah4c\",\n\t\"progress_bar_wrapper\": \"styles_progress_bar_wrapper__2nWE6\",\n\t\"main\": \"styles_main__1uu-n\",\n\t\"work_section\": \"styles_work_section__1GdrS\",\n\t\"project_card\": \"styles_project_card__2abQE\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9zdHlsZXMubW9kdWxlLnNjc3M/MWZlZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZ0NBQWdDLGVBQWUsNEJBQTRCLEdBQUcsK0JBQStCLGtCQUFrQixpQkFBaUIsZUFBZSxHQUFHLGlDQUFpQyxlQUFlLDhCQUE4QixHQUFHLHlDQUF5QyxvQkFBb0IsZ0JBQWdCLGNBQWMsYUFBYSxnQkFBZ0IsZUFBZSx3RUFBd0UsR0FBRyx5QkFBeUIsZ0JBQWdCLDBCQUEwQixvQkFBb0IsdUJBQXVCLEdBQUcsMEJBQTBCLDJCQUEyQixHQUFHLCtCQUErQiw0QkFBNEIsR0FBRywwQ0FBMEMscUJBQXFCLEdBQUcsbURBQW1ELHlCQUF5QixHQUFHLG1EQUFtRCx3QkFBd0IsR0FBRyw4REFBOEQscUJBQXFCLEdBQUcsK0NBQStDLHlDQUF5QyxvQkFBb0IsS0FBSywyQkFBMkIscUJBQXFCLG1CQUFtQixpQkFBaUIsS0FBSyxpQ0FBaUMsNEJBQTRCLEtBQUsscURBQXFELG1CQUFtQixxQkFBcUIsS0FBSyxxREFBcUQsNEJBQTRCLEtBQUssR0FBRyxPQUFPLG9IQUFvSCxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLHdEQUF3RCxtQkFBbUIsaUJBQWlCLDhCQUE4QixHQUFHLGlCQUFpQixvQkFBb0IsbUJBQW1CLG1DQUFtQyxpQkFBaUIsR0FBRyxtQkFBbUIsaUJBQWlCLGdDQUFnQyxHQUFHLDJCQUEyQixzQkFBc0Isa0JBQWtCLGdCQUFnQixlQUFlLGtCQUFrQixpQkFBaUIsMEVBQTBFLEdBQUcsV0FBVyxrQkFBa0IseUJBQXlCLG1DQUFtQyxzQkFBc0IsWUFBWSw4QkFBOEIsT0FBTyxpQkFBaUIsK0JBQStCLE9BQU8sNEJBQTRCLDJCQUEyQixPQUFPLHVCQUF1QixrQ0FBa0MsT0FBTywyQkFBMkIsK0JBQStCLE9BQU8sc0NBQXNDLDJCQUEyQixPQUFPLEdBQUcsaURBQWlELCtCQUErQix3QkFBd0IsT0FBTyxlQUFlLHlCQUF5Qix1QkFBdUIscUJBQXFCLHFCQUFxQix3Q0FBd0MsV0FBVywyQkFBMkIsMkJBQTJCLDZCQUE2QixXQUFXLCtCQUErQix3Q0FBd0MsV0FBVyxPQUFPLEdBQUcsc0JBQXNCLGlCQUFpQixrQkFBa0IsaUJBQWlCLGtCQUFrQixjQUFjLGVBQWUsZUFBZSxjQUFjLHNCQUFzQixxQkFBcUIsbUJBQW1CLG9CQUFvQixvQkFBb0IsZUFBZSxnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixnQkFBZ0IsY0FBYyxrQkFBa0Isa0JBQWtCLHNCQUFzQixzQkFBc0Isc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLG1CQUFtQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixjQUFjLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGlCQUFpQixtQkFBbUIsd0JBQXdCLHNCQUFzQixzQkFBc0Isc0JBQXNCLHFCQUFxQjtBQUN0Mkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3BhZ2VzL2hvbWUvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3N0eWxlc19wYWdlX3dyYXBwZXJfX3NYb2haIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZTtcXG59XFxuXFxuLnN0eWxlc190cmFuc2l0aW9uX18zaW9aOSB7XFxuICBoZWlnaHQ6IDEwMHZ3O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLnN0eWxlc19wcm9ncmVzc19iYXJfX1hhaDRjIHtcXG4gIHdpZHRoOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uc3R5bGVzX3Byb2dyZXNzX2Jhcl93cmFwcGVyX18ybldFNiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAtMjtcXG4gIGxlZnQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZCREE2MSAwJSwgI0ZGNUFDRCAxMDAlKTtcXG59XFxuXFxuLnN0eWxlc19tYWluX18xdXUtbiB7XFxuICB6LWluZGV4OiAtMztcXG4gIG1hcmdpbi1sZWZ0OiAxNi4zODl2dztcXG4gIHdpZHRoOiA4MC4yNzd2dztcXG4gIHBhZGRpbmc6IDAgMS42Njd2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiBoMSB7XFxuICBtYXJnaW4tYm90dG9tOiAzLjMzM3Z3O1xcbn1cXG4uc3R5bGVzX21haW5fXzF1dS1uIHNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTYuNjY3dnc7XFxufVxcbi5zdHlsZXNfbWFpbl9fMXV1LW4gc2VjdGlvbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5zdHlsZXNfbWFpbl9fMXV1LW4gLnN0eWxlc193b3JrX3NlY3Rpb25fXzFHZHJTIHtcXG4gIG1hcmdpbi1sZWZ0OiA2LjgwNnZ3O1xcbn1cXG4uc3R5bGVzX21haW5fXzF1dS1uIC5zdHlsZXNfcHJvamVjdF9jYXJkX18yYWJRRSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHZ3O1xcbn1cXG4uc3R5bGVzX21haW5fXzF1dS1uIC5zdHlsZXNfcHJvamVjdF9jYXJkX18yYWJRRTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5zdHlsZXNfcHJvZ3Jlc3NfYmFyX3dyYXBwZXJfXzJuV0U2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5zdHlsZXNfbWFpbl9fMXV1LW4ge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgLnN0eWxlc19tYWluX18xdXUtbiBzZWN0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjUuNnZ3O1xcbiAgfVxcbiAgLnN0eWxlc19tYWluX18xdXUtbiAuc3R5bGVzX3dvcmtfc2VjdGlvbl9fMUdkclMge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbiAgLnN0eWxlc19tYWluX18xdXUtbiAuc3R5bGVzX3Byb2plY3RfY2FyZF9fMmFiUUUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMi44dnc7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFFQSxVQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1FQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EscUJDZkc7RURnQkgsZUFBQTtFQUNBLGtCQUFBO0FBRko7QUFJSTtFQUNJLHNCQ2RGO0FEWU47QUFLSTtFQUNJLHVCQ2JEO0FEVVA7QUFNSTtFQUNJLGdCQUFBO0FBSlI7QUFPSTtFQUNJLG9CQUFBO0FBTFI7QUFRSTtFQUNJLG1CQzNCRDtBRHFCUDtBQVNJO0VBQ0ksZ0JBQUE7QUFQUjs7QUFZQTtFQUVJO0lBQ0ksYUFBQTtFQVZOOztFQWFFO0lBQ0ksY0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBVk47RUFZTTtJQUNJLHFCQ3ZDQTtFRDZCVjtFQWFNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7RUFYVjtFQWNNO0lBQ0kscUJDbERBO0VEc0NWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xcblxcbiNwYWdlX3dyYXBwZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZTtcXG59XFxuXFxuLnRyYW5zaXRpb24ge1xcbiAgICBoZWlnaHQ6IDEwMHZ3O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbi5wcm9ncmVzc19iYXIge1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ucHJvZ3Jlc3NfYmFyX3dyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IC0yO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgICBib3R0b206IDBweDtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZCREE2MSAwJSwgI0ZGNUFDRCAxMDAlKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICB6LWluZGV4OiAtMztcXG4gICAgbWFyZ2luLWxlZnQ6ICRtTmF2O1xcbiAgICB3aWR0aDogODMuNjExdncgLSAoMiAqICRtMjQpO1xcbiAgICBwYWRkaW5nOiAwICRtMjQ7XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRtNDg7XFxuICAgIH1cXG5cXG4gICAgc2VjdGlvbiB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAkbTI0MDtcXG4gICAgfVxcblxcbiAgICBzZWN0aW9uOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAud29ya19zZWN0aW9uIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkdzEgKyAkbTI0O1xcbiAgICB9XFxuICAgIFxcbiAgICAucHJvamVjdF9jYXJkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRtMTQ0O1xcbiAgICB9XFxuICAgIFxcbiAgICAucHJvamVjdF9jYXJkOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuXFxuICAgIC5wcm9ncmVzc19iYXJfd3JhcHBlciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5tYWluIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG5cXG4gICAgICAgIHNlY3Rpb24ge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRtOTZNb2JpbGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAud29ya19zZWN0aW9uIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgLnByb2plY3RfY2FyZCB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJG00OE1vYmlsZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIixcIiRkYXJrOiAjMUExQTFBO1xcbiRncmF5OiAjODA4MDgwO1xcbiR3aGl0ZTogI0ZGRkZGRjtcXG4kYmx1ZTogIzAwMDBGRjtcXG4kbGlnaHQ6ICNGMkYyRjI7XFxuXFxuJGgxOiAxMHZ3O1xcbiRoMjogMy4zMzN2dztcXG4kaDM6IDIuMjIydnc7XFxuJHA6IDEuNjY3dnc7XFxuXFxuJGgxTW9iaWxlOiAyMi40dnc7XFxuJGgyTW9iaWxlOiA4LjUzM3Z3O1xcbiRoM01vYmlsZTogNi40dnc7XFxuJHBNb2JpbGU6IDQuMjY3dnc7XFxuXFxuJG1OYXY6IDE2LjM4OXZ3O1xcbiRtNjogMC40MTd2dztcXG4kbTEyOiAwLjgzM3Z3O1xcbiRtMTY6IDEuMTExdnc7XFxuJG0yNDogMS42Njd2dztcXG4kbTMyOiAyLjIyMnZ3OyBcXG4kbTQ4OiAzLjMzM3Z3O1xcbiRtNjQ6IDQuNDQ0dnc7XFxuJG05NjogNi42Njd2dztcXG4kbTE0NDogMTB2dztcXG4kbTE5MjogMTMuMzMzdnc7XFxuJG0yNDA6IDE2LjY2N3Z3O1xcblxcbiRtMTJNb2JpbGU6IDMuMnZ3O1xcbiRtMTZNb2JpbGU6IDQuMjY3dnc7XFxuJG0zMk1vYmlsZTogOC41MzN2dztcXG4kbTQ4TW9iaWxlOiAxMi44dnc7XFxuJG02NE1vYmlsZTogMTcuMDY3dnc7XFxuJG05Nk1vYmlsZTogMjUuNnZ3O1xcblxcblxcbiR3MTogNS4xMzl2dztcXG4kdzI6IDEyLjAxM3Z3O1xcbiR3MzogMTguODE5dnc7XFxuJHc0OiAyNS42MjV2dztcXG4kdzU6IDMyLjV2dztcXG4kdzY6IDM5LjMwNnZ3O1xcbiR3NzogNDYuMTExdnc7XFxuJHc4OiA1Mi45ODZ2dztcXG4kdzk6IDU5Ljc5MnZ3O1xcbiR3MTA6IDY2LjU5N3Z3O1xcbiR3MTE6IDczLjQwM3Z3O1xcbiR3MTI6IDgwLjI3OHZ3O1xcbiR3RnVsbDogODMuNjExdnc7XFxuXFxuJHcxTW9iaWxlOiAxOS43MzN2dztcXG4kdzJNb2JpbGU6IDQzLjczM3Z3O1xcbiR3M01vYmlsZTogNjcuNDY3dnc7XFxuJHc0TW9iaWxlOiA5MS40Njd2dztcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJwYWdlX3dyYXBwZXJcIjogXCJzdHlsZXNfcGFnZV93cmFwcGVyX19zWG9oWlwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJzdHlsZXNfdHJhbnNpdGlvbl9fM2lvWjlcIixcblx0XCJwcm9ncmVzc19iYXJcIjogXCJzdHlsZXNfcHJvZ3Jlc3NfYmFyX19YYWg0Y1wiLFxuXHRcInByb2dyZXNzX2Jhcl93cmFwcGVyXCI6IFwic3R5bGVzX3Byb2dyZXNzX2Jhcl93cmFwcGVyX18ybldFNlwiLFxuXHRcIm1haW5cIjogXCJzdHlsZXNfbWFpbl9fMXV1LW5cIixcblx0XCJ3b3JrX3NlY3Rpb25cIjogXCJzdHlsZXNfd29ya19zZWN0aW9uX18xR2RyU1wiLFxuXHRcInByb2plY3RfY2FyZFwiOiBcInN0eWxlc19wcm9qZWN0X2NhcmRfXzJhYlFFXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/home/styles.module.scss\n");

/***/ })

})