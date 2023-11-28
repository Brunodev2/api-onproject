const router =  require('express').Router();

const usercontrollers = require('../controllers/user.controllers')




router.get('/oi',usercontrollers.soma)




module.exports = router;