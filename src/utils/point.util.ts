import Point from '@arcgis/core/geometry/Point';

export const parsePoint = (point: GeolocationPosition): Point => {
  const longitude = point.coords.longitude;
  const latitude = point.coords.latitude;

  return new Point({ longitude: longitude, latitude: latitude });
};

export const parsePoint2Map = (point: GeolocationPosition): number[] => {
  const longitude = point.coords.longitude;
  const latitude = point.coords.latitude;

  return [longitude, latitude];
};
