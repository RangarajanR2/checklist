
const router = require('express').Router();

let checklistItems = require('./checklist-item')
let checklist = require('./checklist')
let healthcheck = require('./healthcheck')

router.use('/healthcheck',healthcheck);
router.use('/checklist',checklist);
router.use('/items/:checklistId', checklistItems);


module.exports = router;