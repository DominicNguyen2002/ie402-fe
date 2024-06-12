import MapView from '@arcgis/core/views/MapView.js';
import { useEffect, useRef, useState } from 'react';
import Map from '@arcgis/core/Map';
import { Center } from '../../form';
import LoadingAnimationData from '~/assets/lotties/loading-animation.json';
import Lottie from 'react-lottie';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import placeholder from '~/assets/images/placeholder.png';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol.js';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import clsx from 'clsx';
import { parsePoint, parsePoint2Map } from '~/utils/point.util';

interface MapProps {
  className?: string;
  center: GeolocationPosition;
}
export function XMap({ className, center }: MapProps) {
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
      basemap: 'hybrid'
    });

    const view = new MapView({
      map: map,
      container: mapRef.current,
      center: parsePoint2Map(center),
      zoom: 13
    });

    const graphicsLayer = new GraphicsLayer();

    const pointSymbol = new PictureMarkerSymbol({
      url: placeholder,
      width: '64px',
      height: '64px',
      yoffset: '12px'
    });
    const pointAttributes = {
      Name: 'My Point',
      Description: 'This is a point on the map'
    };

    const popupTemplate = new PopupTemplate({
      title: '{Name}',
      content: '{Description}'
    });

    const graphicPoint = new Graphic({
      geometry: parsePoint(center),
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
    <div className={clsx('relative', className)}>
      {isLoading && (
        <Center className='absolute bg-opacity-80 z-10'>
          <Lottie options={defaultOptions} height={100} width={100} />
        </Center>
      )}
      <Center>
        <div className='w-full h-full' ref={mapRef}></div>
      </Center>
    </div>
  );
}
