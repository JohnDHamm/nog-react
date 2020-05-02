import React from 'react';
import { Args, Name } from './StoryFunctionTitle.styles';

export interface FunctionTitleProps {
  name: string;
  args?: string;
}

const StoryFunctionTitle: React.FC<FunctionTitleProps> = ({ name, args }) => {
  return (
    <Name>
      {name}({args && <Args>{args}</Args>})
    </Name>
  );
};

export default StoryFunctionTitle;
