// TODO 3: SETUP CONFIG DATABASE
// import mongoose
const mongoose = require('mongoose')

// import dotenv and start config method
require("dotenv").config();

// destructing object process.env
const { DB_HOST, DB_DATABASE, DB_PORT } = process.env;

// url mongoDB
const url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`

// connect to database mongoDB
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true    
})
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));

// export database
module.exports = db;
