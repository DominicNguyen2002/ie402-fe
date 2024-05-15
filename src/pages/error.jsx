import { useTranslation } from 'react-i18next';
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

  return (
    <div className='relative w-full h-screen'>
      <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[240px] text-light-gray'>
        404
      </span>
      <div className='absolute text-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 whitespace-nowrap'>
        <h3 className='text-heading-3'>{t('page-not-found')}</h3>
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </div>
  );
}
