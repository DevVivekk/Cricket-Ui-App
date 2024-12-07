const mongoose = require("mongoose");
require('dotenv').config({});
const connect = async()=>{
await mongoose.connect(process.env.MONGO).then((res)=>console.log("connected")).catch((err)=>console.log(err));
}
module.exports = connect;