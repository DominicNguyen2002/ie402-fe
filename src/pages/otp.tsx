import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Center } from '~/components/form';
import Button from '~/components/form/button/button';

export default function OTP() {
  const { t } = useTranslation();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const verifyButton = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
    } catch (error) {}
  };

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;

    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling && element.value) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && e.currentTarget.previousSibling) {
      (e.currentTarget.previousSibling as HTMLInputElement).focus();
    }
  };

  const sendAgain = () => {
    setTimeLeft(30);
    setIsActive(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && timeLeft !== null && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isActive, timeLeft]);

  return (
    <Center isFullScreen className='flex-col bg-white'>
      <h1 className='w-full max-w-[500px] mx-auto text-4xl text-teal-700 font-extrabold text-center mb-3'>
        {t('app-title')}
      </h1>
      <div className='w-full flex flex-col max-w-[500px] text-center'>
        <div className='flex flex-col w-full mb-10'>
          <h3 className='mb-2 text-3xl font-semibold'>{t('sign-verify-otp')}</h3>
          <p className='mb-2 text-base'>{t('sign-check-otp')}</p>
        </div>
        <div className='flex flex-col w-full'>
          <form onSubmit={verifyButton} className='flex flex-col items-center flex-1'>
            <div>
              {otp.map((data, index) => (
                <input
                  className='w-[50px] h-[50px] mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 text-center mx-2'
                  type='text'
                  name='otp'
                  maxLength={1}
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target as HTMLInputElement, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
            <Button
              type='submit'
              className='w-full mt-3 pt-[15px] pb-[15px] pr-[25px] pl-[25px] hover:bg-teal-700 active:bg-teal-900 '
              variant={'primary'}
              title={t('sign-verify')}
            ></Button>
          </form>
        </div>
      </div>
      {isActive ? (
        <div className='flex items-center justify-center w-full mt-5'>
          <p className='text-sm font-normal text-[#060606]'>
            {t('sign-30s')} <span className='font-bold text-teal-900'>{timeLeft}</span> {t('common-second')}
          </p>
        </div>
      ) : (
        <div className='flex items-center justify-center w-full mt-5'>
          <p className='text-sm font-normal text-[#060606]'>
            {t('sign-dont-recieve-otp')}{' '}
            <span
              className='font-semibold underline cursor-pointer underline-offset-2 hover:text-gray-500'
              onClick={sendAgain}
            >
              {t('sign-send-again')}
            </span>
          </p>
        </div>
      )}
    </Center>
  );
}
