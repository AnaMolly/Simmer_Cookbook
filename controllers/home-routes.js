const router = require('express').Router();
const {Recipe,User}=require('../models')
router.get('/', async(req,res) =>{
    res.render('HomePage');
})

router.get('/addReciepie', async(req,res) =>{
    res.render('RecepieAdd');
})

router.get('/ViewRecepie', async(req,res) =>{
    res.render('CookBook');
})

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

router.get('/UserCookBook', async(req,res) =>{
    try {
        const RecipeData = await Recipe.findAll({
          // Add Book as a second model to JOIN with
        });

        // const addRecepieData = RecipeData.map((data) =>
        // data.get({ plain: true })
  
        // );
     
        res.render('DisplayUserCookbook',{RecipeData})
        // res.status(200).json(productData);
    } 
      
      catch (err) {
        res.status(500).json(err);
      }
    
})




module.exports = router;