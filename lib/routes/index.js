const router = require('express').Router()

// Routes under /api/v1
router.use('/v1', require('./v1'))

module.exports = router
