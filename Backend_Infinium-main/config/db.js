// Infiniumproject06
//mongodb+srv://praptivirugama08:Infiniumproject06@cluster0.3vtbriy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("database is connected")
})

module.exports = db