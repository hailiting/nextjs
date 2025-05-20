import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  if (!locale) {
    console.error('Locale is undefined');
    locale = 'en'; // Fallback to English
  }

  try {
    const navigation = (await import(`./locales/${locale}/navigation.json`)).default;
    const hero = (await import(`./locales/${locale}/hero.json`)).default;
    const common = (await import(`./locales/${locale}/common.json`)).default;

    return {
      locale: locale as string,
      messages: {
        navigation,
        hero,
        common
      }
    };
  } catch (error) {
    console.error('Error loading locale files:', error);
    // Fallback to English if there's an error
    const navigation = (await import(`./locales/en/navigation.json`)).default;
    const hero = (await import(`./locales/en/hero.json`)).default;
    const common = (await import(`./locales/en/common.json`)).default;

    return {
      locale: 'en',
      messages: {
        navigation,
        hero,
        common
      }
    };
  }
}); 