const { where } = require("sequelize");
const models = require("../database/models")
const ResponseModel = require("../models/response_model")
const db = require("../database/models/index")


class PhotographerController {

    static get = async (req, res, next) => {
        var _get = await models.Photographer.findAll();
        next(
            new ResponseModel({
                statusCode: 200,
                data: _get,
                message: "done"
            })
        )
    }

    static getById = async (req, res, next) => {
        var _get = await models.Photographer.findOne({
            where: {
                id: req.params.id
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

    static getConfirms = async (req, res, next) => {
        console.log(25641)
        var _get = await models.Photographer.findAll({
            where: { isConfirmed: true }
        });
        next(
            new ResponseModel({
                statusCode: 200,
                data: _get,
                message: "done"
            })
        )
    }

    static getPr = async (req, res, next) => {
        var _get = await models.Photographer.findAll(
            {
                where: {
                    isPremium: true
                }
            }
        );
        next(
            new ResponseModel({
                statusCode: 200,
                data: _get,
                message: "done"
            })
        )
    }

    static getForphotographer = async (req, res, next) => {
        var _get = await models.Booking.findAll({
            where: {
                photographerId: req.params.id
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

    static signup = async (req, res, next) => {
        const t = await db.sequelize.transaction();
        try {
            var _add = await models.Photographer.create(req.body)
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


    static login = async (req, res, next) => {
        try {
            const { email, password } = req.body
            const _login = await models.Photographer.findOne({ where: { email } });

            if (!_login) {
                next(
                    new ResponseModel({
                        statusCode: 404,
                        //  data: _data,
                        message: "user not found",
                    })
                );
            }
            if (_login.password !== password) {
                next(
                    new ResponseModel({
                        statusCode: 404,
                        //  data: _data,
                        message: "Invalid password",
                    })
                );
            }
            next(
                new ResponseModel({
                    statusCode: 200,
                    data: _login,
                    message: "done"
                }))
        }
        catch (e) {
            console.log(e)
            next(new ResponseModel({
                statusCode: 500,
                message: e
            }));
        }
    }


}

module.exports = PhotographerController