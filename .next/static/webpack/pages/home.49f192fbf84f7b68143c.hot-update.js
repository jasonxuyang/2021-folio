webpackHotUpdate_N_E("pages/home",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/home/styles.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/home/styles.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#styles_page_wrapper__sXohZ {\\n  opacity: 0;\\n  transition: all 0.8s linear;\\n}\\n\\n.styles_transition_overlay__2yyDz {\\n  background-color: #000000;\\n  width: 100vw;\\n  height: 100vh;\\n  transition: height 0.8s cubic-bezier(0.76, 0, 0.24, 1);\\n  position: fixed;\\n}\\n\\n.styles_progress_bar__Xah4c {\\n  width: 5px;\\n  background-color: #ffffff;\\n}\\n\\n.styles_progress_bar_wrapper__2nWE6 {\\n  position: fixed;\\n  left: 0px;\\n  top: 0px;\\n  bottom: 0px;\\n  width: 5px;\\n  background-image: linear-gradient(360deg, #FBDA61 0%, #FF5ACD 100%);\\n}\\n\\n.styles_main__1uu-n {\\n  margin-left: 16.389vw;\\n  width: 80.277vw;\\n  padding: 0 1.667vw;\\n}\\n.styles_main__1uu-n h1 {\\n  margin-bottom: 3.333vw;\\n}\\n.styles_main__1uu-n section {\\n  margin-bottom: 16.667vw;\\n}\\n.styles_main__1uu-n section:last-child {\\n  margin-bottom: 0;\\n}\\n.styles_main__1uu-n .styles_work_section__1GdrS {\\n  margin-left: 6.806vw;\\n}\\n.styles_main__1uu-n .styles_project_card__2abQE {\\n  margin-bottom: 10vw;\\n}\\n.styles_main__1uu-n .styles_project_card__2abQE:last-child {\\n  margin-bottom: 0;\\n}\\n\\n@media only screen and (max-width: 480px) {\\n  .styles_progress_bar_wrapper__2nWE6 {\\n    display: none;\\n  }\\n\\n  .styles_main__1uu-n {\\n    margin-left: 0;\\n    width: 100vw;\\n    padding: 0;\\n    position: absolute;\\n  }\\n  .styles_main__1uu-n section {\\n    margin-bottom: 25.6vw;\\n  }\\n  .styles_main__1uu-n .styles_work_section__1GdrS {\\n    width: 100vw;\\n    margin-left: 0;\\n  }\\n  .styles_main__1uu-n .styles_project_card__2abQE {\\n    margin-bottom: 12.8vw;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.module.scss\",\"webpack://../../variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,UAAA;EACA,2BAAA;AADJ;;AAIA;EACI,yBAAA;EACA,YAAA;EACA,aAAA;EACA,sDAAA;EACA,eAAA;AADJ;;AAIA;EACI,UAAA;EACA,yBAAA;AADJ;;AAIA;EACI,eAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,UAAA;EACA,mEAAA;AADJ;;AAIA;EACI,qBCdG;EDeH,eAAA;EACA,kBAAA;AADJ;AAGI;EACI,sBCbF;ADYN;AAII;EACI,uBCZD;ADUP;AAKI;EACI,gBAAA;AAHR;AAMI;EACI,oBAAA;AAJR;AAOI;EACI,mBC1BD;ADqBP;AAQI;EACI,gBAAA;AANR;;AAWA;EAEI;IACI,aAAA;EATN;;EAYE;IACI,cAAA;IACA,YAAA;IACA,UAAA;IACA,kBAAA;EATN;EAWM;IACI,qBCvCA;ED8BV;EAYM;IACI,YAAA;IACA,cAAA;EAVV;EAaM;IACI,qBClDA;EDuCV;AACF\",\"sourcesContent\":[\"@import '../../variables.scss';\\n\\n#page_wrapper {\\n    opacity: 0;\\n    transition: all 0.8s linear;\\n}\\n\\n.transition_overlay {\\n    background-color: #000000;\\n    width: 100vw;\\n    height: 100vh;\\n    transition: height 0.8s cubic-bezier(0.76, 0, 0.24, 1);\\n    position: fixed;\\n}\\n\\n.progress_bar {\\n    width: 5px;\\n    background-color: #ffffff;\\n}\\n\\n.progress_bar_wrapper {\\n    position: fixed;\\n    left: 0px;\\n    top: 0px;\\n    bottom: 0px;\\n    width: 5px;\\n    background-image: linear-gradient(360deg, #FBDA61 0%, #FF5ACD 100%);\\n}\\n\\n.main {\\n    margin-left: $mNav;\\n    width: 83.611vw - (2 * $m24);\\n    padding: 0 $m24;\\n\\n    h1 {\\n        margin-bottom: $m48;\\n    }\\n\\n    section {\\n        margin-bottom: $m240;\\n    }\\n\\n    section:last-child {\\n        margin-bottom: 0;\\n    }\\n\\n    .work_section {\\n        margin-left: $w1 + $m24;\\n    }\\n    \\n    .project_card {\\n        margin-bottom: $m144;\\n    }\\n    \\n    .project_card:last-child {\\n        margin-bottom: 0;\\n    }\\n}\\n\\n\\n@media only screen and (max-width: 480px) {\\n\\n    .progress_bar_wrapper {\\n        display: none;\\n    }\\n\\n    .main {\\n        margin-left: 0;\\n        width: 100vw;\\n        padding: 0;\\n        position: absolute;\\n\\n        section {\\n            margin-bottom: $m96Mobile;\\n        }\\n\\n        .work_section {\\n            width: 100vw;\\n            margin-left: 0;\\n        }\\n    \\n        .project_card {\\n            margin-bottom: $m48Mobile;\\n        }\\n    }\\n}\\n\\n\",\"$dark: #1A1A1A;\\n$gray: #808080;\\n$white: #FFFFFF;\\n$blue: #0000FF;\\n$light: #F2F2F2;\\n\\n$h1: 10vw;\\n$h2: 3.333vw;\\n$h3: 2.222vw;\\n$p: 1.667vw;\\n\\n$h1Mobile: 22.4vw;\\n$h2Mobile: 8.533vw;\\n$h3Mobile: 6.4vw;\\n$pMobile: 4.267vw;\\n\\n$mNav: 16.389vw;\\n$m6: 0.417vw;\\n$m12: 0.833vw;\\n$m16: 1.111vw;\\n$m24: 1.667vw;\\n$m32: 2.222vw; \\n$m48: 3.333vw;\\n$m64: 4.444vw;\\n$m96: 6.667vw;\\n$m144: 10vw;\\n$m192: 13.333vw;\\n$m240: 16.667vw;\\n\\n$m12Mobile: 3.2vw;\\n$m16Mobile: 4.267vw;\\n$m32Mobile: 8.533vw;\\n$m48Mobile: 12.8vw;\\n$m64Mobile: 17.067vw;\\n$m96Mobile: 25.6vw;\\n\\n\\n$w1: 5.139vw;\\n$w2: 12.013vw;\\n$w3: 18.819vw;\\n$w4: 25.625vw;\\n$w5: 32.5vw;\\n$w6: 39.306vw;\\n$w7: 46.111vw;\\n$w8: 52.986vw;\\n$w9: 59.792vw;\\n$w10: 66.597vw;\\n$w11: 73.403vw;\\n$w12: 80.278vw;\\n$wFull: 83.611vw;\\n\\n$w1Mobile: 19.733vw;\\n$w2Mobile: 43.733vw;\\n$w3Mobile: 67.467vw;\\n$w4Mobile: 91.467vw;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"page_wrapper\": \"styles_page_wrapper__sXohZ\",\n\t\"transition_overlay\": \"styles_transition_overlay__2yyDz\",\n\t\"progress_bar\": \"styles_progress_bar__Xah4c\",\n\t\"progress_bar_wrapper\": \"styles_progress_bar_wrapper__2nWE6\",\n\t\"main\": \"styles_main__1uu-n\",\n\t\"work_section\": \"styles_work_section__1GdrS\",\n\t\"project_card\": \"styles_project_card__2abQE\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9zdHlsZXMubW9kdWxlLnNjc3M/MWZlZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZ0NBQWdDLGVBQWUsZ0NBQWdDLEdBQUcsdUNBQXVDLDhCQUE4QixpQkFBaUIsa0JBQWtCLDJEQUEyRCxvQkFBb0IsR0FBRyxpQ0FBaUMsZUFBZSw4QkFBOEIsR0FBRyx5Q0FBeUMsb0JBQW9CLGNBQWMsYUFBYSxnQkFBZ0IsZUFBZSx3RUFBd0UsR0FBRyx5QkFBeUIsMEJBQTBCLG9CQUFvQix1QkFBdUIsR0FBRywwQkFBMEIsMkJBQTJCLEdBQUcsK0JBQStCLDRCQUE0QixHQUFHLDBDQUEwQyxxQkFBcUIsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcsbURBQW1ELHdCQUF3QixHQUFHLDhEQUE4RCxxQkFBcUIsR0FBRywrQ0FBK0MseUNBQXlDLG9CQUFvQixLQUFLLDJCQUEyQixxQkFBcUIsbUJBQW1CLGlCQUFpQix5QkFBeUIsS0FBSyxpQ0FBaUMsNEJBQTRCLEtBQUsscURBQXFELG1CQUFtQixxQkFBcUIsS0FBSyxxREFBcUQsNEJBQTRCLEtBQUssR0FBRyxPQUFPLG9IQUFvSCxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sd0RBQXdELG1CQUFtQixpQkFBaUIsa0NBQWtDLEdBQUcseUJBQXlCLGdDQUFnQyxtQkFBbUIsb0JBQW9CLDZEQUE2RCxzQkFBc0IsR0FBRyxtQkFBbUIsaUJBQWlCLGdDQUFnQyxHQUFHLDJCQUEyQixzQkFBc0IsZ0JBQWdCLGVBQWUsa0JBQWtCLGlCQUFpQiwwRUFBMEUsR0FBRyxXQUFXLHlCQUF5QixtQ0FBbUMsc0JBQXNCLFlBQVksOEJBQThCLE9BQU8saUJBQWlCLCtCQUErQixPQUFPLDRCQUE0QiwyQkFBMkIsT0FBTyx1QkFBdUIsa0NBQWtDLE9BQU8sMkJBQTJCLCtCQUErQixPQUFPLHNDQUFzQywyQkFBMkIsT0FBTyxHQUFHLGlEQUFpRCwrQkFBK0Isd0JBQXdCLE9BQU8sZUFBZSx5QkFBeUIsdUJBQXVCLHFCQUFxQiw2QkFBNkIscUJBQXFCLHdDQUF3QyxXQUFXLDJCQUEyQiwyQkFBMkIsNkJBQTZCLFdBQVcsK0JBQStCLHdDQUF3QyxXQUFXLE9BQU8sR0FBRyxzQkFBc0IsaUJBQWlCLGtCQUFrQixpQkFBaUIsa0JBQWtCLGNBQWMsZUFBZSxlQUFlLGNBQWMsc0JBQXNCLHFCQUFxQixtQkFBbUIsb0JBQW9CLG9CQUFvQixlQUFlLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLGdCQUFnQixjQUFjLGtCQUFrQixrQkFBa0Isc0JBQXNCLHNCQUFzQixzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsbUJBQW1CLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGNBQWMsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsaUJBQWlCLG1CQUFtQix3QkFBd0Isc0JBQXNCLHNCQUFzQixzQkFBc0IscUJBQXFCO0FBQ3poSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vcGFnZXMvaG9tZS9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjc3R5bGVzX3BhZ2Vfd3JhcHBlcl9fc1hvaFoge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGxpbmVhcjtcXG59XFxuXFxuLnN0eWxlc190cmFuc2l0aW9uX292ZXJsYXlfXzJ5eUR6IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuOHMgY3ViaWMtYmV6aWVyKDAuNzYsIDAsIDAuMjQsIDEpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uc3R5bGVzX3Byb2dyZXNzX2Jhcl9fWGFoNGMge1xcbiAgd2lkdGg6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5zdHlsZXNfcHJvZ3Jlc3NfYmFyX3dyYXBwZXJfXzJuV0U2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZCREE2MSAwJSwgI0ZGNUFDRCAxMDAlKTtcXG59XFxuXFxuLnN0eWxlc19tYWluX18xdXUtbiB7XFxuICBtYXJnaW4tbGVmdDogMTYuMzg5dnc7XFxuICB3aWR0aDogODAuMjc3dnc7XFxuICBwYWRkaW5nOiAwIDEuNjY3dnc7XFxufVxcbi5zdHlsZXNfbWFpbl9fMXV1LW4gaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMy4zMzN2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiBzZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2LjY2N3Z3O1xcbn1cXG4uc3R5bGVzX21haW5fXzF1dS1uIHNlY3Rpb246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uc3R5bGVzX21haW5fXzF1dS1uIC5zdHlsZXNfd29ya19zZWN0aW9uX18xR2RyUyB7XFxuICBtYXJnaW4tbGVmdDogNi44MDZ2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiAuc3R5bGVzX3Byb2plY3RfY2FyZF9fMmFiUUUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTB2dztcXG59XFxuLnN0eWxlc19tYWluX18xdXUtbiAuc3R5bGVzX3Byb2plY3RfY2FyZF9fMmFiUUU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuc3R5bGVzX3Byb2dyZXNzX2Jhcl93cmFwcGVyX18ybldFNiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc3R5bGVzX21haW5fXzF1dS1uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgfVxcbiAgLnN0eWxlc19tYWluX18xdXUtbiBzZWN0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjUuNnZ3O1xcbiAgfVxcbiAgLnN0eWxlc19tYWluX18xdXUtbiAuc3R5bGVzX3dvcmtfc2VjdGlvbl9fMUdkclMge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbiAgLnN0eWxlc19tYWluX18xdXUtbiAuc3R5bGVzX3Byb2plY3RfY2FyZF9fMmFiUUUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMi44dnc7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNEQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1FQUFBO0FBREo7O0FBSUE7RUFDSSxxQkNkRztFRGVILGVBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDSSxzQkNiRjtBRFlOO0FBSUk7RUFDSSx1QkNaRDtBRFVQO0FBS0k7RUFDSSxnQkFBQTtBQUhSO0FBTUk7RUFDSSxvQkFBQTtBQUpSO0FBT0k7RUFDSSxtQkMxQkQ7QURxQlA7QUFRSTtFQUNJLGdCQUFBO0FBTlI7O0FBV0E7RUFFSTtJQUNJLGFBQUE7RUFUTjs7RUFZRTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VBVE47RUFXTTtJQUNJLHFCQ3ZDQTtFRDhCVjtFQVlNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7RUFWVjtFQWFNO0lBQ0kscUJDbERBO0VEdUNWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xcblxcbiNwYWdlX3dyYXBwZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBsaW5lYXI7XFxufVxcblxcbi50cmFuc2l0aW9uX292ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjhzIGN1YmljLWJlemllcigwLjc2LCAwLCAwLjI0LCAxKTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4ucHJvZ3Jlc3NfYmFyIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnByb2dyZXNzX2Jhcl93cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgICBib3R0b206IDBweDtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZCREE2MSAwJSwgI0ZGNUFDRCAxMDAlKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBtYXJnaW4tbGVmdDogJG1OYXY7XFxuICAgIHdpZHRoOiA4My42MTF2dyAtICgyICogJG0yNCk7XFxuICAgIHBhZGRpbmc6IDAgJG0yNDtcXG5cXG4gICAgaDEge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJG00ODtcXG4gICAgfVxcblxcbiAgICBzZWN0aW9uIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRtMjQwO1xcbiAgICB9XFxuXFxuICAgIHNlY3Rpb246bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgIC53b3JrX3NlY3Rpb24ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR3MSArICRtMjQ7XFxuICAgIH1cXG4gICAgXFxuICAgIC5wcm9qZWN0X2NhcmQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJG0xNDQ7XFxuICAgIH1cXG4gICAgXFxuICAgIC5wcm9qZWN0X2NhcmQ6bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG5cXG4gICAgLnByb2dyZXNzX2Jhcl93cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICAgICAgc2VjdGlvbiB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJG05Nk1vYmlsZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC53b3JrX3NlY3Rpb24ge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICAucHJvamVjdF9jYXJkIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkbTQ4TW9iaWxlO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblwiLFwiJGRhcms6ICMxQTFBMUE7XFxuJGdyYXk6ICM4MDgwODA7XFxuJHdoaXRlOiAjRkZGRkZGO1xcbiRibHVlOiAjMDAwMEZGO1xcbiRsaWdodDogI0YyRjJGMjtcXG5cXG4kaDE6IDEwdnc7XFxuJGgyOiAzLjMzM3Z3O1xcbiRoMzogMi4yMjJ2dztcXG4kcDogMS42Njd2dztcXG5cXG4kaDFNb2JpbGU6IDIyLjR2dztcXG4kaDJNb2JpbGU6IDguNTMzdnc7XFxuJGgzTW9iaWxlOiA2LjR2dztcXG4kcE1vYmlsZTogNC4yNjd2dztcXG5cXG4kbU5hdjogMTYuMzg5dnc7XFxuJG02OiAwLjQxN3Z3O1xcbiRtMTI6IDAuODMzdnc7XFxuJG0xNjogMS4xMTF2dztcXG4kbTI0OiAxLjY2N3Z3O1xcbiRtMzI6IDIuMjIydnc7IFxcbiRtNDg6IDMuMzMzdnc7XFxuJG02NDogNC40NDR2dztcXG4kbTk2OiA2LjY2N3Z3O1xcbiRtMTQ0OiAxMHZ3O1xcbiRtMTkyOiAxMy4zMzN2dztcXG4kbTI0MDogMTYuNjY3dnc7XFxuXFxuJG0xMk1vYmlsZTogMy4ydnc7XFxuJG0xNk1vYmlsZTogNC4yNjd2dztcXG4kbTMyTW9iaWxlOiA4LjUzM3Z3O1xcbiRtNDhNb2JpbGU6IDEyLjh2dztcXG4kbTY0TW9iaWxlOiAxNy4wNjd2dztcXG4kbTk2TW9iaWxlOiAyNS42dnc7XFxuXFxuXFxuJHcxOiA1LjEzOXZ3O1xcbiR3MjogMTIuMDEzdnc7XFxuJHczOiAxOC44MTl2dztcXG4kdzQ6IDI1LjYyNXZ3O1xcbiR3NTogMzIuNXZ3O1xcbiR3NjogMzkuMzA2dnc7XFxuJHc3OiA0Ni4xMTF2dztcXG4kdzg6IDUyLjk4NnZ3O1xcbiR3OTogNTkuNzkydnc7XFxuJHcxMDogNjYuNTk3dnc7XFxuJHcxMTogNzMuNDAzdnc7XFxuJHcxMjogODAuMjc4dnc7XFxuJHdGdWxsOiA4My42MTF2dztcXG5cXG4kdzFNb2JpbGU6IDE5LjczM3Z3O1xcbiR3Mk1vYmlsZTogNDMuNzMzdnc7XFxuJHczTW9iaWxlOiA2Ny40Njd2dztcXG4kdzRNb2JpbGU6IDkxLjQ2N3Z3O1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInBhZ2Vfd3JhcHBlclwiOiBcInN0eWxlc19wYWdlX3dyYXBwZXJfX3NYb2haXCIsXG5cdFwidHJhbnNpdGlvbl9vdmVybGF5XCI6IFwic3R5bGVzX3RyYW5zaXRpb25fb3ZlcmxheV9fMnl5RHpcIixcblx0XCJwcm9ncmVzc19iYXJcIjogXCJzdHlsZXNfcHJvZ3Jlc3NfYmFyX19YYWg0Y1wiLFxuXHRcInByb2dyZXNzX2Jhcl93cmFwcGVyXCI6IFwic3R5bGVzX3Byb2dyZXNzX2Jhcl93cmFwcGVyX18ybldFNlwiLFxuXHRcIm1haW5cIjogXCJzdHlsZXNfbWFpbl9fMXV1LW5cIixcblx0XCJ3b3JrX3NlY3Rpb25cIjogXCJzdHlsZXNfd29ya19zZWN0aW9uX18xR2RyU1wiLFxuXHRcInByb2plY3RfY2FyZFwiOiBcInN0eWxlc19wcm9qZWN0X2NhcmRfXzJhYlFFXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/home/styles.module.scss\n");

/***/ })

})