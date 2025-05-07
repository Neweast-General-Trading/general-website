import sql from "mssql";

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
    trustServerCertificate: process.env.NODE_ENV !== "production", // change to true for local dev / self-signed certs
  },
};

// Connect to SQL Server
export async function connectToDatabase() {
  try {
    // Connect to your database
    await sql.connect(sqlConfig);
    console.log("Connected to SQL Server database");
    return sql;
  } catch (err) {
    console.error("Database connection failed:", err);
    throw err;
  }
}

// Initialize database with required tables
export async function initializeDatabase() {
  try {
    await sql.connect(sqlConfig);

    // Create contact_submissions table if it doesn't exist
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

    console.log("Database initialized successfully");
    await sql.close();
  } catch (err) {
    console.error("Database initialization failed:", err);
    throw err;
  }
}

// Store contact form submission in SQL Server
export async function storeContactSubmission(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    await sql.connect(sqlConfig);

    // Insert the contact form data
    const request = new sql.Request();
    request.input("name", sql.NVarChar, data.name);
    request.input("email", sql.NVarChar, data.email);
    request.input("subject", sql.NVarChar, data.subject);
    request.input("message", sql.NVarChar, data.message);

    await request.query(`
      INSERT INTO contact_submissions (name, email, subject, message)
      VALUES (@name, @email, @subject, @message)
    `);

    await sql.close();
    return { success: true };
  } catch (err) {
    console.error("Failed to store contact submission:", err);
    throw err;
  }
}
