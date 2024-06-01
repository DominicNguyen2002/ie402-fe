import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import APP_PATH from '~/constants/app-path';

export function Footer() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <footer className='flex flex-col bg-white min-w-[800px]'>
      <div className='flex p-10 gap-x-24'>
        <div>
          <div className='mb-5 flex justify-center items-center'>
            <button className='cursor-pointer w-[70px] h-[70px]' onClick={() => navigate(APP_PATH.home)}>
              <img src='/icon/logo.svg' alt='Logo' />
            </button>
          </div>
          <p className='mb-[30px] text-justify'>{t('intro')}</p>
          <div className='flex gap-x-5'></div>
        </div>

        <div>
          <h5 className='text-heading-7 leading-[35px] font-semibold mb-5'>{t('footer-info')}</h5>
          <ul className='space-y-5 text-heading-9 whitespace-nowrap'>
            <li className='cursor-pointer' onClick={() => navigate(APP_PATH['customer-sevice'])}>
              {t('footer-customer-sevice')}
            </li>
            <li className='cursor-pointer' onClick={() => navigate(APP_PATH['faq'])}>
              {t('footer-faq')}
            </li>
          </ul>
        </div>

        <div className='shrink-0'>
          <h5 className='text-heading-7 leading-[35px] font-semibold mb-5'>{t('footer-follow-us')}</h5>

          <div className='grid grid-cols-3 gap-x-[15px] gap-y-5'>
            <img src='src/assets/images/footer6.png' alt='6' className='h-[105px] aspect-square' />
            <img src='src/assets/images/footer5.png' alt='5' className='h-[105px] aspect-square' />
            <img src='src/assets/images/footer4.png' alt='4' className='h-[105px] aspect-square' />
            <img src='src/assets/images/footer3.png' alt='3' className='h-[105px] aspect-square' />
            <img src='src/assets/images/footer2.png' alt='2' className='h-[105px] aspect-square' />
            <img src='src/assets/images/footer1.png' alt='1' className='h-[105px] aspect-square' />
          </div>
        </div>
      </div>
      <div className='flex justify-between p-10'>
        <p className=''>{t('footer-copyright')}</p>
        <div className='flex justify-between'>
          <p className='mr-5 cursor-pointer' onClick={() => navigate(APP_PATH['terms-condition'])}>
            {t('footer-terms-condition')}
          </p>
          <p className='cursor-pointer' onClick={() => navigate(APP_PATH['privacy-policy'])}>
            {t('footer-privacy-policy')}
          </p>
        </div>
      </div>
    </footer>
  );
}
