const { Model, Enum } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    class PhotographerServicesCategory extends Model {
        static associate(models) {
            this.belongsTo(models.Photographer, { foreignKey: 'photographerId' })
            this.belongsTo(models.ServicesCategory, { foreignKey: 'servicesCategoryId' })
        }
    }
    PhotographerServicesCategory.init(
        {
            price:
            {
                type: DataTypes.INTEGER,
            },
            firstPaid:
            {
                type: DataTypes.INTEGER,
            }, 
            description:
            {
                type: DataTypes.STRING,
            },



        },
        {
            sequelize,
            modelName: "PhotographerServicesCategory",
        }
    )

    return PhotographerServicesCategory;
}