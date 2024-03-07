const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();


app.get('/', (req,res) => {
    res.send('App runnning');
})

const PORT = process.env.PORT || 3333;
app.listen(PORT, console.log(`Server running : ${PORT}`))