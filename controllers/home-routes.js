const router = require('express').Router();
const {Recipe,User}=require('../models')

router.get('/addReciepie', async(req,res) =>{
    res.render('RecepieAdd');
})

router.get('/ViewRecepie', async(req,res) =>{
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

router.get('/searchRecipes', async (req, res) => {
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


router.get('/DisplayUserCookbook', async (req, res) => {
  try {

    res.render('DisplayUserCookbook',{
    loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/UserCookBook', async(req,res) =>{
    try {
        const RecipeData = await Recipe.findAll({
   
        });
     
        res.render('DisplayUserCookbook',{RecipeData})
    } 
      
      catch (err) {
        res.status(500).json(err);
      }
    
})




module.exports = router;