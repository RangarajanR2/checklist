
const router = require('express').Router()

router.get('/', (req, res) => {
    res.send({
        200 : "ok"
    })
})

module.exports = router;