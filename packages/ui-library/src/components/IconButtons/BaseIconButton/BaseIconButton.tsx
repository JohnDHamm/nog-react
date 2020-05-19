import React from 'react';
import { StyledIcon } from './BaseIconButton.styles';

export interface BaseIconProps {
  viewbox: string;
  width: number;
  color?: string;
  hoverColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
const BaseIconButton: React.FC<BaseIconProps> = ({
  children,
  viewbox,
  width,
  color,
  hoverColor,
  onClick,
}) => {
  return (
    <StyledIcon
      viewBox={viewbox}
      width={width}
      color={color}
      hoverColor={hoverColor}
      onClick={onClick}
    >
      {children}
    </StyledIcon>
  );
};

export default BaseIconButton;
