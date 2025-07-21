const express = require('express')
const router = express.Router()
const owner = require('../Models/owner-model')

if (process.env.NODE_ENV === 'development') {

      router.post('/create' , async function(req , res){
           
           let owners=  await owner.find();

           if(owners.length >0){
                return res.status(500).send("you are not allow to create owner")
           }

         let {fullname , email , password} = req.body ;

         let createOwner =  await owner.create({
                   fullname,
                   email,
                   password 
            })

            res.send(createOwner)
      })
}


router.get('/' ,(req , res)=>{
      res.send("hey")
})

module.exports = router;