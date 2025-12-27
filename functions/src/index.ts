import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import * as nodemailer from 'nodemailer';

// Initialize Firebase Admin
initializeApp();
getFirestore();

// 🔐 EMAIL TRANSPORT (GMAIL APP PASSWORD)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// 🔔 FIRESTORE TRIGGER
export const notifyOnLeadCreate = onDocumentCreated(
  'leads/{leadId}',
  async (event) => {
    const snap = event.data;
    if (!snap) return;

    const lead = snap.data();

    const mailOptions = {
      from: `"CloudMirai Academy" <${process.env.GMAIL_EMAIL}>`,
      to: 'mr.pavan.kalyan.91@gmail.com',
      subject: '🔥 New Lead Received – CloudMirai Academy',
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Course:</strong> ${lead.course}</p>
        <p><strong>Source:</strong> ${lead.source}</p>
        <p><strong>Comments:</strong> ${lead.comments || 'N/A'}</p>
        <br />
        <small>Received at: ${new Date().toLocaleString()}</small>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('✅ Email notification sent');
    } catch (error) {
      console.error('❌ Email failed:', error);
    }
  }
);
