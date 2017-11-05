const jwt = require('jsonwebtoken')

function verifyJWT(req, res, next) {
  let token
  
  if (req.header('Authorization')) {
    token = req.header('Authorization').slice(7)
  }

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        res.json({
          status: 'ERROR',
          msg: 'Not Authorized'
        })
      } else {
        req.userId = decoded.userId
        next()
      }
    })
  } else {
    res.json({
      status: 'ERROR',
      msg: 'Not Authorized'
    })
  }
}

module.exports = verifyJWT
