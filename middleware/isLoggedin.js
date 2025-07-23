const jwt = require('jsonwebtoken')
const userModel = require('../Models/user-model')

module.exports = async function(req, res , next){
      
        if(!req.cookies.token){
              req.flash("error","Login First")                        // basically it send the error also in the route 
              return res.redirect("/")
        }

        try{
          
            let check = jwt.verify(req.cookies.token , process.env.JWT_KEY)

            let user = await userModel.findOne({email : check.email}).select("-password")

            req.user=  user ;

            next()

        }catch(err){
             
               req.flash("error","Something Went Wrong !")
              return res.redirect("/")

        }
}