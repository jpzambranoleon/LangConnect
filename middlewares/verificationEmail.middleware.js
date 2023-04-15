const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// Create OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// Send verification email
exports.sendVerificationEmail = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Create transport
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    // Create email message
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Verify your account",
      html: `
        <p>Hello,</p>
        <p>Please click the following link to verify your account:</p>
        <p>${process.env.BASE_URL}/verify-account?email=${email}&token=${verificationToken}</p>
        <p>Thank you for registering!</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
