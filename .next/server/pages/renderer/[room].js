"use strict";
(() => {
var exports = {};
exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 5799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ selOpt)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3135);

const selOpt = (og)=>{
    let finalRes = og;
    const { room  } = og?.meta;
    let opt = 0;
    if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .opt1.includes */ .St.includes(parseInt(room))) opt = 1;
    else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .opt2.includes */ .WF.includes(parseInt(room))) opt = 2;
    else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .opt3.includes */ .DK.includes(parseInt(room))) opt = 3;
    else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .opt4.includes */ .mm.includes(parseInt(room))) opt = 4;
    else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .opt5.includes */ .cW.includes(parseInt(room))) opt = 5;
    else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .opt6.includes */ .Lp.includes(parseInt(room))) opt = 6;
    switch(opt){
        case 1:
        case 3:
            {
                // M.4 Sci-Math/Math-Lang except GM,GS | M.5 EVR
                // Mon per8 use per3 from Fri, then per9 = club
                // Tue per8 use per1 from Fri
                // Thu per8 use per2 from Fri
                finalRes.body["1"]["9"] = [
                    "กิจกรรม"
                ];
                finalRes.body["1"]["8"] = og?.body["5"]["3"];
                finalRes.body["2"]["8"] = og?.body["5"]["1"];
                finalRes.body["4"]["8"] = og?.body["5"]["2"];
                finalRes.body["5"] = {};
                return finalRes;
            }
        case 2:
        case 4:
            {
                // M.4 Sci-Math/Lang-Lang GM,GS | M.5 Sci-Math
                // Mon per8 use per3 from Fri, then per9 = club
                // Tue per9 use per1 from Fri
                // Thu per9 use per2 from Fri
                finalRes.body["1"]["9"] = [
                    "กิจกรรม"
                ];
                finalRes.body["1"]["8"] = og?.body["5"]["3"];
                finalRes.body["2"]["9"] = og?.body["5"]["1"];
                finalRes.body["4"]["9"] = og?.body["5"]["2"];
                finalRes.body["5"] = {};
                return finalRes;
            }
        case 5:
            {
                // M.6 Sci-Math/Lang-Lang
                // Mon per8 use per3 from Fri, then per9 = club
                // Tue per7 use per1 from Fri, then per8 use per2 from Fri
                finalRes.body["1"]["9"] = [
                    "กิจกรรม"
                ];
                finalRes.body["1"]["8"] = og?.body["5"]["3"];
                finalRes.body["2"]["7"] = og?.body["5"]["1"];
                finalRes.body["2"]["8"] = og?.body["5"]["2"];
                finalRes.body["5"] = {};
                return finalRes;
            }
        case 6:
            {
                // M.6 Math-Lang
                // Mon per8 use per3 from Fri
                // Tue per6 use per1 from Fri, then per7 use per2 from Fri
                finalRes.body["1"]["9"] = [
                    "กิจกรรม"
                ];
                finalRes.body["1"]["8"] = og?.body["5"]["3"];
                finalRes.body["2"]["6"] = og?.body["5"]["1"];
                finalRes.body["2"]["7"] = og?.body["5"]["2"];
                finalRes.body["5"] = {};
                return finalRes;
            }
        default:
            {
                return finalRes;
            }
    }
};


/***/ }),

/***/ 8247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8529);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1934);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2199);
/* harmony import */ var _handlers_server_optHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5799);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const defaultColors = {
    bg: (0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .rawRgbColorToCss */ .h)((0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .hexToRgbA */ .m)("#FFFFFF")),
    t1: (0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .rawRgbColorToCss */ .h)((0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .hexToRgbA */ .m)("#D17474")),
    t2: (0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .rawRgbColorToCss */ .h)((0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .hexToRgbA */ .m)("#E28B8B")),
    c1: (0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .rawRgbColorToCss */ .h)((0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .hexToRgbA */ .m)("#EBB8B8")),
    c2: (0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .rawRgbColorToCss */ .h)((0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .hexToRgbA */ .m)("#E49E9E")),
    c3: (0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .rawRgbColorToCss */ .h)((0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .hexToRgbA */ .m)("#E08484")),
    c4: (0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .rawRgbColorToCss */ .h)((0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .hexToRgbA */ .m)("#D17474")),
    c5: (0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .rawRgbColorToCss */ .h)((0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .hexToRgbA */ .m)("#BA5757"))
};
const getStaticPaths = async ()=>{
    const files = fs__WEBPACK_IMPORTED_MODULE_2___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), "_keep/data/2-2566"));
    const paths = files.filter((i)=>i.includes(".json")).map((s)=>({
            params: {
                room: s.replace(".json", "")
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const room = params?.room;
    let scheduleData = null;
    if (params) {
        const raw = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), `_keep/data/2-2566/${room}.json`)).toString();
        scheduleData = JSON.parse(raw);
        scheduleData = (0,_handlers_server_optHandler__WEBPACK_IMPORTED_MODULE_9__/* .selOpt */ .T)(scheduleData);
    }
    return {
        props: {
            scheduleData: {
                ...scheduleData,
                room: room
            }
        }
    };
};
const Room = ({ scheduleData  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!router.query.colorScheme) {
            return;
        }
        if (router.query?.bg) setBackground(router.query.bg);
        const colorScheme = router.query.colorScheme?.toString();
        const parsed = JSON.parse(colorScheme);
        const cssColor = {};
        Object.keys(parsed).forEach((k)=>{
            // @ts-ignore
            cssColor[k] = (0,_utils_hexToRgb__WEBPACK_IMPORTED_MODULE_8__/* .rawRgbColorToCss */ .h)(parsed[k]);
        });
        // @ts-ignore
        setColor(cssColor);
    }, [
        router.query.colorScheme
    ]);
    const { 0: color , 1: setColor  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(defaultColors);
    const { 0: background , 1: setBackground  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("none");
    const genSchedule = (period)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: Array(4).fill("").map((_, i)=>{
                const name = period in scheduleData?.body[i + 1] ? scheduleData?.body[i + 1][period][0] : "" ?? 0;
                const teacher = period in scheduleData?.body[i + 1] ? scheduleData?.body[i + 1][period][1] : "" ?? 0;
                if (name || teacher) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        backgroundColor: "#fff"
                    },
                    className: "button",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                className: "subject",
                                style: {
                                    color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#000" : "#000"
                                },
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "teacher",
                                style: {
                                    color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#a6a8ab" : "#000"
                                },
                                children: teacher?.replace(/\+/g, " ")
                            })
                        ]
                    })
                }, i);
                else return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "blank"
                });
            })
        });
    };
    const Days = [
        {
            name: "จันทร์",
            color: color.c1,
            order: 1
        },
        {
            name: "อังคาร",
            color: color.c2,
            order: 2
        },
        {
            name: "พุธ",
            color: color.c3,
            order: 3
        },
        {
            name: "พฤหัสฯ",
            color: color.c4,
            order: 4
        },
        {
            name: "ศุกร์",
            color: color.c5,
            order: 5
        }, 
    ];
    const getClassNumber = (day)=>{
        let classNumber = 0;
        for(let i in scheduleData.body[day]){
            if (scheduleData.body[day][i] != "") {
                classNumber++;
            }
        }
        return classNumber;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                backgroundColor: color.bg
            },
            className: "h-[1886px] w-[2700px]",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    backgroundColor: color.bg
                },
                className: "wrapper",
                children: [
                    background === "mistletoe" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Background__WEBPACK_IMPORTED_MODULE_7__/* .Mistletoe */ .Uv, {}),
                    background === "ordaments" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Background__WEBPACK_IMPORTED_MODULE_7__/* .Ordaments */ .cY, {
                        color: color.c1
                    }),
                    background === "sticker" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Background__WEBPACK_IMPORTED_MODULE_7__/* .Sticker */ .My, {}),
                    background === "flower" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Background__WEBPACK_IMPORTED_MODULE_7__/* .Flower */ .Ll, {}),
                    background === "colorful" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Background__WEBPACK_IMPORTED_MODULE_7__/* .Colorful */ .q5, {}),
                    background === "halloween" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Background__WEBPACK_IMPORTED_MODULE_7__/* .Halloween */ .rR, {}),
                    background === "sweetintherain" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Background__WEBPACK_IMPORTED_MODULE_7__/* .SweetInTheRain */ .G3, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "left",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "title-container",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "title",
                                            style: {
                                                color: color.t1
                                            },
                                            children: "ตารางเรียน"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "subtitle",
                                            style: {
                                                color: color.t2
                                            },
                                            children: "ภาคเรียนที่ 2/2566"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "right",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "room",
                                        style: {
                                            color: color.t2
                                        },
                                        children: [
                                            "ห้อง ",
                                            scheduleData.room,
                                            " | ",
                                            scheduleData.meta.branch
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "teacher",
                                        style: {
                                            color: color.t2
                                        },
                                        children: scheduleData.meta.teacher.map((teacher)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text",
                                                children: teacher
                                            }, teacher))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "main",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "days",
                                children: Days.map((day)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("day", day.name === "ศุกร์" && "friday"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "button",
                                                style: {
                                                    backgroundColor: day.color,
                                                    color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAStringD */ .ON)(day.color) === "light" ? "#444" : "#fff"
                                                },
                                                children: day.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "line",
                                                style: {
                                                    backgroundColor: day.color,
                                                    width: 300 + 230 * getClassNumber(day.order)
                                                }
                                            })
                                        ]
                                    }, day.name))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "schedules",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mon-to-thurs",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "time",
                                                        style: {
                                                            color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#eee"
                                                        },
                                                        children: "07.50-08.30"
                                                    }),
                                                    genSchedule(1)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "time",
                                                        style: {
                                                            color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#eee"
                                                        },
                                                        children: "08.30-09.10"
                                                    }),
                                                    genSchedule(2)
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        backgroundColor: "#fff"
                                                    },
                                                    className: "break10-button",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text",
                                                            style: {
                                                                color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#000"
                                                            },
                                                            children: "พัก"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text",
                                                            style: {
                                                                color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#000"
                                                            },
                                                            children: "10"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text",
                                                            style: {
                                                                color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#000"
                                                            },
                                                            children: "นาที"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "time",
                                                        style: {
                                                            color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#eee"
                                                        },
                                                        children: "09.20-10.00"
                                                    }),
                                                    genSchedule(3)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "time",
                                                        style: {
                                                            color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#eee"
                                                        },
                                                        children: "10.00-10.40"
                                                    }),
                                                    genSchedule(4)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "time",
                                                        style: {
                                                            color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#eee"
                                                        },
                                                        children: "10.40-11.20"
                                                    }),
                                                    genSchedule(5)
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        backgroundColor: "#fff"
                                                    },
                                                    className: "lunch-button",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text",
                                                            style: {
                                                                color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#000"
                                                            },
                                                            children: "พัก"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text",
                                                            style: {
                                                                color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#000"
                                                            },
                                                            children: "กลาง"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text",
                                                            style: {
                                                                color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#000"
                                                            },
                                                            children: "วัน"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "time",
                                                        style: {
                                                            color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#eee"
                                                        },
                                                        children: "12.20-13.00"
                                                    }),
                                                    genSchedule(6)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "time",
                                                        style: {
                                                            color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#eee"
                                                        },
                                                        children: "13.00-13.40"
                                                    }),
                                                    genSchedule(7)
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        backgroundColor: "#fff"
                                                    },
                                                    className: "break10-button",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text",
                                                            style: {
                                                                color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#000"
                                                            },
                                                            children: "พัก"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text",
                                                            style: {
                                                                color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#000"
                                                            },
                                                            children: "10"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text",
                                                            style: {
                                                                color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#000"
                                                            },
                                                            children: "นาที"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "time",
                                                        style: {
                                                            color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#eee"
                                                        },
                                                        children: "13.50-14.30"
                                                    }),
                                                    genSchedule(8)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "time",
                                                        style: {
                                                            color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#404040" : "#eee"
                                                        },
                                                        children: "14.30-15.10"
                                                    }),
                                                    genSchedule(9)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "fri",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "button",
                                            style: {
                                                backgroundColor: "#fff"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text",
                                                style: {
                                                    color: (0,_utils_isDarkOrLight__WEBPACK_IMPORTED_MODULE_10__/* .isDarkOrLightRGBAString */ .fb)(color.bg) === "light" ? "#000" : "#000"
                                                },
                                                children: "วิชารักษาดินแดน"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Logo */ .TR, {
                        color: color.t1
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Room);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1711:
/***/ ((module) => {

module.exports = require("react-color");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,155], () => (__webpack_exec__(8247)));
module.exports = __webpack_exports__;

})();