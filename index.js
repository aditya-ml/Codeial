const express = require('express');
const router = require('./routes');
const app = express();
const port = 8000;

//use express router
app.use('/', require('./routes'))

//access home_controller here
const homeController = require('./controllers/home_controller');
router.get('/', homeController.home) // '/' is the url where I want to put it

app.listen(port, function(err){
    if(err){
        console.log('Error: ',err);
        console.log(`Error in running the server: ${err}`); // another method to print in console - INTERPOLATION
    }

    console.log(`Server is running on port: ${port}`);
})