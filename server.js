const express = require('express');
const colors = require('colors');
const mongoose = require('mongoose');
const router = require('./routes/user');

require('dotenv').config();

const PORT = "8000";

const server = express();

server.use('/',router);

mongoose.connect(DB_STR, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
});

mongoose.connection('open', () => {
    console.log("Connected to the database");
})

server.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`.green.inverse);
});