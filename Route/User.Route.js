const express = require('express')
const router = express.Router();
const RegisterController = require('../Controller/User.Controller')


router.post('/register',RegisterController.Register)
router.post('/login',RegisterController.Login)

module.exports = router