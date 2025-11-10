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
    { media: '(prefers-color-scheme: light)', color: '#4ECDC4' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' }
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
        ? "دارك كور | شريكك الاستثماري الاستراتيجي في السعودية"
        : "Dark Core | Your Strategic Investment Partner in Saudi Arabia",
      template: locale === 'ar'
        ? "%s | دارك كور"
        : "%s | Dark Core"
    },
    description: locale === 'ar'
      ? "شركة استثمارية سعودية متخصصة في التمويل التنفيذي، إدارة المشاريع، والاستثمار في الطاقة المتجددة والتطوير العقاري والبنية التحتية الذكية. نحول الفرص الاستثمارية عالية العوائد إلى مشاريع ناجحة من خلال تمويل دقيق وإدارة مباشرة وشفافية كاملة."
      : "Saudi investment firm specializing in executive financing, project management, and investments in renewable energy, real estate development, and smart infrastructure. We transform high-return investment opportunities into successful projects through precise financing, direct management, and complete transparency.",

    keywords: [
      "دارك كور", "Dark Core", "استثمار سعودي", "Saudi investment", "التمويل التنفيذي", "executive financing",
      "إدارة المشاريع", "project management", "الطاقة المتجددة", "renewable energy", "التطوير العقاري", "real estate development",
      "الاستحواذ المرحلي", "phased acquisition", "الشراكات الاستراتيجية", "strategic partnerships", "استثمار الرياض", "Riyadh investment",
      "البنية التحتية الذكية", "smart infrastructure", "المدن الذكية", "smart cities", "الاستثمار الاستراتيجي", "strategic investment"
    ],

    authors: [{ name: "Dark Core Investment Team" }],
    creator: "Dark Core",
    publisher: "Dark Core",

    alternates: {
      canonical: `https://darkcore.sa/${locale}`,
      languages: {
        'ar': 'https://darkcore.sa/ar',
        'en': 'https://darkcore.sa/en'
      }
    },

    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      url: `https://darkcore.sa/${locale}`,
      title: locale === 'ar'
        ? 'دارك كور | شريكك الاستثماري الاستراتيجي في السعودية'
        : 'Dark Core | Your Strategic Investment Partner in Saudi Arabia',
      description: locale === 'ar'
        ? 'شركة استثمارية سعودية متخصصة في التمويل التنفيذي وإدارة المشاريع والاستثمار في الطاقة المتجددة والتطوير العقاري'
        : 'Saudi investment firm specializing in executive financing, project management, and investments in renewable energy and real estate development',
      siteName: locale === 'ar' ? 'دارك كور' : 'Dark Core',
      images: [
        {
          url: 'https://darkcore.sa/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: locale === 'ar' ? 'دارك كور - الاستثمار الاستراتيجي' : 'Dark Core - Strategic Investment',
          type: 'image/jpeg',
        }
      ],
    },

    twitter: {
      card: 'summary_large_image',
      site: '@darkcoreinv',
      creator: '@darkcoreinv',
      title: locale === 'ar'
        ? 'دارك كور | الاستثمار الاستراتيجي'
        : 'Dark Core | Strategic Investment',
      description: locale === 'ar'
        ? 'شريكك الاستثماري الاستراتيجي في السعودية'
        : 'Your Strategic Investment Partner in Saudi Arabia',
      images: ['https://darkcore.sa/images/twitter-image.jpg'],
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
          color: '#4ECDC4'
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
    applicationName: locale === 'ar' ? 'دارك كور' : 'Dark Core',
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
        <meta name="apple-mobile-web-app-title" content={locale === 'ar' ? "دارك كور" : "Dark Core"} />

        <meta name="msapplication-TileColor" content="#4ECDC4" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content={locale === 'ar' ? "دارك كور" : "Dark Core"} />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": locale === 'ar' ? "دارك كور" : "Dark Core",
              "description": locale === 'ar'
                ? "شركة استثمارية سعودية متخصصة في التمويل التنفيذي وإدارة المشاريع"
                : "Saudi investment firm specializing in executive financing and project management",
              "url": "https://darkcore.sa",
              "logo": "https://darkcore.sa/Asset 1.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966558181410",
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": ["ar", "en"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": locale === 'ar' ? "الرياض" : "Riyadh",
                "addressCountry": "SA"
              },
              "sameAs": [
                "https://www.instagram.com/darkcoreinv",
                "https://x.com/darkcoreinv"
              ]
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

