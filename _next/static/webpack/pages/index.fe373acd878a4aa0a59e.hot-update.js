webpackHotUpdate_N_E("pages/index",{

/***/ "./components/avatar.tsx":
/*!*******************************!*\
  !*** ./components/avatar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "/home/theodorechu/github/philclub/usc/components/avatar.tsx";

const Avatar = ({
  name,
  picture
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex items-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: picture,
      className: "w-12 h-12 rounded-full mr-4",
      alt: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-xl font-bold",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

_c = Avatar;
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

var _c;

$RefreshReg$(_c, "Avatar");

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

/***/ }),

/***/ "./components/container.tsx":
/*!**********************************!*\
  !*** ./components/container.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "/home/theodorechu/github/philclub/usc/components/container.tsx";

const Container = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto px-5",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, undefined);
};

_c = Container;
/* harmony default export */ __webpack_exports__["default"] = (Container);

var _c;

$RefreshReg$(_c, "Container");

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

/***/ }),

/***/ "./components/cover-image.tsx":
/*!************************************!*\
  !*** ./components/cover-image.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/theodorechu/github/philclub/usc/components/cover-image.tsx";



const CoverImage = ({
  title,
  src,
  slug
}) => {
  const image = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    src: src,
    alt: `Cover Image for ${title}`,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('shadow-small', {
      'hover:shadow-medium transition-shadow duration-200': slug
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "sm:mx-0",
    children: slug ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      as: `/posts/${slug}`,
      href: "/posts/[slug]",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        "aria-label": title,
        children: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined) : image
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

_c = CoverImage;
/* harmony default export */ __webpack_exports__["default"] = (CoverImage);

var _c;

$RefreshReg$(_c, "CoverImage");

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

/***/ }),

/***/ "./components/date-formatter.tsx":
/*!***************************************!*\
  !*** ./components/date-formatter.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

var _jsxFileName = "/home/theodorechu/github/philclub/usc/components/date-formatter.tsx";


const DateFormatter = ({
  dateString
}) => {
  const date = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["parseISO"])(dateString);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
    dateTime: dateString,
    children: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(date, 'LLLL	d, yyyy')
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, undefined);
};

_c = DateFormatter;
/* harmony default export */ __webpack_exports__["default"] = (DateFormatter);

var _c;

$RefreshReg$(_c, "DateFormatter");

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

/***/ }),

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
          picture: author.picture
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

/***/ }),

/***/ "./components/intro.tsx":
/*!******************************!*\
  !*** ./components/intro.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.ts");

var _jsxFileName = "/home/theodorechu/github/philclub/usc/components/intro.tsx";


const Intro = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8",
      children: _lib_constants__WEBPACK_IMPORTED_MODULE_1__["CLUB_NAME"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      className: "text-center md:text-left text-lg mt-5 md:pl-8",
      children: ["A statically generated blog example using", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://nextjs.org/",
        className: "underline hover:text-success duration-200 transition-colors",
        children: "Next.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), ' ', "and ", CMS_NAME, "."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

_c = Intro;
/* harmony default export */ __webpack_exports__["default"] = (Intro);

var _c;

$RefreshReg$(_c, "Intro");

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

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ "./components/alert.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./components/footer.tsx");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta */ "./components/meta.tsx");


var _jsxFileName = "/home/theodorechu/github/philclub/usc/components/layout.tsx";




const Layout = ({
  preview,
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_meta__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "min-h-screen",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
        preview: preview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/***/ }),

/***/ "./components/more-stories.tsx":
/*!*************************************!*\
  !*** ./components/more-stories.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-preview */ "./components/post-preview.tsx");

var _jsxFileName = "/home/theodorechu/github/philclub/usc/components/more-stories.tsx";


const MoreStories = ({
  posts
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",
      children: "More Stories"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",
      children: posts.map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_preview__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: post.title,
        coverImage: post.coverImage,
        date: post.date,
        author: post.author,
        slug: post.slug,
        excerpt: post.excerpt
      }, post.slug, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

_c = MoreStories;
/* harmony default export */ __webpack_exports__["default"] = (MoreStories);

var _c;

$RefreshReg$(_c, "MoreStories");

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

/***/ }),

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
      picture: author.picture
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

/***/ }),

/***/ "./lib/constants.ts":
/*!**************************!*\
  !*** ./lib/constants.ts ***!
  \**************************/
/*! exports provided: GITHUB_URL, CLUB_NAME, HOME_OG_IMAGE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITHUB_URL", function() { return GITHUB_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLUB_NAME", function() { return CLUB_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_OG_IMAGE_URL", function() { return HOME_OG_IMAGE_URL; });
const GITHUB_URL = 'https://github.com/philclub/usc/';
const CLUB_NAME = 'USC Philosophy Club';
const HOME_OG_IMAGE_URL = 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2053&q=80';

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

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./components/container.tsx");
/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/more-stories */ "./components/more-stories.tsx");
/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hero-post */ "./components/hero-post.tsx");
/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/intro */ "./components/intro.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.ts");


var _jsxFileName = "/home/theodorechu/github/philclub/usc/pages/index.tsx";








const Index = ({
  allPosts
}) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: _lib_constants__WEBPACK_IMPORTED_MODULE_7__["CLUB_NAME"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_intro__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), heroPost && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_hero_post__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: heroPost.title,
          coverImage: heroPost.coverImage,
          date: heroPost.date,
          author: heroPost.author,
          slug: heroPost.slug,
          excerpt: heroPost.excerpt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, undefined), morePosts.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_more_stories__WEBPACK_IMPORTED_MODULE_2__["default"], {
          posts: morePosts
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 36
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdmF0YXIudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY292ZXItaW1hZ2UudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RhdGUtZm9ybWF0dGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvLXBvc3QudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ludHJvLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vcmUtc3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdC1wcmV2aWV3LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkF2YXRhciIsIm5hbWUiLCJwaWN0dXJlIiwiQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJDb3ZlckltYWdlIiwidGl0bGUiLCJzcmMiLCJzbHVnIiwiaW1hZ2UiLCJjbiIsIkRhdGVGb3JtYXR0ZXIiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsInBhcnNlSVNPIiwiZm9ybWF0IiwiSGVyb1Bvc3QiLCJjb3ZlckltYWdlIiwiZXhjZXJwdCIsImF1dGhvciIsIkludHJvIiwiQ0xVQl9OQU1FIiwiQ01TX05BTUUiLCJMYXlvdXQiLCJwcmV2aWV3IiwiTW9yZVN0b3JpZXMiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJQb3N0UHJldmlldyIsIkdJVEhVQl9VUkwiLCJIT01FX09HX0lNQUdFX1VSTCIsIkluZGV4IiwiYWxsUG9zdHMiLCJoZXJvUG9zdCIsIm1vcmVQb3N0cyIsInNsaWNlIiwibGVuZ3RoIl0sIm1hcHBpbmdz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QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF1QkQsQ0ExQkQ7O0tBQU1ILEs7O0FBNEJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZTM3M2FjZDg3OGE0YWEwYTU5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwaWN0dXJlOiBzdHJpbmc7XG59O1xuXG5jb25zdCBBdmF0YXIgPSAoeyBuYW1lLCBwaWN0dXJlIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGltZyBzcmM9e3BpY3R1cmV9IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgbXItNFwiIGFsdD17bmFtZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57bmFtZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcbiIsImltcG9ydCB7IFJlYWN0Tm9kZSwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xufTtcblxuY29uc3QgQ29udGFpbmVyOiBGdW5jdGlvbkNvbXBvbmVudCA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTVcIj57Y2hpbGRyZW59PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxudHlwZSBQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7XG4gIHNsdWc/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBDb3ZlckltYWdlID0gKHsgdGl0bGUsIHNyYywgc2x1ZyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBpbWFnZSA9IChcbiAgICA8aW1nXG4gICAgICBzcmM9e3NyY31cbiAgICAgIGFsdD17YENvdmVyIEltYWdlIGZvciAke3RpdGxlfWB9XG4gICAgICBjbGFzc05hbWU9e2NuKCdzaGFkb3ctc21hbGwnLCB7XG4gICAgICAgICdob3ZlcjpzaGFkb3ctbWVkaXVtIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTIwMCc6IHNsdWcsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic206bXgtMFwiPlxuICAgICAge3NsdWcgPyAoXG4gICAgICAgIDxMaW5rIGFzPXtgL3Bvc3RzLyR7c2x1Z31gfSBocmVmPVwiL3Bvc3RzL1tzbHVnXVwiPlxuICAgICAgICAgIDxhIGFyaWEtbGFiZWw9e3RpdGxlfT57aW1hZ2V9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApIDogKFxuICAgICAgICBpbWFnZVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdmVySW1hZ2U7XG4iLCJpbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG50eXBlIFByb3BzID0ge1xuICBkYXRlU3RyaW5nOiBzdHJpbmc7XG59O1xuXG5jb25zdCBEYXRlRm9ybWF0dGVyID0gKHsgZGF0ZVN0cmluZyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBkYXRlID0gcGFyc2VJU08oZGF0ZVN0cmluZyk7XG4gIHJldHVybiA8dGltZSBkYXRlVGltZT17ZGF0ZVN0cmluZ30+e2Zvcm1hdChkYXRlLCAnTExMTFx0ZCwgeXl5eScpfTwvdGltZT47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlRm9ybWF0dGVyO1xuIiwiaW1wb3J0IEF2YXRhciBmcm9tICcuL2F2YXRhcic7XG5pbXBvcnQgRGF0ZUZvcm1hdHRlciBmcm9tICcuL2RhdGUtZm9ybWF0dGVyJztcbmltcG9ydCBDb3ZlckltYWdlIGZyb20gJy4vY292ZXItaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBBdXRob3IgZnJvbSAnLi4vdHlwZXMvYXV0aG9yJztcblxudHlwZSBQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY292ZXJJbWFnZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGV4Y2VycHQ6IHN0cmluZztcbiAgYXV0aG9yOiBBdXRob3I7XG4gIHNsdWc6IHN0cmluZztcbn07XG5cbmNvbnN0IEhlcm9Qb3N0ID0gKHtcbiAgdGl0bGUsXG4gIGNvdmVySW1hZ2UsXG4gIGRhdGUsXG4gIGV4Y2VycHQsXG4gIGF1dGhvcixcbiAgc2x1Zyxcbn06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggbWQ6bWItMTZcIj5cbiAgICAgICAgPENvdmVySW1hZ2UgdGl0bGU9e3RpdGxlfSBzcmM9e2NvdmVySW1hZ2V9IHNsdWc9e3NsdWd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtMiBtZDpnYXAteC0xNiBsZzpnYXAteC04IG1iLTIwIG1kOm1iLTI4XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC00eGwgbGc6dGV4dC02eGwgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgPExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9XCIvcG9zdHMvW3NsdWddXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPnt0aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgbWQ6bWItMCB0ZXh0LWxnXCI+XG4gICAgICAgICAgICA8RGF0ZUZvcm1hdHRlciBkYXRlU3RyaW5nPXtkYXRlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi00XCI+e2V4Y2VycHR9PC9wPlxuICAgICAgICAgIDxBdmF0YXIgbmFtZT17YXV0aG9yLm5hbWV9IHBpY3R1cmU9e2F1dGhvci5waWN0dXJlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9Qb3N0O1xuIiwiaW1wb3J0IHsgQ0xVQl9OQU1FIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cyc7XG5cbmNvbnN0IEludHJvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXgtY29sIG1kOmZsZXgtcm93IGZsZXggaXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlbiBtdC0xNiBtYi0xNiBtZDptYi0xMlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIG1kOnRleHQtN3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIGxlYWRpbmctdGlnaHQgbWQ6cHItOFwiPlxuICAgICAgICB7Q0xVQl9OQU1FfVxuICAgICAgPC9oMT5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgdGV4dC1sZyBtdC01IG1kOnBsLThcIj5cbiAgICAgICAgQSBzdGF0aWNhbGx5IGdlbmVyYXRlZCBibG9nIGV4YW1wbGUgdXNpbmd7JyAnfVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgaG92ZXI6dGV4dC1zdWNjZXNzIGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgID5cbiAgICAgICAgICBOZXh0LmpzXG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICBhbmQge0NNU19OQU1FfS5cbiAgICAgIDwvaDQ+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50cm87XG4iLCJpbXBvcnQgQWxlcnQgZnJvbSAnLi9hbGVydCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCBNZXRhIGZyb20gJy4vbWV0YSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHByZXZpZXc/OiBib29sZWFuO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuY29uc3QgTGF5b3V0ID0gKHsgcHJldmlldywgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1ldGEgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxBbGVydCBwcmV2aWV3PXtwcmV2aWV3fSAvPlxuICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgUG9zdFByZXZpZXcgZnJvbSAnLi9wb3N0LXByZXZpZXcnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi4vdHlwZXMvcG9zdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBvc3RzOiBQb3N0W107XG59O1xuXG5jb25zdCBNb3JlU3RvcmllcyA9ICh7IHBvc3RzIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItOCB0ZXh0LTZ4bCBtZDp0ZXh0LTd4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlciBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgIE1vcmUgU3Rvcmllc1xuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBtZDpnYXAteC0xNiBsZzpnYXAteC0zMiBnYXAteS0yMCBtZDpnYXAteS0zMiBtYi0zMlwiPlxuICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPFBvc3RQcmV2aWV3XG4gICAgICAgICAgICBrZXk9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgY292ZXJJbWFnZT17cG9zdC5jb3ZlckltYWdlfVxuICAgICAgICAgICAgZGF0ZT17cG9zdC5kYXRlfVxuICAgICAgICAgICAgYXV0aG9yPXtwb3N0LmF1dGhvcn1cbiAgICAgICAgICAgIHNsdWc9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgIGV4Y2VycHQ9e3Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vcmVTdG9yaWVzO1xuIiwiaW1wb3J0IEF2YXRhciBmcm9tICcuL2F2YXRhcic7XG5pbXBvcnQgRGF0ZUZvcm1hdHRlciBmcm9tICcuL2RhdGUtZm9ybWF0dGVyJztcbmltcG9ydCBDb3ZlckltYWdlIGZyb20gJy4vY292ZXItaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBBdXRob3IgZnJvbSAnLi4vdHlwZXMvYXV0aG9yJztcblxudHlwZSBQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY292ZXJJbWFnZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGV4Y2VycHQ6IHN0cmluZztcbiAgYXV0aG9yOiBBdXRob3I7XG4gIHNsdWc6IHN0cmluZztcbn07XG5cbmNvbnN0IFBvc3RQcmV2aWV3ID0gKHtcbiAgdGl0bGUsXG4gIGNvdmVySW1hZ2UsXG4gIGRhdGUsXG4gIGV4Y2VycHQsXG4gIGF1dGhvcixcbiAgc2x1Zyxcbn06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICA8Q292ZXJJbWFnZSBzbHVnPXtzbHVnfSB0aXRsZT17dGl0bGV9IHNyYz17Y292ZXJJbWFnZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTMgbGVhZGluZy1zbnVnXCI+XG4gICAgICAgIDxMaW5rIGFzPXtgL3Bvc3RzLyR7c2x1Z31gfSBocmVmPVwiL3Bvc3RzL1tzbHVnXVwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPnt0aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbWItNFwiPlxuICAgICAgICA8RGF0ZUZvcm1hdHRlciBkYXRlU3RyaW5nPXtkYXRlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi00XCI+e2V4Y2VycHR9PC9wPlxuICAgICAgPEF2YXRhciBuYW1lPXthdXRob3IubmFtZX0gcGljdHVyZT17YXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0UHJldmlldztcbiIsImV4cG9ydCBjb25zdCBHSVRIVUJfVVJMID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9waGlsY2x1Yi91c2MvJztcbmV4cG9ydCBjb25zdCBDTFVCX05BTUUgPSAnVVNDIFBoaWxvc29waHkgQ2x1Yic7XG5leHBvcnQgY29uc3QgSE9NRV9PR19JTUFHRV9VUkwgPVxuICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDc4NDIyMTczNDMtNTgzYmI3MjcwYjY2P2l4aWQ9TVh3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIdyUzRCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNTMmcT04MCc7XG4iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL21vcmUtc3Rvcmllcyc7XG5pbXBvcnQgSGVyb1Bvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvLXBvc3QnO1xuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJy4uL2xpYi9hcGknO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENMVUJfTkFNRSB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi4vdHlwZXMvcG9zdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFsbFBvc3RzOiBQb3N0W107XG59O1xuXG5jb25zdCBJbmRleCA9ICh7IGFsbFBvc3RzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IGhlcm9Qb3N0ID0gYWxsUG9zdHNbMF07XG4gIGNvbnN0IG1vcmVQb3N0cyA9IGFsbFBvc3RzLnNsaWNlKDEpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e0NMVUJfTkFNRX08L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEludHJvIC8+XG4gICAgICAgICAge2hlcm9Qb3N0ICYmIChcbiAgICAgICAgICAgIDxIZXJvUG9zdFxuICAgICAgICAgICAgICB0aXRsZT17aGVyb1Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGNvdmVySW1hZ2U9e2hlcm9Qb3N0LmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgIGRhdGU9e2hlcm9Qb3N0LmRhdGV9XG4gICAgICAgICAgICAgIGF1dGhvcj17aGVyb1Bvc3QuYXV0aG9yfVxuICAgICAgICAgICAgICBzbHVnPXtoZXJvUG9zdC5zbHVnfVxuICAgICAgICAgICAgICBleGNlcnB0PXtoZXJvUG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHttb3JlUG9zdHMubGVuZ3RoID4gMCAmJiA8TW9yZVN0b3JpZXMgcG9zdHM9e21vcmVQb3N0c30gLz59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFtcbiAgICAndGl0bGUnLFxuICAgICdkYXRlJyxcbiAgICAnc2x1ZycsXG4gICAgJ2F1dGhvcicsXG4gICAgJ2NvdmVySW1hZ2UnLFxuICAgICdleGNlcnB0JyxcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhbGxQb3N0cyB9LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=