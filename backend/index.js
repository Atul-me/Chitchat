const express = require('express');
const {chats} = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const chatRoutes  = require('./routes/chatRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');


dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());



app.get('/', (req,res) => {
    res.send('App runnning');
});

// app.get('/api/chat', (req,res) => {
//     res.send(chats);
// });

// app.get("/api/chat/:id", (req,res) =>{
//     const singleChat = chats.find((e) => e._id == req.params.id);
//     res.send(singleChat);
// });

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server running : ${PORT}`))