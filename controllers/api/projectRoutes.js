const router = require('express').Router();
const {Recipe} = require('../../models');


router.delete('/:id', async (req, res) => {
    try {
      const recipetData = await Recipe.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(recipetData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;