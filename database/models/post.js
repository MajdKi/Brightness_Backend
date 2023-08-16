const { Model, Enum } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {

        }
    }
    Post.init(
        {
          
            title:{
                type: DataTypes.STRING,
            },
            desc
            :{
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "Post",
        }
    )

    return Post;
}