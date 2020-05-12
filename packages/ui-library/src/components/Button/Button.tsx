import React from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  onClick: React.MouseEventHandler<{}>;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
