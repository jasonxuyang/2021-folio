webpackHotUpdate_N_E("pages/home",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/home/styles.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/home/styles.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#styles_page_wrapper__sXohZ {\\n  opacity: 0;\\n  transition: all 0.8s linear;\\n}\\n\\n.styles_transition_overlay__2yyDz {\\n  background-color: #000000;\\n  width: 100vw;\\n  height: 100vh;\\n  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), height 0.8s cubic-bezier(0.76, 0, 0.24, 1);\\n  position: fixed;\\n  transform: translate(0, 0);\\n}\\n\\n.styles_progress_bar__Xah4c {\\n  width: 5px;\\n  background-color: #ffffff;\\n}\\n\\n.styles_progress_bar_wrapper__2nWE6 {\\n  position: fixed;\\n  left: 0px;\\n  top: 0px;\\n  bottom: 0px;\\n  width: 5px;\\n  background-image: linear-gradient(360deg, #FBDA61 0%, #FF5ACD 100%);\\n}\\n\\n.styles_main__1uu-n {\\n  margin-left: 16.389vw;\\n  width: 80.277vw;\\n  padding: 0 1.667vw;\\n}\\n.styles_main__1uu-n h1 {\\n  margin-bottom: 3.333vw;\\n}\\n.styles_main__1uu-n section {\\n  margin-bottom: 16.667vw;\\n}\\n.styles_main__1uu-n section:last-child {\\n  margin-bottom: 0;\\n}\\n.styles_main__1uu-n .styles_work_section__1GdrS {\\n  margin-left: 6.806vw;\\n}\\n.styles_main__1uu-n .styles_project_card__2abQE {\\n  margin-bottom: 10vw;\\n}\\n.styles_main__1uu-n .styles_project_card__2abQE:last-child {\\n  margin-bottom: 0;\\n}\\n\\n@media only screen and (max-width: 480px) {\\n  .styles_progress_bar_wrapper__2nWE6 {\\n    display: none;\\n  }\\n\\n  .styles_main__1uu-n {\\n    margin-left: 0;\\n    width: 100vw;\\n    padding: 0;\\n  }\\n  .styles_main__1uu-n section {\\n    margin-bottom: 25.6vw;\\n  }\\n  .styles_main__1uu-n .styles_work_section__1GdrS {\\n    width: 100vw;\\n    margin-left: 0;\\n  }\\n  .styles_main__1uu-n .styles_project_card__2abQE {\\n    margin-bottom: 12.8vw;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.module.scss\",\"webpack://../../variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,UAAA;EACA,2BAAA;AADJ;;AAIA;EACI,yBAAA;EACA,YAAA;EACA,aAAA;EACA,oGAAA;EAEA,eAAA;EACA,0BAAA;AAFJ;;AAKA;EACI,UAAA;EACA,yBAAA;AAFJ;;AAKA;EACI,eAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,UAAA;EACA,mEAAA;AAFJ;;AAKA;EACI,qBChBG;EDiBH,eAAA;EACA,kBAAA;AAFJ;AAII;EACI,sBCfF;ADaN;AAKI;EACI,uBCdD;ADWP;AAMI;EACI,gBAAA;AAJR;AAOI;EACI,oBAAA;AALR;AAQI;EACI,mBC5BD;ADsBP;AASI;EACI,gBAAA;AAPR;;AAYA;EAEI;IACI,aAAA;EAVN;;EAaE;IACI,cAAA;IACA,YAAA;IACA,UAAA;EAVN;EAYM;IACI,qBCxCA;ED8BV;EAaM;IACI,YAAA;IACA,cAAA;EAXV;EAcM;IACI,qBCnDA;EDuCV;AACF\",\"sourcesContent\":[\"@import '../../variables.scss';\\n\\n#page_wrapper {\\n    opacity: 0;\\n    transition: all 0.8s linear;\\n}\\n\\n.transition_overlay {\\n    background-color: #000000;\\n    width: 100vw;\\n    height: 100vh;\\n    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1),\\n                height 0.8s cubic-bezier(0.76, 0, 0.24, 1);\\n    position: fixed;\\n    transform: translate(0, 0);\\n}\\n\\n.progress_bar {\\n    width: 5px;\\n    background-color: #ffffff;\\n}\\n\\n.progress_bar_wrapper {\\n    position: fixed;\\n    left: 0px;\\n    top: 0px;\\n    bottom: 0px;\\n    width: 5px;\\n    background-image: linear-gradient(360deg, #FBDA61 0%, #FF5ACD 100%);\\n}\\n\\n.main {\\n    margin-left: $mNav;\\n    width: 83.611vw - (2 * $m24);\\n    padding: 0 $m24;\\n\\n    h1 {\\n        margin-bottom: $m48;\\n    }\\n\\n    section {\\n        margin-bottom: $m240;\\n    }\\n\\n    section:last-child {\\n        margin-bottom: 0;\\n    }\\n\\n    .work_section {\\n        margin-left: $w1 + $m24;\\n    }\\n    \\n    .project_card {\\n        margin-bottom: $m144;\\n    }\\n    \\n    .project_card:last-child {\\n        margin-bottom: 0;\\n    }\\n}\\n\\n\\n@media only screen and (max-width: 480px) {\\n\\n    .progress_bar_wrapper {\\n        display: none;\\n    }\\n\\n    .main {\\n        margin-left: 0;\\n        width: 100vw;\\n        padding: 0;\\n\\n        section {\\n            margin-bottom: $m96Mobile;\\n        }\\n\\n        .work_section {\\n            width: 100vw;\\n            margin-left: 0;\\n        }\\n    \\n        .project_card {\\n            margin-bottom: $m48Mobile;\\n        }\\n    }\\n}\\n\\n\",\"$dark: #1A1A1A;\\n$gray: #808080;\\n$white: #FFFFFF;\\n$blue: #0000FF;\\n$light: #F2F2F2;\\n\\n$h1: 10vw;\\n$h2: 3.333vw;\\n$h3: 2.222vw;\\n$p: 1.667vw;\\n\\n$h1Mobile: 22.4vw;\\n$h2Mobile: 8.533vw;\\n$h3Mobile: 6.4vw;\\n$pMobile: 4.267vw;\\n\\n$mNav: 16.389vw;\\n$m6: 0.417vw;\\n$m12: 0.833vw;\\n$m16: 1.111vw;\\n$m24: 1.667vw;\\n$m32: 2.222vw; \\n$m48: 3.333vw;\\n$m64: 4.444vw;\\n$m96: 6.667vw;\\n$m144: 10vw;\\n$m192: 13.333vw;\\n$m240: 16.667vw;\\n\\n$m12Mobile: 3.2vw;\\n$m16Mobile: 4.267vw;\\n$m32Mobile: 8.533vw;\\n$m48Mobile: 12.8vw;\\n$m64Mobile: 17.067vw;\\n$m96Mobile: 25.6vw;\\n\\n\\n$w1: 5.139vw;\\n$w2: 12.013vw;\\n$w3: 18.819vw;\\n$w4: 25.625vw;\\n$w5: 32.5vw;\\n$w6: 39.306vw;\\n$w7: 46.111vw;\\n$w8: 52.986vw;\\n$w9: 59.792vw;\\n$w10: 66.597vw;\\n$w11: 73.403vw;\\n$w12: 80.278vw;\\n$wFull: 83.611vw;\\n\\n$w1Mobile: 19.733vw;\\n$w2Mobile: 43.733vw;\\n$w3Mobile: 67.467vw;\\n$w4Mobile: 91.467vw;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"page_wrapper\": \"styles_page_wrapper__sXohZ\",\n\t\"transition_overlay\": \"styles_transition_overlay__2yyDz\",\n\t\"progress_bar\": \"styles_progress_bar__Xah4c\",\n\t\"progress_bar_wrapper\": \"styles_progress_bar_wrapper__2nWE6\",\n\t\"main\": \"styles_main__1uu-n\",\n\t\"work_section\": \"styles_work_section__1GdrS\",\n\t\"project_card\": \"styles_project_card__2abQE\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9zdHlsZXMubW9kdWxlLnNjc3M/MWZlZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZ0NBQWdDLGVBQWUsZ0NBQWdDLEdBQUcsdUNBQXVDLDhCQUE4QixpQkFBaUIsa0JBQWtCLHlHQUF5RyxvQkFBb0IsK0JBQStCLEdBQUcsaUNBQWlDLGVBQWUsOEJBQThCLEdBQUcseUNBQXlDLG9CQUFvQixjQUFjLGFBQWEsZ0JBQWdCLGVBQWUsd0VBQXdFLEdBQUcseUJBQXlCLDBCQUEwQixvQkFBb0IsdUJBQXVCLEdBQUcsMEJBQTBCLDJCQUEyQixHQUFHLCtCQUErQiw0QkFBNEIsR0FBRywwQ0FBMEMscUJBQXFCLEdBQUcsbURBQW1ELHlCQUF5QixHQUFHLG1EQUFtRCx3QkFBd0IsR0FBRyw4REFBOEQscUJBQXFCLEdBQUcsK0NBQStDLHlDQUF5QyxvQkFBb0IsS0FBSywyQkFBMkIscUJBQXFCLG1CQUFtQixpQkFBaUIsS0FBSyxpQ0FBaUMsNEJBQTRCLEtBQUsscURBQXFELG1CQUFtQixxQkFBcUIsS0FBSyxxREFBcUQsNEJBQTRCLEtBQUssR0FBRyxPQUFPLG9IQUFvSCxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sd0RBQXdELG1CQUFtQixpQkFBaUIsa0NBQWtDLEdBQUcseUJBQXlCLGdDQUFnQyxtQkFBbUIsb0JBQW9CLDRIQUE0SCxzQkFBc0IsaUNBQWlDLEdBQUcsbUJBQW1CLGlCQUFpQixnQ0FBZ0MsR0FBRywyQkFBMkIsc0JBQXNCLGdCQUFnQixlQUFlLGtCQUFrQixpQkFBaUIsMEVBQTBFLEdBQUcsV0FBVyx5QkFBeUIsbUNBQW1DLHNCQUFzQixZQUFZLDhCQUE4QixPQUFPLGlCQUFpQiwrQkFBK0IsT0FBTyw0QkFBNEIsMkJBQTJCLE9BQU8sdUJBQXVCLGtDQUFrQyxPQUFPLDJCQUEyQiwrQkFBK0IsT0FBTyxzQ0FBc0MsMkJBQTJCLE9BQU8sR0FBRyxpREFBaUQsK0JBQStCLHdCQUF3QixPQUFPLGVBQWUseUJBQXlCLHVCQUF1QixxQkFBcUIscUJBQXFCLHdDQUF3QyxXQUFXLDJCQUEyQiwyQkFBMkIsNkJBQTZCLFdBQVcsK0JBQStCLHdDQUF3QyxXQUFXLE9BQU8sR0FBRyxzQkFBc0IsaUJBQWlCLGtCQUFrQixpQkFBaUIsa0JBQWtCLGNBQWMsZUFBZSxlQUFlLGNBQWMsc0JBQXNCLHFCQUFxQixtQkFBbUIsb0JBQW9CLG9CQUFvQixlQUFlLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLGdCQUFnQixjQUFjLGtCQUFrQixrQkFBa0Isc0JBQXNCLHNCQUFzQixzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsbUJBQW1CLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGNBQWMsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsaUJBQWlCLG1CQUFtQix3QkFBd0Isc0JBQXNCLHNCQUFzQixzQkFBc0IscUJBQXFCO0FBQ2xwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vcGFnZXMvaG9tZS9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjc3R5bGVzX3BhZ2Vfd3JhcHBlcl9fc1hvaFoge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGxpbmVhcjtcXG59XFxuXFxuLnN0eWxlc190cmFuc2l0aW9uX292ZXJsYXlfXzJ5eUR6IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDEsIDAuNSwgMSksIGhlaWdodCAwLjhzIGN1YmljLWJlemllcigwLjc2LCAwLCAwLjI0LCAxKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbn1cXG5cXG4uc3R5bGVzX3Byb2dyZXNzX2Jhcl9fWGFoNGMge1xcbiAgd2lkdGg6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5zdHlsZXNfcHJvZ3Jlc3NfYmFyX3dyYXBwZXJfXzJuV0U2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZCREE2MSAwJSwgI0ZGNUFDRCAxMDAlKTtcXG59XFxuXFxuLnN0eWxlc19tYWluX18xdXUtbiB7XFxuICBtYXJnaW4tbGVmdDogMTYuMzg5dnc7XFxuICB3aWR0aDogODAuMjc3dnc7XFxuICBwYWRkaW5nOiAwIDEuNjY3dnc7XFxufVxcbi5zdHlsZXNfbWFpbl9fMXV1LW4gaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMy4zMzN2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiBzZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2LjY2N3Z3O1xcbn1cXG4uc3R5bGVzX21haW5fXzF1dS1uIHNlY3Rpb246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uc3R5bGVzX21haW5fXzF1dS1uIC5zdHlsZXNfd29ya19zZWN0aW9uX18xR2RyUyB7XFxuICBtYXJnaW4tbGVmdDogNi44MDZ2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiAuc3R5bGVzX3Byb2plY3RfY2FyZF9fMmFiUUUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTB2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiAuc3R5bGVzX3Byb2plY3RfY2FyZF9fMmFiUUU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuc3R5bGVzX3Byb2dyZXNzX2Jhcl93cmFwcGVyX18ybldFNiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc3R5bGVzX21haW5fXzF1dS1uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC5zdHlsZXNfbWFpbl9fMXV1LW4gc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1LjZ2dztcXG4gIH1cXG4gIC5zdHlsZXNfbWFpbl9fMXV1LW4gLnN0eWxlc193b3JrX3NlY3Rpb25fXzFHZHJTIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5zdHlsZXNfbWFpbl9fMXV1LW4gLnN0eWxlc19wcm9qZWN0X2NhcmRfXzJhYlFFIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTIuOHZ3O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvR0FBQTtFQUVBLGVBQUE7RUFDQSwwQkFBQTtBQUZKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1FQUFBO0FBRko7O0FBS0E7RUFDSSxxQkNoQkc7RURpQkgsZUFBQTtFQUNBLGtCQUFBO0FBRko7QUFJSTtFQUNJLHNCQ2ZGO0FEYU47QUFLSTtFQUNJLHVCQ2REO0FEV1A7QUFNSTtFQUNJLGdCQUFBO0FBSlI7QUFPSTtFQUNJLG9CQUFBO0FBTFI7QUFRSTtFQUNJLG1CQzVCRDtBRHNCUDtBQVNJO0VBQ0ksZ0JBQUE7QUFQUjs7QUFZQTtFQUVJO0lBQ0ksYUFBQTtFQVZOOztFQWFFO0lBQ0ksY0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBVk47RUFZTTtJQUNJLHFCQ3hDQTtFRDhCVjtFQWFNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7RUFYVjtFQWNNO0lBQ0kscUJDbkRBO0VEdUNWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xcblxcbiNwYWdlX3dyYXBwZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBsaW5lYXI7XFxufVxcblxcbi50cmFuc2l0aW9uX292ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjI1LCAxLCAwLjUsIDEpLFxcbiAgICAgICAgICAgICAgICBoZWlnaHQgMC44cyBjdWJpYy1iZXppZXIoMC43NiwgMCwgMC4yNCwgMSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxufVxcblxcbi5wcm9ncmVzc19iYXIge1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ucHJvZ3Jlc3NfYmFyX3dyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRkJEQTYxIDAlLCAjRkY1QUNEIDEwMCUpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAkbU5hdjtcXG4gICAgd2lkdGg6IDgzLjYxMXZ3IC0gKDIgKiAkbTI0KTtcXG4gICAgcGFkZGluZzogMCAkbTI0O1xcblxcbiAgICBoMSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAkbTQ4O1xcbiAgICB9XFxuXFxuICAgIHNlY3Rpb24ge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJG0yNDA7XFxuICAgIH1cXG5cXG4gICAgc2VjdGlvbjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLndvcmtfc2VjdGlvbiB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogJHcxICsgJG0yNDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnByb2plY3RfY2FyZCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAkbTE0NDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnByb2plY3RfY2FyZDpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgICAucHJvZ3Jlc3NfYmFyX3dyYXBwZXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgICAgICBzZWN0aW9uIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkbTk2TW9iaWxlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLndvcmtfc2VjdGlvbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgICAgIC5wcm9qZWN0X2NhcmQge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRtNDhNb2JpbGU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXCIsXCIkZGFyazogIzFBMUExQTtcXG4kZ3JheTogIzgwODA4MDtcXG4kd2hpdGU6ICNGRkZGRkY7XFxuJGJsdWU6ICMwMDAwRkY7XFxuJGxpZ2h0OiAjRjJGMkYyO1xcblxcbiRoMTogMTB2dztcXG4kaDI6IDMuMzMzdnc7XFxuJGgzOiAyLjIyMnZ3O1xcbiRwOiAxLjY2N3Z3O1xcblxcbiRoMU1vYmlsZTogMjIuNHZ3O1xcbiRoMk1vYmlsZTogOC41MzN2dztcXG4kaDNNb2JpbGU6IDYuNHZ3O1xcbiRwTW9iaWxlOiA0LjI2N3Z3O1xcblxcbiRtTmF2OiAxNi4zODl2dztcXG4kbTY6IDAuNDE3dnc7XFxuJG0xMjogMC44MzN2dztcXG4kbTE2OiAxLjExMXZ3O1xcbiRtMjQ6IDEuNjY3dnc7XFxuJG0zMjogMi4yMjJ2dzsgXFxuJG00ODogMy4zMzN2dztcXG4kbTY0OiA0LjQ0NHZ3O1xcbiRtOTY6IDYuNjY3dnc7XFxuJG0xNDQ6IDEwdnc7XFxuJG0xOTI6IDEzLjMzM3Z3O1xcbiRtMjQwOiAxNi42Njd2dztcXG5cXG4kbTEyTW9iaWxlOiAzLjJ2dztcXG4kbTE2TW9iaWxlOiA0LjI2N3Z3O1xcbiRtMzJNb2JpbGU6IDguNTMzdnc7XFxuJG00OE1vYmlsZTogMTIuOHZ3O1xcbiRtNjRNb2JpbGU6IDE3LjA2N3Z3O1xcbiRtOTZNb2JpbGU6IDI1LjZ2dztcXG5cXG5cXG4kdzE6IDUuMTM5dnc7XFxuJHcyOiAxMi4wMTN2dztcXG4kdzM6IDE4LjgxOXZ3O1xcbiR3NDogMjUuNjI1dnc7XFxuJHc1OiAzMi41dnc7XFxuJHc2OiAzOS4zMDZ2dztcXG4kdzc6IDQ2LjExMXZ3O1xcbiR3ODogNTIuOTg2dnc7XFxuJHc5OiA1OS43OTJ2dztcXG4kdzEwOiA2Ni41OTd2dztcXG4kdzExOiA3My40MDN2dztcXG4kdzEyOiA4MC4yNzh2dztcXG4kd0Z1bGw6IDgzLjYxMXZ3O1xcblxcbiR3MU1vYmlsZTogMTkuNzMzdnc7XFxuJHcyTW9iaWxlOiA0My43MzN2dztcXG4kdzNNb2JpbGU6IDY3LjQ2N3Z3O1xcbiR3NE1vYmlsZTogOTEuNDY3dnc7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicGFnZV93cmFwcGVyXCI6IFwic3R5bGVzX3BhZ2Vfd3JhcHBlcl9fc1hvaFpcIixcblx0XCJ0cmFuc2l0aW9uX292ZXJsYXlcIjogXCJzdHlsZXNfdHJhbnNpdGlvbl9vdmVybGF5X18yeXlEelwiLFxuXHRcInByb2dyZXNzX2JhclwiOiBcInN0eWxlc19wcm9ncmVzc19iYXJfX1hhaDRjXCIsXG5cdFwicHJvZ3Jlc3NfYmFyX3dyYXBwZXJcIjogXCJzdHlsZXNfcHJvZ3Jlc3NfYmFyX3dyYXBwZXJfXzJuV0U2XCIsXG5cdFwibWFpblwiOiBcInN0eWxlc19tYWluX18xdXUtblwiLFxuXHRcIndvcmtfc2VjdGlvblwiOiBcInN0eWxlc193b3JrX3NlY3Rpb25fXzFHZHJTXCIsXG5cdFwicHJvamVjdF9jYXJkXCI6IFwic3R5bGVzX3Byb2plY3RfY2FyZF9fMmFiUUVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/home/styles.module.scss\n");

/***/ })

})