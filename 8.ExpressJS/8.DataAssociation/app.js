const express = require('express');
const app = express()
const userModel = require('./Models/user')
const postModel = require('./Models//post')


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: "Manish",
        age: 21,
        email: "manish@gmail.com"
    })

    res.send(user)
})


app.get('/posts/create',async (req,res)=>{
    let post =await postModel.create({
        postData:"Hey it is a Post",
        user:"676d0b06b00133d6101d2285"
        })

        let user=await userModel.findOne({_id:"676d0b06b00133d6101d2285"})


        user.posts.push(post._id)
        await user.save()
        res.send({post,user})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})