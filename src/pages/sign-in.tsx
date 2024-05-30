import { useTranslation } from 'react-i18next';

export default function SignIn() {
  const { t } = useTranslation();
  return <p>{t('start')} SignIn page</p>;
}
