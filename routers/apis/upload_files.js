const express = require("express");
const router = express.Router();
const controller = require("../../controller/uplaod_file");

  router.post("/", controller.upload.single('image'), async (req, res, next) => { 
      const { path } = req.file; 
      try { 
          return res.status(200).json(req.file); 
      } catch (error) { 
          return res.status(200).json(error); 
      } 
  });


module.exports = router;
