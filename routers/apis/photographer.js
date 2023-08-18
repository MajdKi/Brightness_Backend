const express = require("express")
const PhotographerController = require("../../controller/photographer_controller")
const router = express.Router();

console.log(23131)
router.get("/",PhotographerController.get,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})
router.get("/Premium",PhotographerController.getPr,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})
router.get("/:id",PhotographerController.getById,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})
router.get("/GetBookings/:id",PhotographerController.getForphotographer,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})
router.post("/Signup",PhotographerController.signup,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})
router.post("/Login",PhotographerController.login,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})

router.get("/Confirms",PhotographerController.getConfirms,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})

module.exports = router