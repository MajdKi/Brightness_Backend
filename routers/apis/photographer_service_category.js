const express = require("express")
const PhotographerServicesCategoryController = require("../../controller/photographer_services_category_controller")
const router = express.Router();



router.get("/",PhotographerServicesCategoryController.get,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})
router.post("/add",PhotographerServicesCategoryController.add,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})

module.exports = router