const usermodel = require("../models/user")
const bcrypt = require('bcrypt');
require('dotenv').config({});
const register = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password) return res.status(404).json({msg:"NO DATA!"});
    const check = await usermodel.findOne({email});
    if(check) return res.status(500).json({msg:"User exists"});
    else{
        const hash = await bcrypt.hash(password,12);
        const newuser = await new usermodel({name,email,password:hash}).save();
        console.log(newuser);
        return res.status(201).json({msg:"User created"});
    }
}
module.exports = register;