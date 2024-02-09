const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const fileUpload = require("express-fileupload");
app.use(fileUpload())
const cors = require('cors')
const fs=require('fs')
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('./uploads'))
app.use(cors({origin: '*'}))





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
  




