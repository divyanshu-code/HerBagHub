const jwt = require('jsonwebtoken')

const genrateToken = (user)=>{   
      
    return  jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY) ;  // basically it set the cookies as token in browser  so that we if login in future then it compared current data with token 
}

 module.exports.genrateToken =  genrateToken