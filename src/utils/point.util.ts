import Point from '@arcgis/core/geometry/Point';

export const parsePoint = (point: IPoint): Point => new Point({ longitude: point.longitude, latitude: point.latitude });

export const parsePoint2Map = (point: IPoint): number[] => [point.longitude, point.latitude];
