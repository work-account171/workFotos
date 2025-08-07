import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or 'hotmail', 'yahoo', etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'abdurrehman1722@gmail.com', 
      subject: `New form submission at WorkFotos from ${name}`,
      html: `
  <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 24px; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
      <div style="background-color: #2563eb; padding: 16px 24px;">
        <h2 style="color: #ffffff; margin: 0;">📩 New Contact Message</h2>
      </div>
      <div style="padding: 24px;">
        <p style="margin: 0 0 12px;"><strong style="color: #2563eb;">Name:</strong> ${name}</p>
        <p style="margin: 0 0 12px;"><strong style="color: #2563eb;">Email:</strong> ${email}</p>
        <p style="margin: 0 0 12px;"><strong style="color: #2563eb;">Message:</strong></p>
        <div style="border-left: 3px solid #2563eb; padding-left: 12px; color: #444;">
          <p style="margin: 0;">${message}</p>
        </div>
      </div>
      <div style="background-color: #f0f4ff; padding: 16px 24px; text-align: center; font-size: 12px; color: #666;">
        This email was generated from your website contact form.
      </div>
    </div>
  </div>
`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email failed:", error);
    return NextResponse.json({ success: false, error });
  }
}
