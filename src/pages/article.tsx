import { useTranslation } from 'react-i18next';

export default function Article() {
  const { t } = useTranslation();
  return <p>{t('start')} Artical page</p>;
}
