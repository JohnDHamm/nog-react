import React from 'react';
import { StyledPath } from '../styles';
import { BaseIconInterface } from '../types';
import { COLORS } from 'design-system';

const AddIcon: React.FC<BaseIconInterface> = ({
  color = COLORS.BLACK,
  hoverColor,
}) => {
  return (
    <svg viewBox="0 0 38.9 38.9" aria-labelledby="title" data-testid="AddIcon">
      <title>Add Icon</title>
      <StyledPath
        d="M190.39,205.44a19.45,19.45,0,1,0,19.45,19.45A19.45,19.45,0,0,0,190.39,205.44Zm11.34,21.38h-9.35v9.42h-4v-9.42H179v-3.94h9.36v-9.35h4v9.35h9.35Z"
        transform="translate(-170.94 -205.44)"
        color={color}
        hoverColor={hoverColor}
      />
    </svg>
  );
};

export default AddIcon;
