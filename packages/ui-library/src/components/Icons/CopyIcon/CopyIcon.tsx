import React from 'react';
import { StyledPath } from '../styles/Icons.styles';
import { BaseIconInterface } from '../types';
import { COLORS } from 'design-system';

const CopyIcon: React.FC<BaseIconInterface> = ({
  color = COLORS.BLACK,
  hoverColor,
}) => {
  return (
    <svg
      viewBox="0 0 80.93 38.9"
      aria-labelledby="title"
      data-testid="CopyIcon"
    >
      <title>Copy Icon</title>
      <g>
        <StyledPath
          d="M190.39,205.44A19.45,19.45,0,0,0,171,222.91H167.7a18.49,18.49,0,0,1,.1,2,19.24,19.24,0,0,1-.1,2h3.35a19.45,19.45,0,1,0,19.34-21.47Zm0,36.89a17.46,17.46,0,0,1-17.32-15.42h15.06l-6.71,6.71,2.83,2.82,11.56-11.55-11.56-11.56-2.83,2.83,6.76,6.75H173.06a17.45,17.45,0,1,1,17.33,19.42Z"
          transform="translate(-128.91 -205.44)"
          color={color}
          hoverColor={hoverColor}
        />
        <StyledPath
          d="M148.35,222.91H167.7a19.42,19.42,0,1,0,0,4H148.35Z"
          transform="translate(-128.91 -205.44)"
          color={color}
          hoverColor={hoverColor}
        />
      </g>
    </svg>
  );
};

export default CopyIcon;
