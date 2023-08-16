const { Model, Enum } = require("sequelize");



module.exports = (sequelize, DataTypes) => {
    class ServicesCategory extends Model {
        static associate(models) {
            this.hasMany(models.PhotographerServicesCategory, { foreignKey: 'servicesCategoryId' })
        }
    }
    ServicesCategory.init(
        {
            name:
            {
                type: DataTypes.STRING,
            },


        },
        {
            sequelize,
            modelName: "ServicesCategory",
        }
    )

    return ServicesCategory;
}