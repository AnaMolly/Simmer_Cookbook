const router = require('express').Router();
const {Recipe,User}=require('../models')
const withAuth = require('../utils/auth');

router.get('/addReciepie', withAuth, async(req,res) =>{
    res.render('RecepieAdd');
})

router.get('/ViewRecepie', withAuth, async(req,res) =>{
    res.render('CookBook');
})

router.get('/', async (req, res) => {

  try {

    const recipeData = await Recipe.findAll({
      include:[User],
     where:{
       user_id:1
     }

    })

    const recipes = recipeData.map(recipe =>recipe.get({plain:true}))
    console.log(recipes)
    res.render('homepage',{recipes,
    loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/searchRecipes', withAuth, async (req, res) => {
  try {

    res.render('searchRecipe',{
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


router.get('/DisplayUserCookbook', withAuth, async (req, res) => {
  try {

    res.render('DisplayUserCookbook',{
    loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/UserCookBook', withAuth, async(req,res) =>{
    try {
        const RecipeData = await Recipe.findAll({
          // Add Book as a second model to JOIN with
          where:{
            user_id:req.session.user_id
          }
        });
     
        res.render('DisplayUserCookbook',{RecipeData, loggedIn: req.session.loggedIn})
    } 
      
      catch (err) {
        res.status(500).json(err);
      }
    
})

router.get('/editRecipe/:id', async (req, res) => {
  try {
    const RecipeData = await Recipe.findByPk(req.params.id)

    res.render('editRecipe',{RecipeData});
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;