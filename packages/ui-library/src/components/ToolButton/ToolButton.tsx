import React from 'react';
import { IconWrapper, StyledButton, StyledLabel } from './ToolButton.styles';
import { subTestIdInit } from 'function-library';

const testid = 'ToolButton';
const subTestid = subTestIdInit(testid);

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
      onClick={onClick}
      disabled={disabled}
      data-testid={testid}
    >
      <div style={{ display: 'flex' }}>
        <IconWrapper
          width={iconWidth}
          disabled={disabled}
          data-testid={subTestid('Icon')}
        >
          {icon}
        </IconWrapper>
        <StyledLabel disabled={disabled} data-testid={subTestid('Label')}>
          {label}
        </StyledLabel>
      </div>
    </StyledButton>
  );
};

export default ToolButton;
