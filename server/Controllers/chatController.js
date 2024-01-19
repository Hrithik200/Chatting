const chatModel = require("../Models/chatModel");

// create chat

// Get user  chats

// find chat

const createChat = async (req, res) => {
    const { firstId, secondId } = req.body;
    try {
        // if exisiting chat found
        const chat = await chatModel.findOne({
            members: {
                $all: [firstId, secondId],
            },
        });
        if (chat) return res.status(200).json(chat);

        // create a new chat i not found
        const newChat = new chatModel({
            members: [firstId, secondId],
        });
        const response = await newChat.save();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

const findUserChats = async (req, res) => {
    const userId = req.params.userId;
    try {
        // This function is intended to find all chats associated with a specific user.
        const chats = await chatModel.find({
            members: { $in: [userId] },
        });
        res.status(200).json(chats);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

const findChat = async (req, res) => {
    const { firstId, secondId } = req.params;
    try {
        //This function is designed to find a specific chat between two users.
        const chat = await chatModel.findOne({
            members: { $all: [firstId, secondId] },
        });
        res.status(200).json(chat);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

module.exports = { createChat, findUserChats, findChat };
