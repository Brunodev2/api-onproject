const router =  require('express').Router();

const usercontrollers = require('../controllers/user.controllers')




router.post('/',usercontrollers.create)




module.exports = router;