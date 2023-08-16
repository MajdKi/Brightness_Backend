const { where } = require("sequelize");
const models = require("../database/models")
const ResponseModel = require("../models/response_model")
const db = require("../database/models/index")


class PhotographerServicesCategoryController{
    static get = async (req, res, next) => {
        var _get = await models.PhotographerServicesCategory.findAll();
        next(
          new ResponseModel({
            statusCode: 200,
            data: _get,
            message: "done"
          })
        )
      }

      static add = async (req,res,next) => {
        const t = await db.sequelize.transaction();
            try {
                    var _add = await models.PhotographerServicesCategory.create(req.body)
                    await t.commit();
                    next(
                        new ResponseModel({
                            statusCode: 201,
                            data: _add,
                            message: "added",
                        })
                    );
            }
            catch (e) {
                await t.rollback();
                next(new ResponseModel({
                    statusCode: 500,
                    message: e
                }));
            }
      }
}

module.exports = PhotographerServicesCategoryController