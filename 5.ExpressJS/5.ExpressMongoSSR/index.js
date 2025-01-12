const express = require('express');
const app = express()
const path = require('path');
const userModel = require('./Models/user')


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/read', async (req, res) => {
    let Users = await userModel.find()
    res.render('read', { Users })
    console.log(Users)
})

app.post('/create', async (req, res) => {
    let { name, email, image } = req.body

    let CreatedUser = await userModel.create({
        name,
        email,
        image
    }

    )
    res.redirect('/read')
})

app.get('/delete/:id', async (req, res) => {
    let Users = await userModel.findOneAndDelete({ _id: req.params.id })
    res.redirect('/read')
})

app.get('/edit/:userid', async (req, res) => {
    let User = await userModel.findOne({ _id: req.params.userid })
    res.render('edit',{User})
})

app.post('/update/:userid', async (req, res) => {
    let {name,email,image}=req.body;
    let User = await userModel.findOneAndUpdate({ _id: req.params.userid },{name,image,email},{new:true})
    res.redirect('/read')
})

app.listen(3000)