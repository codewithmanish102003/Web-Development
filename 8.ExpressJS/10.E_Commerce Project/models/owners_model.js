const mongoose=require('mongoose')

const ownerSchema=mongoose.connect({
    fullname:{type:String,
        minLength:3,
        trim:true,
    },
    email:String,
    password:String,
    products:{
        type:Array,
        default:[],
    },
    contact:Number,
    picture:String,
})

module.exports=mongoose.model("owner",ownerSchema)