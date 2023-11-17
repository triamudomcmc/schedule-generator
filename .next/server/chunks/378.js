"use strict";
exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 3378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ ToastProvider),
/* harmony export */   "p": () => (/* binding */ useToast)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// toast provider





const ToastContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)(null);
const useToast = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(ToastContext);
};
function getStyle(type) {
    switch(type){
        case "error":
            return "bg-red-500";
        case "success":
            return "bg-green-500";
        default:
            return "bg-blue-500";
    }
}
const ToastProvider = ({ children  })=>{
    const toast = useProvideToast();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ToastContext.Provider, {
        value: toast,
        children: [
            toast.data?.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    initial: {
                        opacity: 0,
                        y: -300,
                        x: "-50%"
                    },
                    animate: {
                        opacity: 1,
                        y: 25,
                        x: "-50%"
                    },
                    exit: {
                        opacity: 0,
                        y: -300,
                        x: "-50%"
                    },
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(getStyle(toast.data?.type), "fixed left-1/2 z-[101] rounded-full py-2 px-4 text-white"),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center space-x-1",
                        children: [
                            toast.data?.type === "error" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.ExclamationIcon, {
                                className: "h-5 w-5"
                            }),
                            toast.data?.type === "success" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.CheckIcon, {
                                className: "h-5 w-5"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "font-display text-sm",
                                children: toast.data?.message
                            })
                        ]
                    })
                })
            }),
            children
        ]
    });
};
const TOAST_TIMEOUT = 3000;
function useProvideToast() {
    const { 0: toast , 1: setToast  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const setToastDisplay = (type, message)=>{
        if (toast) {
            setToast(null);
            setTimeout(()=>{
                setToast({
                    type,
                    message
                });
                window.setTimeout(()=>{
                    setToast(null);
                }, TOAST_TIMEOUT);
            }, 1000);
        }
        setToast({
            type,
            message
        });
        window.setTimeout(()=>{
            setToast(null);
        }, TOAST_TIMEOUT);
    };
    return {
        setToast: setToastDisplay,
        data: toast
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;