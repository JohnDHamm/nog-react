import React from 'react';
import { Link } from 'react-router-dom';
import {
  EmptyInstance,
  InstanceBlock,
  MainContent,
  NavBlock,
  Page,
  PatternTitle,
  TopSection
} from './CreatePage.styles';
import SnowflakeInstance from '../../components/SnowflakeInstance/SnowflakeInstance';
import { mockInstances, Instance } from './mockInstances';
import {
  ColorPaletteObject,
  EndIconButton,
  MultiColorPalette,
  NextIconButton,
  PlayIconButton,
  PreviousIconButton,
  StartIconButton
} from 'ui-library';
import { DesktopWrapper, MobileWrapper } from 'design-system';

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
  { colorNum: 9, colorVal: '#cc00ff' },
  { colorNum: 10, colorVal: '' },
  { colorNum: 11, colorVal: '' },
  { colorNum: 12, colorVal: '' },
  { colorNum: 13, colorVal: '' },
  { colorNum: 14, colorVal: '' },
  { colorNum: 15, colorVal: '' }
];

const CreatePage: React.FC = () => {
  // Page State
  const [currentColNum, setCurrentColNum] = React.useState<number>(0);
  const [colorPalette, setColorPalette] = React.useState<ColorPaletteObject[]>(
    initialColors
  );
  const [instances, setInstances] = React.useState<Instance[]>(mockInstances);
  const [currentInstanceNum, setCurrentInstanceNum] = React.useState<number>(0);
  type DisplayInstanceNumber = number | null;
  const [displayInstanceNumbers, setDisplayInstanceNumbers] = React.useState<
    DisplayInstanceNumber[]
  >([null, null, null, 0, 1, 2, 3]);

  // MultiColorPalette handlers
  const handleColNumChange = (colNum: number) => {
    setCurrentColNum(colNum);
  };

  const handleColorChange = (colObj: ColorPaletteObject) => {
    const updatePalette = Array.from(colorPalette);
    updatePalette[colObj.colorNum] = colObj;
    setColorPalette(updatePalette);
  };

  // SnowflakeInstance handler
  const handleLightClick = (lightNum: number) => {
    const updateInstances = Array.from(instances);
    updateInstances[currentInstanceNum].lightColors[lightNum] = currentColNum;
    setInstances(updateInstances);
  };

  // navigation handlers
  const updateDisplayArray = (newCurrentNum: number) => {
    const numInstances = instances.length;
    const newArray: Array<DisplayInstanceNumber> = [newCurrentNum];
    for (let i = 1; i < 4; i++) {
      newCurrentNum + i < numInstances
        ? newArray.push(newCurrentNum + i)
        : newArray.push(null);
      newCurrentNum - i > -1
        ? newArray.unshift(newCurrentNum - i)
        : newArray.unshift(null);
    }
    setDisplayInstanceNumbers(newArray);
  };

  const handleStartNavClick = () => {
    if (displayInstanceNumbers[2] === null) return;
    updateDisplayArray(0);
  };
  const handlePrevNavClick = () => {
    if (displayInstanceNumbers[2] === null) return;
    updateDisplayArray(displayInstanceNumbers[2]);
  };
  const handleNextNavClick = () => {
    if (displayInstanceNumbers[4] === null) return;
    updateDisplayArray(displayInstanceNumbers[4]);
  };
  const handleEndNavClick = () => {
    if (displayInstanceNumbers[4] === null) return;
    updateDisplayArray(instances.length - 1);
  };

  // rendering
  const navButtonBaseProps = {
    fill: '#555',
    hoverFill: '#bada55'
  };

  const createLightsColors = (instanceNum: number) => {
    const lights = instances[instanceNum].lightColors.map(lightColNum => {
      return colorPalette[lightColNum].colorVal;
    });
    return lights;
  };

  const renderOtherInstance = (
    instanceNum: DisplayInstanceNumber,
    size: number
  ) => {
    if (instanceNum !== null) {
      return (
        <SnowflakeInstance
          instanceNum={instanceNum}
          instanceSize={size}
          instanceType="other"
          lightsColors={createLightsColors(instanceNum)}
          onLightClick={lightNum => handleLightClick(lightNum)}
        />
      );
    } else {
      return <EmptyInstance size={size} />;
    }
  };

  React.useEffect(() => {
    if (displayInstanceNumbers[3] !== null) {
      setCurrentInstanceNum(displayInstanceNumbers[3]);
    }
  }, [displayInstanceNumbers]);

  return (
    <Page>
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
          <InstanceBlock>
            {renderOtherInstance(displayInstanceNumbers[0], 50)}
            {renderOtherInstance(displayInstanceNumbers[1], 100)}
            {renderOtherInstance(displayInstanceNumbers[2], 200)}
            {displayInstanceNumbers[3] !== null && (
              <SnowflakeInstance
                instanceNum={displayInstanceNumbers[3]}
                instanceSize={400}
                instanceType="current"
                lightsColors={createLightsColors(displayInstanceNumbers[3])}
                onLightClick={lightNum => handleLightClick(lightNum)}
              />
            )}
            {renderOtherInstance(displayInstanceNumbers[4], 200)}
            {renderOtherInstance(displayInstanceNumbers[5], 100)}
            {renderOtherInstance(displayInstanceNumbers[6], 50)}
          </InstanceBlock>
          <NavBlock>
            <StartIconButton
              {...navButtonBaseProps}
              width={25}
              onClick={() => handleStartNavClick()}
            />
            <PreviousIconButton
              {...navButtonBaseProps}
              width={30}
              onClick={() => handlePrevNavClick()}
            />
            <Link to="/play">
              <PlayIconButton {...navButtonBaseProps} width={75} />
            </Link>
            <NextIconButton
              {...navButtonBaseProps}
              width={30}
              onClick={() => handleNextNavClick()}
            />
            <EndIconButton
              {...navButtonBaseProps}
              width={25}
              onClick={() => handleEndNavClick()}
            />
          </NavBlock>
        </MainContent>
      </DesktopWrapper>
      <MobileWrapper>please use on a larger screen</MobileWrapper>
    </Page>
  );
};

export default CreatePage;
