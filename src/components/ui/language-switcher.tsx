'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    // 设置语言 cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    // 刷新页面以应用新的语言设置
    window.location.reload();
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => switchLocale(locale === 'en' ? 'zh' : 'en')}
        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <Globe className="h-4 w-4" />
        {locale === 'en' ? '中文' : 'English'}
      </button>
    </div>
  );
} 