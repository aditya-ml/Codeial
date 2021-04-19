const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./routes');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use(cookieParser());


//access static files
app.use(express.static('./assets'));

//tell server to use this library before routing
app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router
app.use('/', require('./routes'))

//set ejs engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log('Error: ',err);
        console.log(`Error in running the server: ${err}`); // another method to print in console - INTERPOLATION
    }

    console.log(`Server is running on port: ${port}`);
})