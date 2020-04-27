import React from 'react';
import { Thing, Props } from './Thing';

export default {
  title: 'test-lib/components/Thing',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<Props>) => <Thing {...props} />;

export const WithChildren = (props?: Partial<Props>) => <Thing {...props}>children</Thing>
