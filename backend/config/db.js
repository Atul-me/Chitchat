const mongoose = require('mongoose');


const connectDB = async() => {
    try{
        const con = await mongoose.connect(process.env.DATABASE_URL);

        console.log(`MongoDB Connected: ${con.connection.host}`);
    }
    catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;