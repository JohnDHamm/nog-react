import React from 'react';
import { StyledIcon } from './BaseIconButton.styles';

export interface BaseIconProps {
  viewbox: string;
  width: number;
  color?: string;
  hoverColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
  testid?: string;
}
const BaseIconButton: React.FC<BaseIconProps> = ({
  children,
  viewbox,
  width,
  color,
  hoverColor,
  onClick,
  testid = 'BaseIconButton',
}) => {
  return (
    <StyledIcon
      viewBox={viewbox}
      width={width}
      color={color}
      hoverColor={hoverColor}
      onClick={onClick}
      data-testid={testid}
    >
      {children}
    </StyledIcon>
  );
};

export default BaseIconButton;
