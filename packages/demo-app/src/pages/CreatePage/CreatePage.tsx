import React from 'react';
import { Link } from 'react-router-dom';
import { TopSection, MainContent, PatternTitle } from './CreatePage.styles';
import { ColorPaletteObject, MultiColorPalette } from 'ui-library';
import { DesktopWrapper, MobileWrapper } from 'design-system';

const CreatePage: React.FC = () => {
  const initialColors: Array<ColorPaletteObject> = [
    { colorNum: 0, colorVal: '#ff0000' },
    { colorNum: 1, colorVal: '#ffff00' },
    { colorNum: 2, colorVal: '#00ff00' },
    { colorNum: 3, colorVal: '#00ffff' },
    { colorNum: 4, colorVal: '#0000ff' },
    { colorNum: 5, colorVal: '#ff00ff' },
    { colorNum: 6, colorVal: '#ffffff' },
    { colorNum: 7, colorVal: '#000000' },
    { colorNum: 8, colorVal: '' },
    { colorNum: 9, colorVal: '' },
    { colorNum: 10, colorVal: '' },
    { colorNum: 11, colorVal: '' },
    { colorNum: 12, colorVal: '' },
    { colorNum: 13, colorVal: '' },
    { colorNum: 14, colorVal: '' },
    { colorNum: 15, colorVal: '' }
  ];

  const [currentColNum, setCurrentColNum] = React.useState<number>(0);
  const [colorPalette, setColorPalette] = React.useState<ColorPaletteObject[]>(
    initialColors
  );

  const handleColNumChange = (colNum: number) => {
    setCurrentColNum(colNum);
  };
  const handleColorChange = (colObj: ColorPaletteObject) => {
    const updatePalette = Array.from(colorPalette);
    updatePalette[colObj.colorNum] = colObj;
    setColorPalette(updatePalette);
  };

  return (
    <div>
      <DesktopWrapper>
        <TopSection>
          <PatternTitle>demo pattern</PatternTitle>
          <MultiColorPalette
            colors={colorPalette}
            onCurrentColorNumChange={colNum => handleColNumChange(colNum)}
            onColorChange={colObj => handleColorChange(colObj)}
          />
        </TopSection>
        <MainContent>
          <div style={{ color: 'white' }}>{currentColNum}</div>
          <Link to="/play">play</Link>
        </MainContent>
      </DesktopWrapper>
      <MobileWrapper>please use on a larger screen</MobileWrapper>
    </div>
  );
};

export default CreatePage;
