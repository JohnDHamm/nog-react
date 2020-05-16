export interface LightPosition {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}
export const snowflakeLightLocations = (
  lightOffset: number
): Array<LightPosition> => {
  return [
    { top: '36%', left: `calc(50% - ${lightOffset}px)` },
    { top: '13%', left: '38.2%' },
    { top: '1.7%', left: `calc(50% - ${lightOffset}px)` },
    { top: '13%', right: '38%' },
    { top: '25.3%', right: '34.6%' },
    { top: '41.7%', right: '37.4%' },
    { top: '22.1%', right: '22.6%' },
    { top: '24.55%', right: '7.65%' },
    { top: '38.6%', right: '13%' },
    { top: `calc(50% - ${lightOffset}px)`, right: '22.05%' },
    { bottom: '41.7%', right: '37.4%' },
    { bottom: '38.6%', right: '13%' },
    { bottom: '24.62%', right: '7.65%' },
    { bottom: '22.1%', right: '22.6%' },
    { bottom: '25.3%', right: '34.6%' },
    { bottom: '36%', left: `calc(50% - ${lightOffset}px)` },
    { bottom: '13%', right: '38%' },
    { bottom: '1.7%', left: `calc(50% - ${lightOffset}px)` },
    { bottom: '13%', left: '38%' },
    { bottom: '25.3%', left: '34.8%' },
    { bottom: '41.7%', left: '37.4%' },
    { bottom: '22.1%', left: '22.6%' },
    { bottom: '24.62%', left: '7.65%' },
    { bottom: '38.6%', left: '13%' },
    { bottom: `calc(50% - ${lightOffset}px)`, left: '22.05%' },
    { top: '41.7%', left: '37.4%' },
    { top: '38.6%', left: '13%' },
    { top: '24.62%', left: '7.65%' },
    { top: '22.1%', left: '22.6%' },
    { top: '25.3%', left: '34.8%' }
  ];
};
