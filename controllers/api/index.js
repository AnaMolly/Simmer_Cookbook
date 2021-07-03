const router = require('express').Router();
const dataRoutes = require('./data-routes');
const recipeRoutes = require('./search-recipe');
const projectRoutes = require('./projectRoutes')

router.use('/users', dataRoutes);
router.use('/recipes', recipeRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
