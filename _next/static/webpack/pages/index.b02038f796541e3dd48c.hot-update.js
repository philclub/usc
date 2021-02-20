webpackHotUpdate_N_E("pages/index",{

/***/ "./components/post-preview.tsx":
/*!*************************************!*\
  !*** ./components/post-preview.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar */ "./components/avatar.tsx");
/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-formatter */ "./components/date-formatter.tsx");
/* harmony import */ var _cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover-image */ "./components/cover-image.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/theodorechu/github/philclub/usc/components/post-preview.tsx";





const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cover_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
        slug: slug,
        title: title,
        src: coverImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "text-3xl mb-3 leading-snug",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        as: `/posts/${slug}`,
        href: "/posts/[slug]",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "hover:underline",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-lg mb-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_date_formatter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        dateString: date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-lg leading-relaxed mb-4",
      children: excerpt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: author.name,
      picture: author.picture,
      url: author.url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

_c = PostPreview;
/* harmony default export */ __webpack_exports__["default"] = (PostPreview);

var _c;

$RefreshReg$(_c, "PostPreview");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LXByZXZpZXcudHN4Il0sIm5hbWVzIjpbIlBvc3RQcmV2aWV3IiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImV4Y2VycHQiLCJhdXRob3IiLCJzbHVnIiwibmFtZSIsInBpY3R1cmUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFDbkJDLE9BRG1CO0FBRW5CQyxZQUZtQjtBQUduQkMsTUFIbUI7QUFJbkJDLFNBSm1CO0FBS25CQyxRQUxtQjtBQU1uQkM7QUFObUIsQ0FBRCxLQU9QO0FBQ1gsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0UscUVBQUMsb0RBQUQ7QUFBWSxZQUFJLEVBQUVBLElBQWxCO0FBQXdCLGFBQUssRUFBRUwsS0FBL0I7QUFBc0MsV0FBRyxFQUFFQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUksZUFBUyxFQUFDLDRCQUFkO0FBQUEsNkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFFLEVBQUcsVUFBU0ksSUFBSyxFQUF6QjtBQUE0QixZQUFJLEVBQUMsZUFBakM7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMsaUJBQWI7QUFBQSxvQkFBZ0NMO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVNFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDRSxxRUFBQyx1REFBRDtBQUFlLGtCQUFVLEVBQUVFO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBWUU7QUFBRyxlQUFTLEVBQUMsOEJBQWI7QUFBQSxnQkFBNkNDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUFhRSxxRUFBQywrQ0FBRDtBQUFRLFVBQUksRUFBRUMsTUFBTSxDQUFDRSxJQUFyQjtBQUEyQixhQUFPLEVBQUVGLE1BQU0sQ0FBQ0csT0FBM0M7QUFBb0QsU0FBRyxFQUFFSCxNQUFNLENBQUNJO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQkQsQ0F6QkQ7O0tBQU1ULFc7QUEyQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIwMjAzOGY3OTY1NDFlM2RkNDhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXZhdGFyIGZyb20gJy4vYXZhdGFyJztcbmltcG9ydCBEYXRlRm9ybWF0dGVyIGZyb20gJy4vZGF0ZS1mb3JtYXR0ZXInO1xuaW1wb3J0IENvdmVySW1hZ2UgZnJvbSAnLi9jb3Zlci1pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEF1dGhvciBmcm9tICcuLi90eXBlcy9hdXRob3InO1xuXG50eXBlIFByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBjb3ZlckltYWdlOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgZXhjZXJwdDogc3RyaW5nO1xuICBhdXRob3I6IEF1dGhvcjtcbiAgc2x1Zzogc3RyaW5nO1xufTtcblxuY29uc3QgUG9zdFByZXZpZXcgPSAoe1xuICB0aXRsZSxcbiAgY292ZXJJbWFnZSxcbiAgZGF0ZSxcbiAgZXhjZXJwdCxcbiAgYXV0aG9yLFxuICBzbHVnLFxufTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgIDxDb3ZlckltYWdlIHNsdWc9e3NsdWd9IHRpdGxlPXt0aXRsZX0gc3JjPXtjb3ZlckltYWdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItMyBsZWFkaW5nLXNudWdcIj5cbiAgICAgICAgPExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9XCIvcG9zdHMvW3NsdWddXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi00XCI+XG4gICAgICAgIDxEYXRlRm9ybWF0dGVyIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTRcIj57ZXhjZXJwdH08L3A+XG4gICAgICA8QXZhdGFyIG5hbWU9e2F1dGhvci5uYW1lfSBwaWN0dXJlPXthdXRob3IucGljdHVyZX0gdXJsPXthdXRob3IudXJsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdFByZXZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9