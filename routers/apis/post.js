const express = require("express")
const PostController = require("../../controller/post_controller")
const router = express.Router();



router.get("/",PostController.get,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})
router.get("/byPhotographer/:id",PostController.getByPhotographer,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})
router.post("/add",PostController.add,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})

module.exports = router