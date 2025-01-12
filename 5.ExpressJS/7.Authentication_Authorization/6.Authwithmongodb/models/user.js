const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/authtestapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const userSchema= mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age:Number
})

module.exports = mongoose.model("user",userSchema)