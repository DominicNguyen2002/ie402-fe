declare interface IRegion {
  properties: {
    NAME_1: string;
    NAME_2: string;
    VARNAME_2: string;
    TYPE_2: string;
    ENGTYPE_2: string;
  };
  geometry: {
    type: 'Polygon' | 'MultiPolygon';
    coordinates: number[][][][] | number[][][];
  };
}
