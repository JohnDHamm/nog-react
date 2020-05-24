import React from 'react';
import { Container, Light, Number } from './SnowflakeInstance.styles';
import { getSnowflakeLightLocations } from './getSnowflakeLightLocations';
import { Snowflake } from 'ui-library';
import { COLORS } from 'design-system';

export interface SnowflakeInstanceProps {
  lightsColors: Array<string>;
  instanceNum: number;
  instanceSize: number;
  instanceType: 'current' | 'other';
  onLightClick: (lightNum: number) => void;
}

const SnowflakeInstance: React.FC<SnowflakeInstanceProps> = ({
  lightsColors,
  instanceNum,
  instanceSize,
  instanceType,
  onLightClick
}) => {
  let innerBorderColor: string, outerBorderColor: string;

  switch (instanceType) {
    case 'current':
      innerBorderColor = COLORS.BLACK;
      outerBorderColor = COLORS.NOG_GREEN;
      break;
    case 'other':
      innerBorderColor = COLORS.NAV_GREY;
      outerBorderColor = COLORS.NAV_GREY;
  }

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
          style={
            instanceType === 'current'
              ? { border: '1px solid grey', cursor: 'pointer' }
              : {}
          }
          onClick={
            instanceType === 'current' ? () => onLightClick(idx) : () => null
          }
        />
      );
    });
  };

  return (
    <Container size={instanceSize}>
      <Snowflake
        innerColor="black"
        innerBorderColor={innerBorderColor}
        outerBorderColor={outerBorderColor}
      />
      {instanceType === 'current' && <Number>{instanceNum + 1}</Number>}
      {renderLights()}
    </Container>
  );
};

export default SnowflakeInstance;
