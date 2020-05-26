import React from 'react';
import { IconWrapper, StyledButton, StyledLabel } from './ToolButton.styles';

interface ToolButtonInterface {
  disabled?: boolean;
  icon: JSX.Element;
  iconWidth?: number;
  label: string;
  onClick: () => void;
}

const ToolButton: React.FC<ToolButtonInterface> = ({
  disabled = false,
  icon,
  iconWidth,
  label,
  onClick,
}) => {
  return (
    <StyledButton
      type="button"
      onClick={!disabled ? onClick : () => null}
      disabled={disabled}
    >
      <div style={{ display: 'flex' }}>
        <IconWrapper width={iconWidth} disabled={disabled}>
          {icon}
        </IconWrapper>
        <StyledLabel disabled={disabled}>{label}</StyledLabel>
      </div>
    </StyledButton>
  );
};

export default ToolButton;
