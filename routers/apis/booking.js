const express = require("express")
const BookingController = require("../../controller/booking_controller")
const router = express.Router();


router.get("/",BookingController.get,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})

router.post("/Book",BookingController.book,(data,req,res,next)=>{
    res.status(data.statusCode).json(data)
})

router.delete("/DeleteBook/:id",BookingController.deleteBook,(data,req,res,next)=>{
    res.status(data.statusCode).json( data)
})


module.exports = router