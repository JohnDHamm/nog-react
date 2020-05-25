import React from 'react';
import { Container, Light, Number } from './SnowflakeInstance.styles';
import { getSnowflakeLightLocations } from './getSnowflakeLightLocations';
import Snowflake, { SnowflakeInterface } from '../Snowflake/Snowflake';
import { COLORS } from 'design-system';

interface LightStyle {
  border: string;
  cursor: 'pointer' | 'auto';
}

export interface SnowflakeInstanceInterface {
  lightsColors: Array<string>;
  instanceNum: number;
  instanceSize: number;
  instanceType: 'current' | 'playback' | 'other';
  onLightClick: (lightNum: number) => void;
}

const SnowflakeInstance: React.FC<SnowflakeInstanceInterface> = ({
  lightsColors,
  instanceNum,
  instanceSize,
  instanceType,
  onLightClick,
}) => {
  const [snowflakeProps, setSnowflakeProps] = React.useState<
    SnowflakeInterface
  >({
    innerColor: COLORS.BLACK,
    innerBorderColor: COLORS.BLACK,
    outerBorderColor: COLORS.NOG_GREEN,
  });
  const [lightStyle, setLightStyle] = React.useState<LightStyle>({
    border: 'none',
    cursor: 'auto',
  });

  const renderLights = () => {
    const lightDia = instanceSize * (20 / 420);
    const lightOffset = lightDia / 2 + 1;
    const lightLocations = getSnowflakeLightLocations(lightOffset);

    return lightsColors.map((lightColor, idx) => {
      return (
        <Light
          key={idx}
          color={lightColor}
          position={lightLocations[idx]}
          size={lightDia}
          style={lightStyle}
          onClick={
            instanceType === 'current' ? () => onLightClick(idx) : () => null
          }
        />
      );
    });
  };

  React.useEffect(() => {
    switch (instanceType) {
      case 'current':
        setSnowflakeProps({
          innerColor: COLORS.BLACK,
          innerBorderColor: COLORS.BLACK,
          outerBorderColor: COLORS.NOG_GREEN,
        });
        setLightStyle({
          border: '1px solid grey',
          cursor: 'pointer',
        });
        break;
      case 'playback':
        setSnowflakeProps({
          innerColor: COLORS.BLACK,
          innerBorderColor: COLORS.BLACK,
          outerBorderColor: COLORS.NOG_GREEN,
        });
        setLightStyle({
          border: '1px solid grey',
          cursor: 'auto',
        });
        break;
      case 'other':
        setSnowflakeProps({
          innerColor: COLORS.BLACK,
          outerBorderColor: COLORS.NAV_GREY,
          innerBorderColor: COLORS.NAV_GREY,
        });
        break;
    }
  }, [instanceType]);

  return (
    <Container size={instanceSize}>
      <Snowflake {...snowflakeProps} />
      {instanceType === 'current' && <Number>{instanceNum + 1}</Number>}
      {renderLights()}
    </Container>
  );
};

export default SnowflakeInstance;
