const User = require('./user.js');
const Recipe = require('./recipe.js');
const Cookbook = require('./cookbook.js');

// SET UP RELATIONSHIPS BETWEEN MODELS
User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

User.hasOne(Cookbook, {
    foriegnKey: 'user_id'
});

Cookbook.hasMany(Recipe, {
    foreighKey: 'cookbook_id',
    onDelete: 'cascade'
});

Cookbook.belongsTo(User, {
    foreignKey: 'user_id'
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Recipe.belongsTo(Cookbook, {
    foreignKey: 'cookbook_id',
    onDelete: 'cascade'
});


module.exports = { User, Recipe, Cookbook};
