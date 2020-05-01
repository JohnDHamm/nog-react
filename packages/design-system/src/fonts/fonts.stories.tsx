import React from 'react';
import { FONTS } from './index';

export default {
  title: 'design-system/fonts'
};

export const Default = () => (
  <>
    <div style={{ fontFamily: FONTS.SECONDARY }}>
      placeholder for FONTS story
    </div>
  </>
);

Default.story = {
  name: 'FONTS'
};
