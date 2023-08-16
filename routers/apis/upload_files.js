const express = require("express");
const router = express.Router();


const controller = require("../../controller/uplaod_file");

router.post("/", controller.uploadFile, function(data, req, res, next) {
    res.status(data.statusCode).json(data);
});


module.exports = router;
