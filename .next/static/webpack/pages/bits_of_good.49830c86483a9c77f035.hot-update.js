webpackHotUpdate_N_E("pages/bits_of_good",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/project/overview/styles.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/project/overview/styles.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".styles_overview_section__3Huzz {\\n  display: flex;\\n  flex-direction: column;\\n  width: 66.597vw;\\n  margin: 13.333vw 6.806vw;\\n}\\n.styles_overview_section__3Huzz h3 {\\n  margin-bottom: 1.667vw;\\n}\\n.styles_overview_section__3Huzz p {\\n  color: #808080;\\n}\\n.styles_overview_section__3Huzz .styles_body__2oxkc {\\n  margin-bottom: 3.333vw;\\n}\\n\\n.styles_project_info__1NivX {\\n  display: flex;\\n  flex-direction: row;\\n}\\n.styles_project_info__1NivX .styles_project_info_item__oB8td {\\n  display: flex;\\n  flex-direction: column;\\n  margin-right: 1.667vw;\\n  width: 18.819vw;\\n}\\n.styles_project_info__1NivX .styles_project_info_item__oB8td p:first-child {\\n  color: #1A1A1A;\\n  margin-bottom: 0.417vw;\\n}\\n.styles_project_info__1NivX .styles_project_info_item__oB8td:last-child {\\n  margin-right: 0;\\n  width: 25.625vw;\\n}\\n\\n@media only screen and (max-width: 480px) {\\n  .styles_overview_section__3Huzz {\\n    width: 91.467vw;\\n    margin: 8.533vw 4.267vw;\\n  }\\n  .styles_overview_section__3Huzz h3 {\\n    margin-bottom: 4.267vw;\\n  }\\n  .styles_overview_section__3Huzz p {\\n    color: #808080;\\n  }\\n  .styles_overview_section__3Huzz .styles_body__2oxkc {\\n    margin-bottom: 4.267vw;\\n  }\\n\\n  .styles_project_info__1NivX {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n  }\\n  .styles_project_info__1NivX .styles_project_info_item__oB8td {\\n    display: flex;\\n    flex-direction: column;\\n    margin-right: 1.667vw;\\n    width: 43.733vw;\\n  }\\n  .styles_project_info__1NivX .styles_project_info_item__oB8td p:first-child {\\n    color: #1A1A1A;\\n    margin-bottom: 0.417vw;\\n  }\\n  .styles_project_info__1NivX .styles_project_info_item__oB8td:last-child {\\n    margin-right: 0;\\n    width: 43.733vw;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.module.scss\",\"webpack://../../../variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,aAAA;EACA,sBAAA;EACA,eCwCE;EDvCF,wBAAA;AADJ;AAGI;EACI,sBCWF;ADZN;AAII;EACI,cCZD;ADUP;AAKI;EACI,sBCKF;ADRN;;AAOA;EACI,aAAA;EACA,mBAAA;AAJJ;AAMI;EACI,aAAA;EACA,sBAAA;EACA,qBCRF;EDSE,eCSH;ADbL;AAMQ;EACI,cChCL;EDiCK,sBChBP;ADYL;AAQI;EACI,eAAA;EACA,eAAA;AANR;;AAUA;EACI;IACI,eCQG;IDPH,uBAAA;EAPN;EASM;IACI,sBCpBA;EDaV;EAUM;IACI,cCpDL;ED4CL;EAWM;IACI,sBC5BA;EDmBV;;EAaE;IACI,aAAA;IACA,mBAAA;IACA,eAAA;EAVN;EAYM;IACI,aAAA;IACA,sBAAA;IACA,qBCjDN;IDkDM,eCnBD;EDST;EAaU;IACI,cC1ET;ID2ES,sBC1DX;ED+CH;EAeM;IACI,eAAA;IACA,eC9BD;EDiBT;AACF\",\"sourcesContent\":[\"@import '../../../variables.scss';\\n\\n.overview_section {\\n    display: flex;\\n    flex-direction: column;\\n    width: $w10;\\n    margin: $m192 $w1+$m24;\\n\\n    h3 {\\n        margin-bottom: $m24;\\n    }\\n\\n    p {\\n        color: $gray;\\n    }\\n\\n    .body {\\n        margin-bottom: $m48;\\n    }\\n}\\n\\n.project_info {\\n    display: flex;\\n    flex-direction: row;\\n\\n    .project_info_item {\\n        display: flex;\\n        flex-direction: column;\\n        margin-right: $m24;\\n        width: $w3;\\n\\n        p:first-child {\\n            color: $dark;\\n            margin-bottom: $m6;\\n        }\\n    }\\n\\n    .project_info_item:last-child {\\n        margin-right: 0;\\n        width: $w4;\\n    }\\n}\\n\\n@media only screen and (max-width: 480px) {\\n    .overview_section {\\n        width: $w4Mobile;\\n        margin: $m32Mobile $m16Mobile;\\n    \\n        h3 {\\n            margin-bottom: $m16Mobile;\\n        }\\n    \\n        p {\\n            color: $gray;\\n        }\\n    \\n        .body {\\n            margin-bottom: $m16Mobile;\\n        }\\n    }\\n\\n    .project_info {\\n        display: flex;\\n        flex-direction: row;\\n        flex-wrap: wrap;\\n    \\n        .project_info_item {\\n            display: flex;\\n            flex-direction: column;\\n            margin-right: $m24;\\n            width: $w2Mobile;\\n            \\n    \\n            p:first-child {\\n                color: $dark;\\n                margin-bottom: $m6;\\n            }\\n        }\\n    \\n        .project_info_item:last-child {\\n            margin-right: 0;\\n            width: $w2Mobile;\\n        }\\n    }\\n}\",\"$dark: #1A1A1A;\\n$gray: #808080;\\n$white: #FFFFFF;\\n$blue: #0000FF;\\n$light: #F2F2F2;\\n\\n$h1: 10vw;\\n$h2: 3.333vw;\\n$h3: 2.222vw;\\n$p: 1.667vw;\\n\\n$h1Mobile: 25.6vw;\\n$h2Mobile: 8.533vw;\\n$h3Mobile: 6.4vw;\\n$pMobile: 4.267vw;\\n\\n$mNav: 16.389vw;\\n$m6: 0.417vw;\\n$m12: 0.833vw;\\n$m16: 1.111vw;\\n$m24: 1.667vw;\\n$m32: 2.222vw; \\n$m48: 3.333vw;\\n$m64: 4.444vw;\\n$m96: 6.667vw;\\n$m144: 10vw;\\n$m192: 13.333vw;\\n$m240: 16.667vw;\\n\\n$m16Mobile: 4.267vw;\\n$m32Mobile: 8.533vw;\\n$m48Mobile: 12.8vw;\\n$m64Mobile: 17.067vw;\\n$m96Mobile: 25.6vw;\\n\\n\\n$w1: 5.139vw;\\n$w2: 12.013vw;\\n$w3: 18.819vw;\\n$w4: 25.625vw;\\n$w5: 32.5vw;\\n$w6: 39.306vw;\\n$w7: 46.111vw;\\n$w8: 52.986vw;\\n$w9: 59.792vw;\\n$w10: 66.597vw;\\n$w11: 73.403vw;\\n$w12: 80.278vw;\\n$wFull: 83.611vw;\\n\\n$w1Mobile: 19.733vw;\\n$w2Mobile: 43.733vw;\\n$w3Mobile: 67.467vw;\\n$w4Mobile: 91.467vw;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"overview_section\": \"styles_overview_section__3Huzz\",\n\t\"body\": \"styles_body__2oxkc\",\n\t\"project_info\": \"styles_project_info__1NivX\",\n\t\"project_info_item\": \"styles_project_info_item__oB8td\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0L292ZXJ2aWV3L3N0eWxlcy5tb2R1bGUuc2Nzcz8xNzdkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxvQ0FBb0Msa0JBQWtCLDJCQUEyQixvQkFBb0IsNkJBQTZCLEdBQUcsc0NBQXNDLDJCQUEyQixHQUFHLHFDQUFxQyxtQkFBbUIsR0FBRyx1REFBdUQsMkJBQTJCLEdBQUcsaUNBQWlDLGtCQUFrQix3QkFBd0IsR0FBRyxnRUFBZ0Usa0JBQWtCLDJCQUEyQiwwQkFBMEIsb0JBQW9CLEdBQUcsOEVBQThFLG1CQUFtQiwyQkFBMkIsR0FBRywyRUFBMkUsb0JBQW9CLG9CQUFvQixHQUFHLCtDQUErQyxxQ0FBcUMsc0JBQXNCLDhCQUE4QixLQUFLLHdDQUF3Qyw2QkFBNkIsS0FBSyx1Q0FBdUMscUJBQXFCLEtBQUsseURBQXlELDZCQUE2QixLQUFLLG1DQUFtQyxvQkFBb0IsMEJBQTBCLHNCQUFzQixLQUFLLGtFQUFrRSxvQkFBb0IsNkJBQTZCLDRCQUE0QixzQkFBc0IsS0FBSyxnRkFBZ0YscUJBQXFCLDZCQUE2QixLQUFLLDZFQUE2RSxzQkFBc0Isc0JBQXNCLEtBQUssR0FBRyxPQUFPLHVIQUF1SCxVQUFVLFdBQVcsV0FBVyxZQUFZLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsYUFBYSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssWUFBWSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxZQUFZLFlBQVksS0FBSyxLQUFLLFdBQVcsYUFBYSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sMkRBQTJELHVCQUF1QixvQkFBb0IsNkJBQTZCLGtCQUFrQiw2QkFBNkIsWUFBWSw4QkFBOEIsT0FBTyxXQUFXLHVCQUF1QixPQUFPLGVBQWUsOEJBQThCLE9BQU8sR0FBRyxtQkFBbUIsb0JBQW9CLDBCQUEwQiw0QkFBNEIsd0JBQXdCLGlDQUFpQyw2QkFBNkIscUJBQXFCLDJCQUEyQiwyQkFBMkIsaUNBQWlDLFdBQVcsT0FBTyx1Q0FBdUMsMEJBQTBCLHFCQUFxQixPQUFPLEdBQUcsK0NBQStDLHlCQUF5QiwyQkFBMkIsd0NBQXdDLG9CQUFvQix3Q0FBd0MsV0FBVyxtQkFBbUIsMkJBQTJCLFdBQVcsdUJBQXVCLHdDQUF3QyxXQUFXLE9BQU8sdUJBQXVCLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLG9DQUFvQyw0QkFBNEIscUNBQXFDLGlDQUFpQywrQkFBK0IsaURBQWlELCtCQUErQixxQ0FBcUMsZUFBZSxXQUFXLCtDQUErQyw4QkFBOEIsK0JBQStCLFdBQVcsT0FBTyxHQUFHLGtCQUFrQixpQkFBaUIsa0JBQWtCLGlCQUFpQixrQkFBa0IsY0FBYyxlQUFlLGVBQWUsY0FBYyxzQkFBc0IscUJBQXFCLG1CQUFtQixvQkFBb0Isb0JBQW9CLGVBQWUsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGNBQWMsa0JBQWtCLGtCQUFrQix3QkFBd0Isc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLG1CQUFtQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixjQUFjLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGlCQUFpQixtQkFBbUIsd0JBQXdCLHNCQUFzQixzQkFBc0Isc0JBQXNCLHFCQUFxQjtBQUMxeUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2NvbXBvbmVudHMvcHJvamVjdC9vdmVydmlldy9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVzX292ZXJ2aWV3X3NlY3Rpb25fXzNIdXp6IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDY2LjU5N3Z3O1xcbiAgbWFyZ2luOiAxMy4zMzN2dyA2LjgwNnZ3O1xcbn1cXG4uc3R5bGVzX292ZXJ2aWV3X3NlY3Rpb25fXzNIdXp6IGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNjY3dnc7XFxufVxcbi5zdHlsZXNfb3ZlcnZpZXdfc2VjdGlvbl9fM0h1enogcCB7XFxuICBjb2xvcjogIzgwODA4MDtcXG59XFxuLnN0eWxlc19vdmVydmlld19zZWN0aW9uX18zSHV6eiAuc3R5bGVzX2JvZHlfXzJveGtjIHtcXG4gIG1hcmdpbi1ib3R0b206IDMuMzMzdnc7XFxufVxcblxcbi5zdHlsZXNfcHJvamVjdF9pbmZvX18xTml2WCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLnN0eWxlc19wcm9qZWN0X2luZm9fXzFOaXZYIC5zdHlsZXNfcHJvamVjdF9pbmZvX2l0ZW1fX29COHRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjY2N3Z3O1xcbiAgd2lkdGg6IDE4LjgxOXZ3O1xcbn1cXG4uc3R5bGVzX3Byb2plY3RfaW5mb19fMU5pdlggLnN0eWxlc19wcm9qZWN0X2luZm9faXRlbV9fb0I4dGQgcDpmaXJzdC1jaGlsZCB7XFxuICBjb2xvcjogIzFBMUExQTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNDE3dnc7XFxufVxcbi5zdHlsZXNfcHJvamVjdF9pbmZvX18xTml2WCAuc3R5bGVzX3Byb2plY3RfaW5mb19pdGVtX19vQjh0ZDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIHdpZHRoOiAyNS42MjV2dztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLnN0eWxlc19vdmVydmlld19zZWN0aW9uX18zSHV6eiB7XFxuICAgIHdpZHRoOiA5MS40Njd2dztcXG4gICAgbWFyZ2luOiA4LjUzM3Z3IDQuMjY3dnc7XFxuICB9XFxuICAuc3R5bGVzX292ZXJ2aWV3X3NlY3Rpb25fXzNIdXp6IGgzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNC4yNjd2dztcXG4gIH1cXG4gIC5zdHlsZXNfb3ZlcnZpZXdfc2VjdGlvbl9fM0h1enogcCB7XFxuICAgIGNvbG9yOiAjODA4MDgwO1xcbiAgfVxcbiAgLnN0eWxlc19vdmVydmlld19zZWN0aW9uX18zSHV6eiAuc3R5bGVzX2JvZHlfXzJveGtjIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNC4yNjd2dztcXG4gIH1cXG5cXG4gIC5zdHlsZXNfcHJvamVjdF9pbmZvX18xTml2WCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG4gIC5zdHlsZXNfcHJvamVjdF9pbmZvX18xTml2WCAuc3R5bGVzX3Byb2plY3RfaW5mb19pdGVtX19vQjh0ZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1yaWdodDogMS42Njd2dztcXG4gICAgd2lkdGg6IDQzLjczM3Z3O1xcbiAgfVxcbiAgLnN0eWxlc19wcm9qZWN0X2luZm9fXzFOaXZYIC5zdHlsZXNfcHJvamVjdF9pbmZvX2l0ZW1fX29COHRkIHA6Zmlyc3QtY2hpbGQge1xcbiAgICBjb2xvcjogIzFBMUExQTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC40MTd2dztcXG4gIH1cXG4gIC5zdHlsZXNfcHJvamVjdF9pbmZvX18xTml2WCAuc3R5bGVzX3Byb2plY3RfaW5mb19pdGVtX19vQjh0ZDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICB3aWR0aDogNDMuNzMzdnc7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVDd0NFO0VEdkNGLHdCQUFBO0FBREo7QUFHSTtFQUNJLHNCQ1dGO0FEWk47QUFJSTtFQUNJLGNDWkQ7QURVUDtBQUtJO0VBQ0ksc0JDS0Y7QURSTjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUpKO0FBTUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkNSRjtFRFNFLGVDU0g7QURiTDtBQU1RO0VBQ0ksY0NoQ0w7RURpQ0ssc0JDaEJQO0FEWUw7QUFRSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBTlI7O0FBVUE7RUFDSTtJQUNJLGVDUUc7SURQSCx1QkFBQTtFQVBOO0VBU007SUFDSSxzQkNwQkE7RURhVjtFQVVNO0lBQ0ksY0NwREw7RUQ0Q0w7RUFXTTtJQUNJLHNCQzVCQTtFRG1CVjs7RUFhRTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFWTjtFQVlNO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EscUJDakROO0lEa0RNLGVDbkJEO0VEU1Q7RUFhVTtJQUNJLGNDMUVUO0lEMkVTLHNCQzFEWDtFRCtDSDtFQWVNO0lBQ0ksZUFBQTtJQUNBLGVDOUJEO0VEaUJUO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xcblxcbi5vdmVydmlld19zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6ICR3MTA7XFxuICAgIG1hcmdpbjogJG0xOTIgJHcxKyRtMjQ7XFxuXFxuICAgIGgzIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRtMjQ7XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgICBjb2xvcjogJGdyYXk7XFxuICAgIH1cXG5cXG4gICAgLmJvZHkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJG00ODtcXG4gICAgfVxcbn1cXG5cXG4ucHJvamVjdF9pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgLnByb2plY3RfaW5mb19pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbTI0O1xcbiAgICAgICAgd2lkdGg6ICR3MztcXG5cXG4gICAgICAgIHA6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkbTY7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RfaW5mb19pdGVtOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgd2lkdGg6ICR3NDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5vdmVydmlld19zZWN0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAkdzRNb2JpbGU7XFxuICAgICAgICBtYXJnaW46ICRtMzJNb2JpbGUgJG0xNk1vYmlsZTtcXG4gICAgXFxuICAgICAgICBoMyB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJG0xNk1vYmlsZTtcXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBjb2xvcjogJGdyYXk7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgLmJvZHkge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRtMTZNb2JpbGU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RfaW5mbyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgXFxuICAgICAgICAucHJvamVjdF9pbmZvX2l0ZW0ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRtMjQ7XFxuICAgICAgICAgICAgd2lkdGg6ICR3Mk1vYmlsZTtcXG4gICAgICAgICAgICBcXG4gICAgXFxuICAgICAgICAgICAgcDpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJG02O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICAucHJvamVjdF9pbmZvX2l0ZW06bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiAkdzJNb2JpbGU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXCIkZGFyazogIzFBMUExQTtcXG4kZ3JheTogIzgwODA4MDtcXG4kd2hpdGU6ICNGRkZGRkY7XFxuJGJsdWU6ICMwMDAwRkY7XFxuJGxpZ2h0OiAjRjJGMkYyO1xcblxcbiRoMTogMTB2dztcXG4kaDI6IDMuMzMzdnc7XFxuJGgzOiAyLjIyMnZ3O1xcbiRwOiAxLjY2N3Z3O1xcblxcbiRoMU1vYmlsZTogMjUuNnZ3O1xcbiRoMk1vYmlsZTogOC41MzN2dztcXG4kaDNNb2JpbGU6IDYuNHZ3O1xcbiRwTW9iaWxlOiA0LjI2N3Z3O1xcblxcbiRtTmF2OiAxNi4zODl2dztcXG4kbTY6IDAuNDE3dnc7XFxuJG0xMjogMC44MzN2dztcXG4kbTE2OiAxLjExMXZ3O1xcbiRtMjQ6IDEuNjY3dnc7XFxuJG0zMjogMi4yMjJ2dzsgXFxuJG00ODogMy4zMzN2dztcXG4kbTY0OiA0LjQ0NHZ3O1xcbiRtOTY6IDYuNjY3dnc7XFxuJG0xNDQ6IDEwdnc7XFxuJG0xOTI6IDEzLjMzM3Z3O1xcbiRtMjQwOiAxNi42Njd2dztcXG5cXG4kbTE2TW9iaWxlOiA0LjI2N3Z3O1xcbiRtMzJNb2JpbGU6IDguNTMzdnc7XFxuJG00OE1vYmlsZTogMTIuOHZ3O1xcbiRtNjRNb2JpbGU6IDE3LjA2N3Z3O1xcbiRtOTZNb2JpbGU6IDI1LjZ2dztcXG5cXG5cXG4kdzE6IDUuMTM5dnc7XFxuJHcyOiAxMi4wMTN2dztcXG4kdzM6IDE4LjgxOXZ3O1xcbiR3NDogMjUuNjI1dnc7XFxuJHc1OiAzMi41dnc7XFxuJHc2OiAzOS4zMDZ2dztcXG4kdzc6IDQ2LjExMXZ3O1xcbiR3ODogNTIuOTg2dnc7XFxuJHc5OiA1OS43OTJ2dztcXG4kdzEwOiA2Ni41OTd2dztcXG4kdzExOiA3My40MDN2dztcXG4kdzEyOiA4MC4yNzh2dztcXG4kd0Z1bGw6IDgzLjYxMXZ3O1xcblxcbiR3MU1vYmlsZTogMTkuNzMzdnc7XFxuJHcyTW9iaWxlOiA0My43MzN2dztcXG4kdzNNb2JpbGU6IDY3LjQ2N3Z3O1xcbiR3NE1vYmlsZTogOTEuNDY3dnc7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwib3ZlcnZpZXdfc2VjdGlvblwiOiBcInN0eWxlc19vdmVydmlld19zZWN0aW9uX18zSHV6elwiLFxuXHRcImJvZHlcIjogXCJzdHlsZXNfYm9keV9fMm94a2NcIixcblx0XCJwcm9qZWN0X2luZm9cIjogXCJzdHlsZXNfcHJvamVjdF9pbmZvX18xTml2WFwiLFxuXHRcInByb2plY3RfaW5mb19pdGVtXCI6IFwic3R5bGVzX3Byb2plY3RfaW5mb19pdGVtX19vQjh0ZFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/project/overview/styles.module.scss\n");

/***/ })

})