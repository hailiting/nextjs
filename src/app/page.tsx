import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default function RootPage() {
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // 检测浏览器语言
  const preferredLocale = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim())
    .find(lang => ['en', 'zh'].includes(lang)) || 'en';

  // 重定向到对应的语言路由
  redirect(`/${preferredLocale}`);
} 