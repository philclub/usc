webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./components/alert.tsx":
/*!******************************!*\
  !*** ./components/alert.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./components/container.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.ts");


var _jsxFileName = "/home/theodorechu/github/philclub/usc/components/alert.tsx";




const Alert = ({
  preview
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('border-b', {
      'bg-accent-7 border-accent-7 text-white': preview,
      'bg-accent-1 border-accent-2': !preview
    }),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "py-2 text-center text-sm",
        children: preview ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: ["This page is a preview.", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/api/exit-preview",
            className: "underline hover:text-cyan duration-200 transition-colors",
            children: "Click here"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, undefined), ' ', "to exit preview mode."]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: ["This website is in development. Join us on", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: _lib_constants__WEBPACK_IMPORTED_MODULE_3__["GITHUB_URL"],
            className: "underline hover:text-success duration-200 transition-colors",
            children: "Discord"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, undefined), "."]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

_c = Alert;
/* harmony default export */ __webpack_exports__["default"] = (Alert);

var _c;

$RefreshReg$(_c, "Alert");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbGVydC50c3giXSwibmFtZXMiOlsiQWxlcnQiLCJwcmV2aWV3IiwiY24iLCJHSVRIVUJfVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFNQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBd0I7QUFDcEMsc0JBQ0U7QUFDRSxhQUFTLEVBQUVDLGlEQUFFLENBQUMsVUFBRCxFQUFhO0FBQ3hCLGdEQUEwQ0QsT0FEbEI7QUFFeEIscUNBQStCLENBQUNBO0FBRlIsS0FBYixDQURmO0FBQUEsMkJBTUUscUVBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQSxrQkFDR0EsT0FBTyxnQkFDTjtBQUFBLGdEQUMwQixHQUQxQixlQUVFO0FBQ0UsZ0JBQUksRUFBQyxtQkFEUDtBQUVFLHFCQUFTLEVBQUMsMERBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsRUFPTyxHQVBQO0FBQUEsd0JBRE0sZ0JBWU47QUFBQSxtRUFDNkMsR0FEN0MsZUFFRTtBQUNFLGdCQUFJLEVBQUVFLHlEQURSO0FBRUUscUJBQVMsRUFBQyw2REFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQ0QsQ0FyQ0Q7O0tBQU1ILEs7QUF1Q1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tzbHVnXS4xYWQ1MjIzZTk0NmQ3NjdmODJhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcic7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBHSVRIVUJfVVJMIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHByZXZpZXc/OiBib29sZWFuO1xufTtcblxuY29uc3QgQWxlcnQgPSAoeyBwcmV2aWV3IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbignYm9yZGVyLWInLCB7XG4gICAgICAgICdiZy1hY2NlbnQtNyBib3JkZXItYWNjZW50LTcgdGV4dC13aGl0ZSc6IHByZXZpZXcsXG4gICAgICAgICdiZy1hY2NlbnQtMSBib3JkZXItYWNjZW50LTInOiAhcHJldmlldyxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWNlbnRlciB0ZXh0LXNtXCI+XG4gICAgICAgICAge3ByZXZpZXcgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBUaGlzIHBhZ2UgaXMgYSBwcmV2aWV3LnsnICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9hcGkvZXhpdC1wcmV2aWV3XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgaG92ZXI6dGV4dC1jeWFuIGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDbGljayBoZXJlXG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICB0byBleGl0IHByZXZpZXcgbW9kZS5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBUaGlzIHdlYnNpdGUgaXMgaW4gZGV2ZWxvcG1lbnQuIEpvaW4gdXMgb257JyAnfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e0dJVEhVQl9VUkx9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lIGhvdmVyOnRleHQtc3VjY2VzcyBkdXJhdGlvbi0yMDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGlzY29yZFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=