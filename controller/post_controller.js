const { where } = require("sequelize");
const models = require("../database/models")
const ResponseModel = require("../models/response_model")
const db = require("../database/models/index")

class PostController {
    static getByPhotographer = async (req, res, next) => {
        var _get = await models.Post.findAll({
            where: {
                photographerId: req.body.photographerId
            }
        });
        next(
            new ResponseModel({
                statusCode: 200,
                data: _get,
                message: "done"
            })
        )
    }

    static get = async (req, res, next) => {
        var _get = await models.Post.findAll();
        next(
            new ResponseModel({
                statusCode: 200,
                data: _get,
                message: "done"
            })
        )
    }

    static add = async (req, res, next) => {
        const t = await db.sequelize.transaction();
        try {
            var _add = await models.Post.create(req.body)



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
            console.log(e)
            await t.rollback();
            next(new ResponseModel({
                statusCode: 500,
                message: e
            }));
        }
    }

}


module.exports = PostController