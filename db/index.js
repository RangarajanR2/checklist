
const mongoose  = require('mongoose')

const config    = require('../config')

let db = function(){

    let host = config.dbUri;
    let isConnected = false;

    this.connect = function(){
        return new Promise( (resolve, reject) => {
            if(isConnected){
                return resolve(true)
            }else{
                mongoose.connect(host, Object.assign({useNewUrlParser: true}, config.dbOptions || {})).then( () => {
                    isConnected = true;
                    return resolve(true);
                }, (err) => {
                    return reject(err)
                }).catch(err => {
                    return reject(err);
                })
            }
        })
    }

    this.Schema = mongoose.Schema;
    this.Model  = mongoose.model;

}() // Calling the function immediately to create a mongoose connection

module.exports = db;