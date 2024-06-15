import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Center } from '~/components/form';
import Button from '~/components/form/button/button';
import APP_PATH from '~/constants/app-path';

export default function ChangePassword() {
  const { t } = useTranslation();
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const navigate = useNavigate();

  const forgotBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (password === '' || newPassword === '' || passwordConfirm === '') {
        toast.error(t('field-not-empty'));
        return;
      }
      if (newPassword !== passwordConfirm) {
        toast.error(t('password-not-match'));
        return;
      }
      const account: IUserSign = {
        phone: phone,
        password: newPassword
      };
      toast.success(t('change-password-succes'));
      setTimeout(() => {
        navigate(APP_PATH.home);
      }, 4000);
    } catch (error) {
      toast.error(t('change-password-failed'));
    }
  };

  return (
    <Center className='flex-col bg-white'>
      <Toaster />
      <div className='w-full flex flex-col max-w-[500px] text-center'>
        <div className='flex flex-col w-full mb-10'>
          <h3 className='mb-2 text-3xl font-semibold'>{t('change-password')}</h3>
        </div>
        <div className='flex flex-col w-full'>
          <form onSubmit={forgotBtn} className='flex flex-col items-center flex-1'>
            <input
              className='w-full mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black'
              type='text'
              placeholder={t('old-password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='w-full mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black'
              type='text'
              placeholder={t('new-password')}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              className='w-full mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black'
              type='text'
              placeholder={t('confirm-password')}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />

            <Button
              type='submit'
              className='w-full mt-3 pt-[15px] pb-[15px] pr-[25px] pl-[25px] hover:bg-teal-700 active:bg-teal-900 '
              variant={'primary'}
              title={t('change')}
            ></Button>
          </form>
        </div>
      </div>
    </Center>
  );
}
