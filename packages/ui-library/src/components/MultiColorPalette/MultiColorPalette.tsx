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
  LuminRange,
} from './MultiColorPalette.styles';
import Button from '../Button/Button';

const hexToHsl = require('hex-to-hsl');
const hslToHex = require('@davidmarkclements/hsl-to-hex');

interface MultiColorPaletteProps {
  colors: Array<string>;
  onCurrentColorNumChange: (colorNum: number) => void;
  //   onColorValueChange: ({ colorNum: number, value: string }) => void;
}

const MultiColorPalette: React.FC<MultiColorPaletteProps> = ({
  colors,
  onCurrentColorNumChange,
}) => {
  const [firstRowColors, setFirstRowColors] = React.useState<string[]>([]);
  const [secondRowColors, setSecondRowColors] = React.useState<string[]>([]);
  const [currentColorNumber, setCurrentColorNumber] = React.useState<number>(0);
  const [currentColorValue, setCurrentColorValue] = React.useState<string>(
    colors[0]
  );
  const [showColorPicker, setShowColorPicker] = React.useState<boolean>(false);
  const [hueSliderValue, setHueSliderValue] = React.useState<string>();
  const [luminSliderColor, setLuminSliderColor] = React.useState<string>('');
  const [luminSliderValue, setLuminSliderValue] = React.useState<string>();

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

  const updateCurrentColor = () => {
    console.log('hueSliderValue', hueSliderValue);
    const newHex = hslToHex(hueSliderValue, 100, luminSliderValue);
    console.log('newHex', newHex);
    setCurrentColorValue(newHex);
  };

  const handleHueSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('hue value', e.currentTarget.value);
    setHueSliderValue(e.currentTarget.value);
    updateCurrentColor();
  };

  const handleLuminSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('value value', e.currentTarget.value);
    setLuminSliderValue(e.currentTarget.value);
    // updateCurrentColor();
  };

  const handleSaveColor = () => {
    setShowColorPicker(false);
  };

  React.useEffect(() => {
    setFirstRowColors(colors.slice(0, 8));
    setSecondRowColors(colors.slice(8, 16));
  }, [colors]);

  React.useEffect(() => {
    // console.log('currentColorValue', currentColorValue);
    // console.log('HSL', hexToHsl(currentColorValue));
    const hue = hexToHsl(currentColorValue)[0];
    setHueSliderValue(hue);
    setLuminSliderValue(hexToHsl(currentColorValue)[2]);
    setLuminSliderColor(hslToHex(hue, 100, 50));
  }, [currentColorValue]);

  return (
    <>
      <Container>
        <CurrentColor
          value={currentColorValue}
          isEditable={currentColorNumber > 7}
          onClick={handleCurrentClick}
        />
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
                value={hueSliderValue}
                min={0}
                max={360}
                step={1}
                onChange={e => handleHueSliderChange(e)}
              />
              <LuminRange value={luminSliderColor} />
              <StyledInput
                value={luminSliderValue}
                min={0}
                max={100}
                step={1}
                onChange={e => handleLuminSliderChange(e)}
              />
            </SlidersContainer>
            <Button onClick={handleSaveColor}>save</Button>
          </PickerContainer>
        )}
      </Container>
      <div style={{ color: 'white' }}>{currentColorValue}</div>
      <div style={{ color: 'white' }}>hue: {hueSliderValue}</div>
      <div style={{ color: 'white' }}>lumin: {luminSliderValue}</div>
    </>
  );
};

export default MultiColorPalette;
