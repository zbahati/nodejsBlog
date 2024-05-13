const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    const locals = {
        title: 'Nodejs Blog',
        description: 'Node project that help user to create the blog and others can see the blog, comment and management of blogs'
    }
    res.render('index',{locals});
});

router.get('/about', (req, res)=> {
    const locals = {
        title: "About us",
        description: 'Nodejs is about run time javascript framework used to create the backend applciations'
    }

    res.render('about', {locals});
})



module.exports= router;