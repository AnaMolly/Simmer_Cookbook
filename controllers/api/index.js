const router = require('express').Router();
const dataRoutes = require('./data-routes');

router.use('/users', dataRoutes);


module.exports = router;
