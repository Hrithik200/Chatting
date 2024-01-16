const { userModel } = require("../Models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const createtoken = (_id) => {
    const jwtKey = process.env.JWT_SECRET_KEY;
    return jwt.sign({ _id }, jwtKey, { expiresIn: "3d" });
};
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);

        let user = await userModel.findOne({ email });

        // user Exist while register
        if (user) {
            return res.status(400).json("User with given Email Already Exist");
        }
        if (!name || !email || !password) {
            return res.status(400).json("All Fields are required");
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json("Invalid Email");
        }
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json("Password must be a strong one");
        }
        // if the user doesnt exist
        user = new userModel({ name, email, password });
        console.log("user", user);

        // for password
        const salt = await bcrypt.genSalt(10);
        // to make a hash of password
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();
        const token = createtoken(user._id); // create new token for user
        res.status(200).json({ _id: user._id, name, email, token }); // regisisted user
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // find user by email
    try {
        let user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json("Invalid email or password");
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return res.status(400).json("Invalid email or passworddd");

        // if all valid then send the data to user
        const token = createtoken(user._id); // create new token for user
        res.status(200).json({ _id: user._id, name: user.name, email, token });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const getUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const findUser = async (req, res) => {
    try {
        console.log(req.params.userId);
        const userId = req.params.userId;
        const user = await userModel.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = { registerUser, loginUser, findUser,getUser };
