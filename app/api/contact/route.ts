import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateEmailTemplate } from "@/lib/email-template";

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.example.com",
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email notification
    await sendEmailNotification({ name, email, subject, message });

    return NextResponse.json(
      { success: true, message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}

async function sendEmailNotification({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const salesEmail = process.env.MARKETING_EMAIL || "sales@neweast.com";

  const mailOptions = {
    from: process.env.EMAIL_FROM || "noreply@neweast.com",
    to: salesEmail,
    subject: `New Contact Form Submission: ${subject}`,
    html: generateEmailTemplate({ name, email, subject, message }),
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email notification");
  }
}
