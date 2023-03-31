const express = require('express');
require('dotenv').config()
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")
const connection = require("./connection");
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Get all product lines
app.get("/productlines", (req, res) => {
    connection.connect((err) => {
        if(err) {
        console.log("err", err);
        }
        console.log(process.env.DATABASE_USER)
        connection.query("SELECT * FROM productlines", (err, data) => {
            if(err) {
                console.log("err", err);
                }
            res.json(data)
        })
    })
});

// Get all products for a certain product line
app.get("/products/:productline", (req, res) => {
    let productline = req.params.productline;
    connection.connect((err) => {
        if(err) {
        console.log("err", err);
        }
        connection.query(`SELECT * FROM products WHERE productLine = '${productline}'`, (err, data) => {
            if(err) {
                console.log("err", err);
                }
            res.json(data)
        })
    })
});

module.exports = app;
