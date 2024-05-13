require('dotenv').config();

const express = require("express");
const app = express();
const expressEjsLayout = require("express-ejs-layouts");

const connectDB = require('./server/config/db')


// app layout and middleware
app.use(expressEjsLayout);
app.set('layout','./layout/main');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', require("./server/routes/main"));

// listing 
const PORT = process.env.PORT || 4000

connectDB();

app.listen(PORT, ()=> {
    console.log(`Server is running on the Port: ${PORT}`)
})
