const userModel = require('../Models/user-model')
const bcrypt = require('bcrypt')
const {genrateToken}= require('../utils/generatetoken')

module.exports.register = async (req, res)=>{
      
            try {
                  let { fullname, email, password } = req.body;

                  let a = await userModel.findOne({email})

                  if(a)   return res.status(401).send("User already exits , Login")
      
                  bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(password, salt, async function (err, hash) {
      
                              if (err) {
                                     res.send(err.message);
                              }else {
      
                                    let user = await userModel.create({
                                          fullname,
                                          email,
                                          password: hash,
                                    })
      
                                  let token = genrateToken(user)
                                    res.cookie("token" , token);
                                    res.send("user created successfully")
                              }
                        });
                  });
            } catch (err) {
      
             res.send(err.message);
      
            }

        }


module.exports.Login = async (req , res)=>{
      
      let {email , password} = req.body ;

      let user = await userModel.findOne({email});

      if(!user)  return res.status(401).send("User not found")

      bcrypt.compare(password, user.password, function(err, result) {

        if(result){
              
            let token =  genrateToken(user)
            res.cookie("token" , token)
            res.send("you LoggedIn")
        }else{
              
            res.send("password is incorrect")
        }
        
})
}

module.exports.Logout = function(req, res){
             
      res.cookie("token" , "")
      res.redirect('/')
}