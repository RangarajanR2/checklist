
const {Schema} = require('../db')

const ChecklistItems = require('./checklist-items')

module.exports = new Schema({
    name : String, 
    description : String,
    tags : [String],
    items : [ChecklistItems],
    createdAt : {type : Date}
})