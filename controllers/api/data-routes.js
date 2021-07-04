const router = require('express').Router();
const {Recipe} = require('../../models');


router.post('/', async (req, res) => {
    console.log(req.body);
    try {
      const userData = await Recipe.create(req.body);
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

module.exports = router;