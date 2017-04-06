'use strict'

const { Router } = require('express')

const order = require('../controllers/orderCtrl')

const router = Router()

router.get('/order', show)
router.post('order', create)

module.exports = router
