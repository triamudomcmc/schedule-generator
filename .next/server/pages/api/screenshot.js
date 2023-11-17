"use strict";
(() => {
var exports = {};
exports.id = 993;
exports.ids = [993];
exports.modules = {

/***/ 5462:
/***/ ((module) => {

module.exports = import("puppeteer");;

/***/ }),

/***/ 3075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_screenshot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4460);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_screenshot__WEBPACK_IMPORTED_MODULE_0__]);
_utils_screenshot__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    const { query: { room , colorScheme , r , bg  } ,  } = req;
    const file = await (0,_utils_screenshot__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(`http://${req.headers.host}/renderer/${room}?colorScheme=${colorScheme}&bg=${bg}&r=${r}`);
    res.setHeader("Content-Type", `image/jpeg`);
    res.setHeader("Cache-Control", `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
    res.statusCode = 200;
    res.end(file);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ screenshot)
/* harmony export */ });
/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5462);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([puppeteer__WEBPACK_IMPORTED_MODULE_0__]);
puppeteer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// export default async function screenshot(url: string, width: number = 2388, height: number = 1768) {
async function screenshot(url, width = 2700, height = 1886) {
    const browser = await puppeteer__WEBPACK_IMPORTED_MODULE_0__["default"].launch();
    const page = await browser.newPage();
    await page.setViewport({
        width,
        height
    });
    await page.goto(url, {
        waitUntil: "networkidle2"
    });
    return await page.screenshot({
        type: "jpeg"
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3075));
module.exports = __webpack_exports__;

})();