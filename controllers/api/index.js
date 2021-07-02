const router = require('express').Router();
const dataRoutes = require('./data-routes');
const recipeRoutes = require('./search-recipe');

router.use('/users', dataRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;
