const jwt = require('jsonwebtoken') 
const expressJwt = require('express-jwt') 

exports.login = (req, res) => {
  const {name, password} = req.body 
  if (password === process.env.PASSWORD) {
    // generate token and sent to client 
    const token = jwt.sign({name}, process.env.JWT_SECRET, {expiresIn: '1d' }) 
    return res.json({token, name})
  } else {
    return res.status(400).json({
      error: 'Wrong Password'
    })
  }
} 

exports.requireSignin = expressJwt({
  // req.user.name
  secret: process.env.JWT_SECRET,
});