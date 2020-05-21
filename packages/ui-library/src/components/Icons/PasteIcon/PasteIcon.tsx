import React from 'react';
import { StyledPath } from '../styles';
import { BaseIconInterface } from '../types';
import { COLORS } from 'design-system';

const PasteIcon: React.FC<BaseIconInterface> = ({
  color = COLORS.BLACK,
  hoverColor,
}) => {
  return (
    <svg viewBox="0 0 80.93 38.9" aria-labelledby="title">
      <title>Paste Icon</title>
      <g>
        <StyledPath
          d="M190.39,205.44A19.45,19.45,0,0,0,171,222.91h17.14l-6.76-6.75,2.83-2.83,11.56,11.56-11.56,11.55-2.83-2.82,6.71-6.71H171.05a19.45,19.45,0,1,0,19.34-21.47Z"
          transform="translate(-128.91 -205.44)"
          color={color}
          hoverColor={hoverColor}
        />
        <StyledPath
          d="M171,222.91H167.7a19.42,19.42,0,1,0,0,4h3.35a19.23,19.23,0,0,1-.11-2C170.94,224.22,171,223.56,171,222.91Zm-22.68,19.42a17.45,17.45,0,1,1,17.32-19.42H148.35v4h17.32A17.45,17.45,0,0,1,148.36,242.33Z"
          transform="translate(-128.91 -205.44)"
          color={color}
          hoverColor={hoverColor}
        />
      </g>
    </svg>
  );
};

export default PasteIcon;
