const router = require('express').Router()

// Routes under /api/v3
router.use('/v3', require('./v3'))

module.exports = router
