import React from 'react';
import SongStaff from './SongStaff';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper, PropsTableProps } from 'storybook-helpers';

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'height',
    propType: 'number',
    description: 'hieght of staff',
    required: true,
  },
  {
    propName: 'width',
    propType: 'number',
    description: 'width of staff',
    required: true,
  },
  {
    propName: 'lineColor',
    propType: 'string',
    description: 'color for bar lines',
    required: false,
  },
];
export default {
  title: componentStoryPath('SongStaff'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="SongStaff"
    description="A musical staff (no notes or bars)"
    component={
      <div style={{ backgroundColor: 'black', padding: '1rem' }}>
        <SongStaff height={72} width={720} />
      </div>
    }
    componentProps={componentProps}
  />
);

export const CustomColor = () => (
  <ComponentStoryWrapper
    name="SongStaff"
    subName="custom line color"
    description="A musical staff (no notes or bars)"
    component={
      <div>
        <SongStaff height={72} width={720} lineColor="#bada55" />
      </div>
    }
    componentProps={componentProps}
  />
);
