require('dotenv').config();

const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.get('/', (req, res) => {
  res.json('Hello World')
})

app.use('/api/articles', require('./routes/article')) // cual es el path y lo que voy a recibir

app.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT)
});