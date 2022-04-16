"use strict";
(() => {
var exports = {};
exports.id = 791;
exports.ids = [791];
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

/***/ 9021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// Schema for applications submitted from single job page..
// We are keeping separate as it will be only used in recruiters/job posters dashboard. We are also getting separate active
// users who are applying to jobs.

const jobApplicationSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    jobId: {
        type: String
    },
    applications: {
        type: Array
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.JobApplications) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("JobApplications", jobApplicationSchema));


/***/ }),

/***/ 6899:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5898);
/* harmony import */ var _models_jobApplications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9021);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5419);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])();
handler.use(_lib_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D);
// on every job post this API will be hitted to create one jobApplication object 
handler.post(async (req, res)=>{
    await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].connect */ .Z.connect();
    const newJobApplication = new _models_jobApplications__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({
        jobId: req.query.jobId,
        applications: []
    });
    const application = await newJobApplication.save();
    await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
    res.send(application).status(201);
});
//jobId is coming as query param to update an object
handler.put(async (req, res)=>{
    const jobId = req.query.jobId;
    const newApplication = req.body;
    await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].connect */ .Z.connect();
    const data = await _models_jobApplications__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
        jobId
    });
    if (data) {
        let application = data.applications;
        let obj = newApplication;
        application.push(obj);
        await data.save();
        await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
        res.send({
            message: "Application posted to the Job Successfully"
        });
    } else {
        await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
        res.status(404).send({
            message: "user information not Found"
        });
    }
});
handler.get(async (req, res)=>{
    const jobId = req.query.jobId;
    await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].connect */ .Z.connect();
    const propertyForSale = await _models_jobApplications__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
        jobId
    });
    await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
    res.send(propertyForSale);
});
handler.delete(async (req, res)=>{
    await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].connect */ .Z.connect();
    const product = await Product.findById(req.query.id);
    if (product) {
        await product.remove();
        await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
        res.send({
            message: "Product Deleted"
        });
    } else {
        await _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
        res.status(404).send({
            message: "Product Not Found"
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
var __webpack_exports__ = __webpack_require__.X(0, [5898,5419], () => (__webpack_exec__(6899)));
module.exports = __webpack_exports__;

})();