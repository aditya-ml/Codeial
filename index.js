const express = require('express');
const cookieParser = require('cookie-parser');
// const router = require('./routes');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const passportJWT = require('./config/passport-jwt-strategy');

const MongoStore = require('connect-mongo');

// sass
const sassMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');
const customMware = require('./config/middleware');

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

app.use(express.urlencoded());

app.use(cookieParser());


//access static files
app.use(express.static('./assets'));

// mae the uploads path available to the browser
app.use('/uploads', express.static(__dirname + '/uploads'));

//tell server to use this library before routing
app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//set ejs engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store the cookie in the db
app.use(session({
   name: 'codeial',
   // TODO change the secret before deployment in production mode
   secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000 * 60 * 100) // in milliseconds

    },
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/codeial_development' },
    function(err){
        console.log(err || 'connect-mongo setup ok')
    }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

//use express router
app.use('/', require('./routes'))


app.listen(port, function(err){
    if(err){
        console.log('Error: ',err);
        console.log(`Error in running the server: ${err}`); // another method to print in console - INTERPOLATION
    }

    console.log(`Server is running on port: ${port}`);
})