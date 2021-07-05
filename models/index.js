const User = require('./user');
const Recipe = require('./recipe');
const Cookbook = require('./cookbook');

// SET UP RELATIONSHIPS BETWEEN MODELS
User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Recipe.belongsTo(User,{
    foreignKey:"user_id",
    onDelete:"cascade"
})

// Recipe.belongsToMany(User, {
//     through:{
//          model: Cookbook
//      }
// });



module.exports = { User, Recipe, Cookbook};
//User can get recipes from the api and from himself
//User wants to add another users recipe?
//if you want to adda ntoher user recipe then dont create new recipe double , create a cookbook entry

//the query that gets you the recipes from the internet and yours
// and the query that gets you the cookbook from other users added recipes