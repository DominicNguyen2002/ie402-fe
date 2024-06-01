import MapView from '@arcgis/core/views/MapView.js';
import { useEffect, useRef, useState } from 'react';
import Map from '@arcgis/core/Map.js';
import { Center } from '../form';
import LoadingAnimationData from '~/assets/lotties/loading-animation.json';
import Lottie from 'react-lottie';

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
      basemap: 'osm'
    });
    const view = new MapView({
      map: map,
      container: mapRef.current,
      center: [10.869976637899775, 106.80308512856752],
      zoom: 12
    });

    view
      .when(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('MapView rejected:', err);
      });

    return () => view && view.destroy();
  }, []);

  return (
    <div className='relative w-full h-[500px]'>
      {isLoading && (
        <Center isFullScreen={false} className='absolute bg-opacity-80 z-10'>
          <Lottie options={defaultOptions} height={100} width={100} />
        </Center>
      )}
      <div className='w-full h-full' ref={mapRef}></div>
    </div>
  );
}
