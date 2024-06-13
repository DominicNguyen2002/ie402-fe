export const convertProvince = (provinceName: string, polygonType: PolygonType) => {
  const formattedName = provinceName.replace(/([a-z])([A-Z])/g, '$1 $2');
  if (polygonType == PolygonType.Town) return `Tỉnh ${formattedName}`;
  return `Thành phố ${formattedName}`;
};

export const convertDistrict = (districtName: string, polygonType: PolygonType) => {
  const formattedName = districtName.replace(/([a-z])([A-Z])/g, '$1 $2');
  if (polygonType == PolygonType.Town) return `Huyện ${formattedName}`;
  return `Quận ${formattedName}`;
};
