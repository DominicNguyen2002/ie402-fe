import { useTranslation } from 'react-i18next';
import { XMap } from '~/components/ui';

export default function Map() {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t('start')} Map page</p>
      <XMap/>
    </div>
  );
}
