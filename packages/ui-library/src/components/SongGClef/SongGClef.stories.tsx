import React from 'react';
import SongGClef from './SongGClef';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper, PropsTableProps } from 'storybook-helpers';
import { COLORS } from 'design-system';

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'color',
    propType: 'string',
    description: 'default = COLORS.BACKGROUND_GREY',
    required: false,
  },
];

export default {
  title: componentStoryPath('SongGClef'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="SongGClef"
    description="G clef"
    component={
      <div
        style={{
          backgroundColor: COLORS.BACKGROUND_GREY,
          padding: '1rem',
          width: 100,
        }}
      >
        <SongGClef />
      </div>
    }
    componentProps={componentProps}
  />
);

export const CustomColor = () => (
  <ComponentStoryWrapper
    name="SongGClef"
    subName="custom color"
    description="G clef"
    component={
      <div
        style={{
          backgroundColor: COLORS.BACKGROUND_GREY,
          padding: '1rem',
          width: 100,
        }}
      >
        <SongGClef color={COLORS.BADASS} />
      </div>
    }
    componentProps={componentProps}
  />
);
