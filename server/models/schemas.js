const mongoose = require('mongoose')
const Schema = mongoose.Schema

const custSchema = new Schema({
    fName: {type:String},
    lName: {type:String},
    email: {type:String},
    pwd: {type:String},
})



const Customers = mongoose.model('Customers', custSchema, 'Customer')