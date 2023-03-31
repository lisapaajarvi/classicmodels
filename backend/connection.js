const mysql = require("mysql2")

connection = mysql.createConnection({
    host: process.env.HOST,
    port: "8889",
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_USER,
    database: process.env.DATABASE_USER
})

module.exports = connection;