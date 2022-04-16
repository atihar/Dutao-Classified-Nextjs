"use strict";
(() => {
var exports = {};
exports.id = 1220;
exports.ids = [1220];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 8373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userInfoSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    gender: {
        type: String
    },
    nationality: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    careerLevel: {
        type: String
    },
    currentLocation: {
        type: String
    },
    currentCompany: {
        type: String
    },
    salaryExpectation: {
        type: String
    },
    commitment: {
        type: String
    },
    visaStatus: {
        type: String
    },
    visaValidity: {
        type: Date
    },
    noticePeriod: {
        type: String
    },
    videoLink: {
        type: String
    },
    highestEducation: {
        type: String
    },
    cv: {
        type: String
    },
    profileSummary: {
        type: String
    },
    newsletter: {
        type: Boolean
    },
    advertisement: {
        type: Boolean
    },
    userId: {
        type: String
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.UserInfo) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("UserInfo", userInfoSchema));


/***/ }),

/***/ 847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5898);
/* harmony import */ var _models_userInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8373);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5419);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])();
handler.use(_lib_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D);
handler.post(async (req, res)=>{
    await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].connect */ .Z.connect();
    const newUserInfo = new _models_userInfo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({
        name: req.body.name,
        gender: req.body.gender,
        nationality: req.body.nationality,
        dateOfBirth: req.body.dateOfBirth,
        careerLevel: req.body.careerLevel,
        currentLocation: req.body.currentLocation,
        currentCompany: req.body.currentCompany,
        salaryExpection: req.body.salaryExpection,
        commitment: req.body.commitment,
        visaStatus: req.body.visaStatus,
        visaValidity: req.body.visaValidity,
        noticePeriod: req.body.noticePeriod,
        highestEducation: req.body.highestEducation,
        cv: req.body.cvFile,
        profileSummary: req.body.profileSummary,
        videoLink: req.body.videoLink,
        userId: req.body.userId,
        cv: req.body.cv
    });
    const userInfo = await newUserInfo.save();
    await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
    res.send(userInfo).status(201);
});
handler.get(async (req, res, id)=>{
    const userID = req.query.id;
    await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].connect */ .Z.connect();
    const info = await _models_userInfo__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
        userId: userID
    });
    await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
    res.send(info);
});
handler.delete(async (req, res)=>{
    await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].connect */ .Z.connect();
    const userInfo = await _models_userInfo__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id);
    if (userInfo) {
        await userInfo.remove();
        await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
        res.send({
            message: "User Info Cleared"
        });
    } else {
        await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
        res.status(404).send({
            message: "User Info` Not Found"
        });
    }
});
handler.put(async (req, res)=>{
    const userID = req.query.id;
    console.log(req.query);
    await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].connect */ .Z.connect();
    const info = await _models_userInfo__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
        userId: userID
    });
    if (info) {
        info.gender = req.body.gender, info.nationality = req.body.nationality, info.dateOfBirth = req.body.dateOfBirth, info.careerLevel = req.body.careerLevel, info.currentLocation = req.body.currentLocation, info.currentCompany = req.body.currentCompany, info.salaryExpectation = req.body.salaryExpectation, info.commitment = req.body.commitment, info.visaStatus = req.body.visaStatus, info.visaValidity = req.body.visaValidity, info.noticePeriod = req.body.noticePeriod, info.highestEducation = req.body.highestEducation, info.cv = req.body.cvFile, info.profileSummary = req.body.profileSummary, info.videoLink = req.body.videoLink, info.cv = req.body.cv, await info.save();
        await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
        res.send({
            message: "Information Updated Successfully"
        });
    } else {
        await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
        res.status(404).send({
            message: "user information not Found"
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5898,5419], () => (__webpack_exec__(847)));
module.exports = __webpack_exports__;

})();