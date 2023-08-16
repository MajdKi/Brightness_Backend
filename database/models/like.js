const { Model, Enum } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    class Like extends Model {
        static associate(models) {

        }
    }
    Like.init(
        {

            number: {
                type: DataTypes.INTEGER,
            }
        },
        {
            sequelize,
            modelName: "Like",
        }
    )

    return Like;
}