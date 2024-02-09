const express = require('express')
const app = express()
const bodyParser = require('body-parser');


// allRouter

var usersRouter=require("./routes/usersRouter.js")
var contactsRouter=require("./routes/contactsRouter.js")
var companiesRouter=require("./routes/companiesRouter.js")
var blogCategoriesRouter=require("./routes/blogCategoriesRouter.js")
var blogsRouter=require("./routes/blogsRouter.js")
var blogCategoryConnectRouter=require("./routes/blogCategoryConectRouter.js")


const fileUpload = require("express-fileupload");
app.use(fileUpload())
const cors = require('cors')
const fs=require('fs')
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('./uploads'))
app.use(cors({origin: '*'}))


app.use('/api',usersRouter)
app.use('/api',contactsRouter)
app.use('/api',companiesRouter)
app.use('/api',blogCategoriesRouter)
app.use('/api',blogsRouter)
app.use('/api',blogCategoryConnectRouter)






app.get('/doc', (_req, res) => {
  const data = fs.readFileSync('./uploads/index.html',
  { encoding: 'utf8', flag: 'r' });
res.status(200).send(data)
})
// Create an HTTP server

app.listen(4003, () => {
    console.log('Сервер запущен')
    console.log('server started')
  })
  




