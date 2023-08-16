const { Model, Enum } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        static associate(models) {
            this.belongsTo(models.Photographer,{foreignKey:'photographerId'})
            this.belongsTo(models.User,{foreignKey:'userId'})
        }
    }
    Booking.init(
        {
            date:
            {
                type: DataTypes.DATE,
            },
            place:
            {
                type: DataTypes.STRING,
            },
            price:
            {
                type: DataTypes.INTEGER,

            },
            status:
            {
                type: DataTypes.ENUM("لم يتم الرد بعد","تمت الموافقة وبانتظار الموعد","لم يتم الموفقة","انتهى بدون تقييم","انتهى مع تقييم","مرفوض"),
                defaultValue:"لم يتم الرد بعد",
            },
           


        },
        {
            sequelize,
            modelName: "Booking",
        }
    )

    return Booking;
}