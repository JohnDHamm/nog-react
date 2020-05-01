import React from 'react';
import { COLORS, COLOR_NAMES } from './index';
import ColorCard from '../storybook/ColorCard/ColorCard';

export default {
  title: 'design-system/colors'
};

export const Default = () => {
  return (
    <>
      <h1 style={{ marginTop: 0, color: '#555' }}>COLORS</h1>
      <div style={{ display: 'flex' }}>
        {COLOR_NAMES.map(color => {
          return <ColorCard colorName={color} value={COLORS[color]} />;
        })}
      </div>
    </>
  );
};

Default.story = {
  name: 'COLORS'
};
