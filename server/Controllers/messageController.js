const messageModel = require("../Models/messageModel");

// creating Message
const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body;

    const message = new messageModel({
        chatId,
        senderId,
        text,
    });

    // save to db
    try {
     const response= await message.save();
     res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};
// Get Message
const getMessages=async(req,res)=>{
  const {chatId}=req.params;
  try {
   const messages=await messageModel.find({chatId});
   res.status(200).json(messages);
   res
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    
  }

}



module.exports={createMessage,getMessages}
