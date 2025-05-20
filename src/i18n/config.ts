import {getRequestConfig} from 'next-intl/server';
import type {Locale, Messages} from './types';

export default getRequestConfig(async ({locale}: {locale: Locale}) => {
  const navigation = (await import(`./locales/${locale}/navigation.json`)).default;
  const hero = (await import(`./locales/${locale}/hero.json`)).default;
  const common = (await import(`./locales/${locale}/common.json`)).default;

  return {
    messages: {
      navigation,
      hero,
      common
    } as Messages
  };
}); 