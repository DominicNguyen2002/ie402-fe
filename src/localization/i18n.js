import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      start: 'Start',
      'page-not-found': 'OPPS..., PAGE NOT FOUND!'
    }
  },
  vi: {
    translation: {
      start: 'Bắt đầu',
      'page-not-found': 'OPPS..., KHÔNG TÌM THẤY TRANG!'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
