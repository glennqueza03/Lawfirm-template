import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit } from '@/lib/rateLimit';

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');

  if (!ip || rateLimit(ip)) {
    return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });
  }

  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body;

    // Create a test SMTP transporter (use your real SMTP config in production)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'glennquezada14@gmail.com',
        pass: process.env.SMTP_PASSWORD || process.env.GMAIL_APP_PASSWORD, // Use an app password for Gmail
      },
    });

    // Send email to law office
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'glennquezada14@gmail.com',
      to: 'glennquezada14@gmail.com',
      subject: 'Consultation Request',
      text: `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message || 'No message provided'}`,
      html: `<h2>Consultation Request</h2><ul><li><b>Full Name:</b> ${fullName}</li><li><b>Email:</b> ${email}</li><li><b>Phone:</b> ${phone}</li><li><b>Message:</b> ${message || 'No message provided'}</li></ul>`,
    });

    return NextResponse.json({ message: 'Consultation request sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending consultation email:', error);
    return NextResponse.json({ error: 'Failed to send consultation request' }, { status: 500 });
  }
} 