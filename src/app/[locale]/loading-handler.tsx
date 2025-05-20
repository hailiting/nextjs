'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function LoadingHandler() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // 只在初始加载时显示加载动画
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 显示1秒后消失

    return () => clearTimeout(timer);
  }, []); // 只在组件挂载时执行一次

  if (!isLoading) return null;

  return (
    <div id="loading" className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
} 