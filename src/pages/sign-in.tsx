import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Center } from '~/components/form';
import Button from '~/components/form/button/button';
import { useState } from 'react';
import APP_PATH from '~/constants/app-path';
import toast, { Toaster } from 'react-hot-toast';

export default function SignIn() {
  const { t } = useTranslation();
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const google = () => {};

  const signInBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const redirectURL = searchParams.get('redirectUrL');
      if (phone === '' || password === '') {
        toast.error(t('phone-password-not-empty'));
        return;
      }
      const account: IUserSign = {
        phone,
        password
      };
      toast.success(t('sign-in-success'));
      setTimeout(() => {
        navigate(redirectURL ? redirectURL : APP_PATH.home);
      }, 4000);
    } catch (error) {
      toast.error(t('phone-password-incorrect'));
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
          <h3 className='mb-2 text-3xl font-semibold'>{t('sign-sign-in')}</h3>
          <p className='mb-2 text-base'>{t('welcome-back')}</p>
        </div>
        <div className='flex flex-col w-full'>
          <form onSubmit={signInBtn} className='flex flex-col items-center flex-1'>
            <input
              className='w-full mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black'
              type='text'
              placeholder={t('sign-phone-title')}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className='w-full mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black'
              type='password'
              placeholder={t('password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='flex items-center justify-end w-full'>
              <p className='text-sm font-medium underline cursor-pointer whitespace-nowrap underline-offset-2 hover:text-gray-500'>
                <Link to={APP_PATH['forgot-password']}>{t('forgot-password')}</Link>
              </p>
            </div>
            <Button
              type='submit'
              className='w-full mt-3 pt-[15px] pb-[15px] pr-[25px] pl-[25px] hover:bg-teal-700 active:bg-teal-900 '
              variant={'primary'}
              title={t('sign-sign-in')}
            ></Button>
          </form>
        </div>
        <div className='relative flex items-center justify-center w-full py-5'>
          <div className='w-full h-[1px] bg-gray-300'></div>
          <p className='absolute text-md text-black/80 bg-[#f5f5f5]'>{t('common-or')}</p>
        </div>
        <div
          className='w-full text-[#060606] my-2 font-semibold border-2 border-black p-4 text-center flex items-center justify-center cursor-pointer'
          onClick={google}
        >
          {t('sign-sign-in-otp')}
        </div>
      </div>
      <div className='flex items-center justify-center w-full mt-1'>
        <p className='text-sm font-normal text-[#060606]'>
          {t('sign-dont-have-account')}{' '}
          <span className='font-semibold underline cursor-pointer underline-offset-2 hover:text-gray-500'>
            <Link to={APP_PATH['sign-up']}>{t('sign-sign-up')}</Link>
          </span>
        </p>
      </div>
    </Center>
  );
}
