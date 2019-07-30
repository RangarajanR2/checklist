
let {Model} = require('../db');      //App starter script's responsibility to establish connection to db

let checklistItemSchema = require('./checklist-items');
let checklistSchema     = require('./checklists');

exports.ChecklistItem   = Model('ChecklistItem',checklistItemSchema);
exports.Checklist       = Model('Checklist',checklistSchema);

