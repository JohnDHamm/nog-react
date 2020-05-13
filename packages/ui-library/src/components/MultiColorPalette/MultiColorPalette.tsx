import React from 'react';
import {
  Container,
  CurrentColor,
  ColorRow,
  ColorWell,
  ColorWellsContainer,
} from './MultiColorPalette.styles';

interface MultiColorPaletteProps {
  colors: Array<string>;
  onCurrentColorNumChange: (colorNum: number) => void;
  //   onColorValueChange: () => void;
}

const MultiColorPalette: React.FC<MultiColorPaletteProps> = ({
  colors,
  onCurrentColorNumChange,
}) => {
  const firstRowColors = colors.slice(0, 8);
  const secondRowColors = colors.slice(8, 16);

  const [currentColorNumber, setCurrentColorNumber] = React.useState<number>(0);
  const [currentColorValue, setCurrentColorValue] = React.useState<string>(
    colors[0]
  );
  const [showColorPicker, setShowColorPicker] = React.useState<boolean>(false);

  const handleWellClick = (colorNum: number) => {
    if (colors[colorNum]) {
      setCurrentColorValue(colors[colorNum]);
      setCurrentColorNumber(colorNum);
      onCurrentColorNumChange(colorNum);
    } else {
      setShowColorPicker(true);
    }
  };

  const handleCurrentClick = () => {
    if (showColorPicker || currentColorNumber < 8) return;

    if (colors[currentColorNumber]) {
      setShowColorPicker(true);
    }
  };

  return (
    <Container>
      <CurrentColor value={currentColorValue} onClick={handleCurrentClick} />
      {!showColorPicker ? (
        <ColorWellsContainer>
          <ColorRow>
            {firstRowColors.map((color, idx) => {
              return (
                <ColorWell
                  key={idx}
                  value={color}
                  onClick={() => handleWellClick(idx)}
                />
              );
            })}
          </ColorRow>
          <ColorRow>
            {secondRowColors.map((color, idx) => {
              const colorNum = idx + 8;
              return color ? (
                <ColorWell
                  key={colorNum}
                  value={color}
                  onClick={() => handleWellClick(colorNum)}
                />
              ) : (
                <ColorWell
                  key={colorNum}
                  value={'black'}
                  onClick={() => handleWellClick(colorNum)}
                >
                  +
                </ColorWell>
              );
            })}
          </ColorRow>
        </ColorWellsContainer>
      ) : (
        <div style={{ color: 'white' }}>color picker</div>
      )}
    </Container>
  );
};

export default MultiColorPalette;
