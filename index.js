// 1st thing 
// git does not track empty folder automatically  for that we have to make file manually inside that empty folder named as  .gitkeep

// for that we have installed one extension named as gkeep that automatically insert  .gitkeep  file inside empty folder.
// install extenstion gkeep 
// then press ctrl+shift +p  and search for  --- add git keep  and run this command 

// 2 thing 
// we have to take care about sparation of concern i.e for every concern make another file  

const express = require('express')
const app = express();
const path = require('path')
const cookie = require('cookie-parser')
const db = require('./config/mongoose-connection')
const userRouters= require('./routes/userRouters')
const productRouters = require('./routes/productRouters')
const ownerRouters = require('./routes/ownerRouters')
const login= require('./routes/logIn')
const expressSession = require('express-session');
const flash = require('connect-flash');

require('dotenv').config()                // this will acquire all varibles of env files

app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(cookie())
app.use(express.static(path.join(__dirname , 'Public')))
app.use(expressSession({

    resave : false,                      // it ensure that dont save again and again if updation don't happen

    saveUninitialized : false,           // it ensure that if a user that is not loggedin then dont create his/her session.

    secret : process.env.JWT_KEY ,
}))

app.use(flash())                    // flash  work under express session that why before using flash we have to create a session 

app.set('view engine' , 'ejs');

app.use('/' , login)
app.use('/user' , userRouters)
app.use('/owner' , ownerRouters)
app.use('/product' , productRouters)

app.listen(3000)