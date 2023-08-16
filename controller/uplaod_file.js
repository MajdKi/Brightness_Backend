const upload = require("../middlewares/upload_file");
const fs = require("fs");
const ResponseModel = require("../models/response_model");


const uploadFile = async (req, res, next) => {
    try {
      await upload(req, res);
  
      if (req.file == undefined) {
        next(
          new ResponseModel({
            statusCode: 400,
            error: "Choose a file to upload",
          })
        );
      } else {
        next(
          new ResponseModel({
            statusCode: 200,
            message: "File uploaded successfully",
            data: req.file,
          })
        );
      }
    } catch (err) {
      if (err.code == "LIMIT_FILE_SIZE") {
        next(
          new ResponseModel({
            statusCode: 400,
            error: "File size should be less than 5MB",
          })
        );
      } else {
        next(
          new ResponseModel({
            statusCode: 500,
            error: err,
          })
        );
      }
    }
  };

  module.exports = {uploadFile}