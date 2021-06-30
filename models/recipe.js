const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {};

Recipe.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING, //TAKE IMAGE LINK AND ADD THE VALUE AS A STRING
            allowNull: true,
        },
        cookbook_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'cookbook',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe',
    },
)

module.exports = Recipe;