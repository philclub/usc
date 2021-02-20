webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./components/post-header.tsx":
/*!************************************!*\
  !*** ./components/post-header.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar */ "./components/avatar.tsx");
/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-formatter */ "./components/date-formatter.tsx");
/* harmony import */ var _cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover-image */ "./components/cover-image.tsx");
/* harmony import */ var _post_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-title */ "./components/post-title.tsx");


var _jsxFileName = "/home/theodorechu/github/philclub/usc/components/post-header.tsx";





const PostHeader = ({
  title,
  coverImage,
  date,
  author
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hidden md:block md:mb-12",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: author.name,
        picture: author.picture,
        url: author.url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_date_formatter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        dateString: date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-8 md:mb-16 sm:mx-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cover_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: title,
        src: coverImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "max-w-2xl mx-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "block md:hidden mb-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
          name: author.name,
          picture: author.picture,
          url: author.url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-6 text-lg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_date_formatter__WEBPACK_IMPORTED_MODULE_2__["default"], {
          dateString: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_c = PostHeader;
/* harmony default export */ __webpack_exports__["default"] = (PostHeader);

var _c;

$RefreshReg$(_c, "PostHeader");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LWhlYWRlci50c3giXSwibmFtZXMiOlsiUG9zdEhlYWRlciIsInRpdGxlIiwiY292ZXJJbWFnZSIsImRhdGUiLCJhdXRob3IiLCJuYW1lIiwicGljdHVyZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFVQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFlBQVQ7QUFBcUJDLE1BQXJCO0FBQTJCQztBQUEzQixDQUFELEtBQWdEO0FBQ2pFLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsbURBQUQ7QUFBQSxnQkFBWUg7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBQSw4QkFDRSxxRUFBQywrQ0FBRDtBQUFRLFlBQUksRUFBRUcsTUFBTSxDQUFDQyxJQUFyQjtBQUEyQixlQUFPLEVBQUVELE1BQU0sQ0FBQ0UsT0FBM0M7QUFBb0QsV0FBRyxFQUFFRixNQUFNLENBQUNHO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyx1REFBRDtBQUFlLGtCQUFVLEVBQUVKO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBTUU7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSw2QkFDRSxxRUFBQyxvREFBRDtBQUFZLGFBQUssRUFBRUYsS0FBbkI7QUFBMEIsV0FBRyxFQUFFQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQVNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBQ0UscUVBQUMsK0NBQUQ7QUFDRSxjQUFJLEVBQUVFLE1BQU0sQ0FBQ0MsSUFEZjtBQUVFLGlCQUFPLEVBQUVELE1BQU0sQ0FBQ0UsT0FGbEI7QUFHRSxhQUFHLEVBQUVGLE1BQU0sQ0FBQ0c7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVFFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsK0JBQ0UscUVBQUMsdURBQUQ7QUFBZSxvQkFBVSxFQUFFSjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQSxrQkFERjtBQXdCRCxDQXpCRDs7S0FBTUgsVTtBQTJCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLjkyYWY5ODFjOGRhNGJjYWM3Mjc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXZhdGFyIGZyb20gJy4vYXZhdGFyJztcbmltcG9ydCBEYXRlRm9ybWF0dGVyIGZyb20gJy4vZGF0ZS1mb3JtYXR0ZXInO1xuaW1wb3J0IENvdmVySW1hZ2UgZnJvbSAnLi9jb3Zlci1pbWFnZSc7XG5pbXBvcnQgUG9zdFRpdGxlIGZyb20gJy4vcG9zdC10aXRsZSc7XG5pbXBvcnQgQXV0aG9yIGZyb20gJy4uL3R5cGVzL2F1dGhvcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvdmVySW1hZ2U6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBhdXRob3I6IEF1dGhvcjtcbn07XG5cbmNvbnN0IFBvc3RIZWFkZXIgPSAoeyB0aXRsZSwgY292ZXJJbWFnZSwgZGF0ZSwgYXV0aG9yIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQb3N0VGl0bGU+e3RpdGxlfTwvUG9zdFRpdGxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2sgbWQ6bWItMTJcIj5cbiAgICAgICAgPEF2YXRhciBuYW1lPXthdXRob3IubmFtZX0gcGljdHVyZT17YXV0aG9yLnBpY3R1cmV9IHVybD17YXV0aG9yLnVybH0gLz5cbiAgICAgICAgPERhdGVGb3JtYXR0ZXIgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IG1kOm1iLTE2IHNtOm14LTBcIj5cbiAgICAgICAgPENvdmVySW1hZ2UgdGl0bGU9e3RpdGxlfSBzcmM9e2NvdmVySW1hZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBtZDpoaWRkZW4gbWItNlwiPlxuICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgIG5hbWU9e2F1dGhvci5uYW1lfVxuICAgICAgICAgICAgcGljdHVyZT17YXV0aG9yLnBpY3R1cmV9XG4gICAgICAgICAgICB1cmw9e2F1dGhvci51cmx9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiB0ZXh0LWxnXCI+XG4gICAgICAgICAgPERhdGVGb3JtYXR0ZXIgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9