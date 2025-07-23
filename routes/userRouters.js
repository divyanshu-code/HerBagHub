const express = require('express')
const router = express.Router()
const {register , Login , Logout} = require('../controllers/authController')


router.get('/', (req, res) => {
      res.render('login.ejs')
})


router.post('/register', register)


router.post('/login', Login)

router.get('/logout' , Logout )



module.exports = router;