const express = require("express")
const router = express.Router();

router.use("/User", require("./user"))
router.use("/Photographer", require("./photographer"))
router.use("/Booking", require("./booking"))
router.use("/ServicesCategory", require("./services_category"))
router.use("/PhotographerServicesCategory", require("./photographer_service_category"))
module.exports = router;
