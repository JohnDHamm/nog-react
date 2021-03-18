import React from 'react';
import BaseIconButton from '../BaseIconButton/BaseIconButton';

interface IconButtonProps {
  width: number;
  color?: string;
  hoverColor?: string;
  onClick?: () => void;
}

const StopIconButton: React.FC<IconButtonProps> = ({
  width,
  color,
  hoverColor,
  onClick,
}) => {
  return (
    <BaseIconButton
      viewbox="0 0 164.57 164.57"
      width={width}
      color={color || '#000'}
      hoverColor={hoverColor}
      onClick={onClick}
      testid="StopIconButton"
    >
      <g>
        <path
          d="M180,262.28A82.28,82.28,0,1,1,262.28,180,82.37,82.37,0,0,1,180,262.28Zm0-150.56A68.28,68.28,0,1,0,248.28,180,68.36,68.36,0,0,0,180,111.72Z"
          transform="translate(-97.72 -97.72)"
        />
        <rect x="52.68" y="52.18" width="60.21" height="60.21" />
      </g>
    </BaseIconButton>
  );
};

export default StopIconButton;
