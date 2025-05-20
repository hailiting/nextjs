'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/ui/header';
import { useEffect } from 'react';
import { useLoadingStore } from '@/store/loading';

export default function Home() {
  const t = useTranslations('common');
  const setLoading = useLoadingStore((state) => state.setLoading);

  useEffect(() => {
    // 页面加载完成后，设置 loading 为 false
    setLoading(false);
  }, [setLoading]);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-4xl font-bold">{t('language')}</h1>
      </div>
    </main>
  );
} 