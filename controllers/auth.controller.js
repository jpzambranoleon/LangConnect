const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// Register a user
exports.register = async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      password,
      nativeLanguage,
      learningLanguage,
    } = req.body;

    // Check if any required field is missing
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: true, message: "Please provide all required fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: true, message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate verification token
    const verificationToken = jwt.sign(
      { username: req.body.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Create user object
    const user = new User({
      name,
      username,
      email,
      password: hashedPassword,
      nativeLanguage,
      learningLanguage,
    });

    // Save user object
    await user.save();

    // Send verification email
    // req.body = { email, verificationToken };
    // await sendVerificationEmail(req, res);

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: error.message });
  }
};

// Login a user
exports.login = async (req, res) => {
  try {
    console.log(req.body);
    // Check if email and password are provided

    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ error: true, message: "Please provide email and password" });
    }

    // Check if user exists in the database
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(401)
        .json({ error: true, message: "Invalid credentials" });
    }

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: true, message: "Invalid credentials" });
    }

    // Check if user's account is verified
    if (!user.isVerified) {
      return res
        .status(401)
        .json({ message: "Please verify your email address" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    const { password, ...others } = user._doc;

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true, // only send cookie over HTTPS in production
        sameSite: "strict", // disallow sending cookie on cross-origin requests
      })
      .status(200)
      .json({ success: true, message: "Login success", user: { ...others } });
  } catch (error) {
    res.status(500).send({
      error: true,
      message: error.message,
    });
  }
};
