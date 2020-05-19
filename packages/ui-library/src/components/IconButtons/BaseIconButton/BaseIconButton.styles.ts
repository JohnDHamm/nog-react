import styled from 'styled-components';
import { COLORS } from 'design-system';

export const StyledIcon = styled.svg<{
  width: number;
  color?: string;
  hoverColor?: string;
}>`
  width: ${props => props.width + 'px'};
  fill: ${props => (props.color ? props.color : COLORS.BLACK)};

  &:hover {
    cursor: pointer;
    fill: ${props => (props.hoverColor ? props.hoverColor : props.color)};
  }
`;
