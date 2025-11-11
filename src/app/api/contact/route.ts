import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // dcinvst2025@gmail.com
        pass: process.env.EMAIL_PASSWORD, // App Password from Gmail
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // dcinvst2025@gmail.com
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
