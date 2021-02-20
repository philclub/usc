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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: author.name,
        picture: author.picture,
        url: author.url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-6 text-lg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_date_formatter__WEBPACK_IMPORTED_MODULE_2__["default"], {
          dateString: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-8 md:mb-16 sm:mx-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cover_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: title,
        src: coverImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LWhlYWRlci50c3giXSwibmFtZXMiOlsiUG9zdEhlYWRlciIsInRpdGxlIiwiY292ZXJJbWFnZSIsImRhdGUiLCJhdXRob3IiLCJuYW1lIiwicGljdHVyZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFVQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFlBQVQ7QUFBcUJDLE1BQXJCO0FBQTJCQztBQUEzQixDQUFELEtBQWdEO0FBQ2pFLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsbURBQUQ7QUFBQSxnQkFBWUg7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBQSw2QkFDRSxxRUFBQywrQ0FBRDtBQUFRLFlBQUksRUFBRUcsTUFBTSxDQUFDQyxJQUFyQjtBQUEyQixlQUFPLEVBQUVELE1BQU0sQ0FBQ0UsT0FBM0M7QUFBb0QsV0FBRyxFQUFFRixNQUFNLENBQUNHO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0U7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSwrQkFDRSxxRUFBQywrQ0FBRDtBQUNFLGNBQUksRUFBRUgsTUFBTSxDQUFDQyxJQURmO0FBRUUsaUJBQU8sRUFBRUQsTUFBTSxDQUFDRSxPQUZsQjtBQUdFLGFBQUcsRUFBRUYsTUFBTSxDQUFDRztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBUUU7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSwrQkFDRSxxRUFBQyx1REFBRDtBQUFlLG9CQUFVLEVBQUVKO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQWlCRTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBLDZCQUNFLHFFQUFDLG9EQUFEO0FBQVksYUFBSyxFQUFFRixLQUFuQjtBQUEwQixXQUFHLEVBQUVDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRjtBQUFBLGtCQURGO0FBdUJELENBeEJEOztLQUFNRixVO0FBMEJTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bc2x1Z10uNzIwMjA4NDY4MjAwMmU5YTJkNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSAnLi9hdmF0YXInO1xuaW1wb3J0IERhdGVGb3JtYXR0ZXIgZnJvbSAnLi9kYXRlLWZvcm1hdHRlcic7XG5pbXBvcnQgQ292ZXJJbWFnZSBmcm9tICcuL2NvdmVyLWltYWdlJztcbmltcG9ydCBQb3N0VGl0bGUgZnJvbSAnLi9wb3N0LXRpdGxlJztcbmltcG9ydCBBdXRob3IgZnJvbSAnLi4vdHlwZXMvYXV0aG9yJztcblxudHlwZSBQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY292ZXJJbWFnZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGF1dGhvcjogQXV0aG9yO1xufTtcblxuY29uc3QgUG9zdEhlYWRlciA9ICh7IHRpdGxlLCBjb3ZlckltYWdlLCBkYXRlLCBhdXRob3IgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBvc3RUaXRsZT57dGl0bGV9PC9Qb3N0VGl0bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayBtZDptYi0xMlwiPlxuICAgICAgICA8QXZhdGFyIG5hbWU9e2F1dGhvci5uYW1lfSBwaWN0dXJlPXthdXRob3IucGljdHVyZX0gdXJsPXthdXRob3IudXJsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbWQ6aGlkZGVuIG1iLTZcIj5cbiAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICBuYW1lPXthdXRob3IubmFtZX1cbiAgICAgICAgICAgIHBpY3R1cmU9e2F1dGhvci5waWN0dXJlfVxuICAgICAgICAgICAgdXJsPXthdXRob3IudXJsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgdGV4dC1sZ1wiPlxuICAgICAgICAgIDxEYXRlRm9ybWF0dGVyIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggbWQ6bWItMTYgc206bXgtMFwiPlxuICAgICAgICA8Q292ZXJJbWFnZSB0aXRsZT17dGl0bGV9IHNyYz17Y292ZXJJbWFnZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=