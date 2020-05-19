import React from 'react';
import BaseIconButton from '../BaseIconButton/BaseIconButton';

interface IconButtonProps {
  width: number;
  fill?: string;
  hoverFill?: string;
  onClick?: () => void;
}

const PlayIconButton: React.FC<IconButtonProps> = ({
  width,
  fill,
  hoverFill,
  onClick,
}) => {
  return (
    <BaseIconButton
      viewbox="0 0 164.57 164.57"
      width={width}
      fill={fill || '#000'}
      hoverFill={hoverFill}
      onClick={onClick}
    >
      <path
        d="M180,262.28A82.28,82.28,0,1,1,262.28,180,82.37,82.37,0,0,1,180,262.28Zm0-150.56A68.28,68.28,0,1,0,248.28,180,68.36,68.36,0,0,0,180,111.72Z"
        transform="translate(-97.72 -97.72)"
      />
      <polygon points="58.51 45.56 58.51 119.01 124.3 82.35 58.51 45.56" />
    </BaseIconButton>
  );
};

export default PlayIconButton;
