const mongoose=require('mongoose')

mongoose.connect(`mongodb://localhost/mongopractice`)

const userSchema=({
    name:String,
    age:Number,
    email:String
    })

module.exports=mongoose.model("user",userSchema)