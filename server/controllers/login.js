const usermodel = require("../models/user");
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const login = async(req,res)=>{
    const {email,password} = req.body;
    if( !email || !password) return res.status(404).json({msg:"NO DATA!"});
    const check = await usermodel.findOne({email});
    if(!check) return res.status(404).json({msg:'User not found'});
    else{
        const compare = await bcrypt.compare(password,check.password)
        if(compare){
            //cookie generatiion: 
            const token = jwt.sign({ userId: check._id }, process.env.JWT_SECRET, { expiresIn: '2d' });
            res.cookie('userToken', token, {
                httpOnly: true,
                maxAge: 2 * 24 * 60 * 60 * 1000, 
                secure: process.env.NODE_ENV === 'production' ? true : false
            });
            return res.status(200).json({ msg: check,token:token});
        }
        //password not matched
        return res.status(401).json({ msg: 'Invalid password or email'});
    }
}
module.exports = login;