import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Center } from '~/components/form';
import Button from '~/components/form/button/button';
import APP_PATH from '~/constants/app-path';

export default function SignUp() {
  const { t } = useTranslation();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const google = () => {
    window.open('http://localhost:5500/api/v1/authenticate/google', '_self');
  };

  const loginButton = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const redirectURL = searchParams.get('redirectUrL');

      if (username === '' || password === '') {
        // toast.error('Tên đăng nhập và mật khẩu không được bỏ trống');
        return;
      }
      const account: AuthenticateLogin = {
        username,
        password
      };
      console.log(account);
      // const res = await authenticateApi.login(account);
      // Cookies.set('Authorization', res.token, { expires: 7 });
      // toast.success(`Welcome ${res.name} back!!`);
      navigate(redirectURL ? redirectURL : '/');
    } catch (error) {
      // toast.error('Password or Username is not correct!');
    }
  };

  return (
    <Center className='flex-col bg-white'>
      <h1 className='w-full max-w-[500px] mx-auto text-4xl text-teal-700 font-extrabold text-center mb-3'>
        {t('app-title')}
      </h1>
      <div className='w-full flex flex-col max-w-[500px] text-center'>
        <div className='flex flex-col w-full mb-10'>
          <h3 className='mb-2 text-3xl font-semibold'>{t('sign-sign-in')}</h3>
          <p className='mb-2 text-base'>{t('sign-register')}</p>
        </div>
        <div className='flex flex-col w-full'>
          <form onSubmit={loginButton} className='flex flex-col items-center flex-1'>
            <input
              className='w-full mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black'
              type='text'
              placeholder={t('sign-phone-title')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className='w-full mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black'
              type='password'
              placeholder={t('password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='w-full mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black'
              type='password'
              placeholder={t('confirm-password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              className='w-full mt-3 pt-[15px] pb-[15px] pr-[25px] pl-[25px] hover:bg-teal-700 active:bg-teal-900 '
              variant={'primary'}
              title={t('sign-sign-up')}
            ></Button>
          </form>
        </div>
      </div>
      <div className='flex items-center justify-center w-full mt-5'>
        <p className='text-sm font-normal text-[#060606]'>
          {t('sign-have-account')}{' '}
          <span className='font-semibold underline cursor-pointer underline-offset-2 hover:text-gray-500'>
            <Link to={APP_PATH['sign-in']}>{t('sign-sign-in')}</Link>
          </span>
        </p>
      </div>
    </Center>
  );
}
