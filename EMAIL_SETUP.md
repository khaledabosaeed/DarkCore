# إعداد البريد الإلكتروني لنموذج الاتصال
# Email Setup for Contact Form

## الخطوات المطلوبة / Required Steps

### 1. إنشاء App Password في Gmail

**العربية:**
1. اذهب إلى حساب Google: https://myaccount.google.com
2. انقر على "الأمان" (Security) من القائمة الجانبية
3. تأكد من تفعيل "التحقق بخطوتين" (2-Step Verification)
   - إذا لم يكن مفعلاً، اضغط على "التحقق بخطوتين" وفعّله
4. بعد تفعيل التحقق بخطوتين، ارجع إلى صفحة الأمان
5. ابحث عن "App passwords" (كلمات مرور التطبيقات)
6. اختر "Mail" وأنشئ كلمة مرور جديدة
7. سيعطيك Google كلمة مرور مكونة من 16 حرف (مثل: abcd efgh ijkl mnop)
8. **احفظ هذه الكلمة بدون مسافات**

**English:**
1. Go to your Google Account: https://myaccount.google.com
2. Click "Security" from the sidebar
3. Make sure "2-Step Verification" is enabled
   - If not enabled, click "2-Step Verification" and enable it
4. After enabling 2-Step Verification, return to Security page
5. Look for "App passwords"
6. Select "Mail" and create a new password
7. Google will give you a 16-character password (like: abcd efgh ijkl mnop)
8. **Save this password without spaces**

### 2. إنشاء ملف .env.local

**العربية:**
1. في المجلد الرئيسي للمشروع، أنشئ ملف جديد اسمه `.env.local`
2. انسخ المحتوى من `.env.local.example`
3. ضع بريدك الإلكتروني وكلمة المرور:

```env
EMAIL_USER=dcinvst2025@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

**ملاحظة مهمة:** لا تضع مسافات في كلمة المرور!

**English:**
1. In the project root directory, create a new file called `.env.local`
2. Copy content from `.env.local.example`
3. Add your email and app password:

```env
EMAIL_USER=dcinvst2025@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

**Important:** Don't put spaces in the password!

### 3. إعادة تشغيل السيرفر / Restart Server

**العربية:**
بعد إضافة ملف `.env.local`، أعد تشغيل سيرفر Next.js:

```bash
# أوقف السيرفر (Ctrl + C)
# ثم شغله مرة أخرى
npm run dev
```

**English:**
After adding `.env.local`, restart the Next.js server:

```bash
# Stop the server (Ctrl + C)
# Then start it again
npm run dev
```

### 4. اختبار النموذج / Test the Form

**العربية:**
1. اذهب إلى الموقع: http://localhost:3000
2. اسحب للأسفل حتى نموذج الاتصال
3. املأ البيانات واضغط "إرسال الرسالة"
4. يجب أن تصل رسالة إلى بريدك `dcinvst2025@gmail.com`

**English:**
1. Go to the website: http://localhost:3000
2. Scroll down to the contact form
3. Fill in the data and click "Send Message"
4. You should receive an email at `dcinvst2025@gmail.com`

## حل المشاكل / Troubleshooting

### Problem: "Error sending message"

**العربية:**
1. تأكد من أن ملف `.env.local` موجود في المجلد الرئيسي
2. تأكد من عدم وجود مسافات في كلمة المرور
3. تأكد من أن التحقق بخطوتين مفعّل في حساب Gmail
4. تأكد من أنك تستخدم App Password وليس كلمة المرور العادية
5. أعد تشغيل السيرفر بعد تعديل `.env.local`

**English:**
1. Make sure `.env.local` exists in the root directory
2. Make sure there are no spaces in the password
3. Make sure 2-Step Verification is enabled in Gmail account
4. Make sure you're using App Password, not regular password
5. Restart server after modifying `.env.local`

### Problem: الرسائل لا تصل / Messages not arriving

**العربية:**
1. تحقق من مجلد Spam في Gmail
2. تحقق من Console في المتصفح (F12) لأي أخطاء
3. تحقق من terminal حيث يعمل Next.js لأي أخطاء

**English:**
1. Check Spam folder in Gmail
2. Check browser Console (F12) for any errors
3. Check terminal where Next.js is running for any errors

## الملفات المتعلقة / Related Files

- `/src/app/api/contact/route.ts` - API endpoint لإرسال البريد
- `/src/components/sections/contact-section/ContactSection.tsx` - مكون نموذج الاتصال
- `.env.local` - متغيرات البيئة (لا ترفعه إلى GitHub!)
- `.env.local.example` - مثال لملف البيئة

## الأمان / Security

**⚠️ مهم جداً / Very Important:**

**العربية:**
- **لا ترفع ملف `.env.local` إلى GitHub أبداً!**
- ملف `.gitignore` يحتوي بالفعل على `.env.local` لحمايتك
- إذا رفعت كلمة المرور بالخطأ، احذفها من GitHub واحذف App Password من Google وأنشئ واحد جديد

**English:**
- **Never upload `.env.local` to GitHub!**
- `.gitignore` already contains `.env.local` to protect you
- If you accidentally upload the password, delete it from GitHub, delete the App Password from Google, and create a new one

## دعم / Support

إذا واجهت أي مشاكل، تأكد من:
If you face any issues, make sure:

1. ✅ Node.js version 18+ installed
2. ✅ npm packages installed (`npm install`)
3. ✅ `.env.local` file created with correct values
4. ✅ Server restarted after adding `.env.local`
5. ✅ 2-Step Verification enabled in Gmail
6. ✅ App Password created (not regular password)
