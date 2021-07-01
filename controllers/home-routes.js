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


module.exports = router;