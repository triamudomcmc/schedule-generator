"use strict";
(() => {
var exports = {};
exports.id = 318;
exports.ids = [318];
exports.modules = {

/***/ 9227:
/***/ ((module) => {

module.exports = require("jszip");

/***/ }),

/***/ 5462:
/***/ ((module) => {

module.exports = import("puppeteer");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 2670:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_screenshot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4460);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3121);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9227);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_screenshot__WEBPACK_IMPORTED_MODULE_0__]);
_utils_screenshot__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const toAdd = (/* unused pure expression or super */ null && ([
    336
]));
async function handler(req, res) {
    const { query: { room , colorScheme  } ,  } = req;
    const zip = new (jszip__WEBPACK_IMPORTED_MODULE_3___default())();
    for (let i of _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .rooms */ .S1){
        const outputPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "_output/", `${i.toString()}.jpg`);
        if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(outputPath)) {
            const file = await (0,_utils_screenshot__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(`http://${req.headers.host}/renderer/${i.toString()}`);
            console.log("workingon" + i);
            if (file) {
                fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync("_output/" + i.toString() + ".jpg", file);
                zip.file(`${i.toString()}.jpg`, file);
            }
        }
    }
    console.log("zipping...");
    for (let file1 of fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync("_output")){
        if (file1.endsWith(".jpg")) {
            zip.file(file1, fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync("_output/" + file1));
        }
    }
    res.setHeader("Content-Type", "application/zip");
    res.setHeader("Content-Disposition", "attachment; filename=images.zip");
    const zipBuffer = await zip.generateAsync({
        type: "nodebuffer"
    });
    res.end(zipBuffer);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S1": () => (/* binding */ rooms)
/* harmony export */ });
/* unused harmony exports opt1, opt2, opt3, opt4, opt5, opt6 */
const rooms = [
    65,
    66,
    70,
    71,
    72,
    276,
    277,
    278,
    341,
    342,
    343,
    344,
    345,
    437,
    438,
    446,
    447,
    448,
    661,
    662,
    664,
    665,
    666,
    667,
    834,
    835,
    842,
    843,
    844,
    845,
    846,
    942,
    943,
    945,
    946,
    947,
    332,
    333,
    334,
    335,
    336,
    431,
    432,
    436,
    443,
    444,
    445,
    642,
    651,
    652,
    654,
    655,
    656,
    657,
    812,
    813,
    814,
    815,
    822,
    823,
    824,
    825,
    832,
    833,
    931,
    932,
    933,
    934,
    935,
    936,
    937,
    941,
    28,
    29,
    32,
    38,
    39,
    48,
    49,
    58,
    59,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    125,
    126,
    143,
    144,
    145,
    146,
    153,
    154,
    155,
    156,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229, 
];
const opt1 = (/* unused pure expression or super */ null && ([
    276,
    277,
    278,
    342,
    343,
    344,
    345,
    431,
    432,
    661,
    662,
    664,
    665,
    666,
    667,
    834,
    835,
    842,
    843,
    844,
    845,
    943,
    945,
    946
]));
const opt2 = (/* unused pure expression or super */ null && ([
    65,
    66,
    70,
    71,
    72,
    436,
    437,
    438,
    846,
    941,
    942,
    947
]));
const opt3 = (/* unused pure expression or super */ null && ([
    332,
    333,
    334,
    335,
    336,
    341,
    443,
    444,
    445,
    446,
    447,
    448,
    642,
    651,
    652,
    654,
    655,
    656,
    812,
    813,
    814,
    815,
    822,
    823,
    824,
    825,
    832,
    833,
    931,
    932,
    933,
    934,
    935,
    936
]));
const opt4 = (/* unused pure expression or super */ null && ([
    657,
    937
]));
const opt5 = (/* unused pure expression or super */ null && ([
    28,
    29,
    32,
    38,
    39,
    48,
    49,
    58,
    59,
    76,
    77,
    78,
    79,
    80,
    81,
    125,
    126,
    143,
    144,
    145,
    146,
    154,
    155,
    156,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229
]));
const opt6 = (/* unused pure expression or super */ null && ([
    73,
    74,
    75,
    153
]));


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
var __webpack_exports__ = (__webpack_exec__(2670));
module.exports = __webpack_exports__;

})();