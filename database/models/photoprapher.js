const { Model, Enum } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    class Photographer extends Model {
        static associate(models) {
            this.hasMany(models.Booking, { foreignKey: 'photographerId' })
            this.hasMany(models.PhotographerServicesCategory, { foreignKey: 'photographerId' })
        }
    }
    Photographer.init(
        {
            name:
            {
                type: DataTypes.STRING,
            },
            password:
            {
                type: DataTypes.STRING,
            },
            email:
            {
                type: DataTypes.STRING,

            },
            adress:
            {
                type: DataTypes.STRING,

            },
            phoneNumber:
            {
                type: DataTypes.STRING,

            },
            bio:
            {
                type: DataTypes.STRING,

            },
            image:
            {
                type: DataTypes.STRING,

            },
            rate:
            {
                type: DataTypes.INTEGER,


            },
            status:
            {
                type: DataTypes.ENUM('محظور', 'مؤكد', "مطرود", "لم يتم التأكيد بعد"),
                defaultValue: "لم يتم التأكيد بعد",
            },
            isConfirmed:
            {
                type: DataTypes.BOOLEAN,
                defaultValue: false

            },
            isPremium: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }

        },
        {
            sequelize,
            modelName: "Photographer",
        }
    )

    return Photographer;
}