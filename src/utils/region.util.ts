import * as turf from '@turf/turf';
import regionsData from '~/assets/data/vn.v3.json';

const regions: IRegion[] = regionsData as IRegion[];

export const findRegion = (point: IPoint): string | null => {
  const turfPoint = turf.point([point.longitude, point.latitude]);
  for (const region of regions) {
    const { type, coordinates } = region.geometry;

    if (type === 'Polygon') {
      const polygon = turf.polygon(coordinates as number[][][]);
      if (turf.booleanPointInPolygon(turfPoint, polygon)) {
        return region.properties.NAME_2;
      }
    } else if (type === 'MultiPolygon') {
      const multiPolygon = coordinates as number[][][][];
      for (const coords of multiPolygon) {
        const polygon = turf.polygon(coords);
        if (turf.booleanPointInPolygon(turfPoint, polygon)) {
          return region.properties.NAME_2;
        }
      }
    }
  }
  return null;
};
