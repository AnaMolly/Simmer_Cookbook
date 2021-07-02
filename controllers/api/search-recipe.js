const router = require('express').Router();
const { Recipe } = require('../../models');

router.post('/searchRecipe', async (req, res) => {
    console.log(req.body)
  try {
    const recipeData = await Recipe.create(req.body);

    req.session.save(() => {
     req.session.loggedIn = true;

      res.status(200).json(recipeData);
   });
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router 