
const http = require("http");

const port = 8000;


const express = require("express");
const app = express();
const server = http.createServer(app);

const sequelize = require("sequelize");
const { user } = require('./modles')


app.get ("/" , (req,res) =>{
    res.send("home page")
})









server.listen(port , () => {
    console.log("running on 8000")
})