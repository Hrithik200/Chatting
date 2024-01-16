const express=require("express");
const {registerUser,loginUser,findUser,getUser}=require("../Controllers/userController")

const router =express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/find/:userId",findUser); // userId is variable we have to post while avalling 
router.get("/",getUser); // userId is variable we have to post while avalling 
module.exports=router;