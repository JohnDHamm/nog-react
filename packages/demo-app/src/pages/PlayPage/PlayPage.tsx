import React from 'react';
import { Link } from 'react-router-dom';
import { Page, Slider, SliderContainer, SliderLabel } from './PlayPage.styles';
import {
  ColorPaletteContext,
  InstancesContext,
  SpeedContext
} from '../../contexts';
import { SnowflakeInstance, StopIconButton } from 'ui-library';
import { COLORS } from 'design-system';

const PlayPage: React.FC = () => {
  // Contexts
  const { instances } = React.useContext(InstancesContext);
  const { colorPalette } = React.useContext(ColorPaletteContext);
  const { speed, setCurrentSpeed } = React.useContext(SpeedContext);
  // State
  const [currentInstanceNum, setCurrentInstanceNum] = React.useState<number>(0);
  const [lightColors, setLightColors] = React.useState<string[]>([]);
  const [intervalId, setIntervalId] = React.useState<NodeJS.Timeout>();
  const [counter, setCounter] = React.useState<number>(0);

  const calcSpeed = (speed: number): number => {
    return speed > 50 ? (101 - speed) * 10.1 : (51 - speed) * 30.3 + 505;
  };

  const onInterval = (): void => {
    setCounter(counter => counter + 1);
  };

  const handleSlider = (value: string) => {
    intervalId && clearInterval(intervalId);
    setCurrentSpeed(value);
    const intId = setInterval(onInterval, calcSpeed(parseInt(value)));
    setIntervalId(intId);
  };

  const handleStop = () => {
    intervalId && clearInterval(intervalId);
  };

  React.useEffect(() => {
    const intId = setInterval(onInterval, calcSpeed(parseInt(speed)));
    setIntervalId(intId);

    return () => {
      intervalId && clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (counter > 0) {
      currentInstanceNum < instances.length - 1
        ? setCurrentInstanceNum(currentInstanceNum => currentInstanceNum + 1)
        : setCurrentInstanceNum(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  React.useEffect(() => {
    const createLightsColors = (instanceNum: number) => {
      const lights = instances[instanceNum].lightColors.map(lightColNum => {
        return colorPalette[lightColNum].colorVal;
      });
      return lights;
    };

    setLightColors(createLightsColors(currentInstanceNum));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentInstanceNum]);

  return (
    <Page>
      <SnowflakeInstance
        instanceNum={currentInstanceNum}
        instanceSize={400}
        instanceType="playback"
        lightsColors={lightColors}
        onLightClick={() => null}
      />
      <SliderContainer>
        <SliderLabel value={parseInt(speed)}>{speed}</SliderLabel>
        <Slider
          type="range"
          min={'1'}
          max={'100'}
          step={'1'}
          value={speed}
          onChange={e => handleSlider(e.target.value)}
        />
      </SliderContainer>
      <Link to="/create">
        <StopIconButton
          color={COLORS.NAV_GREY}
          hoverColor={COLORS.BADASS}
          width={60}
          onClick={() => handleStop()}
        />
      </Link>
    </Page>
  );
};

export default PlayPage;
