export interface LightPositionInterface {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const getSnowflakeLightLocations = (
  lightOffset: number
): Array<LightPositionInterface> => {
  return [
    { top: '36%', left: `calc(50.1% - ${lightOffset}px)` },
    { top: '13%', left: '36.6%' },
    { top: '1.7%', left: `calc(50.1% - ${lightOffset}px)` },
    { top: '13%', right: '36.6%' },
    { top: '25.3%', right: '32.8%' },
    { top: '41.5%', right: '36.0%' },
    { top: '21.9%', right: '18.6%' },
    { top: '24.4%', right: '2%' },
    { top: '38.2%', right: '7.8%' },
    { top: `calc(49.5% - ${lightOffset}px)`, right: '18.1%' },
    { bottom: '42.5%', right: '36%' },
    { bottom: '39.2%', right: '7.8%' },
    { bottom: '25.4%', right: '2%' },
    { bottom: '22.9%', right: '18.6%' },
    { bottom: '26.3%', right: '32.8%' },
    { bottom: '36.4%', left: `calc(50.1% - ${lightOffset}px)` },
    { bottom: '14%', right: '36.6%' },
    { bottom: '2.7%', left: `calc(50.1% - ${lightOffset}px)` },
    { bottom: '14%', left: '36.6%' },
    { bottom: '26.3%', left: '32.8%' },
    { bottom: '42.5%', left: '36%' },
    { bottom: '22.9%', left: '18.6%' },
    { bottom: '25.4%', left: '2%' },
    { bottom: '39.2%', left: '7.8%' },
    { bottom: `calc(50.7% - ${lightOffset}px)`, left: '18.1%' },
    { top: '41.5%', left: '36%' },
    { top: '38.2%', left: '7.8%' },
    { top: '24.4%', left: '2%' },
    { top: '21.9%', left: '18.6%' },
    { top: '25.3%', left: '32.8%' }
  ];
};
