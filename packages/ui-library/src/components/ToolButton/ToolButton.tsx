import React from 'react';
import { IconWrapper, StyledButton, StyledLabel } from './ToolButton.styles';

interface ToolButtonInterface {
  icon: JSX.Element;
  iconWidth?: number;
  label: string;
  onClick: () => void;
}

const ToolButton: React.FC<ToolButtonInterface> = ({
  icon,
  iconWidth,
  label,
  onClick,
}) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      <div style={{ display: 'flex' }}>
        <IconWrapper width={iconWidth}>{icon}</IconWrapper>
        <StyledLabel>{label}</StyledLabel>
      </div>
    </StyledButton>
  );
};

export default ToolButton;
