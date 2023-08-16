const { where } = require("sequelize");
const models = require("../database/models")
const ResponseModel = require("../models/response_model")
const db = require("../database/models/index")

class BookingController {
  static get = async (req, res, next) => {
    var _get = await models.Booking.findAll();
    next(
      new ResponseModel({
        statusCode: 200,
        data: _get,
        message: "done"
      })
    )
  }




  static book = async (req, res, next) => {
    const t = await db.sequelize.transaction();
    try {
      var _book = await models.Booking.create(req.body)
      var _get = await models.User.findAll({where:{id : req.body.userId}});

      var _decrease = await models.User.update({ points: _get[0]['dataValues']['points'] -req.body.firstPaid }, {
        where: {
          id: req.body.userId
        }
      })

      await t.commit();
      next(
        new ResponseModel({
          statusCode: 201,
          data: _book,
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

  static deleteBook = async (req, res, next) => {
    try {
      var _delete = await models.Booking.delete({
        where: {
          id: req.params.id
        }
      });
      console.log(_delete)
      if (_delete > 0) {
        console.log("yes")
        console.log(_delete)
        next(
          new ResponseModel({
            statusCode: 204,
            data: null,
            message: "deleted"
          })
        )

      }
      else {
        console.log("no")
        next(
          new ResponseModel({
            statusCode: 400,

            message: "Bad Request"
          })
        )
      }
    }
    catch (e) {
      next(
        new ResponseModel({
          statusCode: 400,

          message: "Bad Request"
        })
      )
    }
  }



}

module.exports = BookingController