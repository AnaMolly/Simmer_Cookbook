const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Cookbook extends Model {};

Cookbook.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        recipe_quantity: {
            type: DataTypes.INTEGER,
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
        modelName: 'cookbook',
    },
)

module.exports = Cookbook;