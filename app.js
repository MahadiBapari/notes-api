const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const noteRoutes = require('./routes/noteRoutes')

dotenv.config();
connectDB();

const app =  express();
app.use(bodyParser.json());
app.use('/notes', noteRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running in port ' + PORT);
})
