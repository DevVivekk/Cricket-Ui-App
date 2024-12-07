const express = require('express');
const login = require('../controllers/login');
const register = require('../controllers/register');
const userme = require('../controllers/userinfo');
const verifyUser = require('../auth/myauth');
const router = express.Router();
router.post("/login",login);
router.post("/register",register)
router.get("/me",verifyUser,userme)
module.exports = router;