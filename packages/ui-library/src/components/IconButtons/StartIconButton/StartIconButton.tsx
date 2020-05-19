import React from 'react';
import BaseIconButton from '../BaseIconButton/BaseIconButton';

interface IconButtonProps {
  width: number;
  fill?: string;
  hoverFill?: string;
  onClick?: () => void;
}

const StartIconButton: React.FC<IconButtonProps> = ({
  width,
  fill,
  hoverFill,
  onClick,
}) => {
  return (
    <BaseIconButton
      viewbox="0 0 112.14 146.29"
      width={width}
      fill={fill || '#000'}
      hoverFill={hoverFill}
      onClick={onClick}
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
