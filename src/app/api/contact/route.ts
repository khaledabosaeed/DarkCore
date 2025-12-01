/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to create transporter
function createTransporter() {
  // Support both EMAIL_* and SMTP_* environment variable names
  const emailUser = process.env.EMAIL_USER || process.env.SMTP_USER;
  const emailPassword = process.env.EMAIL_PASSWORD || process.env.SMTP_PASSWORD;
  
  if (!emailUser || !emailPassword) {
    throw new Error('EMAIL_USER/SMTP_USER or EMAIL_PASSWORD/SMTP_PASSWORD is not set in environment variables');
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: false, // true for 465, false for other ports
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });
}

// Helper function to verify email connection
async function verifyEmailConnection() {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    return { success: true, message: 'الاتصال ناجح / Connection successful' };
  } catch (error) {
    console.error('Email verification error:', error);
    
    const err = error as { code?: string; message?: string };
    
    if (err.code === 'EAUTH') {
      return { 
        success: false, 
        message: 'خطأ في المصادقة: تحقق من كلمة المرور / Authentication error: Check password',
        error: err.message || 'Authentication failed'
      };
    } else if (err.code === 'ETIMEDOUT' || err.code === 'ECONNREFUSED') {
      return { 
        success: false, 
        message: 'فشل الاتصال بالسيرفر: تحقق من الاتصال بالإنترنت / Connection failed: Check internet connection',
        error: err.message || 'Connection timeout or refused'
      };
    } else if (err.message?.includes('EMAIL_USER') || err.message?.includes('EMAIL_PASSWORD') || err.message?.includes('SMTP_USER') || err.message?.includes('SMTP_PASSWORD')) {
      return { 
        success: false, 
        message: 'متغيرات البيئة غير موجودة: تحقق من ملف .env.local / Environment variables missing: Check .env.local',
        error: err.message || 'Environment variables missing'
      };
    } else {
      return { 
        success: false, 
        message: `خطأ في الاتصال: ${err.message || 'Unknown error'} / Connection error: ${err.message || 'Unknown error'}`,
        error: err.message || 'Unknown error'
      };
    }
  }
}

// GET endpoint to verify email connection
export async function GET() {
  try {
    const result = await verifyEmailConnection();
    return NextResponse.json(result, { 
      status: result.success ? 200 : 500 
    });
  } catch (error) {
    console.error('Error in GET /api/contact:', error);
    const err = error as { message?: string };
    return NextResponse.json(
      { 
        success: false, 
        message: 'حدث خطأ غير متوقع / Unexpected error occurred',
        error: err.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'الرجاء ملء جميع الحقول المطلوبة / Please fill all required fields' },
        { status: 400 }
      );
    }

    // Verify email connection before sending
    const verification = await verifyEmailConnection();
    if (!verification.success) {
      return NextResponse.json(
        { 
          error: `فشل التحقق من الاتصال: ${verification.message} / Connection verification failed: ${verification.message}`,
          details: verification.error 
        },
        { status: 500 }
      );
    }

    // Create transporter using Gmail
    const transporter = createTransporter();     

    // Email content
    const emailUser = process.env.EMAIL_USER || process.env.SMTP_USER;
    const recipientEmail = process.env.RECIPIENT_EMAIL || emailUser;
    const mailOptions = {
      from: emailUser,
      to: recipientEmail,
      subject: `رسالة جديدة من موقع دارك كور - New Message from Dark Core Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #0a0a0f; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: #4ECDC4; margin: 0;">دارك كور - Dark Core</h1>
          </div>

          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #0a0a0f; border-bottom: 2px solid #4ECDC4; padding-bottom: 10px;">
              رسالة جديدة من الموقع / New Website Message
            </h2>

            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #4ECDC4;">الاسم / Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #4ECDC4;">البريد الإلكتروني / Email:</strong> ${email}</p>
              ${phone ? `<p style="margin: 10px 0;"><strong style="color: #4ECDC4;">الهاتف / Phone:</strong> ${phone}</p>` : ''}
              ${company ? `<p style="margin: 10px 0;"><strong style="color: #4ECDC4;">الشركة / Company:</strong> ${company}</p>` : ''}
            </div>
      
            <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #4ECDC4; border-radius: 5px;">
              <p style="margin: 0;"><strong style="color: #4ECDC4;">الرسالة / Message:</strong></p>
              <p style="margin: 10px 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666;">
              <p style="margin: 5px 0;">تم إرسال هذه الرسالة من نموذج الاتصال على موقع دارك كور</p>
              <p style="margin: 5px 0;">This message was sent from the contact form on Dark Core website</p>
              <p style="margin: 5px 0; font-size: 12px;">https://darkcore.sa</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'تم إرسال الرسالة بنجاح / Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في إرسال الرسالة / Error sending message' },
      { status: 500 }
    );
  }
}
