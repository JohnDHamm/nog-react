import React from 'react';
import BaseIconButton from '../BaseIconButton/BaseIconButton';

interface IconButtonProps {
  width: number;
  color?: string;
  hoverColor?: string;
  onClick?: () => void;
}

const StartIconButton: React.FC<IconButtonProps> = ({
  width,
  color,
  hoverColor,
  onClick,
}) => {
  return (
    <BaseIconButton
      viewbox="0 0 112.14 146.29"
      width={width}
      color={color || '#000'}
      hoverColor={hoverColor}
      onClick={onClick}
      testid="StartIconButton"
    >
      <polygon
        points="12.83 146.29 0.01 133.66 59.58 73.21 0 12.62 12.83 0 84.84 73.22 12.83 146.29"
        transform="rotate(180, 56.07, 73.14)"
      />
      <rect
        x="95.14"
        width="17"
        height="146.29"
        transform="rotate(180, 56.07, 73.14)"
      />
    </BaseIconButton>
  );
};

export default StartIconButton;
