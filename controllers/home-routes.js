const router = require('express').Router();

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

    res.render('homepage',{
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