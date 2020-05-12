import React from 'react';
import ContentContainer from './ContentContainer';
import { ComponentStoryWrapper } from 'storybook-helpers';

const StoryComponent: JSX.Element = (
  <ContentContainer>
    <div
      style={{
        paddingTop: '2rem',
        width: '100%',
        textAlign: 'center',
        border: '1px dotted grey',
        height: '200px'
      }}
    >
      content within the ContentContainer
    </div>
  </ContentContainer>
);
export default {
  title: 'design-system/layout/ContentCreator'
};

export const Default = () => (
  <ComponentStoryWrapper
    name="ContentContainer"
    description="A container that is centered on the page and limited width."
    component={StoryComponent}
  />
);
