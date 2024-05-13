require('dotenv').config();

const express = require("express");
const app = express();
const expressEjsLayout = require("express-ejs-layouts");


// app layout
app.use(expressEjsLayout);
app.set('layout','./layout/main');
app.set('view engine', 'ejs');

app.use(express.static('public'));

// route 

app.get('/', (req, res) => {
    res.send("Hello world");
})

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=> {
    console.log(`Server is running on the Port: ${PORT}`)
})
