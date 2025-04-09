const { User } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.createUser = async ({ username, password }) => {
    const existingUser = await User.findOne({ username });
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });

    return { user, token };
};

exports.loginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) return null;

    const match = await bcrypt.compare(password, user.password);
    if (!match) return null;

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });

    return token;
};
