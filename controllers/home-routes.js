const router = require('express').Router();

router.get('/', async(req,res) =>{
    res.render('HomePage');
})

router.get('/addReciepie', async(req,res) =>{
    res.render('RecepieAdd');
})

router.get('/ViewRecepie', async(req,res) =>{
    res.render('CookBook');
})


// change made

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