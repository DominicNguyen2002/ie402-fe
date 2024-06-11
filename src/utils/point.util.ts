export const parsePoint = (point: string): IPoint => {
  const [latitudeStr,longitudeStr] = point
    .slice(1, -1)
    .split(',')
    .map((str) => str.trim());

  const longitude = parseFloat(longitudeStr);
  const latitude = parseFloat(latitudeStr);

  return { longitude, latitude };
};
