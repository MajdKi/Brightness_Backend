// const upload = require("../middlewares/upload_file");
const fs = require("fs");
const ResponseModel = require("../models/response_model");
const multer = require('multer'); 


const fileStorage = multer.diskStorage({ 
      destination: (req, file, cb) => { 
          cb(null, 'public'); 
      }, 
      filename: (req, file, cb) => { 
          cb(null, file.originalname); 
          // new date().toISOString() + '-' +  
      } 
  }); 
  const fileFilter = (req, file, cb) => { 
          cb(null, true); 
  };
  
  const upload = multer({ storage: fileStorage, fileFilter: fileFilter });
  

  module.exports = {upload}