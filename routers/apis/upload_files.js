const express = require("express");
const router = express.Router();
const controller = require("../../controller/uplaod_file");
const PostController = require("../../controller/post_controller");

  router.post("/", controller.upload.single('image'),PostController.add, async (req, res, next) => { 
      
      try { 
          return res.status(200).json(req.file); 
      } catch (error) { 
          return res.status(200).json(error); 
      } 
  });


module.exports = router;
