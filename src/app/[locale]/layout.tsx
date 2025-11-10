import type { Metadata, Viewport } from "next";
import { Inter, Almarai } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { LoadingProvider } from "@/components/ui/loading";

// استخدام Google Fonts - حل سريع وبدون مشاكل
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
  display: 'swap',
});

// إعدادات Viewport مع الألوان الجديدة
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1428A0' },
    { media: '(prefers-color-scheme: dark)', color: '#1428A0' }
  ],
  colorScheme: 'light'
}

type Props = {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
};

// Generate metadata dynamically based on locale
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: {
      default: locale === 'ar' 
        ? "معرض سيتي سكيب العالمي 2025 | Cityscape Global 2025"
        : "Cityscape Global 2025 | World Real Estate Exhibition",
      template: locale === 'ar' 
        ? "%s | معرض سيتي سكيب العالمي"
        : "%s | Cityscape Global"
    },
    description: locale === 'ar'
      ? "شريكك الاستراتيجي في الاستثمار والتطوير العقاري. نقدم حلول متكاملة لبناء مستقبل عقاري مزدهر في المملكة العربية السعودية"
      : "Your strategic partner in real estate investment and development. We provide integrated solutions for building a prosperous real estate future in Saudi Arabia",

    keywords: [
      "معرض سيتي سكيب", "سيتي سكيب العالمي", "Cityscape Global", "العقارات", "التطوير العمراني", "المعارض",
      "مطورين عقاريين", "real estate exhibition", "property development", "urban development",
      "cityscape 2025", "معرض 2025"
    ],

    authors: [{ name: "Cityscape Global Team" }],
    creator: "Cityscape Global",
    publisher: "Cityscape",

    alternates: {
      canonical: `https://cityscape-global.com/${locale}`,
      languages: {
        'ar': 'https://cityscape-global.com/ar',
        'en': 'https://cityscape-global.com/en'
      }
    },

    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      url: `https://cityscape-global.com/${locale}`,
      title: locale === 'ar'
        ? 'معرض سيتي سكيب العالمي 2025 | Cityscape Global'
        : 'Cityscape Global 2025 | World Real Estate Exhibition',
      description: locale === 'ar'
        ? 'انضم إلى معرض سيتي سكيب العالمي 2025 مع أفضل الشركات والمطورين في قطاع العقارات'
        : 'Join Cityscape Global 2025 with the best companies and developers in real estate',
      siteName: locale === 'ar' ? 'معرض سيتي سكيب العالمي' : 'Cityscape Global',
      images: [
        {
          url: 'https://cityscape-global.com/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: locale === 'ar' ? 'معرض سيتي سكيب العالمي 2025' : 'Cityscape Global 2025',
          type: 'image/jpeg',
        }
      ],
    },

    twitter: {
      card: 'summary_large_image',
      site: '@CityscapeGlobal',
      creator: '@CityscapeGlobal',
      title: locale === 'ar' 
        ? 'معرض سيتي سكيب العالمي 2025'
        : 'Cityscape Global 2025',
      description: locale === 'ar'
        ? 'انضم إلى معرض سيتي سكيب العالمي 2025'
        : 'Join Cityscape Global 2025',
      images: ['https://cityscape-global.com/images/twitter-image.jpg'],
    },

    manifest: '/manifest.json',

    icons: {
      icon: [
        { url: '/favicon.svg', sizes: '16x16', type: 'image/svg+xml' },
        { url: '/favicon.svg', sizes: '32x32', type: 'image/svg+xml' },
        { url: '/favicon.svg', sizes: '96x96', type: 'image/svg+xml' },
        { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
      ],

      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        { url: '/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
        { url: '/apple-touch-icon-60x60.png', sizes: '60x60', type: 'image/png' },
        { url: '/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
        { url: '/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
        { url: '/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
        { url: '/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
        { url: '/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
        { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      ],

      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
          sizes: '180x180',
        },
        {
          rel: 'mask-icon',
          url: '/safari-pinned-tab.svg',
          color: '#1428A0'
        }
      ]
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    referrer: 'origin-when-cross-origin',
    generator: 'Next.js',
    applicationName: locale === 'ar' ? 'معرض سيتي سكيب العالمي' : 'Cityscape Global',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    }
  };
}

export function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        <link rel="preload" href="/images/hero.png" as="image" type="image/png" />
        <link rel="preload" href="/NHC.svg" as="image" type="image/svg+xml" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={locale === 'ar' ? "سيتي سكيب 2025" : "Cityscape 2025"} />

        <meta name="msapplication-TileColor" content="#1428A0" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content={locale === 'ar' ? "سيتي سكيب 2025" : "Cityscape 2025"} />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": locale === 'ar' ? "معرض سيتي سكيب العالمي 2025" : "Cityscape Global 2025",
              "description": locale === 'ar' 
                ? "معرض سيتي سكيب العالمي للعقارات والتطوير العمراني"
                : "Cityscape Global Exhibition for Real Estate and Urban Development",
              "startDate": "2025-11-17",
              "endDate": "2025-11-23",
              "location": {
                "@type": "Place",
                "name": locale === 'ar' 
                  ? "مركز الرياض للمعارض والمؤتمرات"
                  : "Riyadh Exhibition and Convention Center",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": locale === 'ar' ? "طريق الملك عبدالله" : "King Abdullah Road",
                  "addressLocality": locale === 'ar' ? "الرياض" : "Riyadh",
                  "addressCountry": "SA"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "Cityscape Global",
                "url": "https://cityscape-global.com"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "0",
                "priceCurrency": "SAR"
              }
            })
          }}
        />
      </head>

      <body
        className={`${almarai.variable} ${inter.variable} antialiased min-h-screen ${locale === 'ar' ? 'font-arabic' : 'font-english'}`}
        suppressHydrationWarning
      >
        <LanguageProvider initialLocale={locale as 'ar' | 'en'}>
          <LoadingProvider>
            <div id="root" className="relative">
              {children}
            </div>
          </LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

