'use strict'

const { Router } = require('express')
const router = Router()
// public routes
router.use(require('./about'))
router.use(require('./contact'))
// router.use(require('./order'))
// contact, login, and register will
// be included in roots.js ...somehow?
router.use(require('./root'))

router.use(require('./order'))

module.exports = router
