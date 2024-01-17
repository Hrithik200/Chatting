const { default: mongoose } = require("mongoose");
const Mongoose=require("mongoose");
const chatSchema= new mongoose.Schema({
  members:Array, 
},
{
  timeStamps:true,
});

const chatModel= mongoose.model("chat",chatSchema);

module.exports=chatModel;