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
  };

  const handleCurrentClick = () => {
    if (showColorPicker || currentColorNumber < 8) return;

    if (colors[currentColorNumber]) {
      setShowColorPicker(true);
    }
  };

  const updateCurrentColor = () => {
    setCurrentColorValue(hslToHex(hueSliderValue, 100, luminSliderValue));
  };

  const handleHueSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hue = e.currentTarget.value;
    setHueSliderValue(hue);
    setLuminSliderColor(hslToHex(hue, 100, 50));
    updateCurrentColor();
  };

  const handleLuminSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLuminSliderValue(e.currentTarget.value);
    updateCurrentColor();
  };

  const handleSaveColor = () => {
    setShowColorPicker(false);
  };

  React.useEffect(() => {
    setFirstRowColors(colors.slice(0, 8));
    setSecondRowColors(colors.slice(8, 16));
  }, [colors]);

  React.useEffect(() => {
    if (currentColorNumber < 8) {
      setCurrentColorValue(colors[currentColorNumber]);
    } else {
      let hue;
      if (colors[currentColorNumber]) {
        hue = hexToHsl(colors[currentColorNumber])[0];
        setCurrentColorValue(colors[currentColorNumber]);
        setHueSliderValue(hue);
        setLuminSliderValue(hexToHsl(colors[currentColorNumber])[2]);
      } else {
        hue = 180;
        setHueSliderValue('180');
        setLuminSliderValue('50');
      }
      setLuminSliderColor(hslToHex(hue, 100, 50));
    }
  }, [colors, currentColorNumber]);

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
