const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth')

const errorController = require('./controllers/error')

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

// since we connect this node server to an angular application, we will run into some cross-origin/resource sharing issues
// so we allow access to different pages and allow certain methods and authorization in json content 
app.use((req,res,next) => {

    // setting headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // any location can access the port 3000 through the api we create
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE'); // crud operations
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

    next();


})

app.use('/auth',authRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports,()=> console.log('listening on port' + ports));