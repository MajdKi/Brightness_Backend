const { Model, Enum } = require("sequelize");



module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.Booking,{foreignKey: 'userId'})
        }
    }
    User.init(
        {
            name:
            {
                type: DataTypes.STRING,
            },
            email:
            {
                type: DataTypes.STRING,
            },
            password:
            {
                type: DataTypes.STRING,

            },
            address:
            {
                type: DataTypes.STRING,

            },
            phoneNumber:
            {
                type: DataTypes.STRING,

            },
            birthday:
            {
                type: DataTypes.STRING,

            },
            points:
            {
                type: DataTypes.INTEGER,

            },
            image:
            {
                type: DataTypes.STRING,
                defaultValue: "https://i.ibb.co/VvhSnh9/person-palce-holder.jpg"
            }


        },
        {
            sequelize,
            modelName: "User",
        }
    )

    return User;
}