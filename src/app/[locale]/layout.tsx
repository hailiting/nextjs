import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import "../globals.css";
import "./loading.css";
import { LoadingHandler } from './loading-handler';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  // 可选：预加载特定字重
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Your company description",
};

async function getMessages(locale: string) {
  try {
    const navigation = (await import(`@/i18n/locales/${locale}/navigation.json`)).default;
    const hero = (await import(`@/i18n/locales/${locale}/hero.json`)).default;
    const common = (await import(`@/i18n/locales/${locale}/common.json`)).default;

    return {
      navigation,
      hero,
      common
    };
  } catch (error) {
    console.error('Error loading messages:', error);
    notFound();
  }
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <LoadingHandler />
        <NextIntlClientProvider messages={messages}>
          <main className="min-h-screen bg-background">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 