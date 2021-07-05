const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/searchRecipe', withAuth, async (req, res) => {
    console.log(req.body)
    console.log(req.session.user_id)
  try {
    const recipeData = await Recipe.create({
      name:req.body.name,
      ingredients: req.body.ingredient,
      instructions: req.body.instructions,
      image: req.body.image,
      user_id: req.session.user_id,
    });
console.log(recipeData)
    req.session.save(() => {
     req.session.loggedIn = true;  
   });
   res.status(200).json(recipeData);

  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router 