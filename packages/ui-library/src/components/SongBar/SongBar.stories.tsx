import React from 'react';
import SongBar from './SongBar';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper, PropsTableProps } from 'storybook-helpers';
import { COLORS } from 'design-system';

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'barNumber',
    propType: 'number',
    description: 'number of bar',
    required: true,
  },
  {
    propName: 'height',
    propType: 'number',
    description: 'height of bar (staff)',
    required: true,
  },
  {
    propName: 'width',
    propType: 'number',
    description: 'width of bar (staff)',
    required: true,
  },
  {
    propName: 'beatsPerBar',
    propType: 'number',
    description: 'top number of time signature - default=4',
    required: false,
  },
  {
    propName: 'notes',
    propType: 'Note[]',
    description: 'notes for this bar',
    required: true,
  },
  {
    propName: 'lyrics',
    propType: 'Lyric[]',
    description: 'lyrics for this bar',
    required: true,
  },
  {
    propName: 'isCurrentBar',
    propType: 'boolean',
    description: 'is this the current bar?',
    required: true,
  },
  {
    propName: 'currentTimePosition',
    propType: 'number',
    description: 'used to highlight current note/lyric',
    required: false,
  },
];
export default {
  title: componentStoryPath('SongBar'),
};

const mockNotes: Note[] = [
  {
    timePosition: 1,
    length: 'quarter',
    scalePosition: 1,
    type: 'note',
  },
  {
    timePosition: 3,
    length: 'eighth-dotted',
    scalePosition: 2,
    type: 'note',
  },
  {
    timePosition: 5,
    length: 'sixteenth',
    scalePosition: 3,
    type: 'note',
  },
  {
    timePosition: 9,
    length: 'quarter',
    scalePosition: 4,
    type: 'note',
    noteKey: 'sharp',
  },
  {
    timePosition: 11,
    length: 'quarter-dotted',
    scalePosition: 1,
    type: 'rest',
  },
  {
    timePosition: 13,
    length: 'quarter',
    scalePosition: 13,
    type: 'note',
    noteKey: 'flat',
  },
  {
    timePosition: 15,
    length: 'eighth',
    scalePosition: 14,
    type: 'note',
  },
];

const mockLyrics: Lyric[] = [
  {
    timePosition: 1,
    text: 'Hark!',
  },
  {
    timePosition: 5,
    text: 'The',
  },
  {
    timePosition: 9,
    text: 'her',
  },
  {
    timePosition: 10,
    text: '-',
  },
  {
    timePosition: 11,
    text: 'ald',
  },
];

const frostyNotes: Note[] = [
  {
    timePosition: 1,
    length: 'half',
    scalePosition: 5,
    type: 'note',
  },
  {
    timePosition: 9,
    length: 'quarter-dotted',
    scalePosition: 3,
    type: 'note',
  },
  {
    timePosition: 15,
    length: 'eighth',
    scalePosition: 4,
    type: 'note',
  },
];

const frostyLyrics: Lyric[] = [
  {
    timePosition: 1,
    text: 'Frost',
  },
  {
    timePosition: 5,
    text: '-',
  },
  {
    timePosition: 9,
    text: 'y',
  },
  {
    timePosition: 15,
    text: 'the',
  },
];

export const Default = () => (
  <ComponentStoryWrapper
    name="SongBar"
    description="A musical bar with notes"
    component={
      <div
        style={{
          backgroundColor: COLORS.BACKGROUND_GREY,
          padding: '7rem 1rem',
        }}
      >
        <SongBar
          barNumber={42}
          notes={mockNotes}
          lyrics={mockLyrics}
          height={80}
          width={400}
          isCurrentBar={false}
        />
      </div>
    }
    componentProps={componentProps}
  />
);
export const CurrentBar = () => (
  <ComponentStoryWrapper
    name="SongBar"
    description="A musical bar with notes"
    component={
      <div
        style={{
          backgroundColor: COLORS.BACKGROUND_GREY,
          padding: '7rem 1rem',
        }}
      >
        <SongBar
          barNumber={1}
          notes={frostyNotes}
          lyrics={frostyLyrics}
          height={60}
          width={300}
          isCurrentBar={true}
          currentTimePosition={9}
        />
      </div>
    }
    componentProps={componentProps}
  />
);
