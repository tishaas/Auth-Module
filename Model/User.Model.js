const mongoose = require("mongoose")
const {Schema } = mongoose

const UserSChema = new Schema({
    name:{
        type:String,
        required:true
    },
    phone_no:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        match:[/\S+@\S+\.\S+/,"Invalid Email address"]
    },
    password:{
        type:String,
        required:true
    }
    
},{timestamps:true})

const User = mongoose.model('users',UserSChema)
module.exports =User