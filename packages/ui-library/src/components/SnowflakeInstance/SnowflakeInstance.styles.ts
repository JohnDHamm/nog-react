import styled from 'styled-components';
import { COLORS } from 'design-system';
import { LightPositionInterface } from './getSnowflakeLightLocations';

export const Container = styled.div<{ size: number }>`
  position: relative;
  width: ${props => props.size + 'px'};
`;

export const Number = styled.div`
  position: absolute;
  top: calc(50% - 18px);
  left: calc(50% - 28px);
  color: ${COLORS.NOG_GREEN};
  font-size: 1.75rem;
  font-weight: 700;
  width: 56px;
  text-align: center;
`;

export const Light = styled.div<{
  color: string;
  position: LightPositionInterface;
  size: number;
}>`
  position: absolute;
  border-radius: 50%;
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  background-color: ${props => props.color};
  top: ${props => props.position.top};
  bottom: ${props => props.position.bottom};
  left: ${props => props.position.left};
  right: ${props => props.position.right};
`;
