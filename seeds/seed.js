const sequelize = require('../config/connection');
const { User, Recipe, Cookbook } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const cookbookData = require('./cookbookData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Recipe.bulkCreate(recipeData, {
      returning: true,
  });
  
  // // await Cookbook.bulkCreate(cookbookData, {
  // //     returning: true,
  // });

  process.exit(0);
};


seedDatabase();