const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();


const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json())

const connectDB = require('./config/db')

const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
}
ap.use(cors(corsOptions))

// Template engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use('/api/files', require('./routes/files'))
app.use('/files', require('./routes/show'))
app.use('/files/download', require('./routes/download'))

const start = async () => {
    try {
        //connect DB
        await connectDB(process.env.MONGO_URI)
        console.log("DB Connected");
        app.listen(PORT, console.log(`listening on port ${PORT}...`))
    } catch (err) {
        console.log(err);
    }
}

start()