const jwt = require('jsonwebtoken');
const usermodel = require('../models/user')
require('dotenv').config({});
const verifyUser = (req, res, next) => {
    const token = req.cookies.userToken;
    console.log("tokne ", token);
    if (!token) {
        return res.status(401).json({ msg: 'No token provided, authorization denied' });
    }
    jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
        if (err) {
            return res.status(401).json({ msg: 'Invalid or expired token' });
        }
       // If the token is valid, decoded contains the userId
       const userId = decoded.userId;
       try {
           const user = await usermodel.findById(userId).select('-password'); 
           if (!user) {
               return res.status(404).json({ msg: 'User not found' });
           }
           req.user = user;
           next();
       } catch (err) {
           return res.status(500).json({ msg: 'Server error' });
       }
    });
};

module.exports = verifyUser;
