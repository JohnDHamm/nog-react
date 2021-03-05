import React from 'react';
import SongTimeSig from './SongTimeSig';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper, PropsTableProps } from 'storybook-helpers';
import { COLORS } from 'design-system';

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'height',
    propType: 'number',
    description: 'height',
    required: true,
  },
  {
    propName: 'width',
    propType: 'number',
    description: 'width',
    required: true,
  },
  {
    propName: 'timeSignature',
    propType: 'TimeSignature',
    description: 'timeSignature',
    required: true,
  },
];

export default {
  title: componentStoryPath('SongTimeSig'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="SongTimeSig"
    description="Time signature display"
    component={
      <div
        style={{
          backgroundColor: COLORS.BACKGROUND_GREY,
          padding: '2rem',
        }}
      >
        <SongTimeSig width={100} height={60} timeSignature="3:4" />
      </div>
    }
    componentProps={componentProps}
  />
);
