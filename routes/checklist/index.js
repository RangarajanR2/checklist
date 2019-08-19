
const router = require('express').Router()


router.get('/',(req,res) => {
    res.send({
        200 : "ok"
    })
})

router.get('/:checklistName',(req,res) => {
    console.log('Request to get by name')
    let checklistName = req.params.checklistName
    res.send({
        200 : "ok"
    })
})

router.get('/tags/:tag',(req,res) => {
    let tag = req.params.tag
    console.log('Request to get by tag')
    res.send({
        200 : "ok"
    })
})

router.post('/create',(req,res) => {
    let checklist = req.body;
    console.log('Request to create checklist')
    res.send({
        200 : "ok"
    })
})

router.post('/:checklistName/tag/:tagName',(req,res) => {
    let tagName = req.params.tagName;
    console.log('Request to tag checklist')
    res.send({
        200 : "ok"
    })
})

router.post('/:checklistName/untag/:tagName',(req,res) => {
    let tagName = req.params.tagName;
    console.log('Request to untag checklist')
    res.send({
        200 : "ok"
    })
})

module.exports = router;