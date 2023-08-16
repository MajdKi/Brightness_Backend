const { where } = require("sequelize");
const models = require("../database/models")
const ResponseModel = require("../models/response_model")
const db = require("../database/models/index")


class ServicesCategoryController {
    static get = async (req, res, next) => {
        var _get = await models.ServicesCategory.findAll();
        next(
            new ResponseModel({
                statusCode: 200,
                data: _get,
                message: "done"
            })
        )
    }
}

module.exports = ServicesCategoryController