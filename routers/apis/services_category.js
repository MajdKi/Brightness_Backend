const express = require("express")
const ServicesCategoryController = require("../../controller/services_category_controller")
const router = express.Router();


router.get("/",ServicesCategoryController.get,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})


module.exports = router