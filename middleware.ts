import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const defaultLocale = 'en';
  
  // 获取当前语言设置
  const locale = request.cookies.get('NEXT_LOCALE')?.value || defaultLocale;

  // 设置语言 cookie
  const response = NextResponse.next();
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 