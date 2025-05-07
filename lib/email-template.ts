export function generateEmailTemplate({
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
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      
      body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', Arial, sans-serif;
        background-color: #f4f4f4;
        color: #333333;
      }
      
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
      
      .email-header {
        background-color: #fee2e2;
        color: red;
        padding: 20px 30px;
        text-align: center;
      }
      
      .logo {
        max-width: 180px;
        margin-bottom: 15px;
      }
      
      .email-body {
        padding: 30px;
      }
      
      .email-footer {
        background-color: #f8f9fa;
        padding: 20px 30px;
        text-align: center;
        font-size: 12px;
        color: #6c757d;
        border-top: 1px solid #e9ecef;
      }
      
      h1 {
        color: #ffffff;
        font-size: 24px;
        margin: 0;
        font-weight: 600;
      }
      
      h2 {
        color: #e63946;
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 20px;
        font-weight: 600;
      }
      
      .submission-date {
        color: #6c757d;
        font-size: 14px;
        margin-bottom: 25px;
      }
      
      .info-card {
        background-color: #f8f9fa;
        border-left: 4px solid #e63946;
        padding: 15px 20px;
        margin-bottom: 20px;
        border-radius: 4px;
      }
      
      .info-label {
        font-weight: 600;
        color: #495057;
        margin-bottom: 5px;
        font-size: 14px;
      }
      
      .info-value {
        color: #212529;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 16px;
      }
      
      .message-box {
        background-color: #f8f9fa;
        border-radius: 4px;
        padding: 20px;
        margin-top: 25px;
      }
      
      .message-content {
        white-space: pre-line;
        line-height: 1.6;
      }
      
      .social-icons {
        margin-top: 20px;
      }
      
      .social-icon {
        display: inline-block;
        margin: 0 8px;
      }
      
      .social-icon img {
        width: 24px;
        height: 24px;
      }
      
      .contact-info {
        margin-top: 15px;
      }
      
      .divider {
        height: 1px;
        background-color: #e9ecef;
        margin: 25px 0;
      }
      
      @media only screen and (max-width: 600px) {
        .email-container {
          width: 100%;
          border-radius: 0;
        }
        
        .email-header, .email-body, .email-footer {
          padding: 15px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="email-header">
        <!-- Company Logo -->
                <img src="https://ksa.neweast.cloud/assets/logo-C3OlKOqi.png" alt="NewEast" style="width: 120px; ">
      </div>
      
      <div class="email-body">
        <div class="submission-date">
          Submitted on ${currentDate}
        </div>
        
        <h2>Contact Information</h2>
        
        <div class="info-card">
          <div class="info-label">Name</div>
          <p class="info-value">${name}</p>
        </div>
        
        <div class="info-card">
          <div class="info-label">Email Address</div>
          <p class="info-value">${email}</p>
        </div>
        
        <div class="info-card">
          <div class="info-label">Subject</div>
          <p class="info-value">${subject}</p>
        </div>
        
        <div class="divider"></div>
        
        <h2>Message</h2>
        <div class="message-box">
          <div class="message-content">${message.replace(/\n/g, "<br>")}</div>
        </div>
      </div>
      
      <div class="email-footer">
                <img src="https://ksa.neweast.cloud/assets/logo-C3OlKOqi.png" alt="NewEast" style="width: 120px; margin-bottom: 15px;">
        
        <div class="social-icons">
          <a href="https://www.facebook.com/neweastgroup" class="social-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook">
          </a>

          <a href="https://www.instagram.com/neweastgroup/" class="social-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram">
          </a>
          <a href="https://www.linkedin.com/company/neweastgroup/" class="social-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn">
          </a>
        </div>
        
        <div class="contact-info">
          <p>S21006 JAFZA SOUTH - Dubai | +971 48811195 | info@neweast.com</p>
          <p>&copy; ${new Date().getFullYear()} NewEast Group. All rights reserved.</p>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
}
