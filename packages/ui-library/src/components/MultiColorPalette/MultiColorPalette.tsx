import React from 'react';
import {
  Container,
  CurrentColor,
  ColorRow,
  ColorWell,
  ColorWellsContainer,
  HueRange,
  PickerContainer,
  SlidersContainer,
  StyledInput,
  ValueRange,
} from './MultiColorPalette.styles';
import Button from '../Button/Button';

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
    setCurrentColorNumber(colorNum);
    onCurrentColorNumChange(colorNum);

    if (colors[colorNum]) {
      setCurrentColorValue(colors[colorNum]);
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

  const handleSaveColor = () => {
    setShowColorPicker(false);
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
        <PickerContainer>
          <SlidersContainer>
            <HueRange />
            <StyledInput
              min={0}
              max={360}
              step={1}
              onChange={e => console.log('hue change', e.currentTarget.value)}
            />
            <ValueRange value={currentColorValue} />
            <StyledInput
              min={0}
              max={100}
              step={1}
              onChange={e => console.log('value change', e.currentTarget.value)}
            />
          </SlidersContainer>
          <Button onClick={handleSaveColor}>save</Button>
        </PickerContainer>
      )}
    </Container>
  );
};

export default MultiColorPalette;
