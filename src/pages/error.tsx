import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Center } from '~/components/form';
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/page-not-found-animation.json';

export default function ErrorPage() {
  const { t } = useTranslation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Center isFullScreen>
      <div className=' bg-white'>
        <div className='text-center'>
          <Lottie options={defaultOptions} height={300} width={300} />
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            {t('error-page-not-found')}
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>{t('error-sorry')}</p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              onClick={handleClick}
              className='rounded-md bg-teal-900 hover:bg-teal-700 active:bg-teal-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
            >
              {t('error-back-home')}
            </a>
          </div>
        </div>
      </div>
    </Center>
  );
}
