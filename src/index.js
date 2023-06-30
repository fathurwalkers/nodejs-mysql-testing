const express = require('express');
const usersRoute = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs'); 

const app = express(); 

app.use(middlewareLogRequest);

app.use('/users', usersRoute); 

app.listen(5002, () => {
    console.log('Server is running on Port (5002)');
});