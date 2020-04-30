import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator(storyFn => {
  return (
    <div style={{ padding: '1rem 2rem', fontFamily: 'sans-serif' }}>
      {storyFn()}
    </div>
  );
});
