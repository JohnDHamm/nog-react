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
import { subTestIdInit } from 'function-library';

const hexToHsl = require('hex-to-hsl');
const hslToHex = require('@davidmarkclements/hsl-to-hex');

const testid = 'MultiColorPalette';
const subtestId = subTestIdInit(testid);

export interface ColorPaletteObject {
  colorNum: number;
  colorVal: string;
}

export interface MultiColorPaletteProps {
  colors: Array<ColorPaletteObject>;
  onCurrentColorNumChange: (colorNum: number) => void;
  onColorChange: (colorObj: ColorPaletteObject) => void;
}

const MultiColorPalette: React.FC<MultiColorPaletteProps> = ({
  colors,
  onCurrentColorNumChange,
  onColorChange,
}) => {
  const [currentPalette, setCurrentPalette] = React.useState<
    ColorPaletteObject[]
  >(colors);
  const [currentColorNumber, setCurrentColorNumber] = React.useState<number>(0);
  const [currentColorValue, setCurrentColorValue] = React.useState<string>(
    colors[0].colorVal
  );
  const [showColorPicker, setShowColorPicker] = React.useState<boolean>(false);
  const [hueSliderValue, setHueSliderValue] = React.useState<string>();
  const [luminSliderColor, setLuminSliderColor] = React.useState<string>('');
  const [luminSliderValue, setLuminSliderValue] = React.useState<string>();

  const handleWellClick = (colorNum: number) => {
    setCurrentColorNumber(colorNum);
    if (currentPalette[colorNum].colorVal) {
      onCurrentColorNumChange(colorNum);
    }
  };

  const handleCurrentClick = () => {
    if (showColorPicker || currentColorNumber < 8) return;

    if (currentPalette[currentColorNumber].colorVal) {
      setShowColorPicker(true);
    }
  };

  const updateCurrentColor = () => {
    setCurrentColorValue(hslToHex(hueSliderValue, 100, luminSliderValue));
  };

  const handleHueSliderChange = (hue: string) => {
    setHueSliderValue(hue);
    setLuminSliderColor(hslToHex(parseInt(hue), 100, 50));
    updateCurrentColor();
  };

  const handleLuminSliderChange = (lumin: string) => {
    setLuminSliderValue(lumin);
    updateCurrentColor();
  };

  const handleSaveColor = () => {
    const updateColorObj: ColorPaletteObject = {
      colorNum: currentColorNumber,
      colorVal: currentColorValue,
    };
    const updatePalette = Array.from(currentPalette);
    updatePalette[currentColorNumber] = updateColorObj;
    setCurrentPalette(updatePalette);
    setShowColorPicker(false);
    onCurrentColorNumChange(currentColorNumber);
    onColorChange(updateColorObj);
  };

  const renderFirstRow = () => {
    return currentPalette.slice(0, 8).map(colorObj => {
      return (
        <ColorWell
          key={colorObj.colorNum}
          value={colorObj.colorVal}
          onClick={() => handleWellClick(colorObj.colorNum)}
          data-testid={subtestId(`ColorWell-${colorObj.colorNum}`)}
        />
      );
    });
  };

  const renderSecondRow = () => {
    return currentPalette.slice(8, 16).map(colorObj => {
      return colorObj.colorVal ? (
        <ColorWell
          key={colorObj.colorNum}
          value={colorObj.colorVal}
          onClick={() => handleWellClick(colorObj.colorNum)}
          data-testid={subtestId(`ColorWell-${colorObj.colorNum}`)}
        />
      ) : (
        <ColorWell
          key={colorObj.colorNum}
          value={'black'}
          onClick={() => handleWellClick(colorObj.colorNum)}
          data-testid={subtestId(`ColorWell-${colorObj.colorNum}`)}
        >
          +
        </ColorWell>
      );
    });
  };

  React.useEffect(() => {
    if (currentColorNumber < 8) {
      setCurrentColorValue(currentPalette[currentColorNumber].colorVal);
      return;
    }

    let hue: number;
    if (currentPalette[currentColorNumber].colorVal) {
      setCurrentColorValue(currentPalette[currentColorNumber].colorVal);
      const hsl: number[] = hexToHsl(
        currentPalette[currentColorNumber].colorVal
      );
      hue = hsl[0];
      setHueSliderValue(hue.toString());
      setLuminSliderValue(hsl[2].toString());
    } else {
      hue = 180;
      setHueSliderValue(hue.toString());
      setLuminSliderValue('50');
      setCurrentColorValue(hslToHex(hue, 100, 50));
      setShowColorPicker(true);
    }
    setLuminSliderColor(hslToHex(hue, 100, 50));
  }, [currentColorNumber, currentPalette]);

  React.useEffect(() => {
    setCurrentPalette(colors);
  }, [colors]);

  return (
    <>
      <Container data-testid={testid}>
        <CurrentColor
          value={currentColorValue}
          isEditable={currentColorNumber > 7}
          onClick={handleCurrentClick}
          data-testid={subtestId('CurrentColorWell')}
        />
        {!showColorPicker ? (
          <ColorWellsContainer data-testid={subtestId('ColorWells')}>
            <ColorRow>{renderFirstRow()}</ColorRow>
            <ColorRow>{renderSecondRow()}</ColorRow>
          </ColorWellsContainer>
        ) : (
          <PickerContainer data-testid={subtestId('ColorPicker')}>
            <SlidersContainer>
              <HueRange />
              <StyledInput
                aria-label="hue"
                value={hueSliderValue}
                min={0}
                max={360}
                step={1}
                onChange={e => handleHueSliderChange(e.currentTarget.value)}
              />
              <LuminRange value={luminSliderColor} />
              <StyledInput
                aria-label="luminosity"
                value={luminSliderValue}
                min={0}
                max={100}
                step={1}
                onChange={e => handleLuminSliderChange(e.currentTarget.value)}
              />
            </SlidersContainer>
            <Button onClick={handleSaveColor}>save</Button>
          </PickerContainer>
        )}
      </Container>
    </>
  );
};

export default MultiColorPalette;
