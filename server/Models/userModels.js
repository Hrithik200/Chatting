const { timeStamps } = require("console");
const { Module } = require("module");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, minlength: 3, maxlength: 30 },
        email: { type: String, required: true, minlength: 3, maxlength: 200, unique: true },
        password: { type: String, required: true, minlength: 3, maxlength: 1024, unique: true },
    },
    { timestamps: true }
);

const userModel = mongoose.model("User", userSchema); // User is table name

module.exports = {userModel};
