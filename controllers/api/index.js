const router = require('express').Router();
const userRoutes = require('./user-routes');
const dataRoutes = require('./data-routes');
const recipeRoutes = require('./search-recipe');
const projectRoutes = require('./projectRoutes')

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/addRecipes', dataRoutes);
router.use('/projects', projectRoutes);


module.exports = router;
