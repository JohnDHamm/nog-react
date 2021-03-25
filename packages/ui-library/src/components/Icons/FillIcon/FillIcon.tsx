import React from 'react';
import { StyledPath } from '../styles/Icons.styles';
import { BaseIconInterface } from '../types';
import { COLORS } from 'design-system';

const FillIcon: React.FC<BaseIconInterface> = ({
  color = COLORS.BLACK,
  extraColor,
  hoverColor,
}) => {
  return (
    <svg
      viewBox="0 0 49.98 40.7"
      aria-labelledby="title"
      data-testid="FillIcon"
    >
      <title>Fill Icon</title>
      <g>
        <circle cx="24.99" cy="8.66" r="8.16" style={{ fill: extraColor }} />
        <StyledPath
          d="M190.39,221.87a8.67,8.67,0,1,1,8.66-8.67A8.68,8.68,0,0,1,190.39,221.87Zm0-16.33a7.67,7.67,0,1,0,7.66,7.66A7.68,7.68,0,0,0,190.39,205.54Z"
          transform="translate(-165.4 -204.54)"
          color={color}
          hoverColor={hoverColor}
        />
        <circle cx="24.99" cy="32.03" r="8.16" style={{ fill: extraColor }} />
        <StyledPath
          d="M190.39,245.24a8.67,8.67,0,1,1,8.66-8.67A8.68,8.68,0,0,1,190.39,245.24Zm0-16.33a7.67,7.67,0,1,0,7.66,7.66A7.68,7.68,0,0,0,190.39,228.91Z"
          transform="translate(-165.4 -204.54)"
          color={color}
          hoverColor={hoverColor}
        />
        <circle cx="41.32" cy="20.14" r="8.16" style={{ fill: extraColor }} />
        <StyledPath
          d="M206.72,233.34a8.67,8.67,0,1,1,8.66-8.67A8.68,8.68,0,0,1,206.72,233.34Zm0-16.33a7.67,7.67,0,1,0,7.66,7.66A7.68,7.68,0,0,0,206.72,217Z"
          transform="translate(-165.4 -204.54)"
          color={color}
          hoverColor={hoverColor}
        />
        <circle cx="8.66" cy="20.14" r="8.16" style={{ fill: extraColor }} />
        <StyledPath
          d="M174.06,233.34a8.67,8.67,0,1,1,8.66-8.67A8.67,8.67,0,0,1,174.06,233.34Zm0-16.33a7.67,7.67,0,1,0,7.66,7.66A7.67,7.67,0,0,0,174.06,217Z"
          transform="translate(-165.4 -204.54)"
          color={color}
          hoverColor={hoverColor}
        />
      </g>
    </svg>
  );
};

export default FillIcon;
