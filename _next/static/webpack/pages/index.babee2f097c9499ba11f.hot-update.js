webpackHotUpdate_N_E("pages/index",{

/***/ "./components/hero-post.tsx":
/*!**********************************!*\
  !*** ./components/hero-post.tsx ***!
  \**********************************/
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

var _jsxFileName = "/home/theodorechu/github/philclub/usc/components/hero-post.tsx";





const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-8 md:mb-16",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cover_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: title,
        src: coverImage,
        slug: slug
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "mb-4 text-4xl lg:text-6xl leading-tight",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            as: `/posts/${slug}`,
            href: "/posts/[slug]",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "hover:underline",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mb-4 md:mb-0 text-lg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_date_formatter__WEBPACK_IMPORTED_MODULE_2__["default"], {
            dateString: date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-lg leading-relaxed mb-4",
          children: excerpt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
          name: author.name,
          picture: author.picture,
          url: author.url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

_c = HeroPost;
/* harmony default export */ __webpack_exports__["default"] = (HeroPost);

var _c;

$RefreshReg$(_c, "HeroPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvLXBvc3QudHN4Il0sIm5hbWVzIjpbIkhlcm9Qb3N0IiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImV4Y2VycHQiLCJhdXRob3IiLCJzbHVnIiwibmFtZSIsInBpY3R1cmUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFDaEJDLE9BRGdCO0FBRWhCQyxZQUZnQjtBQUdoQkMsTUFIZ0I7QUFJaEJDLFNBSmdCO0FBS2hCQyxRQUxnQjtBQU1oQkM7QUFOZ0IsQ0FBRCxLQU9KO0FBQ1gsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsNkJBQ0UscUVBQUMsb0RBQUQ7QUFBWSxhQUFLLEVBQUVMLEtBQW5CO0FBQTBCLFdBQUcsRUFBRUMsVUFBL0I7QUFBMkMsWUFBSSxFQUFFSTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUssZUFBUyxFQUFDLDhEQUFmO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMseUNBQWQ7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUUsRUFBRyxVQUFTQSxJQUFLLEVBQXpCO0FBQTRCLGdCQUFJLEVBQUMsZUFBakM7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMsaUJBQWI7QUFBQSx3QkFBZ0NMO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU1FO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLGlDQUNFLHFFQUFDLHVEQUFEO0FBQWUsc0JBQVUsRUFBRUU7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBV0U7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUMsOEJBQWI7QUFBQSxvQkFBNkNDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQywrQ0FBRDtBQUNFLGNBQUksRUFBRUMsTUFBTSxDQUFDRSxJQURmO0FBRUUsaUJBQU8sRUFBRUYsTUFBTSxDQUFDRyxPQUZsQjtBQUdFLGFBQUcsRUFBRUgsTUFBTSxDQUFDSTtBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTJCRCxDQW5DRDs7S0FBTVQsUTtBQXFDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmFiZWUyZjA5N2M5NDk5YmExMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSAnLi9hdmF0YXInO1xuaW1wb3J0IERhdGVGb3JtYXR0ZXIgZnJvbSAnLi9kYXRlLWZvcm1hdHRlcic7XG5pbXBvcnQgQ292ZXJJbWFnZSBmcm9tICcuL2NvdmVyLWltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQXV0aG9yIGZyb20gJy4uL3R5cGVzL2F1dGhvcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvdmVySW1hZ2U6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBleGNlcnB0OiBzdHJpbmc7XG4gIGF1dGhvcjogQXV0aG9yO1xuICBzbHVnOiBzdHJpbmc7XG59O1xuXG5jb25zdCBIZXJvUG9zdCA9ICh7XG4gIHRpdGxlLFxuICBjb3ZlckltYWdlLFxuICBkYXRlLFxuICBleGNlcnB0LFxuICBhdXRob3IsXG4gIHNsdWcsXG59OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IG1kOm1iLTE2XCI+XG4gICAgICAgIDxDb3ZlckltYWdlIHRpdGxlPXt0aXRsZX0gc3JjPXtjb3ZlckltYWdlfSBzbHVnPXtzbHVnfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6Z2FwLXgtMTYgbGc6Z2FwLXgtOCBtYi0yMCBtZDptYi0yOFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi00IHRleHQtNHhsIGxnOnRleHQtNnhsIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgIDxMaW5rIGFzPXtgL3Bvc3RzLyR7c2x1Z31gfSBocmVmPVwiL3Bvc3RzL1tzbHVnXVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIj57dGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IG1kOm1iLTAgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgPERhdGVGb3JtYXR0ZXIgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgbWItNFwiPntleGNlcnB0fTwvcD5cbiAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICBuYW1lPXthdXRob3IubmFtZX1cbiAgICAgICAgICAgIHBpY3R1cmU9e2F1dGhvci5waWN0dXJlfVxuICAgICAgICAgICAgdXJsPXthdXRob3IudXJsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1Bvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9