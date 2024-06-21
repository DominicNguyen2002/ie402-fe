import Button from '~/components/form/button/button';
import { TextCustomUnderline } from './text-custom-underline';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import APP_PATH from '~/constants/app-path';

export function Banner() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center px-[75px] gap-x-28 bg-scarlet'>
      <div className='flex flex-col justify-center'>
        <p className='capitalize text-body-1'>{t('disease')}</p>
        <h3 className='text-heading-3 mt-5 leading-[60px] mb-[30px] font-bold'>
          {t('follow')}
          <TextCustomUnderline text={t('disease-situation')} />
          {t('currently')}
        </h3>
        <Button
          title={t('see-statistics')}
          variant='secondary'
          className='px-[60px] w-fit py-5 capitalize text-heading-6'
          onClick={()=>{
            navigate(APP_PATH.map)
          }}
        />
      </div>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 0 600 600'
          opacity='1'
          width={450}
          height={450}
        >
          <defs>
            <clipPath id='shape'>
              <path
                d='M294.61077880859375,107.78443145751953C259.7305374145508,117.36526997884114,226.49700673421225,132.93413416544595,207.4850311279297,164.3712615966797C188.47305552164713,195.80838902791342,167.96407318115234,259.88025156656903,180.53892517089844,296.4071960449219C193.11377716064453,332.9341405232747,240.26947275797525,380.53892008463544,282.93414306640625,383.5329284667969C325.5988133748372,386.5269368489583,416.9161682128906,343.4131622314453,436.5269470214844,314.3712463378906C456.1377258300781,285.32933044433594,403.89222717285156,243.86226908365884,400.59881591796875,209.28143310546875C397.30540466308594,174.70059712727866,434.43115234375,123.80239741007487,416.7664794921875,106.88623046875C399.101806640625,89.97006352742513,329.4910202026367,98.20359293619792,294.61077880859375,107.78443145751953C259.7305374145508,117.36526997884114,226.49700673421225,132.93413416544595,207.4850311279297,164.3712615966797'
                fill='hsl(340, 45%, 50%)'
                transform='matrix(1.782421047822822,0,0,1.782421047822822,-250.40259540839082,-128.49267633581894)'
                strokeWidth='0'
                stroke='hsl(340, 45%, 30%)'
                fillOpacity='0.05'
              ></path>
            </clipPath>
          </defs>
          <path
            d='M271.93422336600804 110.30404665787057C237.05398197196507 119.88488517919218 203.82045129162654 135.453749365797 184.80847568534398 166.89087679703073C165.79650007906142 198.32800422826446 145.28751773856663 262.39986676692007 157.86236972831273 298.9268112452729C170.43722171805882 335.45375572362576 217.59291731538954 383.0585352849865 260.25758762382054 386.0525436671479C302.9222579322515 389.04655204930935 394.2396127703049 345.93277743179635 413.85039157889867 316.89086153824167C433.4611703874924 287.848945644687 381.21567173026585 246.38188428400989 377.92226047538304 211.8010483058198C374.62884922050023 177.2202123276297 411.7545969011643 126.32201261042592 394.0899240496018 109.40584566910104C376.4252511980393 92.48967872777617 306.814464760051 100.72320813654896 271.93422336600804 110.30404665787057C237.05398197196507 119.88488517919218 203.82045129162654 135.453749365797 184.80847568534398 166.89087679703073 '
            fillOpacity='0.8'
            fill='hsl(170, 42%, 26%)'
            opacity='1'
            strokeOpacity='1'
            strokeWidth='0'
            stroke='hsl(170, 42%, 26%)'
            transform='matrix(1.7824210478228228,-2.220446049250313e-16,2.220446049250313e-16,1.7824210478228228,-166.6076582746016,-113.09343011999908)'
          ></path>
          <image xlinkHref='/disease.png' clipPath='url(#shape)' />
        </svg>
      </div>
    </div>
  );
}
