const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(req.decodedJwt){
        next()
    } else if (token){
        jwt.verify(token, secrets.jwtSecret, (err, decodedJwt) => {
            if(err){
                res.status(401).json({message: "Gandolf says YOU SHALL NOT PASS"})
            } else {
                req.decodedJwt = decodedJwt;
                next()
            }
        })
    } else {
        res.status(401).json({message: "Nah, brah, not happening"})
    } 
}

