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
const login= require('./routes/index')

app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(cookie())
app.use(express.static(path.join(__dirname , 'Public')))

app.set('view engine' , 'ejs');

app.use('/user' , userRouters)
app.use('/owner' , ownerRouters)
app.use('/product' , productRouters)

app.use('/' , login)

app.listen(5173)