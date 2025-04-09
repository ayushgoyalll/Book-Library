const userService = require("../services/userService");
const { userSchema } = require("../utils/validators");

exports.signup = async (req, res) => {
    const parsed = userSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ message: "Invalid user data", error: parsed.error });
    }

    try {
        const { user, token } = await userService.createUser(req.body);
        res.json({
            message: "User created successfully",
            user: { username: user.username },
            token
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await userService.loginUser(username, password);
        if (!token) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
