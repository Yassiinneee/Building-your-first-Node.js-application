/**
 * --------------------------------------------
 * Sending Email using Nodemailer
 * --------------------------------------------
 */

require("dotenv").config();

const nodemailer = require("nodemailer");

async function sendEmail() {

    try {

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {

                user: process.env.EMAIL_USER,

                pass: process.env.EMAIL_PASS

            }

        });

        const mailOptions = {

            from: process.env.EMAIL_USER,

            to: process.env.EMAIL_USER,

            subject: "Node.js Modules Checkpoint",

            text: `
Hello!

This email was successfully sent using Nodemailer.

Project:
Node.js Modules Checkpoint

Congratulations!
`

        };

        const info = await transporter.sendMail(mailOptions);

        console.log("✅ Email Sent Successfully!");

        console.log(info.response);

    }

    catch (error) {

        console.error("❌ Failed to send email.");

        console.error(error.message);

    }

}

sendEmail();