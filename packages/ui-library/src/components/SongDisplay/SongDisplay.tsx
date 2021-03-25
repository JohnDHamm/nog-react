import React from 'react';
import SongTimeSig from '../SongTimeSig/SongTimeSig';
import SongBar from '../SongBar/SongBar';
import { Container } from './SongDisplay.styles';

const testid = 'SongDisplay';

declare global {
  interface Song {
    name: string;
    tempo: number;
    timeSignature: TimeSignature;
    bars: Bar[];
    audioFileUrl: string;
  }
}

interface SongDisplayProps {
  song: Song;
  currentBar: number;
  currentTimePosition: number;
  barHeight: number;
  barWidth: number;
}

const SongDisplay: React.FC<SongDisplayProps> = ({
  song,
  currentBar,
  currentTimePosition,
  barHeight,
  barWidth,
}) => {
  const { bars, timeSignature } = song;
  const beatsPerBar = parseInt(timeSignature.split(':')[0]);

  const renderBars = (): JSX.Element[] => {
    const preparedBars: JSX.Element[] = [];
    for (let i = 1; i < bars.length + 1; i++) {
      const currentSongBar = bars.filter(bar => bar.barNumber === i);
      const isCurrentBar = currentBar === i;

      const newBar = (
        <SongBar
          key={`bar-${i}`}
          barNumber={i}
          beatsPerBar={beatsPerBar}
          notes={currentSongBar[0].notes}
          lyrics={currentSongBar[0].lyrics}
          height={barHeight}
          width={barWidth}
          isCurrentBar={isCurrentBar}
          currentTimePosition={isCurrentBar ? currentTimePosition : undefined}
        />
      );
      preparedBars.push(newBar);
    }
    return preparedBars;
  };

  const timeSigWidth = barWidth * 0.33;

  return (
    <Container
      width={bars.length * barWidth + timeSigWidth}
      data-testid={testid}
    >
      <SongTimeSig
        height={barHeight}
        width={timeSigWidth}
        timeSignature={song.timeSignature}
      />
      {renderBars()}
    </Container>
  );
};

export default SongDisplay;
