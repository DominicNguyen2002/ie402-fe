import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';

interface SymbolProps {
  style?: 'circle' | 'square' | 'cross' | 'x' | 'diamond' | 'triangle' | 'path' | undefined;
  color?: string;
  size?: number;
  outlineColor?: string;
  outlineWidth?: number;
}

export default function XSymbol(params: SymbolProps) {
  return new SimpleMarkerSymbol({
    style: params.style ?? 'square',
    color: params.color ?? 'blue',
    size: params.size ?? 8,
    outline: {
      color: params.outlineColor ?? [255, 255, 0],
      width: params.outlineWidth ?? 3
    }
  });
}
