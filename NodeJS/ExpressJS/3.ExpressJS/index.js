const express = require("express")
const path = require("path")
const fs = require('fs')
const app = express()

app.set('view engine', 'ejs')
app.use(express.json()) // Enable JSON parsing for all routes
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        console.log(files)
        res.render("index", { files: files })
    })
})

app.post('/create', express.json(), (req, res) => { // Enable JSON parsing for this route
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err) => {
        res.redirect('/')
    })
})

app.get('/files/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,filedata)=>{
        console.log(req.params.filename)
        console.log(filedata)
        if(err){
            console.log(err)
        }
        res.render('show',{filename:req.params.filename ,filedata:filedata})
    })
})

//Renaming a file
app.get('/edit/:filename',(req,res)=>{
    res.render('edit',{filename:req.params.filename})
})

app.post('/edit', (req, res) => {
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,(err)=>{
        res.redirect('/')
    })
})


//Deleting a file
app.delete('/files/:filename', (req, res) => {
    const filePath = path.join(__dirname, "files", req.params.filename);

    // Check if the file exists before attempting to delete
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
            return res.status(404).send("File not found or couldn't be deleted");
        }
        console.log(`File ${req.params.filename} deleted`);
        res.status(200).send("Task deleted successfully");
    });
});



app.listen(3000)