webpackHotUpdate_N_E("pages/bits_of_good",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/shared/button/styles.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/shared/button/styles.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".styles_button_container__1TxK8 {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: nowrap;\\n  align-items: center;\\n  width: -webkit-max-content;\\n  width: -moz-max-content;\\n  width: max-content;\\n}\\n.styles_button_container__1TxK8 h3 {\\n  display: inline;\\n  margin-bottom: 0;\\n  margin-right: 0.833vw;\\n  color: #1A1A1A;\\n}\\n.styles_button_container__1TxK8 img {\\n  display: inline;\\n  width: 1.8vw;\\n  height: auto;\\n}\\n\\n.styles_button_container__1TxK8:hover {\\n  text-decoration: underline;\\n}\\n\\n@media only screen and (max-width: 480px) {\\n  .styles_button_container__1TxK8 {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: nowrap;\\n    align-items: center;\\n    width: -webkit-max-content;\\n    width: -moz-max-content;\\n    width: max-content;\\n  }\\n  .styles_button_container__1TxK8 h3 {\\n    display: inline;\\n    margin-bottom: 0;\\n    margin-right: 0.833vw;\\n    color: #1A1A1A;\\n  }\\n  .styles_button_container__1TxK8 img {\\n    width: 4vw;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.module.scss\",\"webpack://../../../variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,0BAAA;EAAA,uBAAA;EAAA,kBAAA;AADJ;AAGI;EACI,eAAA;EACA,gBAAA;EACA,qBCMF;EDLE,cCbD;ADYP;AAII;EACI,eAAA;EACA,YAAA;EACA,YAAA;AAFR;;AAMA;EACI,0BAAA;AAHJ;;AAMA;EACI;IACI,aAAA;IACA,mBAAA;IACA,iBAAA;IACA,mBAAA;IACA,0BAAA;IAAA,uBAAA;IAAA,kBAAA;EAHN;EAKM;IACI,eAAA;IACA,gBAAA;IACA,qBCpBN;IDqBM,cCvCL;EDoCL;EAMM;IACI,UAAA;EAJV;AACF\",\"sourcesContent\":[\"@import '../../../variables.scss';\\n\\n.button_container {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: nowrap;\\n    align-items: center;\\n    width: max-content;\\n\\n    h3 {\\n        display: inline;\\n        margin-bottom: 0;\\n        margin-right: $m12;\\n        color: $dark;\\n    }\\n\\n    img {\\n        display: inline;\\n        width: 1.8vw;\\n        height: auto;\\n    }\\n}\\n\\n.button_container:hover {\\n    text-decoration: underline;\\n}\\n\\n@media only screen and (max-width: 480px) {\\n    .button_container {\\n        display: flex;\\n        flex-direction: row;\\n        flex-wrap: nowrap;\\n        align-items: center;\\n        width: max-content;\\n    \\n        h3 {\\n            display: inline;\\n            margin-bottom: 0;\\n            margin-right: $m12;\\n            color: $dark;\\n        }\\n    \\n        img {\\n            width: 4vw;\\n        }\\n    }\\n}\",\"$dark: #1A1A1A;\\n$gray: #808080;\\n$white: #FFFFFF;\\n$blue: #0000FF;\\n$light: #F2F2F2;\\n\\n$h1: 10vw;\\n$h2: 3.333vw;\\n$h3: 2.222vw;\\n$p: 1.667vw;\\n\\n$h1Mobile: 25.6vw;\\n$h2Mobile: 8.533vw;\\n$h3Mobile: 6.4vw;\\n$pMobile: 4.267vw;\\n\\n$mNav: 16.389vw;\\n$m6: 0.417vw;\\n$m12: 0.833vw;\\n$m16: 1.111vw;\\n$m24: 1.667vw;\\n$m32: 2.222vw; \\n$m48: 3.333vw;\\n$m64: 4.444vw;\\n$m96: 6.667vw;\\n$m144: 10vw;\\n$m192: 13.333vw;\\n$m240: 16.667vw;\\n\\n$m12Mobile: 3.2vw;\\n$m16Mobile: 4.267vw;\\n$m32Mobile: 8.533vw;\\n$m48Mobile: 12.8vw;\\n$m64Mobile: 17.067vw;\\n$m96Mobile: 25.6vw;\\n\\n\\n$w1: 5.139vw;\\n$w2: 12.013vw;\\n$w3: 18.819vw;\\n$w4: 25.625vw;\\n$w5: 32.5vw;\\n$w6: 39.306vw;\\n$w7: 46.111vw;\\n$w8: 52.986vw;\\n$w9: 59.792vw;\\n$w10: 66.597vw;\\n$w11: 73.403vw;\\n$w12: 80.278vw;\\n$wFull: 83.611vw;\\n\\n$w1Mobile: 19.733vw;\\n$w2Mobile: 43.733vw;\\n$w3Mobile: 67.467vw;\\n$w4Mobile: 91.467vw;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"button_container\": \"styles_button_container__1TxK8\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz82OTA3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxvQ0FBb0Msa0JBQWtCLHdCQUF3QixzQkFBc0Isd0JBQXdCLCtCQUErQiw0QkFBNEIsdUJBQXVCLEdBQUcsc0NBQXNDLG9CQUFvQixxQkFBcUIsMEJBQTBCLG1CQUFtQixHQUFHLHVDQUF1QyxvQkFBb0IsaUJBQWlCLGlCQUFpQixHQUFHLDJDQUEyQywrQkFBK0IsR0FBRywrQ0FBK0MscUNBQXFDLG9CQUFvQiwwQkFBMEIsd0JBQXdCLDBCQUEwQixpQ0FBaUMsOEJBQThCLHlCQUF5QixLQUFLLHdDQUF3QyxzQkFBc0IsdUJBQXVCLDRCQUE0QixxQkFBcUIsS0FBSyx5Q0FBeUMsaUJBQWlCLEtBQUssR0FBRyxPQUFPLHVIQUF1SCxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssMkRBQTJELHVCQUF1QixvQkFBb0IsMEJBQTBCLHdCQUF3QiwwQkFBMEIseUJBQXlCLFlBQVksMEJBQTBCLDJCQUEyQiw2QkFBNkIsdUJBQXVCLE9BQU8sYUFBYSwwQkFBMEIsdUJBQXVCLHVCQUF1QixPQUFPLEdBQUcsNkJBQTZCLGlDQUFpQyxHQUFHLCtDQUErQyx5QkFBeUIsd0JBQXdCLDhCQUE4Qiw0QkFBNEIsOEJBQThCLDZCQUE2QixvQkFBb0IsOEJBQThCLCtCQUErQixpQ0FBaUMsMkJBQTJCLFdBQVcscUJBQXFCLHlCQUF5QixXQUFXLE9BQU8sR0FBRyxrQkFBa0IsaUJBQWlCLGtCQUFrQixpQkFBaUIsa0JBQWtCLGNBQWMsZUFBZSxlQUFlLGNBQWMsc0JBQXNCLHFCQUFxQixtQkFBbUIsb0JBQW9CLG9CQUFvQixlQUFlLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLGdCQUFnQixjQUFjLGtCQUFrQixrQkFBa0Isc0JBQXNCLHNCQUFzQixzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsbUJBQW1CLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGNBQWMsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsaUJBQWlCLG1CQUFtQix3QkFBd0Isc0JBQXNCLHNCQUFzQixzQkFBc0IscUJBQXFCO0FBQ3J2RztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vY29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZXNfYnV0dG9uX2NvbnRhaW5lcl9fMVR4Szgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogLXdlYmtpdC1tYXgtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG4uc3R5bGVzX2J1dHRvbl9jb250YWluZXJfXzFUeEs4IGgzIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuODMzdnc7XFxuICBjb2xvcjogIzFBMUExQTtcXG59XFxuLnN0eWxlc19idXR0b25fY29udGFpbmVyX18xVHhLOCBpbWcge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgd2lkdGg6IDEuOHZ3O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc3R5bGVzX2J1dHRvbl9jb250YWluZXJfXzFUeEs4OmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuc3R5bGVzX2J1dHRvbl9jb250YWluZXJfXzFUeEs4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xcbiAgICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgfVxcbiAgLnN0eWxlc19idXR0b25fY29udGFpbmVyX18xVHhLOCBoMyB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjgzM3Z3O1xcbiAgICBjb2xvcjogIzFBMUExQTtcXG4gIH1cXG4gIC5zdHlsZXNfYnV0dG9uX2NvbnRhaW5lcl9fMVR4SzggaW1nIHtcXG4gICAgd2lkdGg6IDR2dztcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQURKO0FBR0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkNNRjtFRExFLGNDYkQ7QURZUDtBQUlJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRlI7O0FBTUE7RUFDSSwwQkFBQTtBQUhKOztBQU1BO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsMEJBQUE7SUFBQSx1QkFBQTtJQUFBLGtCQUFBO0VBSE47RUFLTTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQ3BCTjtJRHFCTSxjQ3ZDTDtFRG9DTDtFQU1NO0lBQ0ksVUFBQTtFQUpWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xcblxcbi5idXR0b25fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG5cXG4gICAgaDMge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogJG0xMjtcXG4gICAgICAgIGNvbG9yOiAkZGFyaztcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgd2lkdGg6IDEuOHZ3O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxufVxcblxcbi5idXR0b25fY29udGFpbmVyOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgLmJ1dHRvbl9jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIFxcbiAgICAgICAgaDMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJG0xMjtcXG4gICAgICAgICAgICBjb2xvcjogJGRhcms7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICB3aWR0aDogNHZ3O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFwiJGRhcms6ICMxQTFBMUE7XFxuJGdyYXk6ICM4MDgwODA7XFxuJHdoaXRlOiAjRkZGRkZGO1xcbiRibHVlOiAjMDAwMEZGO1xcbiRsaWdodDogI0YyRjJGMjtcXG5cXG4kaDE6IDEwdnc7XFxuJGgyOiAzLjMzM3Z3O1xcbiRoMzogMi4yMjJ2dztcXG4kcDogMS42Njd2dztcXG5cXG4kaDFNb2JpbGU6IDI1LjZ2dztcXG4kaDJNb2JpbGU6IDguNTMzdnc7XFxuJGgzTW9iaWxlOiA2LjR2dztcXG4kcE1vYmlsZTogNC4yNjd2dztcXG5cXG4kbU5hdjogMTYuMzg5dnc7XFxuJG02OiAwLjQxN3Z3O1xcbiRtMTI6IDAuODMzdnc7XFxuJG0xNjogMS4xMTF2dztcXG4kbTI0OiAxLjY2N3Z3O1xcbiRtMzI6IDIuMjIydnc7IFxcbiRtNDg6IDMuMzMzdnc7XFxuJG02NDogNC40NDR2dztcXG4kbTk2OiA2LjY2N3Z3O1xcbiRtMTQ0OiAxMHZ3O1xcbiRtMTkyOiAxMy4zMzN2dztcXG4kbTI0MDogMTYuNjY3dnc7XFxuXFxuJG0xMk1vYmlsZTogMy4ydnc7XFxuJG0xNk1vYmlsZTogNC4yNjd2dztcXG4kbTMyTW9iaWxlOiA4LjUzM3Z3O1xcbiRtNDhNb2JpbGU6IDEyLjh2dztcXG4kbTY0TW9iaWxlOiAxNy4wNjd2dztcXG4kbTk2TW9iaWxlOiAyNS42dnc7XFxuXFxuXFxuJHcxOiA1LjEzOXZ3O1xcbiR3MjogMTIuMDEzdnc7XFxuJHczOiAxOC44MTl2dztcXG4kdzQ6IDI1LjYyNXZ3O1xcbiR3NTogMzIuNXZ3O1xcbiR3NjogMzkuMzA2dnc7XFxuJHc3OiA0Ni4xMTF2dztcXG4kdzg6IDUyLjk4NnZ3O1xcbiR3OTogNTkuNzkydnc7XFxuJHcxMDogNjYuNTk3dnc7XFxuJHcxMTogNzMuNDAzdnc7XFxuJHcxMjogODAuMjc4dnc7XFxuJHdGdWxsOiA4My42MTF2dztcXG5cXG4kdzFNb2JpbGU6IDE5LjczM3Z3O1xcbiR3Mk1vYmlsZTogNDMuNzMzdnc7XFxuJHczTW9iaWxlOiA2Ny40Njd2dztcXG4kdzRNb2JpbGU6IDkxLjQ2N3Z3O1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJ1dHRvbl9jb250YWluZXJcIjogXCJzdHlsZXNfYnV0dG9uX2NvbnRhaW5lcl9fMVR4SzhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/shared/button/styles.module.scss\n");

/***/ })

})