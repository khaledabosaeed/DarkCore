# 📐 دليل المسافات ودعم RTL/LTR

## ✅ التحسينات المطبقة

### 1. **توحيد المسافات (Padding) في جميع الأقسام**

تم توحيد جميع الأقسام لاستخدام نفس الـ padding:

```css
px-4 sm:px-6 md:px-8 lg:px-10
```

#### الأقسام التي تم توحيدها:
- ✅ Navbar
- ✅ Hero Section
- ✅ About Section
- ✅ Services Section
- ✅ Criteria Section
- ✅ Shareholders Section
- ✅ Insights Section
- ✅ Partnerships Section
- ✅ Contact Section
- ✅ Footer

### 2. **Utility Classes جديدة**

تم إضافة classes عامة في `globals.css`:

```css
/* استخدم هذه للأقسام المستقبلية */
.section-padding {
  @apply px-4 sm:px-6 md:px-8 lg:px-10;
}

.section-container {
  @apply container mx-auto px-4 sm:px-6 md:px-8 lg:px-10;
}
```

**مثال الاستخدام:**
```tsx
<div className="section-container">
  {/* المحتوى */}
</div>
```

---

## 🌐 دعم RTL/LTR الكامل

### 1. **المكونات المحدثة**

#### Scroll Indicator
- ✅ يتغير النص: "مرر للأسفل" / "Scroll"
- ✅ يتغير الخط: `font-almarai` / `font-poppins`
- ✅ يراقب تغيير اللغة تلقائياً

**الملف:** `src/components/ui/scroll-indicator.tsx`

#### Partners Marquee
- ✅ أسماء الشركاء بالعربية والإنجليزية
- ✅ يتغير الخط تلقائياً
- ✅ يراقب تغيير اللغة

**الملف:** `src/components/ui/partners-marquee.tsx`

**البيانات:**
```typescript
const partnersData = {
    ar: [
        { name: "شركة الاستثمارات العالمية", icon: Globe },
        // ...
    ],
    en: [
        { name: "Global Ventures", icon: Globe },
        // ...
    ]
}
```

---

## 📱 Responsive Breakpoints

تم استخدام نظام موحد:

| الشاشة | العرض | Padding |
|--------|-------|---------|
| Mobile | < 640px | 1rem (16px) |
| SM | ≥ 640px | 1.5rem (24px) |
| MD | ≥ 768px | 2rem (32px) |
| LG | ≥ 1024px | 2.5rem (40px) |

---

## 🎨 كيفية إضافة قسم جديد

### الطريقة الأولى - استخدام Utility Class:
```tsx
<section className="py-20">
  <div className="section-container">
    {/* المحتوى */}
  </div>
</section>
```

### الطريقة الثانية - استخدام Tailwind مباشرة:
```tsx
<section className="py-20">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
    {/* المحتوى */}
  </div>
</section>
```

---

## 🔄 كيفية دعم RTL في مكون جديد

### Template كامل:

```tsx
"use client"

import { useState, useEffect } from "react"

export function YourComponent() {
    const [language, setLanguage] = useState<"ar" | "en">("ar")

    useEffect(() => {
        const handleLanguageChange = () => {
            const htmlLang = document.documentElement.lang
            setLanguage(htmlLang === "ar" ? "ar" : "en")
        }

        handleLanguageChange()

        const observer = new MutationObserver(handleLanguageChange)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"],
        })

        return () => observer.disconnect()
    }, [])

    const isRTL = language === "ar"

    return (
        <div className={`${isRTL ? "font-almarai" : "font-poppins"}`}>
            {/* المحتوى */}
        </div>
    )
}
```

---

## 📊 مقاييس الجودة

### قبل التحسينات:
- ❌ مسافات غير متساوية في الأقسام
- ❌ بعض المكونات لا تدعم RTL بالكامل
- ❌ Navbar padding مختلف عن باقي الأقسام

### بعد التحسينات:
- ✅ جميع الأقسام لها نفس المسافات
- ✅ دعم RTL/LTR كامل في جميع المكونات الجديدة
- ✅ تناسق بصري 100%
- ✅ تجربة مستخدم موحدة

---

## 🧪 اختبار التحسينات

### 1. اختبر المسافات:
```bash
# شغل المشروع
npm run dev

# افتح المتصفح:
# http://localhost:3000/ar
# http://localhost:3000/en

# تأكد من:
# - المسافات متساوية في جميع الأقسام
# - لا يوجد scroll أفقي
# - العناصر متوسطة في الصفحة
```

### 2. اختبر RTL/LTR:
```bash
# بدل اللغة من الموقع
# وراقب:
# - Scroll Indicator يتغير نصه
# - Partners Marquee يتغير نص الشركاء
# - WhatsApp Button يتحرك من اليمين/اليسار
# - الخطوط تتغير تلقائياً
```

---

## 🎯 أفضل الممارسات

### 1. **عند إضافة قسم جديد:**
- ✅ استخدم `section-container` أو `container mx-auto px-4 sm:px-6 md:px-8 lg:px-10`
- ✅ أضف دعم RTL إذا كان يحتوي نصوص
- ✅ استخدم `font-almarai` للعربي و `font-poppins` للإنجليزي

### 2. **عند إضافة مكون تفاعلي:**
- ✅ أضف `useState` و `useEffect` لتتبع اللغة
- ✅ استخدم `MutationObserver` لمراقبة تغيير `lang` attribute
- ✅ اعرض المحتوى بناءً على اللغة الحالية

### 3. **عند استخدام Animations:**
- ✅ تأكد أنها تعمل بنفس الطريقة في RTL/LTR
- ✅ استخدم `isRTL ? "rotate-180" : ""` للأيقونات الاتجاهية
- ✅ اختبر على الموبايل والديسكتوب

---

## 📝 Checklist للمطورين

عند إضافة ميزة جديدة، تحقق من:

- [ ] المسافات الجانبية متساوية مع باقي الأقسام
- [ ] دعم RTL كامل إذا كان يحتوي نصوص
- [ ] الخطوط تتغير حسب اللغة (Almarai/Poppins)
- [ ] لا يوجد Hardcoded text (كل النصوص من ملفات content)
- [ ] الـ Animations تعمل في كلا الاتجاهين
- [ ] تم اختبار المكون على Mobile/Desktop
- [ ] تم اختبار تغيير اللغة أثناء التشغيل

---

## 🚀 ملفات مرجعية

للاطلاع على أمثلة كاملة:

1. **Scroll Indicator:** `src/components/ui/scroll-indicator.tsx`
2. **Partners Marquee:** `src/components/ui/partners-marquee.tsx`
3. **WhatsApp Button:** `src/components/ui/whatsapp-button.tsx`
4. **Hero Section:** `src/components/sections/hero-section/HeroSection.tsx`

---

## 💡 نصائح إضافية

### 1. استخدم هذه الأنماط للتوجيه:
```tsx
// للعناصر التي تحتاج reverse في RTL
className={`flex ${isRTL ? "flex-row-reverse" : "flex-row"}`}

// للنصوص
className={`${isRTL ? "text-right font-almarai" : "text-left font-poppins"}`}

// للأيقونات الاتجاهية (أسهم)
className={`${isRTL ? "rotate-180" : ""}`}
```

### 2. للمحتوى الديناميكي:
```typescript
// أنشئ ملف content منفصل
export const content = {
    ar: { /* ... */ },
    en: { /* ... */ }
}

// استخدمه في المكون
const currentContent = content[language]
```

---

**تم التحديث:** 2025-01-12
**الإصدار:** 2.0
**الحالة:** ✅ جاهز للإنتاج
