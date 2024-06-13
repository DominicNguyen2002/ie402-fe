declare enum PolygonType {
  'Town',
  'District'
}

declare interface IPolygon {
  province: string;
  district: string;
  ENGTYPE_2: PolygonType;
  polygon: number[][][];
}
