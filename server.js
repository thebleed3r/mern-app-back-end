const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const myURL = 'mongodb+srv://thebleed3r:azerty1234@cluster0-uesws.mongodb.net/todos?retryWrites=true&w=majority'

mongoose.connect( myURL, { useNewUrlParser: true, useUnifiedTopology: true } );
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully !')
})


app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})