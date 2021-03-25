import React from 'react';
import SongDisplay from './SongDisplay';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { FrostyMockSong } from '../../mocks/songs/FrostyMockSong';

describe('SongDisplay', () => {
  const testid = 'SongDisplay';

  it('should render the song with time sig and all bars', () => {
    render(
      <SongDisplay
        song={FrostyMockSong}
        currentBar={1}
        currentTimePosition={2}
        barHeight={60}
        barWidth={300}
      />
    );
    expect(screen.getByTestId(testid)).toBeInTheDocument();
    expect(screen.getByTestId('SongTimeSig')).toBeInTheDocument();
    FrostyMockSong.bars.forEach(bar => {
      expect(
        screen.getByTestId(`SongBar-${bar.barNumber}`)
      ).toBeInTheDocument();
    });
  });
});
