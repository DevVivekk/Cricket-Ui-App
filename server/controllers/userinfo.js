const userme = async(req,res)=>{
    return res.status(201).json({msg:req.user});
}
module.exports = userme;