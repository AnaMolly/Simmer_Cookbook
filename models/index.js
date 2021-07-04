const User = require('./User.js');
const Recipe = require('./Recipe.js');
const Cookbook = require('./Cookbook.js');

// SET UP RELATIONSHIPS BETWEEN MODELS
User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Recipe.belongsToMany(User, {
    through:{
         model: Cookbook
     }
});


module.exports = { User, Recipe, Cookbook};
