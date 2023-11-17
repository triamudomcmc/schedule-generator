"use strict";
exports.id = 540;
exports.ids = [540];
exports.modules = {

/***/ 3540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4359);
/* harmony import */ var _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_1__);



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Loader = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    style: {
      margin: "auto",
      shapeRendering: "auto",
      width: "40px",
      height: "32px"
    },
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "84",
    cy: "50",
    r: "10",
    fill: "#ffffff"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "0.7142857142857142s",
    calcMode: "spline",
    keyTimes: "0;1",
    values: "10;0",
    keySplines: "0 0.5 0.5 1",
    begin: "0s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "fill",
    repeatCount: "indefinite",
    dur: "2.8571428571428568s",
    calcMode: "discrete",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "#ffffff;#ffffff;#ffffff;#ffffff;#ffffff",
    begin: "0s"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "16",
    cy: "50",
    r: "10",
    fill: "#ffffff"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "2.8571428571428568s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "0;0;10;10;10",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "0s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "cx",
    repeatCount: "indefinite",
    dur: "2.8571428571428568s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "16;16;16;50;84",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "0s"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "50",
    cy: "50",
    r: "10",
    fill: "#ffffff"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "2.8571428571428568s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "0;0;10;10;10",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-0.7142857142857142s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "cx",
    repeatCount: "indefinite",
    dur: "2.8571428571428568s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "16;16;16;50;84",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-0.7142857142857142s"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "84",
    cy: "50",
    r: "10",
    fill: "#ffffff"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "2.8571428571428568s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "0;0;10;10;10",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-1.4285714285714284s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "cx",
    repeatCount: "indefinite",
    dur: "2.8571428571428568s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "16;16;16;50;84",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-1.4285714285714284s"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "16",
    cy: "50",
    r: "10",
    fill: "#ffffff"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "2.8571428571428568s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "0;0;10;10;10",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-2.142857142857143s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "cx",
    repeatCount: "indefinite",
    dur: "2.8571428571428568s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "16;16;16;50;84",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-2.142857142857143s"
  })));
};

var AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
var useAuth = function () {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);
};
var AuthProvider = function (_a) {
  var children = _a.children,
      TOKEN = _a.TOKEN;
  var auth = useProvideAuth(TOKEN);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AuthContext.Provider, {
    value: auth
  }, children);
};

function useProvideAuth(token) {
  var _this = this;

  var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      prevPop = _a[0],
      setPrevPop = _a[1];

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      userData = _b[0],
      setUserData = _b[1];

  var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      loading = _c[0],
      setLoading = _c[1];

  var user = function () {
    var data = window.localStorage.getItem("data");

    if (data) {
      var parsed = JSON.parse(data);
      return parsed.data;
    } else {
      return null;
    }
  };

  var reFetch = function () {
    setUserData(user());
  };

  var SignInWithTUCMC = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: signin,
      style: {
        backgroundImage: "linear-gradient(to right, #a78bfa, #ec4899, #ef4444)",
        color: "rgba(255, 255, 255, 1)",
        padding: loading ? "0.14rem 4.71rem" : "0.5rem 2rem",
        fontWeight: 600,
        borderRadius: "0.375rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        border: "none"
      }
    }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loader, null) : "Login with TUCMC");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    reFetch();
  }, []);

  var signOut = function () {
    window.localStorage.setItem("data", "");
    reFetch();
  };

  var fetchToken = function () {
    return __awaiter(_this, void 0, void 0, function () {
      var fp, fingerPrint, res, jsonResult;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_1___default().load()];

          case 1:
            fp = _a.sent();
            return [4
            /*yield*/
            , fp.get()];

          case 2:
            fingerPrint = _a.sent();
            return [4
            /*yield*/
            , fetch("https://account.triamudom.club/api/token", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                action: "fetchAuthToken",
                authToken: window.sessionStorage.getItem("authToken"),
                reqToken: token,
                fp: fingerPrint.visitorId
              })
            })];

          case 3:
            res = _a.sent();
            return [4
            /*yield*/
            , res.json()];

          case 4:
            jsonResult = _a.sent();

            if (jsonResult.status) {
              window.sessionStorage.setItem("authToken", "");
              window.localStorage.setItem("data", JSON.stringify(jsonResult.data.data));
              reFetch();
            }

            setLoading(false);
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (prevPop) {
      var inter_1 = setInterval(function () {
        if (prevPop.closed) {
          fetchToken();
          clearInterval(inter_1);
        }
      }, 500);
    }
  }, [prevPop]);

  var genToken = function () {
    return __awaiter(_this, void 0, void 0, function () {
      var fp, fingerPrint, res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_1___default().load()];

          case 1:
            fp = _a.sent();
            return [4
            /*yield*/
            , fp.get()];

          case 2:
            fingerPrint = _a.sent();
            return [4
            /*yield*/
            , fetch("https://account.triamudom.club/api/token", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                action: "genAuthToken",
                reqToken: token,
                fp: fingerPrint.visitorId
              })
            })];

          case 3:
            res = _a.sent();
            return [4
            /*yield*/
            , res.json()];

          case 4:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  var checkToken = function () {
    return token.length === 44;
  };

  var signin = function () {
    if (loading) return;

    if (prevPop) {
      prevPop.close();
    }

    if (!checkToken()) {
      console.log("invalid_client_token");
      return;
    }

    var data = window.localStorage.getItem("data");
    if (data) return;
    setLoading(true);
    var wid = window.open("https://account.triamudom.club/auth", "_blank", "width=492,height=740");
    setPrevPop(wid);
    genToken().then(function (jsonResult) {
      if (jsonResult.status) {
        window.sessionStorage.setItem("authToken", jsonResult.data.authToken);
        wid.location.replace("https://account.triamudom.club/auth?authToken=" + jsonResult.data.authToken);
      }
    });
  };

  return {
    SignInWithTUCMC: SignInWithTUCMC,
    signOut: signOut,
    reFetch: reFetch,
    userData: userData
  };
}




/***/ })

};
;