const mongoose = require('mongoose')
const {Schema} = mongoose

const DemoSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    roll_no:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Demo = mongoose.model('Demo',DemoSchema)
module.exports = Demo