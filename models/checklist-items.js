
const {Schema} = require('../db')

module.exports = new Schema({
    task : String,
    description : String,
    priority : {type: String, enum : ["CRITICAL","HIGH","MEDIUM","LOW"]},
    tags : [String],
    isCompleted : {type : Boolean, default : false},
    comments : [String],
    createdAt : { type : Date, default : Date.now()},
    dueAt : { type : Date, default : Date.now()} ,
    updatedAt : { type : Date, default : Date.now()}
})