import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import APP_PATH from '~/constants/app-path';
import { Center } from '../form';
import Lottie from 'react-lottie';
import { useEffect, useRef, useState } from 'react';
import LoadingAnimationData from '~/assets/lotties/loading-animation.json';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import placeholder from '~/assets/images/placeholder.png';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol.js';
import Point from '@arcgis/core/geometry/Point';
import { parsePoint } from '~/utils/point.util';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import PopupTemplate from '@arcgis/core/PopupTemplate';

export function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const mapRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    if (!mapRef?.current) return;
    const map = new Map({
      basemap: 'streets'
    });
    const view = new MapView({
      map: map,
      container: mapRef.current,
      center: [106.67698403739985, 10.821353493741581],
      zoom: 13,
      ui: {
        components: ['attribution']
      },
      constraints: {
        minZoom: 13,
        maxZoom: 13
      }
    });

    const graphicsLayer = new GraphicsLayer();

    const _point = parsePoint('[10.821353493741581,106.67698403739985]');
    const point = new Point({ longitude: _point.longitude, latitude: _point.latitude });

    const pointSymbol = new PictureMarkerSymbol({
      url: placeholder,
      width: '64px',
      height: '64px'
    });
    const name = t('app-title');
    const address = t('app-address');
    const pointAttributes = {
      Name: name,
      Address: address
    };

    const popupTemplate = new PopupTemplate({
      title: '{Name}',
      content: '{Address}'
    });

    const graphicPoint = new Graphic({
      geometry: point,
      symbol: pointSymbol,
      attributes: pointAttributes,
      popupTemplate: popupTemplate
    });

    graphicsLayer.add(graphicPoint);
    view.map.add(graphicsLayer);
    view
      .when(() => {
        const popups = document.querySelectorAll('.esri-popup');
        popups.forEach((popup) => {
          (popup as HTMLElement).style.zIndex = '0'; // Đặt z-index của popup cao hơn
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('MapView rejected:', err);
      });

    return () => view && view.destroy();
  }, []);

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
          <div className='border-spacing-1'>
            <div className='relative w-[400px] h-[300px]'>
              {isLoading && (
                <Center className='absolute bg-opacity-80 z-10'>
                  <Lottie options={defaultOptions} height={100} width={100} />
                </Center>
              )}
              <Center>
                <div className='w-[90%] h-full' ref={mapRef}></div>
              </Center>
            </div>
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
