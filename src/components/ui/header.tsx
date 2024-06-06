import { useNavigate } from 'react-router-dom';
import { LetterIcon, MobileIcon } from '../icon';
import { useTranslation } from 'react-i18next';
import Button from '../form/button/button';
import APP_PATH from '~/constants/app-path';

export interface FormValue {
  search: string;
}

export function Header() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <header className='flex flex-col bg-teal-800'>
      <div className='flex justify-between mt-2 px-10 bg-white items-center h-[80px]'>
        <button className='cursor-pointer w-[70px] h-[70px]' onClick={() => navigate(APP_PATH.home)}>
          <img src='icon/logo.svg' alt='Logo' />
        </button>
        <div className='flex items-center gap-x-[30px]'>
          <div>
            <Button
              variant={'primary'}
              title={t('sign-sign-in')}
              className='py-3 font-bold px-9 text-heading-9 rounded-xl text-amber-100 bg-teal-800'
              onClick={()=>navigate(APP_PATH['sign-in'])}
            ></Button>
          </div>
        </div>
      </div>
      <div className='flex items-center h-[50px] text-amber-100 px-10 text-sm'>
        <div className='flex mr-3 justify-items-start'>
          <div className='mr-1'>
            <LetterIcon />
          </div>
          <p>{t('gmail')}</p>
        </div>
        <div className='flex justify-items-start'>
          <div>
            <MobileIcon />
          </div>
          <p>{t('mobile')}</p>
        </div>
      </div>
    </header>
  );
}
