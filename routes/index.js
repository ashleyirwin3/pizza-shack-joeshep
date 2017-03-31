'use strict'

const { Router } = require('express')
const router = Router()
// public routes
router.use(require('./about'))
// contact, login, and register will
// be included in roots.js ...somehow?
router.use(require('./root'))


module.exports = router
