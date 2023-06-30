const express = require('express');

const usersRoute = require('./routes/users.js');

const app = express();

app.use('/users', usersRoute); 

app.get("/hello", (req, res, next) => {
    res.send('Hello Hayat Anjing');
});

app.post("/hello", (req, res, next) => {
    hehe = req.check_req; 
    console.log();  
    res.send(hehe);
});

app.listen(5002, () => {
    console.log('Server is running on Port (5002)');
});