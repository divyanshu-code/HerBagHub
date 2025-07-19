// git does not track empty folder automatically  for that we have to make file manually inside that empty folder named as  .gitkeep

// for that we have installed one extension named as gkeep that automatically insert  .gitkeep  file inside empty folder.
// install extenstion gkeep 
// then press ctrl+shift +p  and search for  --- add git keep  and run this command 

const express = require('express')
const app = express();
const path = require('path')
const cookie = require('cookie-parser')

app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(cookie())
app.use(express.static(path.join(__dirname , 'Public')))

app.set('view engine' , 'ejs');

app.get('/' , (req, res)=>{
       res.send("hello world !!  jdjjdjjdhhhshhs hhshhshh hell bieo")
})

app.listen(5173)