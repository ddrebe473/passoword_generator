//load env variables
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const connectDB = require('./db/connect');

const app = express();
const port = 3000;

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const routesPasswords = require('./routes/passwords');
app.use('/api/passwords', routesPasswords)

//server
app.listen(port, () => {
    console.log(`listening on ${port}`);
    connectDB(process.env.TOKEN)
});