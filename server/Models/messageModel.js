const mongoose = require("mongoose");

const messageScehma = new mongoose.Schema({
  chatId:String,
  senderId:String,
  text:String,

},{
timestamps:true
})

const messageModel=mongoose.model("Messages",messageScehma);
module.exports=messageModel