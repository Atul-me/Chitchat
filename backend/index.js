const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/db");


dotenv.config();
connectDB();
const app = express();



app.get('/', (req,res) => {
    res.send('App runnning');
})

const PORT = process.env.PORT || 3333;
app.listen(PORT, console.log(`Server running : ${PORT}`))