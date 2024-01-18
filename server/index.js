const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./Routes/userRoute");
const chatRoute=require("./Routes/chatRoute")

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute); // why it is used here http://localhost:5000/api/users/register aisa dikhega frontend mai
app.use("/api/chats", chatRoute);


const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
    console.log(`Listening of Port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Welcome to our chat APIS....");
});

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo DB connected Success"))
    .catch((error) => console.log("Mongo DB Connected Failed", error.message));
