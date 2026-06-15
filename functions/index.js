const functions = require('firebase-functions/v1');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Read from process.env (set via .env file)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.onSupporterCreated = functions.firestore
  .document('supporters/{supporterId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();

    const supportType = data.supportType || 'Unknown';
    const name = data.name || 'Supporter';
    const email = data.email;

    if (!email) {
      console.error('No email provided by supporter');
      return null;
    }

    // 1. Email to the Supporter
    const userMailOptions = {
      from: `"Fadhili Dada Organization" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for supporting Fadhili Dada!',
      text: `Dear ${name},\n\nThank you for choosing to support Fadhili Dada Organization (${supportType}).\n\nYour support means the world to us and to the vulnerable young women we serve.\nOur team will review your submission and reach out shortly with next steps.\n\nBlessings,\nThe Fadhili Dada Team`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.6;">
          <h2 style="color: #481929;">Thank you for your support!</h2>
          <p>Dear ${name},</p>
          <p>We have successfully received your submission for <strong>${supportType}</strong>.</p>
          <p>Your support means the world to us and directly impacts the lives of vulnerable young women in our community.</p>
          <p>Our team will review your details and be in touch with you shortly.</p>
          <p>Blessings,<br/><strong>The Fadhili Dada Team</strong></p>
        </div>
      `,
    };

    // 2. Email to the Internal Team
    const internalDetailsHtml = Object.entries(data)
      .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
      .join('');

    const internalMailOptions = {
      from: `"Website System" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send to the team inbox (support@fadhilidada.org)
      subject: `New Supporter Alert: ${supportType} from ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.6;">
          <h2 style="color: #DF5B20;">New Supporter Submission</h2>
          <p>A new supporter has filled out the form on the website.</p>
          <ul style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
            ${internalDetailsHtml}
          </ul>
        </div>
      `,
    };

    try {
      await transporter.sendMail(userMailOptions);
      console.log('User email sent successfully to:', email);
      
      await transporter.sendMail(internalMailOptions);
      console.log('Internal team email sent successfully');
    } catch (error) {
      console.error('Error sending emails:', error);
    }

    return null;
  });
