import { useTranslation } from 'react-i18next';
import { Center } from '~/components/form';
// import Lottie from 'react-lottie';
// import animationData from '../assets/lotties/page-not-found-animation.json';

export default function ErrorPage() {
  const { t } = useTranslation();
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  return (
    // <Center isFullScreen={true}>
    <div className='flex flex-col items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-indigo-600'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          {t('error-page-not-found')}
        </h1>
        <p className='mt-6 text-base leading-7 text-gray-600'>{t('error-sorry')}</p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <a
            href='#'
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            {t('error-back-home')}
          </a>
        </div>
      </div>
      <div className='w-5 h-5 text-red-600 bg-slate-400'>test</div>
    </div>
    // </Center>
  );
}
