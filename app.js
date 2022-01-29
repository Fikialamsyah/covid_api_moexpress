/**
 * TODO 1: SETUP SERVER USING EXPRESS.JS.
 * UBAH SERVER DI BAWAH MENGGUNAKAN EXPRESS.JS.
 * SERVER INI DIBUAT MENGGUNAKAN NODE.JS NATIVE.
 */

// import express
const express = require('express')

// import cors
const cors = require('cors')

// import router
const router = require('./routes/api')

// instance express
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => {console.log('Server Running At http://localhost:3000')})
