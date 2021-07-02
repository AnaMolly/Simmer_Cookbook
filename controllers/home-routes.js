const router = require('express').Router();
const {Recipe,User}=require('../models')
// router.get('/', async(req,res) =>{
//     res.render('HomePage');
// })

// router.get('/addReciepie', async(req,res) =>{
//     res.render('RecepieAdd');
// })

// router.get('/ViewRecepie', async(req,res) =>{
//     res.render('CookBook');
// })

router.get('/', async (req, res) => {

  try {

    const recipeData = await Recipe.findAll({
      include:{model:User}
    })

    const recipes = recipeData.map(recipe =>recipe.get({plain:true}))
    
    res.render('homepage',{recipes,
    loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/addRecipes', async (req, res) => {
  try {

    res.render('addRecipe',{
    loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', async (req, res) => {
  try {
      res.render('login',{
          loggedIn: req.session.loggedIn});
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
module.exports = router;