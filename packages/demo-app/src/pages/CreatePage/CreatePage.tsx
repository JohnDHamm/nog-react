import React from 'react';
import { Link } from 'react-router-dom';
import {
  ColorContainer,
  EmptyInstance,
  InstanceBlock,
  MainContent,
  NavBlock,
  Page,
  PatternTitle,
  ToolContainer
} from './CreatePage.styles';
import {
  createInitialLightColors,
  getNewPatternValues,
  Instance
} from '../../functions/getNewPatternValues';
import {
  ColorPaletteObject,
  EndIconButton,
  MultiColorPalette,
  NextIconButton,
  PlayIconButton,
  PreviousIconButton,
  SnowflakeInstance,
  StartIconButton,
  AddIcon,
  CopyIcon,
  DeleteIcon,
  FillIcon,
  PasteIcon,
  ToolButton
} from 'ui-library';
import { COLORS, DesktopWrapper, MobileWrapper } from 'design-system';

const initialPattern = getNewPatternValues();

const CreatePage: React.FC = () => {
  // Page State
  const [currentColorNum, setCurrentColorNum] = React.useState<number>(0);
  const [colorPalette, setColorPalette] = React.useState<ColorPaletteObject[]>(
    initialPattern.colors
  );
  const [instances, setInstances] = React.useState<Instance[]>(
    initialPattern.instances
  );
  const [currentInstanceNum, setCurrentInstanceNum] = React.useState<number>(0);
  type DisplayInstanceNumber = number | null;
  const [displayInstanceNumbers, setDisplayInstanceNumbers] = React.useState<
    DisplayInstanceNumber[]
  >([null, null, null, 0, 1, 2, 3]);
  const [copiedLights, setCopiedLights] = React.useState<number[]>([]);

  // MultiColorPalette handlers
  const handleColNumChange = (colNum: number) => {
    setCurrentColorNum(colNum);
  };

  const handleColorChange = (colObj: ColorPaletteObject) => {
    const updatePalette = Array.from(colorPalette);
    updatePalette[colObj.colorNum] = colObj;
    setColorPalette(updatePalette);
  };

  // SnowflakeInstance handler
  const handleLightClick = (lightNum: number) => {
    const updateInstances = Array.from(instances);
    updateInstances[currentInstanceNum].lightColors[lightNum] = currentColorNum;
    setInstances(updateInstances);
  };

  // navigation handlers
  const updateDisplayArray = (
    newCurrentNum: number,
    numInstances: number = instances.length
  ) => {
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

  // tools
  const addInstance = () => {
    const newLightColors = createInitialLightColors();
    const updateInstance: Instance = {
      instanceNum: currentInstanceNum + 1,
      lightColors: newLightColors
    };
    const updateInstances = Array.from(instances);
    updateInstances.splice(currentInstanceNum + 1, 0, updateInstance);
    if (currentInstanceNum !== instances.length - 1) {
      for (let i = currentInstanceNum + 2; i < instances.length + 1; i++) {
        updateInstances[i].instanceNum = i;
      }
    }
    const newInstanceLength = instances.length + 1;
    setInstances(updateInstances);
    updateDisplayArray(currentInstanceNum + 1, newInstanceLength);
  };

  const deleteInstance = () => {
    const updateInstances = Array.from(instances);
    updateInstances.splice(currentInstanceNum, 1);
    for (let i = currentInstanceNum; i < instances.length - 1; i++) {
      updateInstances[i].instanceNum = i;
    }
    const updateInstanceNum =
      currentInstanceNum !== instances.length - 1
        ? currentInstanceNum
        : currentInstanceNum - 1;
    updateDisplayArray(updateInstanceNum, instances.length - 1);
    setInstances(updateInstances);
  };

  const copyInstance = () => {
    const lightsToCopy = Array.from(instances[currentInstanceNum].lightColors);
    setCopiedLights(lightsToCopy);
  };

  const pasteInstance = () => {
    const updateInstance: Instance = {
      instanceNum: currentInstanceNum,
      lightColors: copiedLights
    };
    const updateInstances = Array.from(instances);
    updateInstances[currentInstanceNum] = updateInstance;
    setInstances(updateInstances);
  };

  const fillInstance = () => {
    const updateLightColors = [];
    for (let i = 0; i < 30; i++) {
      updateLightColors.push(currentColorNum);
    }
    const updateInstance: Instance = {
      instanceNum: currentInstanceNum,
      lightColors: updateLightColors
    };
    const updateInstances = Array.from(instances);
    updateInstances[currentInstanceNum] = updateInstance;
    setInstances(updateInstances);
  };

  // rendering
  const navButtonBaseProps = {
    color: COLORS.NAV_GREY,
    hoverColor: COLORS.BADASS
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
        <PatternTitle>demo pattern</PatternTitle>
        <ColorContainer>
          <MultiColorPalette
            colors={colorPalette}
            onCurrentColorNumChange={colNum => handleColNumChange(colNum)}
            onColorChange={colObj => handleColorChange(colObj)}
          />
        </ColorContainer>
        <ToolContainer>
          <ToolButton
            icon={<AddIcon />}
            label="add"
            onClick={() => addInstance()}
          />
          <ToolButton
            icon={<DeleteIcon />}
            label="delete"
            onClick={() => deleteInstance()}
          />
          <ToolButton
            icon={<CopyIcon />}
            iconWidth={50}
            label="copy"
            onClick={() => copyInstance()}
          />
          <ToolButton
            icon={<PasteIcon />}
            iconWidth={50}
            label="paste"
            onClick={() => pasteInstance()}
          />
          <ToolButton
            icon={
              <FillIcon extraColor={colorPalette[currentColorNum].colorVal} />
            }
            iconWidth={30}
            label="fill"
            onClick={() => fillInstance()}
          />
        </ToolContainer>
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
              width={20}
              onClick={() => handleStartNavClick()}
            />
            <PreviousIconButton
              {...navButtonBaseProps}
              width={25}
              onClick={() => handlePrevNavClick()}
            />
            <Link to="/play">
              <PlayIconButton {...navButtonBaseProps} width={60} />
            </Link>
            <NextIconButton
              {...navButtonBaseProps}
              width={25}
              onClick={() => handleNextNavClick()}
            />
            <EndIconButton
              {...navButtonBaseProps}
              width={20}
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
