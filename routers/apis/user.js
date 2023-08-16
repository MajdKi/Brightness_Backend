const express = require("express")
const UserController = require("../../controller/user_controller")
const router = express.Router();


router.get("/",UserController.get,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})
router.get("/:id",UserController.getById,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})
router.get("/GetBookings/:id",UserController.getForUser,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})
router.post("/Signup",UserController.signup,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})
router.post("/Login",UserController.login,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})

module.exports = router