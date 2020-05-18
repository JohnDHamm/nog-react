import React from 'react';
import {
  Container,
  CurrentBG,
  Light,
  Number
} from './SnowflakeInstance.styles';
import { snowflakeLightLocations } from './snowflake-lightLocations';

const CurrentSnowflakeBG = require('../../assets/snowflake_current_bgImage.png');
const OtherSnowflakeBG = require('../../assets/snowflake_other_bgImage.png');

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
  const bgSrc =
    instanceType === 'current' ? CurrentSnowflakeBG : OtherSnowflakeBG;

  const renderLights = () => {
    const lightDia = instanceSize * (20 / 420);
    const lightOffset = lightDia / 2;
    const lightLocations = snowflakeLightLocations(lightOffset);

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
      <CurrentBG alt="flake" src={bgSrc} />
      {instanceType === 'current' && <Number>{instanceNum + 1}</Number>}
      {renderLights()}
    </Container>
  );
};

export default SnowflakeInstance;
