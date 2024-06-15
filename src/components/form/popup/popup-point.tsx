import { useTranslation } from 'react-i18next';
import { Center } from '../center';
import { useState } from 'react';

interface PopupPointProps {
  userDisease: IUserDisease;
}

export function PopupPoint(params: PopupPointProps) {
  const { t } = useTranslation();
  const [stateOptions] = useState([t('passed-away-sickness'), t('recovered'), t('being-sick')]);
  return (
    <Center className='w-[10%] h-[15%] rounded-md border-2 border-teal-700'>
      <h1>{params.userDisease.name}</h1>
      <div>
        <p>
          <span className='font-bold w-1/4'>{t('state')}</span>
          {stateOptions[params.userDisease.state + 1]}
        </p>
        <p>
          <span className='font-bold w-1/4'>{t('time')}</span>
          {params.userDisease.time.toString()}
        </p>
      </div>
    </Center>
  );
}
