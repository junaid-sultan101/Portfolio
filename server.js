// server.js  (ES module version)

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

// configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465
  auth: {
    user: "junaid.sultan@simplitaught.com",
    pass: "qzkbsnmrodscxrdt",
  },
});

// API endpoint for contact form
app.post("/contact", async (req, res) => {
  const { user_name, user_email, user_message } = req.body;

  const mailOptions = {
    from: `"Portfolio Contact" <junaid.sultan@simplitaught.com>`,
    to: `${user_email}`, // where you receive messages
    subject: "New message from Portfolio",
    text: `
    Name: ${user_name}

    Message:
    ${user_message}
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent");
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
