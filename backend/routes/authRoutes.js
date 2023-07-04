const express = require('express')
const router = express.Router()

const AuthenticationController = require('../controller/authController')

router.post('/',AuthenticationController.login)

module.exports= router