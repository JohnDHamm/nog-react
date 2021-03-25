import React from 'react';
import { TimeNumberBottom, TimeNumberTop } from './SongTimeSig.styles';
import SongStaff from '../SongStaff/SongStaff';
import SongGClef from '../SongGClef/SongGClef';
import { subTestIdInit } from 'function-library';

const testid = 'SongTimeSig';
const subTestid = subTestIdInit(testid);

declare global {
  type TimeSignature = '3:4' | '4:4';
}

interface SongTimeSigProps {
  height: number;
  width: number;
  timeSignature: TimeSignature;
}

const SongTimeSig: React.FC<SongTimeSigProps> = ({
  height,
  width,
  timeSignature,
}) => {
  const topTime = timeSignature.split(':')[0];
  const bottomTime = timeSignature.split(':')[1];

  return (
    <div
      style={{
        position: 'relative',
        width: width,
      }}
      data-testid={'SongTimeSig'}
    >
      <SongStaff height={height} width={width} />
      <div
        style={{
          position: 'absolute',
          width: height * 0.67,
          left: 10,
          top: -(height * 0.35),
        }}
      >
        <SongGClef />
      </div>
      <TimeNumberTop height={height} data-testid={subTestid('TimeNumberTop')}>
        {topTime}
      </TimeNumberTop>
      <TimeNumberBottom
        height={height}
        data-testid={subTestid('TimeNumberBottom')}
      >
        {bottomTime}
      </TimeNumberBottom>
    </div>
  );
};

export default SongTimeSig;
