import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sql from "mssql";
import { generateEmailTemplate } from "@/lib/email-template";

// SQL Server configuration
const sqlConfig = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  server: process.env.MSSQL_SERVER || "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: process.env.NODE_ENV !== "production",
  },
};

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

    // Store in database
    // await storeInDatabase({ name, email, subject, message });

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

async function storeInDatabase({
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
  try {
    // Connect to SQL Server
    await sql.connect(sqlConfig);

    // Create table if it doesn't exist
    await sql.query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='contact_submissions' AND xtype='U')
      CREATE TABLE contact_submissions (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(255) NOT NULL,
        email NVARCHAR(255) NOT NULL,
        subject NVARCHAR(255) NOT NULL,
        message NVARCHAR(MAX) NOT NULL,
        created_at DATETIME DEFAULT GETDATE()
      )
    `);

    // Insert the contact form data using parameterized query
    await sql.query`
      INSERT INTO contact_submissions (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject}, ${message})
    `;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to store contact form in database");
  } finally {
    // Close the connection
    await sql.close();
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
  const salesEmail = process.env.SALES_EMAIL || "sales@neweast.com";

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
