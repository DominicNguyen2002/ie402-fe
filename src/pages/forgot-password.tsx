import { useTranslation } from 'react-i18next';

export default function ForgotPassword() {
  const { t } = useTranslation();
  return <p>{t('start')} Forgot password page</p>;
}
