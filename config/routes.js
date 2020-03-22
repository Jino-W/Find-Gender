const express = require('express')
const router = express.Router()
const gendersController = require('../app/controllers/gendersController')

router.get('/users/gender', gendersController.show)

module.exports = router