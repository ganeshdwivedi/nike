import argon2 from "argon2"
import User from "@/model/userModel";
import connect from "@/config/dbconfig";
import { NextResponse } from "next/server";
import * as sgMail from "@sendgrid/mail";
import { generateToken } from "@/config/generateToken";


export async function POST(request) {
  await connect();
  const { email } = await request.json();
  console.log(email);
  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) {
      console.log(isExist)
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const token = generateToken(email)

      const msg = {
        to: email,
        from: 'ganeshdwivedi1783@gmail.com', // Replace with your verified sender email
        subject: 'Forget Password Request',
        html: `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Forgot Password - Your App Name</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .header {
      background-color: #007bff;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }

    .content {
      padding: 20px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: white !important;
      text-decoration: none;
      border-radius: 5px;
    }
    
    .footer {
      background-color: #f5f5f5;
      padding: 10px;
      text-align: center;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Forgot Password</h2>
    </div>
    <div class="content">
      <p>Dear ${isExist.name},</p>
      <p>We received a request to reset the password for your <a href="https://nike-git-master-ganeshdwivedi.vercel.app/">Nike Project</a> account. To proceed with the password reset, click the button below:</p>
      <a href="${process.env.FRONT_END_URL}/account/login/forget/chpswd?token=${token}&email=${isExist.email}" class="button">Reset Password</a>
      <p>If you did not request a password reset, please ignore this email. Your account remains secure.</p>
    </div>
    <div class="footer">
      <p>Thank you, <br> The <a href="https://nike-git-master-ganeshdwivedi.vercel.app/">Nike Project</a> Team</p>
    </div>
  </div>
</body>
</html>`,
      };
      await sgMail.send(msg);
      console.log("Forget password email sent successfully to:", email);
      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })

    } else {
      return NextResponse.json({ message: "no such user find" })
    }

    // return NextResponse.json({

    // });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}