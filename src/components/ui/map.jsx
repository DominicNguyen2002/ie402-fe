import { loadModules } from '@arcgis/core/Map.js';
import { useRef, useEffect } from 'react';

export default function XMap() {
  const mapRef = useRef(null);
  useEffect(() => {
    let view;

    const initializeMap = async () => {
      const [Map, MapView, GeoJSONLayer] = await loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/layers/GeoJSONLayer'
      ]);

      const map = new Map({
        basemap: 'topo-vector'
      });

      view = new MapView({
        container: mapRef.current,
        map: map,
        center: [0, 0], // Longitude, latitude
        zoom: 2
      });

      const geojsonUrl = './basemap/vn-3.json';

      const geojsonLayer = new GeoJSONLayer({
        url: geojsonUrl,
        popupTemplate: {
          title: '{name}', // Replace "name" with an attribute in your data
          content: '{description}' // Replace "description" with an attribute in your data
        }
      });

      map.add(geojsonLayer);
    };

    initializeMap();

    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, []);

  return (
    <div className='w-full h-[100vh]' ref={mapRef}>
      {/* <Map basemap='topo-vector'></Map> */}
    </div>
  );
}
