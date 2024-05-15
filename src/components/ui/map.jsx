import Map from '@arcgis/core/Map.js';

export default function XMap() {
  return (
    <div className='w-80 h-80'>
      <Map basemap='topo-vector'></Map>
    </div>
  );
}
