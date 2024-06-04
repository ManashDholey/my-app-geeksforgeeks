const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from this origin
  }));
app.use(express.json());



// Route Imports
const product = require('./routes/productsRoute');
app.use("/api/v1",product);


module.exports = app;