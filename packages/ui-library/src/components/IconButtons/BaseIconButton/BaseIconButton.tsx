import React from 'react';
import { StyledIcon } from './BaseIconButton.styles';

export interface BaseIconProps {
  viewbox: string;
  width: number;
  fill?: string;
  hoverFill?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
const BaseIconButton: React.FC<BaseIconProps> = ({
  children,
  viewbox,
  width,
  fill,
  hoverFill,
  onClick,
}) => {
  return (
    <StyledIcon
      viewBox={viewbox}
      width={width}
      fill={fill}
      hoverFill={hoverFill}
      onClick={onClick}
    >
      {children}
    </StyledIcon>
  );
};

export default BaseIconButton;
