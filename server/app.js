require('dotenv').config();

const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.use('/api/articles', require('./routes/article'))

app.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT)
});