const express = require('express')
const path=require('path')
const app = express()
const port = 3000

app.set("view engine",'ejs')
app.use(express.static(path.join(__dirname, 'public')));

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

app.get('/', (req, res) => {
    res.send("Hello World!")
});


// Dynamic route to render user profiles
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (user) {
        res.render('profile', { user });
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/users', (req, res) => {
    res.render('users', { users });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
