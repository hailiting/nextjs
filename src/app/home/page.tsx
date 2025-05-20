'use client';

import { useTranslations } from 'next-intl';
import { Header } from '@/components/ui/header';

export default function Home() {
  const t = useTranslations('common');

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-4xl font-bold">{t('language')}</h1>
      </div>
    </main>
  );
} 