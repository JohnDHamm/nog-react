import React from 'react';
import { TimeNumberBottom, TimeNumberTop } from './SongTimeSig.styles';
import SongStaff from '../SongStaff/SongStaff';
import SongGClef from '../SongGClef/SongGClef';

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
  console.log('timeSignature', timeSignature);
  const topTime = timeSignature.split(':')[0];
  const bottomTime = timeSignature.split(':')[1];

  return (
    <div
      style={{
        position: 'relative',
        width: width,
      }}
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
      <TimeNumberTop height={height}>{topTime}</TimeNumberTop>
      <TimeNumberBottom height={height}>{bottomTime}</TimeNumberBottom>
    </div>
  );
};

export default SongTimeSig;
