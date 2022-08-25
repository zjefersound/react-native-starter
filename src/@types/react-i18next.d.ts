import 'react-i18next';
import en from '@locales/en.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1';
    resources: {
      en: typeof en.translation;
    };
  };
};