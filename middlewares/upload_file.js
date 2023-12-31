const util = require("util");
const multer = require("multer");
const ResponseModel = require("../models/response_model");

const DIR = "./public/images/";

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = `${new Date().toISOString()}-${file.originalname
      .toLowerCase()
      .split(" ")
      .join("-")}`;
    cb(null, fileName);
  },
});

let upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5,
  // },
  // fileFilter: (req, file, cb) => {
  //   if (
  //     file.mimetype == "image/png" ||
  //     file.mimetype == "image/jpg" ||
  //     file.mimetype == "image/jpeg"
  //   ) {
  //     cb(null, true);
  //   } else {
  //     cb(null, false);
  //     return cb({
  //       message: "File types allowed .jpeg, .jpg and .png!"
  //     });
  //   }
  // },
});

// let fileUploadMiddleware = util.promisify(upload);

module.exports = upload.single("file");
