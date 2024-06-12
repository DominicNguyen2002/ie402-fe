import MapView from '@arcgis/core/views/MapView.js';
import { useEffect, useRef, useState } from 'react';
import Map from '@arcgis/core/Map';
import { Center } from '../../form';
import LoadingAnimationData from '~/assets/lotties/loading-animation.json';
import Lottie from 'react-lottie';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import XPoint from './point';
import XSymbol from './symbol';
import placeholder from '~/assets/images/placeholder.png';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol.js';

import PopupTemplate from '@arcgis/core/PopupTemplate';
import { parsePoint } from '~/utils/point.util';
import Point from '@arcgis/core/geometry/Point';
export function XMap() {
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
      center: [106.67698403739985, 10.821353493741581],
      zoom: 13
    });

    const graphicsLayer = new GraphicsLayer();

    const _point = parsePoint('[10.821353493741581,106.67698403739985]');
    const point = new Point({ longitude: _point.longitude, latitude: _point.latitude });

    const symbol = XSymbol({});
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
    <div className='relative w-full h-[700px] my-8'>
      {isLoading && (
        <Center className='absolute bg-opacity-80 z-10'>
          <Lottie options={defaultOptions} height={100} width={100} />
        </Center>
      )}
      <Center>
        <div className='w-[70%] h-full' ref={mapRef}></div>
      </Center>
    </div>
  );
}
