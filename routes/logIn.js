const express = require('express')
const router = express.Router()
const isLoggedin = require('../middleware/isLoggedin')

router.get('/' , (req, res)=>{
      
     let error = req.flash("error")

     res.render('login.ejs' , {error})

})

router.get('/shop' , isLoggedin , (req, res)=>{
      
    res.render('shop.ejs')

})


module.exports = router