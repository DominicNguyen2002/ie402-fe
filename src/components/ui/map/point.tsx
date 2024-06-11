import Point from '@arcgis/core/geometry/Point.js';
import { parsePoint } from '~/utils/point.util';

export default function XPoint(point: string) {
  const _point = parsePoint(point);
  return new Point({ longitude: _point.longitude, latitude: _point.latitude });
}
