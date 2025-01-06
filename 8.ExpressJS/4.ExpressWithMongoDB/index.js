const express = require('express')
const app = express()
const userModel = require('./usermodule')
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Crud operations using Mongoose
//create
app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: 'Harshita',
        email: 'harshita@gmail.com',
        age: 12
    })
    res.send(createdUser)
})
//read
app.get('/read', async (req, res) => {
    let users = await userModel.find()
    res.send(users)
})
//update
app.get('/update', async (req, res) => {
    let updatedUser = await userModel.updateOne({age:21},{ name: 'Harshita'},{new:true})
    res.send(updatedUser)
    })

//delete
app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.deleteOne({age:21})
    res.send(deletedUser)
    })

app.listen(3000)