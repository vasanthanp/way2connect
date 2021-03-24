//IMPORTING REQUIRED PACKAGES
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const {DBCONNECTION}  = require('./config/DB_Config')
const PORT = process.env.PORT || 5000;
//CONFIGURING EXPRESS APP 
app.use(bodyParser.json());
app.use(express.json());
//CONNECTING DATABASE
DBCONNECTION.connect(err => {
    if(err) return console.log(`database connection error`,err.stack);
    console.log(`database connected successfully as ${DBCONNECTION.threadId}`)
})
//CONFIGURING SERVER PORT
app.listen(PORT,()=>console.log(`server listen at port ${PORT}`))