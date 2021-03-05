import React from 'react';
import SongDisplay from './SongDisplay';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper, PropsTableProps } from 'storybook-helpers';
import { COLORS } from 'design-system';
import { FrostyMockSong } from '../../mocks/songs/FrostyMockSong';

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'song',
    propType: 'Song',
    description: 'song',
    required: true,
  },
  {
    propName: 'currentBar',
    propType: 'number',
    description: 'current measure',
    required: true,
  },
  {
    propName: 'currentTimePosition',
    propType: 'number',
    description: 'current position in measure',
    required: true,
  },
  {
    propName: 'barHeight',
    propType: 'number',
    description: 'height',
    required: true,
  },
  {
    propName: 'barWidth',
    propType: 'number',
    description: 'width',
    required: true,
  },
];

export default {
  title: componentStoryPath('SongDisplay'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="SongDisplay"
    description="Displays the song"
    component={
      <div
        style={{
          backgroundColor: COLORS.BACKGROUND_GREY,
          padding: '7rem 2rem',
          overflow: 'scroll',
        }}
      >
        <SongDisplay
          song={FrostyMockSong}
          currentBar={2}
          currentTimePosition={13}
          barWidth={300}
          barHeight={60}
        />
      </div>
    }
    componentProps={componentProps}
  />
);
