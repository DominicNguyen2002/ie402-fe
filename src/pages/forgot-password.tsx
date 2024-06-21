import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Center } from '~/components/form';
import Button from '~/components/form/button/button';
import APP_PATH from '~/constants/app-path';

export default function ForgotPassword() {
  const { t } = useTranslation();
  const [phone, setPhone] = useState<string>('');
  const navigate = useNavigate();

  const forgotBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      navigate(APP_PATH.otp);
    } catch (error) {
      toast.error(t('action-failed'));
    }
  };

  return (
    <Center isFullScreen className='flex-col bg-white'>
      <Toaster />
      <h1 className='w-full max-w-[500px] mx-auto text-4xl text-teal-700 font-extrabold text-center mb-3'>
        {t('app-title')}
      </h1>
      <div className='w-full flex flex-col max-w-[500px] text-center'>
        <div className='flex flex-col w-full mb-10'>
          <h3 className='mb-2 text-3xl font-semibold'>{t('get-new-password')}</h3>
          <p className='mb-2 text-base'>{t('get-new-password-des')}</p>
        </div>
        <div className='flex flex-col w-full'>
          <form onSubmit={forgotBtn} className='flex flex-col items-center flex-1'>
            <input
              className='w-full mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black'
              type='text'
              placeholder={t('sign-phone-title')}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <Button
              type='submit'
              className='w-full mt-3 pt-[15px] pb-[15px] pr-[25px] pl-[25px] hover:bg-teal-700 active:bg-teal-900 '
              variant={'primary'}
              title={t('confirm-via-otp')}
            ></Button>
          </form>
        </div>
      </div>
    </Center>
  );
}
